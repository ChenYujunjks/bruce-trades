//(trading)/liquidity/page.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowDown, ArrowUp, Target, TrendingUp, Waves } from "lucide-react";

export default function LiquidityPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <section className="mb-10 space-y-4 motion-safe:animate-fadeSlide">
          <Badge variant="outline" className="border-brand/40 text-brand">
            Trading Concept
          </Badge>

          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            震荡累计多空流动性是什么意思？
          </h1>

          <p className="max-w-3xl text-muted-foreground">
            在一段 K
            线里，如果价格长时间横盘震荡，市场上方和下方会不断堆积止损单、
            爆仓单和追单。这些未来可能被触发的订单，就是交易里常说的流动性。
          </p>
        </section>

        <Card className="border-card-border bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Waves className="h-5 w-5 text-brand" />
              核心理解
            </CardTitle>
            <CardDescription>
              这里的流动性，不是普通成交量，而是未来可能被触发的市价单。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <p>
              当 BTC 在一个区间内震荡，比如{" "}
              <span className="font-medium text-brand">62000 - 63000</span>，
              越来越多交易者会在支撑附近做多，在压力附近做空。
            </p>

            <p className="text-muted-foreground">
              这些人的止损通常会集中放在区间外，因此上方和下方都会逐渐形成流动性池。
            </p>
          </CardContent>
        </Card>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card className="border-destructive/30 bg-destructive/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <ArrowDown className="h-5 w-5" />
                下方流动性
              </CardTitle>
              <CardDescription>多头止损 / 多头爆仓</CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
              <p>很多人在支撑位附近做多：</p>

              <div className="rounded-xl border border-destructive/20 bg-muted p-4 font-mono text-sm">
                <div>62000 支撑位</div>
                <div className="text-destructive">↓</div>
                <div>61900 多头止损</div>
                <div>↓</div>
                <div className="font-medium text-destructive">
                  形成卖方流动性
                </div>
              </div>

              <p className="text-muted-foreground">
                当价格跌破支撑时，多头止损会被触发，变成市价卖单。
              </p>
            </CardContent>
          </Card>

          <Card className="border-chart-2/30 bg-chart-2/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-chart-2">
                <ArrowUp className="h-5 w-5" />
                上方流动性
              </CardTitle>
              <CardDescription>空头止损 / 空头爆仓</CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
              <p>很多人在压力位附近做空：</p>

              <div className="rounded-xl border border-chart-2/20 bg-muted p-4 font-mono text-sm">
                <div>63000 压力位</div>
                <div className="text-chart-2">↑</div>
                <div>63100 空头止损</div>
                <div>↑</div>
                <div className="font-medium text-chart-2">形成买方流动性</div>
              </div>

              <p className="text-muted-foreground">
                当价格突破压力时，空头止损会被触发，变成市价买单。
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-chart-3" />
              为什么价格喜欢去扫流动性？
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              大资金想建仓，需要足够多的对手盘。如果直接买或直接卖，容易把价格推得很远。
            </p>

            <p>所以市场经常会先去打掉某一边的止损，让大量被动市价单出现。</p>

            <Separator />

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-destructive/20 bg-muted p-4">
                <h3 className="mb-2 font-semibold text-destructive">
                  扫下方流动性
                </h3>
                <p className="text-sm text-muted-foreground">
                  震荡 → 假跌破 → 触发多头止损 → 出现大量市价卖单 →
                  被吸收后快速拉回。
                </p>
              </div>

              <div className="rounded-xl border border-chart-2/20 bg-muted p-4">
                <h3 className="mb-2 font-semibold text-chart-2">
                  扫上方流动性
                </h3>
                <p className="text-sm text-muted-foreground">
                  震荡 → 假突破 → 触发空头止损 → 出现大量市价买单 →
                  被吸收后快速砸回。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-brand" />
              专业交易员怎么利用扫流动性？
            </CardTitle>
            <CardDescription>
              前高前低不是单纯用来放止损的位置，而是用来判断市场可能去哪里拿流动性。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            <p className="text-muted-foreground">
              很多新手会在前低下方放多单止损，或者在前高上方放空单止损。
              但这些位置本身就是流动性集中区，所以市场经常会先去扫掉这些止损，再选择真正方向。
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-destructive/20 bg-muted p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-destructive">
                  <ArrowDown className="h-4 w-4" />扫 SSL 后找多
                </h3>

                <div className="mb-3 rounded-lg bg-background p-3 font-mono text-sm">
                  <div>前低 / SSL</div>
                  <div className="text-destructive">↓ 假跌破</div>
                  <div>触发多头止损</div>
                  <div className="text-brand">↑ 快速收回区间</div>
                  <div className="font-medium text-brand">再观察做多机会</div>
                </div>

                <p className="text-sm text-muted-foreground">
                  如果价格跌破前低后没有继续下跌，而是快速收回，说明下方卖方流动性可能已经被吸收。
                  这时做多的逻辑会比直接在支撑位抄底更清晰。
                </p>
              </div>

              <div className="rounded-xl border border-chart-2/20 bg-muted p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-chart-2">
                  <ArrowUp className="h-4 w-4" />扫 BSL 后找空
                </h3>

                <div className="mb-3 rounded-lg bg-background p-3 font-mono text-sm">
                  <div>前高 / BSL</div>
                  <div className="text-chart-2">↑ 假突破</div>
                  <div>触发空头止损</div>
                  <div className="text-destructive">↓ 快速跌回区间</div>
                  <div className="font-medium text-destructive">
                    再观察做空机会
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  如果价格突破前高后无法站稳，而是快速跌回区间，说明上方买方流动性可能已经被利用。
                  这时做空的逻辑会比直接在压力位空更合理。
                </p>
              </div>
            </div>

            <Separator />

            <div className="rounded-xl border border-brand/20 bg-brand/5 p-4">
              <p className="text-sm leading-7">
                核心思路不是看到前高前低就进场，而是等待：
                <span className="font-medium text-brand">
                  {" "}
                  扫流动性 → 失败延续 → 回到区间内 → 再考虑交易。
                </span>
                这样止损可以放在扫流动性的极端点之外，而不是直接放在最容易被扫的位置。
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-chart-2" />
              Liquidation Map 怎么看？
            </CardTitle>
            <CardDescription>
              Liquidation Map
              不是普通成交量图，而是用来观察不同价格位置潜在的爆仓流动性。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            <p className="text-muted-foreground">
              爆仓热力图会显示当前价格上方和下方，哪些位置聚集了大量杠杆仓位的强平价格。
              颜色越明显，说明如果价格到达那里，可能触发的爆仓金额越大。
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-chart-2/20 bg-muted p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-chart-2">
                  <ArrowUp className="h-4 w-4" />
                  上方清算区
                </h3>

                <div className="mb-3 rounded-lg bg-background p-3 font-mono text-sm">
                  <div>当前价格：62000</div>
                  <div className="text-chart-2">↑ 63000 - 64000</div>
                  <div>空头爆仓集中</div>
                  <div className="font-medium text-chart-2">
                    触发后形成买方流动性
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  如果价格上涨到空头清算区，空头被强制平仓，系统会买入平仓，
                  这会在短时间内形成大量市价买单。
                </p>
              </div>

              <div className="rounded-xl border border-destructive/20 bg-muted p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-destructive">
                  <ArrowDown className="h-4 w-4" />
                  下方清算区
                </h3>

                <div className="mb-3 rounded-lg bg-background p-3 font-mono text-sm">
                  <div>当前价格：62000</div>
                  <div className="text-destructive">↓ 61000 - 60000</div>
                  <div>多头爆仓集中</div>
                  <div className="font-medium text-destructive">
                    触发后形成卖方流动性
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  如果价格下跌到多头清算区，多头被强制平仓，系统会卖出平仓，
                  这会在短时间内形成大量市价卖单。
                </p>
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              <h3 className="font-semibold">实战观察顺序</h3>

              <div className="grid gap-3 md:grid-cols-3">
                <div className="rounded-xl border border-card-border bg-muted p-4">
                  <p className="mb-1 font-medium">1. 找清算堆积</p>
                  <p className="text-sm text-muted-foreground">
                    先看当前价格上方和下方，哪里有最明显的爆仓密集区。
                  </p>
                </div>

                <div className="rounded-xl border border-card-border bg-muted p-4">
                  <p className="mb-1 font-medium">2. 看价格是否靠近</p>
                  <p className="text-sm text-muted-foreground">
                    如果价格正在向某个高亮区域移动，说明市场可能在寻找那边的流动性。
                  </p>
                </div>

                <div className="rounded-xl border border-card-border bg-muted p-4">
                  <p className="mb-1 font-medium">3. 看打到后反应</p>
                  <p className="text-sm text-muted-foreground">
                    真突破会继续站稳，假突破通常会快速回到原来的震荡区间。
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-brand/20 bg-brand/5 p-4">
              <p className="text-sm leading-7 text-muted-foreground">
                注意：Liquidation Map
                不是方向预测工具。它只能告诉你哪里可能有大量爆仓流动性，
                不代表价格一定会去那里。真正判断方向时，还要结合{" "}
                <span className="font-medium text-brand">
                  OI、CVD、价格结构、成交量和关键支撑压力
                </span>
                。
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
