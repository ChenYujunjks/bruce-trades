import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  AlertTriangle,
  ArrowDown,
  ArrowUp,
  Bitcoin,
  GitCompare,
  Layers,
  LineChart,
  Target,
} from "lucide-react";

export default function SMTPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <section className="mb-10 space-y-4 motion-safe:animate-fadeSlide">
          <Badge variant="outline" className="border-brand/40 text-brand">
            Trading Concept
          </Badge>

          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            SMT 背离是什么意思？
          </h1>

          <p className="max-w-3xl text-muted-foreground">
            在交易，尤其是 ICT / Smart Money Concepts 体系里， SMT 通常指 Smart
            Money Technique。它核心观察的是：
            两个高度相关的市场，本来应该一起创新高或创新低，
            但其中一个做到了，另一个没有做到。
          </p>
        </section>

        <Card className="border-card-border bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GitCompare className="h-5 w-5 text-brand" />
              核心理解
            </CardTitle>
            <CardDescription>
              SMT 本质上是在观察相关市场之间的“不一致”。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <p>
              如果 BTC 和 ETH 平时高度相关，那么 BTC 创新高时， ETH
              理论上也应该跟着走强。
            </p>

            <p className="text-muted-foreground">
              但如果 BTC 创了新高，而 ETH 没有创新高，
              这种走势不一致就可能说明上涨缺乏广泛资金支持。
            </p>

            <div className="rounded-xl border border-brand/20 bg-brand/5 p-4">
              <p className="font-medium text-brand">
                SMT 不是直接入场信号，而是提醒你：市场可能存在假突破、
                流动性陷阱，或者动能不一致。
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card className="border-destructive/30 bg-destructive/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <ArrowDown className="h-5 w-5" />
                Bearish SMT
              </CardTitle>
              <CardDescription>看空 SMT / 顶背离</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <p>一个市场创新高，另一个市场没有创新高。</p>

              <div className="rounded-xl border border-destructive/20 bg-muted p-4 font-mono text-sm">
                <div className="font-semibold">BTC</div>
                <div>105000 → 106000</div>
                <div className="text-destructive">✅ 创新高</div>

                <Separator className="my-3" />

                <div className="font-semibold">ETH</div>
                <div>2500 → 2480</div>
                <div className="text-muted-foreground">❌ 没有创新高</div>
              </div>

              <p className="text-muted-foreground">
                这种情况说明上涨可能不是整个市场共同推动，
                后面容易出现回调或假突破。
              </p>
            </CardContent>
          </Card>

          <Card className="border-chart-2/30 bg-chart-2/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-chart-2">
                <ArrowUp className="h-5 w-5" />
                Bullish SMT
              </CardTitle>
              <CardDescription>看多 SMT / 底背离</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <p>一个市场创新低，另一个市场没有创新低。</p>

              <div className="rounded-xl border border-chart-2/20 bg-muted p-4 font-mono text-sm">
                <div className="font-semibold">BTC</div>
                <div>90000 → 85000</div>
                <div className="text-chart-2">✅ 创新低</div>

                <Separator className="my-3" />

                <div className="font-semibold">ETH</div>
                <div>2200 → 2205</div>
                <div className="text-muted-foreground">❌ 没有创新低</div>
              </div>

              <p className="text-muted-foreground">
                这种情况说明下跌动能可能正在减弱， 后面可能出现反弹或空头陷阱。
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bitcoin className="h-5 w-5 text-chart-3" />
              加密货币里常看的 SMT 组合
            </CardTitle>
            <CardDescription>
              SMT 更适合用于比较高度相关的市场。
            </CardDescription>
          </CardHeader>

          <CardContent className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-card-border bg-muted p-4">
              <h3 className="mb-2 font-semibold">BTC vs ETH</h3>
              <p className="text-sm text-muted-foreground">
                最常见的组合。BTC 创高但 ETH 不跟，
                可能说明市场风险偏好没有同步增强。
              </p>
            </div>

            <div className="rounded-xl border border-card-border bg-muted p-4">
              <h3 className="mb-2 font-semibold">BTC vs TOTAL3</h3>
              <p className="text-sm text-muted-foreground">
                TOTAL3 代表除 BTC、ETH 外的加密总市值。 如果 BTC
                创高但山寨不跟，也可能形成 SMT。
              </p>
            </div>

            <div className="rounded-xl border border-card-border bg-muted p-4">
              <h3 className="mb-2 font-semibold">BTCUSD vs ETH/BTC</h3>
              <p className="text-sm text-muted-foreground">
                有些交易员会观察 BTC、ETH 以及 ETH/BTC 之间的强弱关系。
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="h-5 w-5 text-brand" />
              SMT 要结合什么一起看？
            </CardTitle>
            <CardDescription>
              单独 SMT 不够强，最好放进完整交易逻辑里。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              例如：BTC 创新高，ETH 没有创新高，这只是提醒你可能有问题。
              真正要判断是否值得交易，还要继续检查其他数据。
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-brand/20 bg-brand/5 p-4">
                <h3 className="mb-2 flex items-center gap-2 font-semibold text-brand">
                  <LineChart className="h-4 w-4" />
                  更强的组合
                </h3>
                <p className="text-sm text-muted-foreground">
                  SMT + 扫流动性 + OI 上升 + CVD 不跟随 + 出现 FVG， 通常比单独
                  SMT 更有参考价值。
                </p>
              </div>

              <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-4">
                <h3 className="mb-2 flex items-center gap-2 font-semibold text-destructive">
                  <AlertTriangle className="h-4 w-4" />
                  新手容易误解
                </h3>
                <p className="text-sm text-muted-foreground">
                  SMT 不能直接告诉你“现在做多”或“现在做空”，
                  它只是告诉你市场内部可能出现了背离。
                </p>
              </div>
            </div>

            <Separator />

            <div className="rounded-xl border border-card-border bg-muted p-4">
              <h3 className="mb-2 font-semibold">推荐观察优先级</h3>
              <ol className="list-inside list-decimal space-y-1 text-sm text-muted-foreground">
                <li>OI：判断是否有新仓进场</li>
                <li>Liquidation Map：观察爆仓流动性集中区域</li>
                <li>CVD：观察主动买卖盘是否配合价格</li>
                <li>Market Structure：判断结构是否转变</li>
                <li>SMT：作为辅助确认工具</li>
              </ol>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-brand/20 bg-brand/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-brand">
              <Target className="h-5 w-5" />
              一句话总结
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-lg leading-8">
              SMT 背离，就是两个本该一起走强或走弱的相关市场，
              出现了一个创新高/新低、另一个没有跟随的情况。
              它通常用来识别假突破、流动性陷阱和市场动能不一致，
              但不能单独作为入场依据。
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
