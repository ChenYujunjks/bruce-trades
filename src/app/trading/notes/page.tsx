import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

import Link from "next/link";

import {
  ArrowRight,
  FileText,
  ShieldCheck,
  Target,
  Unlink,
} from "lucide-react";

import { Card, CardTitle } from "@/components/ui/card";

function titleFromSlug(slug: string) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function getNotes() {
  const notesDirectory = join(
    process.cwd(),
    "src",
    "app",
    "trading",
    "notes",
  );

  function collectNotes(directory: string, segments: string[] = []) {
    const notes: { href: string; title: string }[] = [];

    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      // Private folders, parallel routes, and dynamic routes aren't note links.
      if (!entry.isDirectory() || /^[_@\[]/.test(entry.name)) continue;

      const isRouteGroup = entry.name.startsWith("(") && entry.name.endsWith(")");
      const nextSegments = isRouteGroup ? segments : [...segments, entry.name];
      const childDirectory = join(directory, entry.name);

      if (nextSegments.length && existsSync(join(childDirectory, "page.tsx"))) {
        notes.push({
          href: `/trading/notes/${nextSegments.join("/")}`,
          title: titleFromSlug(nextSegments[nextSegments.length - 1]),
        });
      }

      notes.push(...collectNotes(childDirectory, nextSegments));
    }

    return notes;
  }

  return collectNotes(notesDirectory).sort((a, b) => a.title.localeCompare(b.title));
}

const principles = [
  {
    title: "任何交易都必须设置止损",
    icon: ShieldCheck,
    description:
      "即使我认为这一单质量很高、胜率很高，甚至仓位较大，也必须提前设置明确的止损。止损不是因为我认为自己一定会判断错误，而是为了防止小概率但破坏性极强的事件发生。",
    rule: "止损主要防止两件事：第一，极端行情导致账户遭受巨大损失甚至爆仓；第二，市场结构已经完全反转、原交易逻辑失效，但因为没有止损而被长期套牢。",
    summary: "止损不是为了预测错误，而是为了在判断失效时结束风险。",
  },
  {
    title: "不要因为侥幸扛回来，就奖励错误行为",
    icon: ShieldCheck,
    description:
      "一笔交易在明显不利的情况下，如果因为没有及时处理而最终侥幸回到成本价，不能因此得出“扛单是对的”这个结论。市场后来回来了，只能说明这一次结果没有继续恶化，并不能证明当时继续承担风险的决策是正确的。",
    rule: "复盘时必须区分决策质量和最终结果。判断一个操作是否正确，要看当时已知的信息、风险是否受控、是否符合交易系统，而不是看后来价格有没有重新回到自己的成本价。连续几次侥幸扛回来，反而可能强化危险习惯，最终在真正的单边行情中造成巨大损失。",
    summary: "可以接受止损后的后悔，但不能因为一次扛回来，就把侥幸误认为能力。",
  },
  {
    title: "后一单和前一单完全无关",
    icon: Unlink,
    description:
      "一笔交易结束以后，它就已经结束。下一笔交易必须重新根据当前的市场结构、交易模型和风险收益进行判断，不能因为上一单亏损，就试图通过补仓、拉低均价或者加大仓位来补救之前的错误。",
    rule: "每次准备补仓或重新进场之前，都问自己：如果我现在完全没有任何仓位，我还会不会在这个位置主动开这一单？",
    summary: "不要用下一笔交易修复上一笔交易。",
  },
  {
    title: "执行交易系统，而不是执行盈利目标",
    icon: Target,
    description:
      "做交易不应该给自己设置强制性的短期盈利预期，例如“这一波必须翻倍”或者“三个月必须赚 2000 USDT”。这种目标很容易让交易结果反过来影响决策，引发焦虑、追单、过度交易和情绪化操作。",
    rule: "我的任务不是保证这一单赚钱，而是持续执行符合交易系统、风险受控并且具有正期望值的交易。长期盈利应该是正确执行大量正 EV 交易之后的统计结果。",
    summary: "不预测自己应该赚多少钱，只判断这一笔是否值得做。",
  },
];

export const metadata = {
  title: "My Trading Notes | Bruce Chen",
  description: "我的交易原则、交易纪律、风险管理与个人交易笔记。",
};

export default function MyNotesPage() {
  const notes = getNotes();

  return (
    <div className="mx-auto w-full max-w-5xl py-6 md:py-10">
      {/* Header */}
      <section className="mb-10">
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <FileText className="h-5 w-5" />
        </div>

        <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
          记录我的交易原则、风险管理、交易纪律，以及我对市场结构和交易行为的持续理解。
        </p>
      </section>

      {/* Core Principles */}
      <section className="mb-14">
        <div className="mb-5">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Core Principles
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            核心交易纪律
          </h2>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
            交易系统不仅是寻找入场机会，更重要的是控制风险、切断情绪影响，并持续执行具有正期望值的决策。
          </p>
        </div>

        <div className="grid gap-4">
          {principles.map((principle, index) => {
            const Icon = principle.icon;

            return (
              <Card key={principle.title} className="p-5 md:p-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="text-xs font-medium text-muted-foreground">
                        0{index + 1}
                      </span>

                      <h3 className="text-lg font-semibold tracking-tight">
                        {principle.title}
                      </h3>
                    </div>

                    <p className="text-base leading-7 text-muted-foreground">
                      {principle.description}
                    </p>

                    <div className="mt-4 rounded-lg border bg-muted/40 px-4 py-3">
                      <p className="text-sm leading-6 text-muted-foreground">
                        {principle.rule}
                      </p>
                    </div>

                    <p className="mt-4 border-l-2 border-primary pl-4 text-sm font-medium leading-6">
                      {principle.summary}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Notes */}
      <section aria-label="Note folders">
        <div className="mb-5">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Knowledge Base
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            我的交易笔记
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
            关于市场结构、交易模型、风险管理、交易心理以及实际行情观察的详细记录。
          </p>
        </div>

        <div className="grid gap-3">
          {notes.map((note) => (
            <Link
              key={note.href}
              href={note.href}
              className="group rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Card className="flex min-h-12 flex-row items-center gap-3 px-4 py-2 transition-colors group-hover:border-primary/40 group-hover:bg-muted/40">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                  <FileText className="h-4 w-4" />
                </div>

                <CardTitle className="min-w-0 flex-1 truncate text-base">
                  {note.title}
                </CardTitle>

                <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
