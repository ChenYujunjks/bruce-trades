import type { Metadata } from "next";
import {
  ArrowRight,
  BadgeDollarSign,
  BedDouble,
  CheckCircle2,
  CircleDollarSign,
  House,
  LampDesk,
  Lightbulb,
  PiggyBank,
  ReceiptText,
  ShieldCheck,
  ShoppingBasket,
  Smartphone,
  Wifi,
  Zap,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "2026 Fall Budget | Bruce Chen",
  description: "2026 年秋季搬家与生活预算规划。",
};

const expenses = [
  { name: "Mattress", amount: 150, icon: BedDouble },
  { name: "Bed frame", amount: 69, icon: House },
  { name: "桌子", amount: 140, icon: LampDesk },
  { name: "初期日用品", amount: 200, icon: ShoppingBasket },
  { name: "US Mobile（9月）", amount: 270, icon: Smartphone },
  { name: "8月底到9月底生活费总共", amount: 1500, icon: CircleDollarSign },
  { name: "PSEG 电费", amount: 130, icon: Zap },
  { name: "Renters insurance（估算）", amount: 80, icon: ShieldCheck },
  { name: "Internet", amount: 20, icon: Wifi },
];

const usdFunds = 2090;
const cnyFundsInUsd = 1333.52;
const totalFunds = usdFunds + cnyFundsInUsd;
const totalExpenses = expenses.reduce((total, item) => total + item.amount, 0);
const projectedBalance = totalFunds - totalExpenses;
const contingency = 200;
const conservativeBalance = projectedBalance - contingency;

function formatMoney(value: number, digits = 0) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);
}

export default function Fall2026BudgetPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 md:py-12">
        <section className="mb-8 space-y-4">
          <Badge variant="outline" className="border-primary/40 text-primary">
            2026 Fall · 搬家预算
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            9 月底资金预算
          </h1>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground">
            家具、日用品、通信与一个月生活费都已计入。按当前预算执行，
            9 月底预计仍可保留约 {formatMoney(projectedBalance)}。
          </p>
        </section>

        <section className="mb-8 grid gap-4 md:grid-cols-3">
          <Card className="border-card-border bg-card">
            <CardHeader className="pb-2">
              <CardDescription className="flex items-center gap-2">
                <PiggyBank className="h-4 w-4 text-primary" />
                当前总资金
              </CardDescription>
              <CardTitle className="text-3xl">
                {formatMoney(totalFunds, 2)}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              美金与人民币折算金额合计
            </CardContent>
          </Card>

          <Card className="border-card-border bg-card">
            <CardHeader className="pb-2">
              <CardDescription className="flex items-center gap-2">
                <ReceiptText className="h-4 w-4 text-primary" />
                预计总支出
              </CardDescription>
              <CardTitle className="text-3xl">
                {formatMoney(totalExpenses)}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              8 月底至 9 月底全部预算
            </CardContent>
          </Card>

          <Card className="border-primary/40 bg-primary/5 shadow-sm">
            <CardHeader className="pb-2">
              <CardDescription className="flex items-center gap-2 text-primary">
                <BadgeDollarSign className="h-4 w-4" />
                9 月底预计结余
              </CardDescription>
              <CardTitle className="text-3xl text-primary">
                {formatMoney(projectedBalance, 2)}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              约 {formatMoney(Math.round(projectedBalance))}
            </CardContent>
          </Card>
        </section>

        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
          <Card className="overflow-hidden border-card-border bg-card">
            <CardHeader>
              <CardTitle>支出明细</CardTitle>
              <CardDescription>一次性支出与 9 月生活成本。</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y border-t">
                {expenses.map((expense) => {
                  const Icon = expense.icon;
                  return (
                    <div
                      key={expense.name}
                      className="flex items-center gap-3 px-6 py-3.5"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="min-w-0 flex-1 text-sm font-medium sm:text-base">
                        {expense.name}
                      </span>
                      <span className="font-mono text-sm font-semibold tabular-nums sm:text-base">
                        {formatMoney(expense.amount)}
                      </span>
                    </div>
                  );
                })}
                <div className="flex items-center justify-between bg-muted/40 px-6 py-4 font-bold">
                  <span>总支出</span>
                  <span className="font-mono tabular-nums">
                    {formatMoney(totalExpenses)}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-card-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl">资金构成</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">现有美金</span>
                  <span className="font-semibold">{formatMoney(usdFunds)}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">人民币 ¥9,000</span>
                  <span className="font-semibold">
                    ≈ {formatMoney(cnyFundsInUsd, 2)}
                  </span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between font-semibold">
                    <span>总资金</span>
                    <span>{formatMoney(totalFunds, 2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-amber-500/30 bg-amber-500/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  搬家缓冲金
                </CardTitle>
                <CardDescription>
                  建议额外预留 {formatMoney(100)}–{formatMoney(contingency)}。
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-6 text-muted-foreground">
                  用于灯、椅子、厨房用品、清洁工具、Uber 或 delivery fee
                  等临时支出。
                </p>
                <div className="flex items-center gap-2 rounded-lg border border-amber-500/20 bg-background/70 p-3">
                  <span className="text-sm text-muted-foreground">
                    若额外支出 {formatMoney(contingency)}
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <span className="ml-auto font-bold text-amber-700 dark:text-amber-300">
                    {formatMoney(conservativeBalance, 2)}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <section className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <h2 className="font-semibold">预算重点</h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                家具等项目基本是一次性固定支出。真正需要重点控制的是
                {" "}
                <span className="font-semibold text-foreground">
                  {formatMoney(1500)} 的总生活费
                </span>
                ，只要这部分不失控，整体预算会比较舒服。
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
