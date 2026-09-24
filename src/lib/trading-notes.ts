import supabase from "@/lib/supabase-client";
import { tradingNoteDraftSchema, tradingLabelSchema, type TradingNote, type TradingNoteDraft, type TradingLabel } from "@/lib/schemas/trading-note";

export async function listTradingNotes(page: number) {
  const { data, error, count } = await supabase.from("trading_notes")
    .select("id,content,label_id,created_at,updated_at", { count: "exact" })
    .order("created_at", { ascending: false }).order("id").range(page * 50, page * 50 + 49);
  if (error) throw error;
  return { notes: data as TradingNote[], count: count ?? 0 };
}
export async function saveTradingNote(draft: TradingNoteDraft, existing: TradingNote | null) {
  const input = tradingNoteDraftSchema.parse(draft);
  const query = existing
    ? supabase.from("trading_notes").update(input).eq("id", existing.id).eq("updated_at", existing.updated_at)
    : supabase.from("trading_notes").insert(input);
  const { data, error } = await query.select().maybeSingle();
  if (error) throw error;
  if (!data) throw new Error("这条笔记已在其他窗口修改，请复制当前内容后刷新。");
  return data as TradingNote;
}
export async function deleteTradingNote(note: TradingNote) {
  const { data, error } = await supabase.from("trading_notes").delete().eq("id", note.id).eq("updated_at", note.updated_at).select("id");
  if (error) throw error;
  if (!data?.length) throw new Error("笔记已发生变化，请刷新后重试。");
}
export async function listTradingLabels() {
  const { data, error } = await supabase.from("trading_note_labels").select("*").order("name");
  if (error) throw error;
  return data as TradingLabel[];
}
export async function saveTradingLabel(input: { name: string; color: string }, id?: string) {
  const value = tradingLabelSchema.parse(input);
  const query = id ? supabase.from("trading_note_labels").update(value).eq("id", id) : supabase.from("trading_note_labels").insert(value);
  const { data, error } = await query.select().single();
  if (error) throw new Error(error.code === "23505" ? "已有同名标签，请换个名称" : error.message);
  return data as TradingLabel;
}
export async function deleteTradingLabel(id: string) {
  const { error } = await supabase.from("trading_note_labels").delete().eq("id", id);
  if (error) throw error;
}
