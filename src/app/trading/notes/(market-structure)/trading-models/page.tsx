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
  Activity,
  ArrowDown,
  ArrowUp,
  BadgeAlert,
  BarChart3,
  CheckCircle2,
  Coins,
  Crosshair,
  Layers,
  Target,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

export default function TradingModelsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <section className="mb-10 space-y-4 motion-safe:animate-fadeSlide">
          <Badge variant="outline" className="border-brand/40 text-brand">
            Trading Models
          </Badge>

          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            专业交易员常用的高价值交易模型
          </h1>

          <p className="max-w-3xl text-muted-foreground">
            单独理解 Liquidity、FVG、OI、Funding、Delta、CVD 只是第一步。
            真正有交易价值的是把这些工具组合成可执行的 Setup：
            市场到哪里拿流动性，谁在主动推动，哪边仓位拥挤，价格是否留下可交易的结构。
          </p>
        </section>

        <Card className="border-card-border bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Crosshair className="h-5 w-5 text-brand" />
              页面核心
            </CardTitle>
            <CardDescription>
              这里不再讲单个指标是什么，而是讲多个指标如何组合成开单模型。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <p>
              专业交易员不会因为某一个指标就直接开单，而是等待多个条件同时出现。
              比如：价格扫流动性、Funding 极端、OI 释放或重新增加、CVD 背离、
              Delta 被吸收、FVG 提供回踩区域。
            </p>

            <p className="text-muted-foreground">
              这三个模型的共同点是：
              <span className="font-medium text-brand">
                {" "}
                它们都不是预测模型，而是确认模型。
              </span>
              你不是提前猜方向，而是在市场完成扫流动性、清洗仓位或失衡回踩后，
              再观察是否出现更清晰的交易机会。
            </p>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Coins className="h-5 w-5 text-chart-3" />
              Model 1：Funding Trap
            </CardTitle>
            <CardDescription>
              利用 Funding Rate 和 OI
              判断哪一边仓位过度拥挤，再等待扫流动性后的反向机会。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            <p className="text-muted-foreground">
              Funding Trap 的核心不是“Funding 高就做空，Funding 低就做多”，
              而是判断市场哪一边过度拥挤。拥挤的一边如果被市场反向攻击，
              很容易出现止损、爆仓和快速反向波动。
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-destructive">
                  <TrendingDown className="h-4 w-4" />
                  多头陷阱：观察做空
                </h3>

                <div className="rounded-lg bg-background p-3 font-mono text-sm">
                  <div>Funding 长时间偏高</div>
                  <div>OI 持续增加</div>
                  <div>市场多头拥挤</div>
                  <div className="text-chart-2">价格扫 BSL</div>
                  <div>CVD 不创新高</div>
                  <div>价格跌回区间</div>
                  <div className="text-destructive">形成 Bearish FVG</div>
                  <div className="font-medium text-destructive">
                    反抽不破，观察做空
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-chart-2/20 bg-chart-2/5 p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-chart-2">
                  <TrendingUp className="h-4 w-4" />
                  空头陷阱：观察做多
                </h3>

                <div className="rounded-lg bg-background p-3 font-mono text-sm">
                  <div>Funding 长时间为负</div>
                  <div>OI 持续增加</div>
                  <div>市场空头拥挤</div>
                  <div className="text-destructive">价格扫 SSL</div>
                  <div>CVD 不创新低</div>
                  <div>价格收回区间</div>
                  <div className="text-chart-2">形成 Bullish FVG</div>
                  <div className="font-medium text-chart-2">
                    回踩不破，观察做多
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-card-border bg-muted p-4">
                <h3 className="mb-2 font-semibold">核心指标</h3>
                <p className="text-sm text-muted-foreground">
                  Funding Rate、OI、Liquidity、CVD、FVG。
                </p>
              </div>

              <div className="rounded-xl border border-card-border bg-muted p-4">
                <h3 className="mb-2 font-semibold">入场位置</h3>
                <p className="text-sm text-muted-foreground">
                  不在 Funding 极端时直接反向，而是在扫流动性后回踩或反抽 FVG
                  时观察。
                </p>
              </div>

              <div className="rounded-xl border border-card-border bg-muted p-4">
                <h3 className="mb-2 font-semibold">失效条件</h3>
                <p className="text-sm text-muted-foreground">
                  价格没有收回区间，CVD
                  继续跟随创新高或新低，说明趋势可能仍在延续。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="h-5 w-5 text-brand" />
              Model 2：FVG Continuation
            </CardTitle>
            <CardDescription>
              利用趋势中的 Displacement 和 FVG，寻找回踩后的顺势延续机会。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            <p className="text-muted-foreground">
              FVG Continuation 不是反转模型，而是顺势模型。它关注的是：
              价格已经出现明确方向，随后快速位移留下 FVG，回踩 FVG
              后没有破坏结构， 说明趋势可能继续。
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-chart-2/20 bg-chart-2/5 p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-chart-2">
                  <ArrowUp className="h-4 w-4" />
                  多头延续模型
                </h3>

                <div className="rounded-lg bg-background p-3 font-mono text-sm">
                  <div>市场处于上涨结构</div>
                  <div>价格突破短期高点</div>
                  <div className="text-chart-2">出现强位移上涨</div>
                  <div>留下 Bullish FVG</div>
                  <div>回踩 FVG 不破</div>
                  <div>Delta 转正</div>
                  <div>CVD 继续上升</div>
                  <div>OI 温和增加</div>
                  <div className="font-medium text-chart-2">观察顺势做多</div>
                </div>
              </div>

              <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-destructive">
                  <ArrowDown className="h-4 w-4" />
                  空头延续模型
                </h3>

                <div className="rounded-lg bg-background p-3 font-mono text-sm">
                  <div>市场处于下跌结构</div>
                  <div>价格跌破短期低点</div>
                  <div className="text-destructive">出现强位移下跌</div>
                  <div>留下 Bearish FVG</div>
                  <div>反抽 FVG 不破</div>
                  <div>Delta 转负</div>
                  <div>CVD 继续下降</div>
                  <div>OI 温和增加</div>
                  <div className="font-medium text-destructive">
                    观察顺势做空
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            <div className="rounded-xl border border-brand/20 bg-brand/5 p-4">
              <h3 className="mb-3 flex items-center gap-2 font-semibold text-brand">
                <CheckCircle2 className="h-4 w-4" />
                专业交易员关注的关键点
              </h3>

              <p className="text-sm leading-7 text-muted-foreground">
                FVG Continuation 的重点不是“看到 FVG 就进”，而是先确认趋势方向，
                再确认 FVG 是由强位移产生的，最后观察回踩是否守住。 如果回踩 FVG
                时 Delta 没有明显转弱，CVD 没有明显背离， OI
                也没有异常爆炸式堆仓，这个延续模型会更健康。
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-card-border bg-muted p-4">
                <h3 className="mb-2 font-semibold">核心指标</h3>
                <p className="text-sm text-muted-foreground">
                  Trend Structure、FVG、Delta、CVD、OI。
                </p>
              </div>

              <div className="rounded-xl border border-card-border bg-muted p-4">
                <h3 className="mb-2 font-semibold">入场位置</h3>
                <p className="text-sm text-muted-foreground">
                  回踩 Bullish FVG 不破，或反抽 Bearish FVG 不破后观察。
                </p>
              </div>

              <div className="rounded-xl border border-card-border bg-muted p-4">
                <h3 className="mb-2 font-semibold">失效条件</h3>
                <p className="text-sm text-muted-foreground">
                  FVG 被完全打穿，CVD 出现反向背离，或者 OI
                  极端堆仓后价格无法延续。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-chart-3" />
              Model 3：Absorption
            </CardTitle>
            <CardDescription>
              当主动买卖非常强，但价格却推不动时，可能说明对手盘正在吸收。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            <p className="text-muted-foreground">
              Absorption 是交易员非常重视的订单流模型。它的核心是：
              如果大量主动卖单打出来，但价格没有继续下跌，说明可能有人在下方吸收卖盘；
              如果大量主动买单打出来，但价格没有继续上涨，说明可能有人在上方吸收买盘。
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-chart-2/20 bg-chart-2/5 p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-chart-2">
                  <ArrowDown className="h-4 w-4" />
                  Sell Absorption：观察做多
                </h3>

                <div className="rounded-lg bg-background p-3 font-mono text-sm">
                  <div>价格扫 SSL</div>
                  <div className="text-destructive">Delta 极度为负</div>
                  <div>理论上应该继续跌</div>
                  <div>但价格没有继续下跌</div>
                  <div>CVD 不创新低</div>
                  <div>价格重新收回区间</div>
                  <div className="text-chart-2">卖盘被吸收</div>
                  <div className="font-medium text-chart-2">观察做多机会</div>
                </div>
              </div>

              <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-destructive">
                  <ArrowUp className="h-4 w-4" />
                  Buy Absorption：观察做空
                </h3>

                <div className="rounded-lg bg-background p-3 font-mono text-sm">
                  <div>价格扫 BSL</div>
                  <div className="text-chart-2">Delta 极度为正</div>
                  <div>理论上应该继续涨</div>
                  <div>但价格没有继续上涨</div>
                  <div>CVD 不创新高</div>
                  <div>价格重新跌回区间</div>
                  <div className="text-destructive">买盘被吸收</div>
                  <div className="font-medium text-destructive">
                    观察做空机会
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            <div className="rounded-xl border border-brand/20 bg-brand/5 p-4">
              <h3 className="mb-3 flex items-center gap-2 font-semibold text-brand">
                <BarChart3 className="h-4 w-4" />
                Absorption 的关键判断
              </h3>

              <p className="text-sm leading-7 text-muted-foreground">
                吸收不是看 Delta 大不大，而是看：
                <span className="font-medium text-brand">
                  {" "}
                  Delta 很极端，但价格有没有按理论方向继续走。
                </span>
                如果主动卖盘很强但价格跌不动，说明下方可能有被动买盘承接；
                如果主动买盘很强但价格涨不动，说明上方可能有被动卖盘压制。
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-card-border bg-muted p-4">
                <h3 className="mb-2 font-semibold">核心指标</h3>
                <p className="text-sm text-muted-foreground">
                  Delta、CVD、Liquidity、Price Reaction。
                </p>
              </div>

              <div className="rounded-xl border border-card-border bg-muted p-4">
                <h3 className="mb-2 font-semibold">入场位置</h3>
                <p className="text-sm text-muted-foreground">
                  不在极端 Delta 出现时直接进，而是在价格收回结构后观察确认。
                </p>
              </div>

              <div className="rounded-xl border border-card-border bg-muted p-4">
                <h3 className="mb-2 font-semibold">失效条件</h3>
                <p className="text-sm text-muted-foreground">
                  极端 Delta
                  后价格继续沿原方向扩展，说明不是吸收，而是真趋势推动。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-destructive/20 bg-destructive/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <BadgeAlert className="h-5 w-5" />
              三个模型的共同误区
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-3">
            <p>
              <span className="font-medium">误区 1：</span>
              Funding 极端就马上反向开单。
            </p>

            <p>
              <span className="font-medium">误区 2：</span>
              看到 FVG 就进，不管它是否处在趋势结构里。
            </p>

            <p>
              <span className="font-medium">误区 3：</span>
              看到 Delta 极端就追单，而不是观察价格是否被吸收。
            </p>

            <p>
              <span className="font-medium">误区 4：</span>
              没有等待价格收回区间、回踩 FVG、反抽失败、CVD 背离等确认。
            </p>

            <p className="text-muted-foreground">
              更专业的理解是：模型不是为了让你更频繁交易，而是为了让你减少随机交易。
              只有当价格位置、仓位结构、主动成交和价格反应同时配合时， 这个
              Setup 才值得认真观察。
            </p>
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
              Funding Trap 看的是
              <span className="font-medium text-brand"> 仓位拥挤后的反杀 </span>
              ，FVG Continuation 看的是
              <span className="font-medium text-brand">
                {" "}
                趋势失衡后的顺势延续{" "}
              </span>
              ，Absorption 看的是
              <span className="font-medium text-brand">
                {" "}
                主动成交被对手盘吸收{" "}
              </span>
              。它们都不是单独指标，而是多个交易工具组合成的可执行模型。
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
