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
  Boxes,
  CandlestickChart,
  CheckCircle2,
  CircleDot,
  Crosshair,
  Eye,
  Layers,
  LineChart,
  MoveRight,
  ShieldAlert,
  Target,
  TrendingDown,
  TrendingUp,
  Zap,
} from "lucide-react";

export default function SmcIctPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <section className="mb-10 space-y-4 motion-safe:animate-fadeSlide">
          <Badge variant="outline" className="border-brand/40 text-brand">
            SMC / ICT Trading Framework
          </Badge>

          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            SMC 与 ICT：专业交易员如何理解“聪明钱”和流动性？
          </h1>

          <p className="max-w-3xl text-muted-foreground">
            SMC 和 ICT 不是简单的“画几个 order block 然后进场”。
            在专业交易员视角里，它们更像是一套理解价格行为的语言：
            价格为什么去扫某个高点或低点？扫完之后有没有收回？
            市场结构有没有转换？真正可交易的机会，来自流动性被触发后的确认。
          </p>
        </section>

        <Card className="border-card-border bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CandlestickChart className="h-5 w-5 text-brand" />
              核心理解
            </CardTitle>
            <CardDescription>
              SMC / ICT 的核心不是预测方向，而是理解价格如何围绕流动性运行。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <p>
              很多新手学习 SMC / ICT 后，会把它理解成一套固定形态： 看到 Order
              Block 就做多，看到 FVG 就等回补，看到扫流动性就反向。
              但这不是专业交易员真正的用法。
            </p>

            <p className="text-muted-foreground">
              更成熟的理解是：
              <span className="font-medium text-brand">
                {" "}
                SMC / ICT 是用来解释市场如何寻找流动性、触发止损、
                制造失衡、完成结构转换的一套框架。
              </span>
              它的重点不是“图形本身”，而是图形背后的交易行为。
            </p>

            <div className="rounded-xl border border-brand/20 bg-brand/5 p-4">
              <h3 className="mb-3 font-semibold text-brand">一句话理解</h3>

              <p className="text-sm text-muted-foreground">
                SMC / ICT 交易员不是单纯问“这里会不会涨”，而是问：
                价格刚才扫了谁的止损？扫完以后有没有失败？如果失败，
                有没有形成结构转换？如果有，哪里是风险最小的进场区域？
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="h-5 w-5 text-chart-3" />
              SMC 和 ICT 有什么区别？
            </CardTitle>
            <CardDescription>
              两者经常被放在一起讲，但严格来说不是完全一样的东西。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-brand/20 bg-muted p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-brand">
                  <Boxes className="h-4 w-4" />
                  SMC
                </h3>

                <p className="text-sm text-muted-foreground">
                  SMC 是 Smart Money Concepts，中文可以理解为“聪明钱概念”。
                  它更泛化，主要关注流动性、订单块、结构突破、供需失衡、
                  高低点扫荡等概念。
                </p>
              </div>

              <div className="rounded-xl border border-chart-2/20 bg-muted p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-chart-2">
                  <Crosshair className="h-4 w-4" />
                  ICT
                </h3>

                <p className="text-sm text-muted-foreground">
                  ICT 是更具体的一套交易教学体系，里面包含 Kill Zone、FVG、
                  Liquidity、Market Structure Shift、PD Array、Premium /
                  Discount 等更细的交易语言。
                </p>
              </div>
            </div>

            <Separator />

            <p className="text-muted-foreground">
              你可以简单理解为：SMC 是一个更大的概念集合，ICT 是其中更具体、
              更系统化的一种讲法。实际交易中，很多人会把 SMC / ICT 混合使用。
            </p>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CircleDot className="h-5 w-5 text-brand" />
              SMC / ICT 真正关注的四件事
            </CardTitle>
            <CardDescription>
              不要先背术语，先理解它们解决的核心问题。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-brand/20 bg-muted p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-brand">
                  <Target className="h-4 w-4" />
                  1. 流动性在哪里？
                </h3>

                <p className="text-sm text-muted-foreground">
                  前高上方、前低下方、区间高低点、明显支撑压力附近，
                  都可能聚集止损单、突破单和清算单。
                </p>
              </div>

              <div className="rounded-xl border border-chart-2/20 bg-muted p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-chart-2">
                  <Zap className="h-4 w-4" />
                  2. 价格有没有扫流动性？
                </h3>

                <p className="text-sm text-muted-foreground">
                  价格刺破前高或前低，触发止损和追单，然后快速收回。 这通常是
                  SMC / ICT 交易员非常关注的行为。
                </p>
              </div>

              <div className="rounded-xl border border-chart-3/20 bg-muted p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-chart-3">
                  <LineChart className="h-4 w-4" />
                  3. 结构有没有转换？
                </h3>

                <p className="text-sm text-muted-foreground">
                  扫流动性本身不够，交易员还会观察是否出现 BOS、CHoCH、 MSS
                  等结构变化，证明原来的方向开始失败。
                </p>
              </div>

              <div className="rounded-xl border border-destructive/20 bg-muted p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-destructive">
                  <ShieldAlert className="h-4 w-4" />
                  4. 失效位在哪里？
                </h3>

                <p className="text-sm text-muted-foreground">
                  专业交易员不会只找进场点，也会先定义哪里错了。 如果 sweep
                  低点后做多，通常影线低点或结构低点就是关键失效位。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card className="border-chart-2/30 bg-chart-2/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-chart-2">
                <ArrowUp className="h-5 w-5" />
                偏多模型
              </CardTitle>
              <CardDescription>
                扫下方流动性后收回，卖盘无法延续。
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
              <p>SMC / ICT 偏多模型通常不是直接抄底，而是等待确认：</p>

              <div className="rounded-xl border border-chart-2/20 bg-muted p-4 font-mono text-sm">
                <div>价格下跌到前低附近</div>
                <div className="text-destructive">↓ 跌破前低，扫 SSL</div>
                <div>触发多头止损和突破空单</div>
                <div className="text-chart-2">快速收回前低上方</div>
                <div>出现强反弹或 displacement</div>
                <div>突破短期 lower high</div>
                <div>回踩 FVG / Order Block</div>
                <div className="font-medium text-chart-2">观察右侧做多机会</div>
              </div>

              <p className="text-muted-foreground">
                这里真正重要的不是“跌破前低”，而是跌破之后没有继续下跌。
                空头获得了位置，但没有获得延续，这才是多头开始值得观察的原因。
              </p>
            </CardContent>
          </Card>

          <Card className="border-destructive/30 bg-destructive/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <ArrowDown className="h-5 w-5" />
                偏空模型
              </CardTitle>
              <CardDescription>
                扫上方流动性后收回，买盘无法延续。
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
              <p>偏空模型通常发生在价格扫前高之后：</p>

              <div className="rounded-xl border border-destructive/20 bg-muted p-4 font-mono text-sm">
                <div>价格上涨到前高附近</div>
                <div className="text-chart-2">↑ 突破前高，扫 BSL</div>
                <div>触发空头止损和突破多单</div>
                <div className="text-destructive">快速跌回前高下方</div>
                <div>出现强下跌或 displacement</div>
                <div>跌破短期 higher low</div>
                <div>回踩 FVG / Order Block</div>
                <div className="font-medium text-destructive">
                  观察右侧做空机会
                </div>
              </div>

              <p className="text-muted-foreground">
                这里的关键是：价格突破前高后，多头没有能力继续推升。
                如果突破变成假突破，前高上方反而可能成为诱多区。
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-brand" />
              实战模型：Liquidity Sweep → MSS → FVG / OB Entry
            </CardTitle>
            <CardDescription>
              专业交易员不会交易“术语”，而是交易完整的价格行为链条。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            <div className="rounded-xl border border-chart-2/20 bg-chart-2/5 p-4">
              <h3 className="mb-3 font-semibold text-chart-2">
                做多流程：扫 SSL 后右侧确认
              </h3>

              <div className="mb-3 rounded-lg bg-background p-3 font-mono text-sm">
                <div>1. 大级别来到支撑区 / Discount 区域</div>
                <div className="text-destructive">
                  2. 小级别跌破前低，扫 SSL
                </div>
                <div>3. 跌破后没有继续放量下跌</div>
                <div className="text-chart-2">4. 快速收回前低上方</div>
                <div>5. 出现向上的 displacement</div>
                <div>6. 突破最近 lower high，形成 MSS / CHoCH</div>
                <div>7. 回踩 FVG 或 bullish order block</div>
                <div>8. 止损放在 sweep low 下方</div>
                <div className="font-medium text-chart-2">右侧做多模型成立</div>
              </div>

              <p className="text-sm text-muted-foreground">
                这个模型的重点是“先扫，再收回，再转换结构”。
                如果只有扫低点，但没有收回和结构转换，那只能说明价格波动大，
                不能说明多头已经夺回主动权。
              </p>
            </div>

            <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-4">
              <h3 className="mb-3 font-semibold text-destructive">
                做空流程：扫 BSL 后右侧确认
              </h3>

              <div className="mb-3 rounded-lg bg-background p-3 font-mono text-sm">
                <div>1. 大级别来到压力区 / Premium 区域</div>
                <div className="text-chart-2">2. 小级别突破前高，扫 BSL</div>
                <div>3. 突破后没有继续放量上涨</div>
                <div className="text-destructive">4. 快速跌回前高下方</div>
                <div>5. 出现向下的 displacement</div>
                <div>6. 跌破最近 higher low，形成 MSS / CHoCH</div>
                <div>7. 回踩 FVG 或 bearish order block</div>
                <div>8. 止损放在 sweep high 上方</div>
                <div className="font-medium text-destructive">
                  右侧做空模型成立
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                假突破前高后，如果价格迅速跌回区间，并且打破短期上升结构，
                说明突破买盘可能被套住。这时回踩失败区域，才有交易价值。
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Crosshair className="h-5 w-5 text-chart-3" />
              重要概念：不要只背名字，要理解用途
            </CardTitle>
            <CardDescription>
              SMC / ICT 的术语很多，但核心用途都围绕流动性和结构。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-brand/20 bg-muted p-4">
                <h3 className="mb-2 font-semibold text-brand">Liquidity</h3>
                <p className="text-sm text-muted-foreground">
                  流动性通常存在于明显高低点附近。前高上方有空头止损和突破多单；
                  前低下方有多头止损和突破空单。
                </p>
              </div>

              <div className="rounded-xl border border-brand/20 bg-muted p-4">
                <h3 className="mb-2 font-semibold text-brand">Sweep</h3>
                <p className="text-sm text-muted-foreground">
                  价格刺破明显高低点，触发止损和追单后重新收回。 Sweep
                  本身不是信号，Sweep 后的反应才是重点。
                </p>
              </div>

              <div className="rounded-xl border border-chart-2/20 bg-muted p-4">
                <h3 className="mb-2 font-semibold text-chart-2">FVG</h3>
                <p className="text-sm text-muted-foreground">
                  FVG 可以理解为快速推动后留下的失衡区域。
                  交易员常把它作为回踩观察区，而不是无脑挂单区。
                </p>
              </div>

              <div className="rounded-xl border border-chart-2/20 bg-muted p-4">
                <h3 className="mb-2 font-semibold text-chart-2">Order Block</h3>
                <p className="text-sm text-muted-foreground">
                  Order Block 通常被理解为推动行情前的关键订单区域。
                  但它必须结合结构、位置和反应，不能单独使用。
                </p>
              </div>

              <div className="rounded-xl border border-chart-3/20 bg-muted p-4">
                <h3 className="mb-2 font-semibold text-chart-3">MSS / CHoCH</h3>
                <p className="text-sm text-muted-foreground">
                  Market Structure Shift / Change of Character
                  代表短期结构可能转换。
                  它是从“扫流动性”过渡到“可以交易”的重要确认。
                </p>
              </div>

              <div className="rounded-xl border border-destructive/20 bg-muted p-4">
                <h3 className="mb-2 font-semibold text-destructive">
                  Premium / Discount
                </h3>
                <p className="text-sm text-muted-foreground">
                  在一个价格区间里，上半区偏 Premium，下半区偏 Discount。
                  专业交易员通常不愿在高估区追多，也不愿在低估区追空。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-brand" />
              SMC / ICT 和长下影线的关系
            </CardTitle>
            <CardDescription>
              你之前学的长下影线，本质上可以放进 SMC / ICT 的流动性框架里。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              长下影线不是单纯的 K 线形态。放到 SMC / ICT 视角里，
              它经常代表价格向下扫掉 sell-side liquidity 后，
              下方卖盘没有获得延续，价格重新收回。
            </p>

            <div className="rounded-xl border border-brand/20 bg-brand/5 p-4">
              <h3 className="mb-3 font-semibold text-brand">
                长下影线的 SMC / ICT 解释
              </h3>

              <div className="rounded-lg bg-background p-3 font-mono text-sm">
                <div>跌破前低</div>
                <div className="text-destructive">扫 sell-side liquidity</div>
                <div>触发止损 / 清算 / 恐慌卖出</div>
                <div className="text-chart-2">价格快速收回</div>
                <div>卖盘无法延续</div>
                <div>后续突破 lower high</div>
                <div className="font-medium text-chart-2">
                  从 K 线承接变成结构确认
                </div>
              </div>
            </div>

            <p className="text-muted-foreground">
              所以你之前学的 Sweep Reclaim，其实就是 SMC / ICT
              里面非常重要的一个实战模型。 它比单纯看 Order Block 或 FVG
              更接近真实交易，因为它强调右侧确认。
            </p>
          </CardContent>
        </Card>

        <Card className="mt-8 border-brand/20 bg-brand/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-brand">
              <CheckCircle2 className="h-5 w-5" />
              有效确认清单
            </CardTitle>
            <CardDescription>
              一个 SMC / ICT 交易机会，至少要通过这些检查。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-3">
            <p>
              <span className="font-medium">确认 1：</span>
              是否出现在大级别关键区域，而不是随机位置？
            </p>

            <p>
              <span className="font-medium">确认 2：</span>
              是否扫掉了明显的前高、前低、BSL 或 SSL？
            </p>

            <p>
              <span className="font-medium">确认 3：</span>
              扫流动性后是否快速收回，而不是继续顺势延续？
            </p>

            <p>
              <span className="font-medium">确认 4：</span>
              是否出现明显 displacement，说明反向力量足够强？
            </p>

            <p>
              <span className="font-medium">确认 5：</span>
              是否突破最近的小结构，形成 MSS / CHoCH？
            </p>

            <p>
              <span className="font-medium">确认 6：</span>
              回踩 FVG / Order Block 时，价格是否守住关键失效位？
            </p>

            <p>
              <span className="font-medium">确认 7：</span>
              是否有成交量、Delta、CVD、OI 或清算数据辅助确认？
            </p>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-chart-3" />和 Delta / CVD / OI /
              清算热力图怎么组合？
            </CardTitle>
            <CardDescription>
              SMC / ICT 更偏价格行为，衍生品数据可以帮助判断这个行为是否真实。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-4">
              <div className="rounded-xl border border-brand/20 bg-muted p-4">
                <h3 className="mb-2 font-semibold text-brand">Delta</h3>

                <p className="text-sm text-muted-foreground">
                  扫低点时 Delta
                  极端为负，但价格不继续跌，可能代表主动卖盘被吸收。
                </p>
              </div>

              <div className="rounded-xl border border-brand/20 bg-muted p-4">
                <h3 className="mb-2 font-semibold text-brand">CVD</h3>

                <p className="text-sm text-muted-foreground">
                  价格创新低但 CVD 没有同步创新低，可能说明卖盘动能开始衰竭。
                </p>
              </div>

              <div className="rounded-xl border border-brand/20 bg-muted p-4">
                <h3 className="mb-2 font-semibold text-brand">OI</h3>

                <p className="text-sm text-muted-foreground">
                  下杀时 OI 快速下降，可能是多头被清算；收回后结构更容易健康。
                </p>
              </div>

              <div className="rounded-xl border border-brand/20 bg-muted p-4">
                <h3 className="mb-2 font-semibold text-brand">清算热力图</h3>

                <p className="text-sm text-muted-foreground">
                  可以用来观察价格附近哪里有潜在强制流动性，但不能单独决定方向。
                </p>
              </div>
            </div>

            <p className="text-muted-foreground">
              更完整的交易逻辑是：先用 SMC / ICT
              找价格行为，再用订单流和衍生品数据验证。
              如果两者共振，交易质量通常会比单独看一个指标更高。
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
              <span className="font-medium">误区 1：</span>
              看到 Order Block 就认为一定会反弹。
            </p>

            <p>
              <span className="font-medium">误区 2：</span>
              看到 FVG 就认为价格一定会回补。
            </p>

            <p>
              <span className="font-medium">误区 3：</span>
              扫了前低就马上做多，不等收回和结构转换。
            </p>

            <p>
              <span className="font-medium">误区 4：</span>
              不区分大级别方向，在明显下跌趋势里频繁抄底。
            </p>

            <p>
              <span className="font-medium">误区 5：</span>
              把所有图形都解释成“主力行为”，但没有明确失效条件。
            </p>

            <p className="text-muted-foreground">
              更专业的理解是：SMC / ICT 不是让你相信“主力一定会这样做”，
              而是帮助你建立一套观察流动性、结构和风险的框架。
            </p>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingDown className="h-5 w-5 text-destructive" />
              什么时候这个模型失效？
            </CardTitle>
            <CardDescription>
              没有失效条件的 SMC / ICT，很容易变成事后解释。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="rounded-xl border border-destructive/20 bg-muted p-4">
              <h3 className="mb-3 font-semibold text-destructive">
                做多模型失效
              </h3>

              <div className="rounded-lg bg-background p-3 font-mono text-sm">
                <div>价格扫低点后没有快速收回</div>
                <div>反弹无法突破 lower high</div>
                <div>没有形成 MSS / CHoCH</div>
                <div>回踩时跌破 sweep low</div>
                <div className="font-medium text-destructive">
                  放弃该做多模型
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-destructive/20 bg-muted p-4">
              <h3 className="mb-3 font-semibold text-destructive">
                做空模型失效
              </h3>

              <div className="rounded-lg bg-background p-3 font-mono text-sm">
                <div>价格扫前高后没有跌回区间</div>
                <div>回落无法跌破 higher low</div>
                <div>没有形成 MSS / CHoCH</div>
                <div>回踩后重新突破 sweep high</div>
                <div className="font-medium text-destructive">
                  放弃该做空模型
                </div>
              </div>
            </div>

            <p className="text-muted-foreground">
              对交易员来说，失效条件比入场理由更重要。 因为 SMC / ICT
              本身有很强的解释空间，如果没有明确的错误标准，
              很容易把失败交易继续解释成“还没走完”。
            </p>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MoveRight className="h-5 w-5 text-chart-3" />
              一个完整的交易员思考流程
            </CardTitle>
            <CardDescription>
              从大级别位置，到小级别进场，再到风险控制。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="rounded-xl border border-brand/20 bg-brand/5 p-4">
              <div className="rounded-lg bg-background p-3 font-mono text-sm">
                <div>1. 大级别：价格在 Premium 还是 Discount？</div>
                <div>2. 位置：附近有没有前高、前低、区间高低点？</div>
                <div>3. 流动性：价格有没有扫 BSL / SSL？</div>
                <div>4. 反应：扫完后是继续延续，还是快速收回？</div>
                <div>5. 结构：有没有 MSS / CHoCH？</div>
                <div>6. 回踩：有没有 FVG / OB 可以观察？</div>
                <div>7. 风控：止损放哪里？错了以后如何退出？</div>
                <div>8. 辅助：Delta / CVD / OI 是否支持这个判断？</div>
              </div>
            </div>

            <p className="text-muted-foreground">
              这个流程比单独背 SMC 术语更重要。真正的交易不是“看到概念就进场”，
              而是多个条件逐步通过筛选，最后才形成一个风险可控的交易计划。
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
              SMC / ICT 的核心价值不是告诉你哪里一定涨跌，而是帮助你理解：
              <span className="font-medium text-brand">
                {" "}
                价格在哪里寻找流动性，扫完之后是否失败，结构是否发生转换，
                以及哪里可以用更小风险参与右侧确认。
              </span>
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
