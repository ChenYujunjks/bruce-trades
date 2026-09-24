"use client";

import { useEffect, useState } from "react";
import { useInfiniteQuery, useQuery, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { ArrowLeft, Plus, Pencil, Trash2, Palette, LoaderCircle, Check } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { listTradingNotes, saveTradingNote, deleteTradingNote, listTradingLabels, saveTradingLabel, deleteTradingLabel } from "@/lib/trading-notes";
import type { TradingNote, TradingLabel } from "@/lib/schemas/trading-note";

const colors = ["#ef4444", "#f97316", "#f59e0b", "#22c55e", "#14b8a6", "#3b82f6", "#8b5cf6", "#ec4899", "#64748b"];
const errorText = (error: unknown) => error instanceof Error ? error.message : "保存失败，请重试。";

function LabelSelect({ value, onChange, labels, disabled }: { value: string; onChange: (value: string) => void; labels: TradingLabel[]; disabled: boolean }) {
  return <select aria-label="可选颜色标签" value={value} disabled={disabled} onChange={e => onChange(e.target.value)} className="h-8 max-w-44 rounded-md border bg-background px-2 text-xs text-muted-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"><option value="">不加标签</option>{labels.map(label => <option key={label.id} value={label.id}>{label.name}</option>)}</select>;
}

export default function TradingJournalPage() {
  const cache = useQueryClient();
  const [content, setContent] = useState("");
  const [labelId, setLabelId] = useState("");
  const [editing, setEditing] = useState<TradingNote | null>(null);
  const [editContent, setEditContent] = useState("");
  const [editLabel, setEditLabel] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const notes = useInfiniteQuery({ queryKey: ["trading-notes-simple"], initialPageParam: 0, queryFn: ({ pageParam }) => listTradingNotes(pageParam), getNextPageParam: (last, pages) => pages.length * 50 < last.count ? pages.length : undefined });
  const labelsQuery = useQuery({ queryKey: ["trading-note-labels"], queryFn: listTradingLabels });
  const labels = labelsQuery.data ?? [];
  const dirty = !!content.trim() || !!(editing && (editContent !== editing.content || editLabel !== (editing.label_id ?? "")));
  useEffect(() => {
    const handler = (event: BeforeUnloadEvent) => { if (dirty) { event.preventDefault(); event.returnValue = ""; } };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [dirty]);
  const refresh = () => cache.invalidateQueries({ queryKey: ["trading-notes-simple"] });
  const cancelEdit = () => {
    if (editing && (editContent !== editing.content || editLabel !== (editing.label_id ?? "")) && !window.confirm("放弃这条笔记的未保存修改？")) return false;
    setEditing(null); return true;
  };
  const save = async (existing: TradingNote | null) => {
    setBusy(true); setError("");
    try {
      await saveTradingNote({ content: existing ? editContent : content, label_id: (existing ? editLabel : labelId) || null }, existing);
      if (existing) setEditing(null); else { setContent(""); setLabelId(""); }
      await refresh();
    } catch (err) { setError(errorText(err)); } finally { setBusy(false); }
  };
  return <div className="mx-auto max-w-3xl py-6 md:py-12">
    <Link href="/trading/notes" onClick={event => { if (dirty && !window.confirm("有未保存的笔记，确定离开？")) event.preventDefault(); }} className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground"><ArrowLeft size={14} />交易笔记</Link>
    <header className="mb-8 mt-7 flex items-center justify-between gap-3"><div><h1 className="text-2xl font-semibold tracking-tight">随手记</h1><p className="mt-2 text-sm text-muted-foreground">一句观察，一点心得。</p></div><LabelPalette labels={labels} onChanged={async () => { await cache.invalidateQueries({ queryKey: ["trading-note-labels"] }); await refresh(); }} /></header>
    <form className="mb-8 rounded-xl border bg-muted/20 p-3" onSubmit={event => { event.preventDefault(); void save(null); }}>
      <Textarea aria-label="新的笔记" placeholder="写下一句话，或一段想法…" className="min-h-24 resize-y border-0 bg-transparent p-2 text-base leading-7 shadow-none focus-visible:ring-0" maxLength={101000} value={content} disabled={busy} onChange={e => setContent(e.target.value)} onKeyDown={e => { if ((e.ctrlKey || e.metaKey) && e.key === "Enter" && content.trim() && !busy) { e.preventDefault(); void save(null); } }} />
      <div className="mt-3 flex items-center justify-between gap-3"><LabelSelect value={labelId} onChange={setLabelId} labels={labels} disabled={busy || labelsQuery.isPending} /><Button type="submit" size="sm" disabled={busy || !content.trim()}>{busy ? <LoaderCircle className="animate-spin" /> : <Plus />}添加</Button></div>
    </form>
    {error && <p role="alert" className="mb-5 text-sm text-destructive">{error}</p>}
    {labelsQuery.isError && <p role="alert" className="mb-4 text-sm text-destructive">标签加载失败。<button className="underline" onClick={() => void labelsQuery.refetch()}>重试</button></p>}
    {labels.length > 0 && <div aria-label="颜色含义" className="mb-5 flex flex-wrap gap-x-4 gap-y-2">{labels.map(label => <span key={label.id} className="inline-flex items-center gap-1.5 text-xs text-muted-foreground"><span className="size-2 rounded-full" style={{ backgroundColor: label.color }} />{label.name}</span>)}</div>}
    {notes.isPending ? <p role="status" className="py-8 text-sm text-muted-foreground">正在读取…</p> : notes.isError ? <div role="alert" className="py-8 text-sm"><p>笔记读取失败。</p><Button variant="link" onClick={() => void notes.refetch()}>重试</Button></div> : <>
      <ul className="divide-y divide-border/50">{notes.data.pages.flatMap(page => page.notes).map(note => {
        const label = labels.find(item => item.id === note.label_id);
        return <li key={note.id} className="group flex items-start gap-3 py-5">
          <span className="mt-3 size-1.5 shrink-0 rounded-full bg-muted-foreground/40" style={label ? { backgroundColor: label.color } : undefined} />
          {editing?.id === note.id ? <form className="min-w-0 flex-1 space-y-3" onSubmit={event => { event.preventDefault(); void save(editing); }}><Textarea autoFocus aria-label="编辑笔记" className="min-h-28 text-base leading-7" maxLength={101000} value={editContent} disabled={busy} onChange={e => setEditContent(e.target.value)} /><div className="flex flex-wrap items-center justify-between gap-2"><LabelSelect value={editLabel} onChange={setEditLabel} labels={labels} disabled={busy} /><div className="flex gap-2"><Button type="button" variant="ghost" size="sm" disabled={busy} onClick={cancelEdit}>取消</Button><Button size="sm" disabled={busy || !editContent.trim()}>保存</Button></div></div></form> : <>
            <div className="min-w-0 flex-1"><p className="whitespace-pre-wrap break-words text-base leading-8">{note.content}</p>{label && <span className="mt-2 inline-flex items-center gap-1.5 text-[11px] text-muted-foreground"><span className="size-1.5 rounded-full" style={{ backgroundColor: label.color }} />{label.name}</span>}</div>
            <div className="flex shrink-0 flex-col opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100"><Button variant="ghost" size="icon" className="size-7 text-muted-foreground" aria-label="编辑这条笔记" disabled={busy} onClick={() => { if (!cancelEdit()) return; setEditing(note); setEditContent(note.content); setEditLabel(note.label_id ?? ""); }}><Pencil className="size-3.5" /></Button><Button variant="ghost" size="icon" className="size-7 text-muted-foreground hover:text-destructive" aria-label="删除这条笔记" disabled={busy} onClick={async () => { if (!window.confirm("删除这条笔记？")) return; setBusy(true); try { await deleteTradingNote(note); await refresh(); } catch (err) { toast.error(errorText(err)); } finally { setBusy(false); } }}><Trash2 className="size-3.5" /></Button></div>
          </>}
        </li>;
      })}</ul>
      {!notes.data.pages[0].count && <p className="py-10 text-center text-sm text-muted-foreground">还没有笔记。写下第一条想法吧。</p>}
      {notes.hasNextPage && <Button className="mt-5" variant="ghost" disabled={notes.isFetchingNextPage} onClick={() => void notes.fetchNextPage()}>继续阅读</Button>}
    </>}
  </div>;
}

function LabelPalette({ labels, onChanged }: { labels: TradingLabel[]; onChanged: () => Promise<void> }) {
  const [id, setId] = useState<string>();
  const [name, setName] = useState("");
  const [color, setColor] = useState(colors[0]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const reset = () => { setId(undefined); setName(""); setColor(colors[0]); setError(""); };
  return <Popover><PopoverTrigger asChild><Button variant="outline" size="sm"><Palette />标签配色</Button></PopoverTrigger><PopoverContent align="end" className="w-80 space-y-4"><div><h2 className="text-sm font-medium">颜色代表什么？</h2><p className="mt-1 text-xs text-muted-foreground">给颜色起个名字，记笔记时按需选择。</p></div>
    <div className="max-h-48 space-y-1 overflow-auto">{labels.map(label => <div key={label.id} className="flex items-center gap-2"><button disabled={busy} className="flex min-w-0 flex-1 items-center gap-2 rounded px-2 py-1.5 text-left text-xs hover:bg-muted" onClick={() => { setId(label.id); setName(label.name); setColor(label.color); setError(""); }}><span className="size-3 shrink-0 rounded-full" style={{ backgroundColor: label.color }} /><span className="truncate">{label.name}</span>{id === label.id && <Check className="ml-auto size-3" />}</button><Button variant="ghost" size="icon" className="size-6" disabled={busy} aria-label={`删除标签 ${label.name}`} onClick={async () => { if (!window.confirm(`删除标签“${label.name}”？笔记内容会保留。`)) return; setBusy(true); try { await deleteTradingLabel(label.id); if (id === label.id) reset(); await onChanged(); } catch (err) { setError(errorText(err)); } finally { setBusy(false); } }}><Trash2 className="size-3" /></Button></div>)}</div>
    <form className="space-y-3 border-t pt-3" onSubmit={async event => { event.preventDefault(); setBusy(true); setError(""); try { await saveTradingLabel({ name, color }, id); reset(); await onChanged(); } catch (err) { setError(errorText(err)); } finally { setBusy(false); } }}><label className="grid gap-2 text-xs">{id ? "修改标签含义" : "新标签含义"}<Input placeholder="例如：风险提醒" maxLength={25} value={name} disabled={busy} onChange={e => setName(e.target.value)} /></label><div className="flex flex-wrap gap-2" aria-label="预设调色盘">{colors.map(preset => <button key={preset} type="button" disabled={busy} aria-label={`颜色 ${preset}`} aria-pressed={color === preset} className={`size-6 rounded-full border-2 ${color === preset ? "border-foreground ring-2 ring-background" : "border-transparent"}`} style={{ backgroundColor: preset }} onClick={() => setColor(preset)} />)}</div><label className="flex items-center gap-3 text-xs text-muted-foreground"><input type="color" aria-label="自定义标签颜色" className="h-7 w-9 cursor-pointer rounded border bg-transparent" value={color} disabled={busy} onChange={e => setColor(e.target.value)} />自定义颜色 <span>{color}</span></label>{error && <p role="alert" className="text-xs text-destructive">{error}</p>}<div className="flex justify-end gap-2">{id && <Button variant="ghost" type="button" size="sm" disabled={busy} onClick={reset}>新标签</Button>}<Button size="sm" disabled={busy || !name.trim()}>{id ? "保存配色" : "添加标签"}</Button></div></form>
  </PopoverContent></Popover>;
}
