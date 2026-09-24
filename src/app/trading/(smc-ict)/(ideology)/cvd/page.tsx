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
  CircleDot,
  GitCompareArrows,
  Target,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

export default function CVDPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <section className="mb-10 space-y-4 motion-safe:animate-fadeSlide">
          <Badge variant="outline" className="border-brand/40 text-brand">
            Trading Concept
          </Badge>

          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            CVD 是什么？专业交易员怎么用它开单？
          </h1>

          <p className="max-w-3xl text-muted-foreground">
            CVD，全称 Cumulative Volume Delta，是 Delta 的累计值。
            它用来观察一段时间内主动买盘和主动卖盘的持续力量，而不是只看单根 K
            线。
          </p>
        </section>

        <Card className="border-card-border bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-brand" />
              核心理解
            </CardTitle>
            <CardDescription>
              CVD = 每一段 Delta 不断累加后的结果。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <p>
              Delta 看的是某一段时间内主动买入和主动卖出的差值； CVD
              看的是这个差值在一段时间内的累计趋势。
            </p>

            <p className="text-muted-foreground">
              专业交易员看 CVD，重点不是看它绝对数值有多大，
              而是看它和价格之间是否同步：
              <span className="font-medium text-brand">
                {" "}
                价格创新高时，CVD 有没有跟着创新高； 价格创新低时，CVD
                有没有跟着创新低。
              </span>
            </p>
          </CardContent>
        </Card>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card className="border-chart-2/30 bg-chart-2/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-chart-2">
                <TrendingUp className="h-5 w-5" />
                CVD 上升
              </CardTitle>
              <CardDescription>主动买盘持续占优</CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
              <p>如果 CVD 持续上升，说明主动买入力量在持续累积：</p>

              <div className="rounded-xl border border-chart-2/20 bg-muted p-4 font-mono text-sm">
                <div>Delta 1：+120</div>
                <div>Delta 2：+80</div>
                <div>Delta 3：+150</div>
                <div className="text-chart-2">CVD 持续上升</div>
                <div className="font-medium text-chart-2">主动买盘持续更强</div>
              </div>

              <p className="text-muted-foreground">
                如果价格也同步上涨，说明上涨趋势更健康。
                如果价格涨不动，就要警惕买盘被吸收。
              </p>
            </CardContent>
          </Card>

          <Card className="border-destructive/30 bg-destructive/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <TrendingDown className="h-5 w-5" />
                CVD 下降
              </CardTitle>
              <CardDescription>主动卖盘持续占优</CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
              <p>如果 CVD 持续下降，说明主动卖出力量在持续累积：</p>

              <div className="rounded-xl border border-destructive/20 bg-muted p-4 font-mono text-sm">
                <div>Delta 1：-100</div>
                <div>Delta 2：-160</div>
                <div>Delta 3：-90</div>
                <div className="text-destructive">CVD 持续下降</div>
                <div className="font-medium text-destructive">
                  主动卖盘持续更强
                </div>
              </div>

              <p className="text-muted-foreground">
                如果价格也同步下跌，说明下跌趋势更健康。
                如果价格跌不动，就要警惕卖盘被吸收。
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GitCompareArrows className="h-5 w-5 text-chart-3" />
              专业交易员最重视：价格与 CVD 背离
            </CardTitle>
            <CardDescription>
              CVD 最有价值的地方，是帮助你发现主动买卖力量和价格走势不一致。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              如果价格创新高，但 CVD 没有创新高，说明价格虽然上去了，
              但主动买盘没有跟上。反过来，如果价格创新低，但 CVD 没有创新低，
              说明价格虽然跌下去了，但主动卖盘没有跟上。
            </p>

            <Separator />

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-destructive/20 bg-muted p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-destructive">
                  <ArrowUp className="h-4 w-4" />
                  价格创新高，CVD 不创新高
                </h3>

                <div className="mb-3 rounded-lg bg-background p-3 font-mono text-sm">
                  <div>价格：突破前高</div>
                  <div className="text-chart-2">↑ 扫 BSL</div>
                  <div>CVD：没有新高</div>
                  <div className="font-medium text-destructive">
                    主动买盘没有跟上
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  这可能代表假突破、空头止损推动、买盘衰竭，
                  或者上方买方流动性被利用后准备反转。
                </p>
              </div>

              <div className="rounded-xl border border-chart-2/20 bg-muted p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-chart-2">
                  <ArrowDown className="h-4 w-4" />
                  价格创新低，CVD 不创新低
                </h3>

                <div className="mb-3 rounded-lg bg-background p-3 font-mono text-sm">
                  <div>价格：跌破前低</div>
                  <div className="text-destructive">↓ 扫 SSL</div>
                  <div>CVD：没有新低</div>
                  <div className="font-medium text-chart-2">
                    主动卖盘没有跟上
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  这可能代表假跌破、多头止损触发、卖盘衰竭，
                  或者下方卖方流动性被吸收后准备反弹。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-brand" />
              CVD 在实际开单中的用法
            </CardTitle>
            <CardDescription>
              CVD
              不是独立开单信号，而是用来确认扫流动性之后，主动买卖力量是否真的衰竭。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            <div className="rounded-xl border border-chart-2/20 bg-chart-2/5 p-4">
              <h3 className="mb-3 font-semibold text-chart-2">
                做多模型：扫 SSL + CVD 不创新低
              </h3>

              <div className="mb-3 rounded-lg bg-background p-3 font-mono text-sm">
                <div>价格跌破前低</div>
                <div className="text-destructive">↓ 扫 SSL</div>
                <div>CVD 没有跟随价格创新低</div>
                <div>价格快速收回区间</div>
                <div className="text-chart-2">形成 Bullish FVG</div>
                <div>回踩 FVG 不破</div>
                <div className="font-medium text-chart-2">观察做多机会</div>
              </div>

              <p className="text-sm text-muted-foreground">
                这个模型的重点是：价格虽然打穿前低，但主动卖盘没有继续放大。
                如果随后价格收回区间，说明下方流动性可能被扫完，
                卖盘衰竭后多头重新接管。
              </p>
            </div>

            <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-4">
              <h3 className="mb-3 font-semibold text-destructive">
                做空模型：扫 BSL + CVD 不创新高
              </h3>

              <div className="mb-3 rounded-lg bg-background p-3 font-mono text-sm">
                <div>价格突破前高</div>
                <div className="text-chart-2">↑ 扫 BSL</div>
                <div>CVD 没有跟随价格创新高</div>
                <div>价格快速跌回区间</div>
                <div className="text-destructive">形成 Bearish FVG</div>
                <div>反抽 FVG 不破</div>
                <div className="font-medium text-destructive">观察做空机会</div>
              </div>

              <p className="text-sm text-muted-foreground">
                这个模型的重点是：价格虽然突破前高，但主动买盘没有继续放大。
                如果随后价格跌回区间，说明上方流动性可能被利用完，
                买盘衰竭后空头重新接管。
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-chart-3" />
              CVD 和 Delta 的区别
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-card-border bg-muted p-4">
                <h3 className="mb-2 font-semibold">Delta</h3>
                <p className="text-sm text-muted-foreground">
                  更适合观察短时间内主动买卖力量的变化。 它像一根 K
                  线里的主动成交快照。
                </p>
              </div>

              <div className="rounded-xl border border-card-border bg-muted p-4">
                <h3 className="mb-2 font-semibold">CVD</h3>
                <p className="text-sm text-muted-foreground">
                  更适合观察一段趋势里主动买卖力量是否持续。 它像 Delta
                  的趋势线。
                </p>
              </div>
            </div>

            <p className="text-muted-foreground">
              实际交易中，Delta 更适合看当下反应， CVD
              更适合看整体主动资金是否配合价格方向。
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
              只看 CVD，不看价格是否已经扫到 BSL / SSL。
            </p>

            <p>
              <span className="font-medium">误区 3：</span>
              看到背离就马上反向开单，而不等待价格收回区间或结构确认。
            </p>

            <p>
              <span className="font-medium">误区 4：</span>
              不区分交易所数据。不同平台的 CVD
              可能不同，要优先看主流成交平台或聚合数据。
            </p>

            <p className="text-muted-foreground">
              更专业的理解是：CVD 是主动买卖力量的累计轨迹，
              它最适合用来判断价格突破或跌破时，背后的主动资金是否真的跟随。
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
              CVD 的核心价值不是预测涨跌，而是帮助你判断：
              <span className="font-medium text-brand">
                {" "}
                价格创新高或创新低时，主动买卖力量有没有真正跟上。
                如果价格扫流动性但 CVD
                不跟随，假突破或假跌破的概率就值得重点观察。
              </span>
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
