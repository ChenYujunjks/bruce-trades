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
  CandlestickChart,
  CircleDot,
  Target,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

export default function DeltaPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <section className="mb-10 space-y-4 motion-safe:animate-fadeSlide">
          <Badge variant="outline" className="border-brand/40 text-brand">
            Trading Concept
          </Badge>

          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            Delta 是什么？专业交易员怎么用它开单？
          </h1>

          <p className="max-w-3xl text-muted-foreground">
            Delta 不是普通成交量，而是主动买入量和主动卖出量之间的差值。
            它用来判断当前这段价格运动背后，究竟是主动买盘在推动，
            还是主动卖盘在推动。
          </p>
        </section>

        <Card className="border-card-border bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-brand" />
              核心理解
            </CardTitle>
            <CardDescription>Delta = 主动买入量 - 主动卖出量。</CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <p>
              如果 Delta 为正，说明这一段时间内主动买入更强； 如果 Delta
              为负，说明主动卖出更强。
            </p>

            <p className="text-muted-foreground">
              专业交易员看 Delta，不是为了看到绿色就做多、看到红色就做空，
              而是为了判断：
              <span className="font-medium text-brand">
                {" "}
                当前价格变化是否真的有主动成交力量支持。
              </span>
            </p>
          </CardContent>
        </Card>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card className="border-chart-2/30 bg-chart-2/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-chart-2">
                <ArrowUp className="h-5 w-5" />正 Delta
              </CardTitle>
              <CardDescription>主动买盘更强</CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
              <p>当主动买入量大于主动卖出量时，Delta 为正：</p>

              <div className="rounded-xl border border-chart-2/20 bg-muted p-4 font-mono text-sm">
                <div>主动买入：1200 BTC</div>
                <div>主动卖出：800 BTC</div>
                <div className="text-chart-2">Delta = +400 BTC</div>
                <div className="font-medium text-chart-2">买盘主动性更强</div>
              </div>

              <p className="text-muted-foreground">
                如果价格同步上涨，说明上涨有主动买盘推动。
                如果价格没有上涨，反而要小心买盘被吸收。
              </p>
            </CardContent>
          </Card>

          <Card className="border-destructive/30 bg-destructive/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <ArrowDown className="h-5 w-5" />负 Delta
              </CardTitle>
              <CardDescription>主动卖盘更强</CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
              <p>当主动卖出量大于主动买入量时，Delta 为负：</p>

              <div className="rounded-xl border border-destructive/20 bg-muted p-4 font-mono text-sm">
                <div>主动买入：700 BTC</div>
                <div>主动卖出：1300 BTC</div>
                <div className="text-destructive">Delta = -600 BTC</div>
                <div className="font-medium text-destructive">
                  卖盘主动性更强
                </div>
              </div>

              <p className="text-muted-foreground">
                如果价格同步下跌，说明下跌有主动卖盘推动。
                如果价格没有跌下去，反而要小心卖盘被吸收。
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CandlestickChart className="h-5 w-5 text-chart-3" />
              专业交易员真正看什么？
            </CardTitle>
            <CardDescription>
              Delta 最重要的不是正负，而是它和价格之间的关系。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              交易员会把价格和 Delta 放在一起看。如果价格和 Delta 同方向，
              说明当前趋势可能有主动成交支持；如果价格和 Delta 不一致，
              就可能出现吸收、衰竭或假突破。
            </p>

            <Separator />

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-chart-2/20 bg-muted p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-chart-2">
                  <TrendingUp className="h-4 w-4" />
                  价格上涨 + Delta 为正
                </h3>

                <p className="text-sm text-muted-foreground">
                  说明上涨有主动买盘推动，趋势延续的可信度更高。 但如果已经接近
                  BSL 或清算区，不能盲目追多。
                </p>
              </div>

              <div className="rounded-xl border border-destructive/20 bg-muted p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-destructive">
                  <TrendingDown className="h-4 w-4" />
                  价格下跌 + Delta 为负
                </h3>

                <p className="text-sm text-muted-foreground">
                  说明下跌有主动卖盘推动，空头延续的可信度更高。 但如果已经扫到
                  SSL，要警惕卖盘被吸收后的反弹。
                </p>
              </div>

              <div className="rounded-xl border border-brand/20 bg-brand/5 p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-brand">
                  <CircleDot className="h-4 w-4" />
                  价格上涨 + Delta 不强
                </h3>

                <p className="text-sm text-muted-foreground">
                  说明上涨不一定是真买盘推动，可能是空头回补、流动性扫单，
                  或卖盘减少造成的被动上涨。
                </p>
              </div>

              <div className="rounded-xl border border-brand/20 bg-brand/5 p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-brand">
                  <CircleDot className="h-4 w-4" />
                  价格下跌 + Delta 不强
                </h3>

                <p className="text-sm text-muted-foreground">
                  说明下跌不一定是真卖盘推动，可能只是多头止损触发，
                  或者价格正在扫 SSL 后准备收回。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-brand" />
              Delta 在实际开单中的用法
            </CardTitle>
            <CardDescription>
              专业交易员通常不会单独用 Delta
              开单，而是用它确认流动性扫完后的方向。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            <div className="rounded-xl border border-chart-2/20 bg-chart-2/5 p-4">
              <h3 className="mb-3 font-semibold text-chart-2">
                做多模型：扫 SSL 后观察卖盘是否衰竭
              </h3>

              <div className="mb-3 rounded-lg bg-background p-3 font-mono text-sm">
                <div>价格跌破前低</div>
                <div className="text-destructive">↓ 扫 SSL</div>
                <div>Delta 极度为负</div>
                <div>但价格不再继续下跌</div>
                <div className="text-chart-2">随后 Delta 转弱或转正</div>
                <div>价格重新收回区间</div>
                <div className="font-medium text-chart-2">观察做多机会</div>
              </div>

              <p className="text-sm text-muted-foreground">
                这个逻辑的核心是：大量主动卖单打出来，但价格没有继续跌，
                说明卖盘可能被吸收。等价格重新收回区间后，做多逻辑才更清晰。
              </p>
            </div>

            <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-4">
              <h3 className="mb-3 font-semibold text-destructive">
                做空模型：扫 BSL 后观察买盘是否衰竭
              </h3>

              <div className="mb-3 rounded-lg bg-background p-3 font-mono text-sm">
                <div>价格突破前高</div>
                <div className="text-chart-2">↑ 扫 BSL</div>
                <div>Delta 极度为正</div>
                <div>但价格无法继续上涨</div>
                <div className="text-destructive">随后 Delta 转弱或转负</div>
                <div>价格重新跌回区间</div>
                <div className="font-medium text-destructive">观察做空机会</div>
              </div>

              <p className="text-sm text-muted-foreground">
                这个逻辑的核心是：大量主动买单打出来，但价格没有继续涨，
                说明买盘可能被吸收。等价格跌回区间后，做空逻辑才更清晰。
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-chart-3" />
              Delta 和 FVG 怎么组合？
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-chart-2/20 bg-muted p-4">
                <h3 className="mb-2 font-semibold text-chart-2">多头确认</h3>
                <p className="text-sm text-muted-foreground">
                  扫 SSL 后，Delta 从极度负值转弱或转正， 同时价格快速拉回并留下
                  Bullish FVG。 后续回踩 FVG 不破，可以观察多单机会。
                </p>
              </div>

              <div className="rounded-xl border border-destructive/20 bg-muted p-4">
                <h3 className="mb-2 font-semibold text-destructive">
                  空头确认
                </h3>
                <p className="text-sm text-muted-foreground">
                  扫 BSL 后，Delta 从极度正值转弱或转负， 同时价格快速跌回并留下
                  Bearish FVG。 后续反抽 FVG 不破，可以观察空单机会。
                </p>
              </div>
            </div>

            <p className="text-muted-foreground">
              所以 Delta 更像是确认工具：它告诉你扫流动性之后，
              主动买卖力量是否已经发生变化。
            </p>
          </CardContent>
        </Card>

        <Card className="mt-8 border-destructive/20 bg-destructive/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <BadgeAlert className="h-5 w-5" />
              新手常见误区
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-3">
            <p>
              <span className="font-medium">误区 2：</span>
              只看 Delta，不看价格有没有到 BSL / SSL。
            </p>

            <p>
              <span className="font-medium">误区 3：</span>
              看到极端 Delta 就追单，而不是观察是否被吸收。
            </p>

            <p>
              <span className="font-medium">误区 4：</span>
              忽略时间周期。1 分钟 Delta 和 15 分钟 Delta 的含义完全不同。
            </p>

            <p className="text-muted-foreground">
              更专业的理解是：Delta 不是方向信号，而是主动成交力量信号。
              它必须结合价格位置、流动性、FVG、CVD 和 OI 一起判断。
            </p>
          </CardContent>
        </Card>

        <Card className="mt-8 border-brand/20 bg-brand/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-brand">
              <TrendingUp className="h-5 w-5" />
              一句话总结
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-lg leading-8">
              Delta 的核心价值不是告诉你马上买还是卖，而是帮助你判断：
              <span className="font-medium text-brand">
                {" "}
                价格运动背后是否真的有主动买卖力量支持，
                以及扫流动性之后买盘或卖盘是否被吸收。
              </span>
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
