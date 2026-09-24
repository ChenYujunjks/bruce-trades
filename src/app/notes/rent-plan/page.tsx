// app/rent-plan/page.tsx

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import {
  AlertTriangle,
  ArrowRight,
  BadgeDollarSign,
  Building2,
  CalendarDays,
  Calculator,
  CheckCircle2,
  Crown,
  Home,
  PiggyBank,
  Users,
} from "lucide-react";

type Phase = {
  period: string;
  arrangement: string;
  calculation: string;
  savings: number;
};

type RentPlan = {
  id: number;
  title: string;
  subtitle: string;
  totalSavings: number;
  recommended?: boolean;
  phases: Phase[];
};

const monthlyHousingBudget = 1900;

const rentPlans: RentPlan[] = [
  {
    id: 1,
    title: "方案一：3B2B，有短租朋友",
    subtitle: "前五个月住客厅，第六个月搬入卧室",
    totalSavings: 7100,
    phases: [
      {
        period: "第 1–5 个月",
        arrangement: "房间分配：$2,050 / $1,750 / $1,500 / $800",
        calculation: "$1,900 − $800 = $1,100/月",
        savings: 5500,
      },
      {
        period: "第 6–9 个月",
        arrangement: "朋友搬走后，房间重新分配为 $2,300 / $2,000 / $1,650",
        calculation: "$400/月 × 4个月",
        savings: 1600,
      },
    ],
  },
  {
    id: 2,
    title: "方案二：2B1B，有短租朋友",
    subtitle: "前五个月住客厅，朋友搬走后重新分配",
    totalSavings: 6750,
    phases: [
      {
        period: "第 1–5 个月",
        arrangement: "房间分配：$2,100 / $1,550 / $550",
        calculation: "$1,900 − $550 = $1,350/月",
        savings: 6750,
      },
      {
        period: "第 6–9 个月",
        arrangement: "朋友搬走后，房间分配为 $2,400 / $1,800",
        calculation: "收到 $500/月补偿后，每月节省按 $0 计算",
        savings: 0,
      },
    ],
  },
  {
    id: 3,
    title: "方案三：2B1B，没有短租朋友",
    subtitle: "九个月内保持相同的住房安排",
    totalSavings: 10350,
    recommended: true,
    phases: [
      {
        period: "第 1–9 个月",
        arrangement: "房间分配：$1,900 / $1,450 / $750",
        calculation: "$1,900 − $750 = $1,150/月",
        savings: 10350,
      },
    ],
  },
];

function formatMoney(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function RentPlanPage() {
  const bestPlan = rentPlans.reduce((best, current) =>
    current.totalSavings > best.totalSavings ? current : best,
  );

  const planOneDifference = bestPlan.totalSavings - rentPlans[0].totalSavings;

  const planTwoDifference = bestPlan.totalSavings - rentPlans[1].totalSavings;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* 页面标题 */}
        <section className="mb-10 space-y-4 motion-safe:animate-fadeSlide">
          <Badge variant="outline" className="border-brand/40 text-brand">
            9 个月租房计划
          </Badge>

          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            三种租房方案节省金额对比
          </h1>

          <p className="max-w-3xl text-muted-foreground">
            按照每月住房预算{" "}
            <span className="font-semibold text-foreground">
              {formatMoney(monthlyHousingBudget)}
            </span>{" "}
            计算，对比三种方案在九个月结束后能够保留多少钱。
          </p>
        </section>

        {/* 基础计算规则 */}
        <Card className="mb-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5 text-brand" />
              计算规则
            </CardTitle>

            <CardDescription>
              所有方案使用相同的每月预算进行比较。
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="flex flex-col gap-3 rounded-lg border bg-muted/30 p-4 md:flex-row md:items-center">
              <div className="flex items-center gap-2 font-medium">
                <BadgeDollarSign className="h-5 w-5 text-brand" />
                每月住房预算：{formatMoney(monthlyHousingBudget)}
              </div>

              <ArrowRight className="hidden h-4 w-4 text-muted-foreground md:block" />

              <p className="text-sm text-muted-foreground">
                每月节省金额 = $1,900 − 自己实际承担的房租
              </p>
            </div>
          </CardContent>
        </Card>

        {/* 方案卡片 */}
        <div className="grid gap-6 lg:grid-cols-3">
          {rentPlans.map((plan) => (
            <Card
              key={plan.id}
              className={
                plan.recommended
                  ? "relative border-brand/40 bg-brand/5 shadow-sm"
                  : "border-card-border bg-card"
              }
            >
              {plan.recommended && (
                <Badge className="absolute right-4 top-4 gap-1">
                  <Crown className="h-3.5 w-3.5" />
                  节省最多
                </Badge>
              )}

              <CardHeader>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                  {plan.id === 1 ? (
                    <Building2 className="h-5 w-5 text-brand" />
                  ) : plan.id === 2 ? (
                    <Users className="h-5 w-5 text-brand" />
                  ) : (
                    <Home className="h-5 w-5 text-brand" />
                  )}
                </div>

                <CardTitle className="pr-20 text-xl">{plan.title}</CardTitle>

                <CardDescription>{plan.subtitle}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-5">
                {plan.phases.map((phase) => (
                  <div
                    key={phase.period}
                    className="rounded-lg border bg-background p-4"
                  >
                    <div className="mb-3 flex items-center gap-2">
                      <CalendarDays className="h-4 w-4 text-brand" />
                      <h3 className="font-semibold">{phase.period}</h3>
                    </div>

                    <p className="text-sm leading-6 text-muted-foreground">
                      {phase.arrangement}
                    </p>

                    <div className="mt-3 rounded-md bg-muted/60 px-3 py-2 text-sm">
                      {phase.calculation}
                    </div>

                    <p className="mt-3 text-sm font-medium">
                      本阶段节省：
                      <span className="ml-1 text-brand">
                        {formatMoney(phase.savings)}
                      </span>
                    </p>
                  </div>
                ))}

                <div className="border-t pt-5">
                  <p className="text-sm text-muted-foreground">九个月总节省</p>

                  <p className="mt-1 text-3xl font-bold tracking-tight">
                    {formatMoney(plan.totalSavings)}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 最终对比 */}
        <Card className="mt-8 border-brand/30 bg-brand/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-brand">
              <PiggyBank className="h-5 w-5" />
              最终对比
            </CardTitle>

            <CardDescription>单纯从九个月可以节省的金额来看。</CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />

              <div>
                <p className="font-semibold">
                  方案三节省最多：{formatMoney(bestPlan.totalSavings)}
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  也就是没有短租朋友，直接租 2B1B，并且九个月住在每月 $750
                  的空间。
                </p>
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border bg-background p-4">
                <p className="text-sm text-muted-foreground">
                  相比方案一多节省
                </p>
                <p className="mt-1 text-xl font-bold">
                  {formatMoney(planOneDifference)}
                </p>
              </div>

              <div className="rounded-lg border bg-background p-4">
                <p className="text-sm text-muted-foreground">
                  相比方案二多节省
                </p>
                <p className="mt-1 text-xl font-bold">
                  {formatMoney(planTwoDifference)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 注意事项 */}
        <Card className="mt-8 border-amber-500/30 bg-amber-500/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-amber-600">
              <AlertTriangle className="h-5 w-5" />
              需要确认的地方
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-3 text-sm leading-6">
            <p>
              方案二后四个月按照你写出的
              <strong>“每月节省 $0”</strong>计算，因此九个月总节省为 $6,750。
            </p>

            <p>
              如果你后四个月实际住的是每月 $1,800 的房间，并且还能收到朋友每月
              $500 的补偿，那么实际支出会是 $1,300，每月可以节省
              $600。此时方案二九个月总节省应为：
            </p>

            <div className="rounded-lg border bg-background p-4 font-medium">
              $1,350 × 5 + $600 × 4 = $9,150
            </div>
          </CardContent>
        </Card>

        {/* 一句话结论 */}
        <Card className="mt-8 border-brand/20 bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-brand" />
              一句话总结
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-lg leading-8">
              按照目前记录的计算方式，
              <span className="font-semibold text-brand">
                方案三在九个月后可以节省 $10,350
              </span>
              ，是三种方案中经济收益最高的选择。
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
