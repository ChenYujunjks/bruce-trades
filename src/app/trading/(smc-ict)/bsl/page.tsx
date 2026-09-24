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
  AlertTriangle,
  ArrowDown,
  ArrowUp,
  Brain,
  CheckCircle2,
  Flame,
  Gauge,
  Map,
  RotateCcw,
  ShieldAlert,
  TrendingDown,
  TrendingUp,
  Waves,
} from "lucide-react";

export default function BslSslPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <section className="mb-10 space-y-4 motion-safe:animate-fadeSlide">
          <Badge variant="outline" className="border-brand/40 text-brand">
            Trading Model
          </Badge>

          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            BSL / SSL：流动性地图与扫后确认模型
          </h1>

          <p className="max-w-3xl text-muted-foreground">
            BSL / SSL 不是开单按钮，也不是简单的支撑阻力。它们更像交易员的
            <span className="font-medium text-foreground">流动性地图</span>：
            告诉你哪里容易触发止损、强平、追单和剧烈波动。真正决定方向的，不是
            “有没有扫掉流动性”，而是扫完之后市场是
            <span className="font-medium text-foreground">拒绝价格</span>，还是
            <span className="font-medium text-foreground">接受价格</span>。
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <Card className="border-chart-2/30 bg-chart-2/5">
            <CardHeader>
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-chart-2/10 text-chart-2">
                <ArrowUp className="h-5 w-5" />
              </div>
              <CardTitle>BSL：Buy-Side Liquidity</CardTitle>
              <CardDescription>上方买方流动性</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                BSL 通常在前高、双顶、区间上沿、明显阻力位上方。
                这里聚集着空头止损买单、空头强平买单，以及突破追多订单。
              </p>
              <p>
                价格接近 BSL，首先说明上方有流动性目标，
                <span className="font-medium text-foreground">
                  不是说明一定要做空
                </span>
                。
              </p>
            </CardContent>
          </Card>

          <Card className="border-destructive/30 bg-destructive/5">
            <CardHeader>
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                <ArrowDown className="h-5 w-5" />
              </div>
              <CardTitle>SSL：Sell-Side Liquidity</CardTitle>
              <CardDescription>下方卖方流动性</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                SSL 通常在前低、双底、区间下沿、明显支撑位下方。
                这里聚集着多头止损卖单、多头强平卖单，以及跌破追空订单。
              </p>
              <p>
                SSL 与 BSL 是镜像逻辑。扫 SSL 后不是一定做多，而是观察价格是否
                重新收回，还是接受更低价格。
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-10" />

        <Card className="border-brand/30 bg-brand/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Map className="h-5 w-5 text-brand" />
              核心升级：BSL / SSL 是地图，不是方向信号
            </CardTitle>
            <CardDescription>
              它解决的是“在哪里观察”，不是直接回答“一定涨还是一定跌”。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            <p className="text-sm leading-7 text-muted-foreground">
              很多新手会把 BSL 理解成“扫上方流动性后要跌”，把 SSL 理解成
              “扫下方流动性后要涨”。这个理解太机械。真实市场里，BSL 被扫后
              价格既可能快速跌回区间，也可能站稳上方继续上涨。
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-card-border bg-background/70 p-4">
                <h3 className="mb-2 text-sm font-semibold">
                  1. BSL / SSL 定位置
                </h3>
                <p className="text-sm text-muted-foreground">
                  告诉你哪里有止损、强平、追单和波动，不直接给方向。
                </p>
              </div>

              <div className="rounded-xl border border-card-border bg-background/70 p-4">
                <h3 className="mb-2 text-sm font-semibold">
                  2. 扫后反应定方向
                </h3>
                <p className="text-sm text-muted-foreground">
                  扫完后是快速收回，还是站稳新区间，才是关键。
                </p>
              </div>

              <div className="rounded-xl border border-card-border bg-background/70 p-4">
                <h3 className="mb-2 text-sm font-semibold">
                  3. 指标验证定质量
                </h3>
                <p className="text-sm text-muted-foreground">
                  用 OI、CVD、Delta、Funding 和清算区判断突破或反转质量。
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-brand/20 bg-background p-4">
              <p className="text-sm leading-7">
                执行顺序：
                <span className="font-medium text-brand">
                  {" "}
                  识别 BSL / SSL → 等待价格扫流动性 → 判断 Reject 或 Accept →
                  用订单流验证 → 决定做多、做空或观望。
                </span>
              </p>
            </div>
          </CardContent>
        </Card>

        <Separator className="my-10" />

        <section className="space-y-6">
          <div>
            <Badge variant="secondary" className="mb-3">
              Trader's Lens
            </Badge>
            <h2 className="text-2xl font-semibold">
              扫掉 BSL 后，市场只是在回答一个问题
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
              价格扫到 BSL，会触发空头止损买入、空头强平买入和突破追多买入。
              这些买单出现之后，交易员真正观察的是：
              <span className="font-medium text-foreground">
                这么多买单，价格到底推不推得动？
              </span>
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-destructive/30 bg-destructive/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <RotateCcw className="h-5 w-5" />
                  Sweep and Reject
                </CardTitle>
                <CardDescription>扫 BSL 后被拒绝，偏假突破</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <p>
                  价格扫掉 BSL 后快速跌回前高下方，说明上方买单被触发，
                  但市场没有接受更高价格。追多的人和被迫止损的空头提供了流动性，
                  另一侧资金可能正在卖出或吸收。
                </p>
                <div className="rounded-xl border border-destructive/20 bg-muted p-4 font-mono text-xs">
                  <div>突破前高，扫掉 BSL</div>
                  <div>主动买盘很多 / 突破追多进场</div>
                  <div>但价格无法继续上行</div>
                  <div className="text-destructive">快速跌回前高下方</div>
                  <div className="font-medium text-destructive">
                    → 偏假突破，等待结构转弱后找空
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-chart-2/30 bg-chart-2/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-chart-2">
                  <TrendingUp className="h-5 w-5" />
                  Sweep and Accept
                </CardTitle>
                <CardDescription>扫 BSL 后被接受，偏真突破</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <p>
                  价格扫掉 BSL 后没有跌回区间，而是在前高上方震荡、回踩守住，
                  说明市场接受了更高价格。原来的前高不再只是压力，
                  可能开始变成新的支撑。
                </p>
                <div className="rounded-xl border border-chart-2/20 bg-muted p-4 font-mono text-xs">
                  <div>突破前高，扫掉 BSL</div>
                  <div>价格没有快速跌回区间</div>
                  <div>回踩前高附近被买回</div>
                  <div>OI / CVD 继续支持</div>
                  <div className="font-medium text-chart-2">
                    → 偏真突破，等待回踩确认后找多
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-10" />

        <section className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-brand" />
                为什么原 BSL 可能变压力，也可能变支撑？
              </CardTitle>
              <CardDescription>
                关键不是 BSL 本身，而是市场是否接受 BSL 上方的价格。
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                如果扫 BSL 后快速跌回区间，说明上方价格被拒绝。 这时原 BSL
                区域更像压力，后续反抽站不上，通常偏空。
              </p>

              <p>
                如果扫 BSL 后站稳，并且回踩不破，说明上方价格被接受。 这时原 BSL
                区域可能发生支阻互换，从压力变成支撑。
              </p>

              <div className="rounded-xl border border-card-border bg-muted p-4 font-mono text-xs">
                <div>BSL 被扫</div>
                <div>↓</div>
                <div>跌回区间 = 价格拒绝 = 原 BSL 偏压力</div>
                <div>站稳上方 = 价格接受 = 原 BSL 偏支撑</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Waves className="h-5 w-5 text-brand" />
                趋势和震荡的区别
              </CardTitle>
              <CardDescription>
                市场不是一直扫完反转，也不是一直扫完延续。
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                在震荡行情里，价格经常扫上方 BSL 后跌回区间，再扫下方 SSL
                后收回。 这就是双边流动性收割。
              </p>

              <p>
                在趋势行情里，价格扫掉一层 BSL 后会接受更高价格，
                然后制造新的高点和新的 BSL。趋势不是没有清扫，
                而是不断扫同方向流动性并接受新区间。
              </p>

              <div className="rounded-xl border border-card-border bg-muted p-4 font-mono text-xs">
                <div>震荡：扫 BSL → 跌回区间；扫 SSL → 收回区间</div>
                <div>趋势：扫 BSL → 站稳 → 回踩守住 → 继续上行</div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-10" />

        <Card className="border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-brand" />扫 BSL 后的验证框架
            </CardTitle>
            <CardDescription>
              不要只看“破没破前高”，要看破前高之后的订单流质量。
            </CardDescription>
          </CardHeader>

          <CardContent className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-card-border bg-muted p-4">
              <h3 className="mb-2 flex items-center gap-2 font-semibold">
                <Gauge className="h-4 w-4 text-brand" />
                1. Delta / CVD：买盘有没有效果？
              </h3>
              <p className="text-sm text-muted-foreground">
                如果扫 BSL 时 Delta 很正、CVD 上升，但价格无法继续上涨，
                说明主动买盘可能被吸收，偏假突破。如果 CVD 与价格同步继续上行，
                说明买盘推动有效。
              </p>
            </div>

            <div className="rounded-xl border border-card-border bg-muted p-4">
              <h3 className="mb-2 flex items-center gap-2 font-semibold">
                <Activity className="h-4 w-4 text-chart-2" />
                2. OI：新仓进入还是旧仓止损？
              </h3>
              <p className="text-sm text-muted-foreground">
                扫 BSL 后 OI 下降，可能主要是空头回补推动； OI
                温和上升且价格站稳，说明有新仓跟随，突破质量更好。
              </p>
            </div>

            <div className="rounded-xl border border-card-border bg-muted p-4">
              <h3 className="mb-2 flex items-center gap-2 font-semibold">
                <Flame className="h-4 w-4 text-destructive" />
                3. Funding：方向是否过度拥挤？
              </h3>
              <p className="text-sm text-muted-foreground">
                Funding 极高时，多头拥挤，扫 BSL 后更容易出现诱多回落。 Funding
                不极端时，突破延续的压力相对小一些。
              </p>
            </div>

            <div className="rounded-xl border border-card-border bg-muted p-4">
              <h3 className="mb-2 flex items-center gap-2 font-semibold">
                <ShieldAlert className="h-4 w-4 text-chart-3" />
                4. Liquidation Map：清算堆是否被精确打到？
              </h3>
              <p className="text-sm text-muted-foreground">
                如果价格刚好打到上方清算密集区后快速回落，偏拿流动性。
                如果清算区被打穿后还能站稳，说明市场可能接受更高价格。
              </p>
            </div>
          </CardContent>
        </Card>

        <Separator className="my-10" />

        <section className="grid gap-6 md:grid-cols-3">
          <Card className="border-destructive/30 bg-destructive/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <TrendingDown className="h-5 w-5" />
                偏空模型
              </CardTitle>
              <CardDescription>扫 BSL 后 Rejection</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>条件组合：</p>
              <ul className="ml-5 list-disc space-y-2">
                <li>扫前高后快速跌回区间</li>
                <li>Delta 很正但价格推不动</li>
                <li>OI 上升后价格回落，追多可能被套</li>
                <li>回踩原 BSL 区域站不上</li>
              </ul>
              <p className="font-medium text-destructive">
                思路：等结构转弱后找空，止损通常放在扫高点上方。
              </p>
            </CardContent>
          </Card>

          <Card className="border-chart-2/30 bg-chart-2/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-chart-2">
                <TrendingUp className="h-5 w-5" />
                偏多模型
              </CardTitle>
              <CardDescription>扫 BSL 后 Acceptance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>条件组合：</p>
              <ul className="ml-5 list-disc space-y-2">
                <li>扫前高后没有跌回区间</li>
                <li>回踩原 BSL 附近守住</li>
                <li>OI 温和增加，CVD 继续上行</li>
                <li>Funding 没有极端过热</li>
              </ul>
              <p className="font-medium text-chart-2">
                思路：等回踩确认后找多，止损通常放在回踩结构低点下方。
              </p>
            </CardContent>
          </Card>

          <Card className="border-chart-3/30 bg-chart-3/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-chart-3">
                <AlertTriangle className="h-5 w-5" />
                观望模型
              </CardTitle>
              <CardDescription>扫后没有清晰结论</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>常见情况：</p>
              <ul className="ml-5 list-disc space-y-2">
                <li>扫后横盘，既不收回也不延续</li>
                <li>OI / CVD 没有明显方向</li>
                <li>Funding 不极端，清算区也不明显</li>
                <li>价格处于多周期均线中间</li>
              </ul>
              <p className="font-medium text-chart-3">
                思路：不强行解释，等待二次确认或更清晰的位置。
              </p>
            </CardContent>
          </Card>
        </section>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-brand" />
              最终决策表
            </CardTitle>
            <CardDescription>
              以 BSL 为例，快速判断偏空、偏多还是观望。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            <div className="overflow-hidden rounded-xl border border-card-border">
              <div className="grid grid-cols-3 bg-muted p-3 text-sm font-medium">
                <div>现象</div>
                <div>市场含义</div>
                <div>交易倾向</div>
              </div>

              <div className="grid grid-cols-3 border-t border-card-border p-3 text-sm">
                <div>接近 BSL，但还没扫</div>
                <div className="text-muted-foreground">上方有流动性吸引</div>
                <div className="font-medium text-chart-3">等待，不提前猜</div>
              </div>

              <div className="grid grid-cols-3 border-t border-card-border p-3 text-sm">
                <div>扫 BSL 后快速跌回区间</div>
                <div className="text-muted-foreground">高位价格被拒绝</div>
                <div className="font-medium text-destructive">
                  等结构转弱后找空
                </div>
              </div>

              <div className="grid grid-cols-3 border-t border-card-border p-3 text-sm">
                <div>扫 BSL 后站稳前高上方</div>
                <div className="text-muted-foreground">市场接受更高价格</div>
                <div className="font-medium text-chart-2">回踩确认后找多</div>
              </div>

              <div className="grid grid-cols-3 border-t border-card-border p-3 text-sm">
                <div>Delta 很正但价格不涨</div>
                <div className="text-muted-foreground">买盘可能被吸收</div>
                <div className="font-medium text-destructive">警惕假突破</div>
              </div>

              <div className="grid grid-cols-3 border-t border-card-border p-3 text-sm">
                <div>价格站稳，OI / CVD 同步上升</div>
                <div className="text-muted-foreground">
                  新资金和主动买盘跟随
                </div>
                <div className="font-medium text-chart-2">偏突破延续</div>
              </div>

              <div className="grid grid-cols-3 border-t border-card-border p-3 text-sm">
                <div>扫后横盘，指标无方向</div>
                <div className="text-muted-foreground">市场尚未表态</div>
                <div className="font-medium text-chart-3">观望</div>
              </div>
            </div>

            <Separator />

            <div className="rounded-xl border border-brand/20 bg-brand/5 p-4">
              <p className="text-sm leading-7">
                最实用的一句话：
                <span className="font-medium text-brand">
                  {" "}
                  BSL / SSL 解决的是位置问题，扫后反应解决的是方向问题，
                  指标验证解决的是质量问题。不要把 BSL 当成做空按钮， 也不要把
                  SSL 当成做多按钮。
                </span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
