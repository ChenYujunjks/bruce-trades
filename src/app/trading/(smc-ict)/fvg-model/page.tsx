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
  ArrowDown,
  ArrowUp,
  BadgeAlert,
  CandlestickChart,
  CheckCircle2,
  Crosshair,
  Eye,
  ShieldAlert,
  TrendingDown,
  TrendingUp,
  XCircle,
} from "lucide-react";

export default function FVGModelPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <section className="mb-10 space-y-4 motion-safe:animate-fadeSlide">
          <Badge variant="outline" className="border-brand/40 text-brand">
            ICT Fair Value Gap Model
          </Badge>

          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            Bullish / Bearish FVG：ICT 里面真正怎么用？
          </h1>

          <p className="max-w-3xl text-muted-foreground">
            FVG 不是看到就进场的信号。它在 ICT 里面更像是一个
            回踩入场区域，用来配合流动性清扫、市场结构转变和趋势延续。
            专业交易员不会交易“FVG 本身”，而是交易 FVG 出现的位置和背景。
          </p>
        </section>

        <Card className="border-card-border bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CandlestickChart className="h-5 w-5 text-brand" />
              核心理解
            </CardTitle>
            <CardDescription>
              FVG = 价格不平衡区域；ICT 用法 = 等价格回到不平衡区域重新定价。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <p>
              FVG 的本质是价格在短时间内快速推动，导致中间某些价格没有充分成交。
              所以它不是普通支撑阻力，而是一个价格可能回补、重新定价的区域。
            </p>

            <p className="text-muted-foreground">
              ICT 里面真正有价值的 FVG，通常不是单独出现的，而是出现在：
              <span className="font-medium text-brand">
                {" "}
                扫流动性之后、市场结构转变之后，或者趋势行情的强势推动之后。
              </span>
            </p>
          </CardContent>
        </Card>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card className="border-chart-2/30 bg-chart-2/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-chart-2">
                <ArrowUp className="h-5 w-5" />
                Bullish FVG
              </CardTitle>
              <CardDescription>
                多头推动留下的不平衡区域，常用于回踩做多。
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
              <p>标准理解：</p>

              <div className="rounded-xl border border-chart-2/20 bg-muted p-4 font-mono text-sm">
                <div>第 1 根 K 线 high</div>
                <div className="text-chart-2">到</div>
                <div>第 3 根 K 线 low</div>
                <div className="font-medium text-chart-2">
                  中间区域 = Bullish FVG
                </div>
              </div>

              <p className="text-muted-foreground">
                Bullish FVG 通常代表买方强势推动。真正的用法不是看到它就追多，
                而是等价格回踩这个未充分成交的区域，观察买方是否继续防守。
                如果买方防守成功，说明刚才的向上 displacement 可能是真实有效的。
              </p>
            </CardContent>
          </Card>

          <Card className="border-destructive/30 bg-destructive/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <ArrowDown className="h-5 w-5" />
                Bearish FVG
              </CardTitle>
              <CardDescription>
                空头推动留下的不平衡区域，常用于反弹做空。
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
              <p>标准理解：</p>

              <div className="rounded-xl border border-destructive/20 bg-muted p-4 font-mono text-sm">
                <div>第 1 根 K 线 low</div>
                <div className="text-destructive">到</div>
                <div>第 3 根 K 线 high</div>
                <div className="font-medium text-destructive">
                  中间区域 = Bearish FVG
                </div>
              </div>

              <p className="text-muted-foreground">
                Bearish FVG 通常代表卖方强势推动。真正的用法不是看到它就追空，
                而是等价格反弹回这个未充分成交的区域，观察卖方是否继续压制。
                如果卖方压制成功，说明刚才的向下 displacement 可能是真实有效的。
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-brand" />
              为什么回踩 FVG 会有交易价值？
            </CardTitle>
            <CardDescription>
              FVG 不是神奇支撑，而是测试上一轮强推动是否真实有效的区域。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            <p className="text-muted-foreground">
              Bullish FVG 形成时，说明价格曾经快速向上穿过这一段。
              这个区域没有充分成交，代表当时买方推动很强，卖方没有能力在这里形成有效阻力。
              所以后面价格回踩 FVG，本质上是在测试：刚才那波买盘是不是真的强。
            </p>

            <div className="rounded-xl border border-chart-2/20 bg-chart-2/5 p-4">
              <h3 className="mb-3 font-semibold text-chart-2">
                做多视角：谁在被迫？
              </h3>

              <div className="mb-3 rounded-lg bg-background p-3 font-mono text-sm">
                <div>价格先下扫 SSL / 下方清算区</div>
                <div className="text-destructive">追空的人进场</div>
                <div>价格没有继续跌，反而快速收回</div>
                <div className="text-chart-2">空头开始被套</div>
                <div>价格突破短期结构，形成 Bullish FVG</div>
                <div className="text-chart-2">空头止损 = 买入平仓</div>
                <div>错过第一波的多头等待回踩</div>
                <div className="font-medium text-chart-2">
                  回踩 FVG，如果买方防守成功，才观察做多
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                所以 Bullish FVG 回踩做多，不是因为“这里有缺口所以一定涨”，
                而是因为这里可能同时出现三类买盘：空头被迫回补、错过上涨的多头进场、
                原有多头在强势区域加仓。
              </p>
            </div>

            <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-4">
              <h3 className="mb-3 font-semibold text-destructive">
                做空视角：谁在被迫？
              </h3>

              <div className="mb-3 rounded-lg bg-background p-3 font-mono text-sm">
                <div>价格先上扫 BSL / 上方清算区</div>
                <div className="text-chart-2">追多的人进场</div>
                <div>价格没有继续涨，反而快速跌回</div>
                <div className="text-destructive">多头开始被套</div>
                <div>价格跌破短期结构，形成 Bearish FVG</div>
                <div className="text-destructive">多头止损 = 卖出平仓</div>
                <div>错过第一波下跌的空头等待反弹</div>
                <div className="font-medium text-destructive">
                  反弹 FVG，如果卖方压制成功，才观察做空
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                Bearish FVG 反弹做空，本质是上方突破失败后，多头开始被迫退出。
                价格反弹回
                FVG，如果卖方继续压制，就说明上方价格仍然不被市场接受。
              </p>
            </div>

            <Separator />

            <div className="rounded-xl border border-brand/20 bg-brand/5 p-4">
              <h3 className="mb-3 font-semibold text-brand">一单的核心假设</h3>

              <p className="text-sm text-muted-foreground">
                做多时，你真正交易的不是 FVG，而是：刚才的向上 displacement
                如果是真实买盘，那么价格回到 FVG 时，买方应该防守。
                防守成功，才有做多价值；防守失败，FVG 就失效。
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-destructive/20 bg-destructive/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <BadgeAlert className="h-5 w-5" />
              为什么 FVG 不能单独用？
            </CardTitle>
            <CardDescription>
              单独看 FVG，噪音太多，尤其是在低周期。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-3">
            <p>
              FVG 在任何强一点的 K 线推动中都可能出现。 如果只要看到 FVG
              就做单，很容易变成过度交易。
            </p>

            <div className="rounded-xl border border-destructive/20 bg-muted p-4">
              <h3 className="mb-3 font-semibold text-destructive">
                单独使用 FVG 的问题
              </h3>

              <div className="rounded-lg bg-background p-3 font-mono text-sm">
                <div>低周期 FVG 数量太多</div>
                <div>很多 FVG 没有流动性背景</div>
                <div>很多 FVG 没有结构转变</div>
                <div>趋势强的时候逆势 FVG 容易被直接打穿</div>
                <div className="font-medium text-destructive">
                  所以 FVG 不能作为单独开仓理由
                </div>
              </div>
            </div>

            <p className="text-muted-foreground">
              更专业的理解是：FVG 是执行工具，不是方向工具。
              方向要从市场结构、流动性位置、扫盘后的反应里面判断。
            </p>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Crosshair className="h-5 w-5 text-brand" />
              清算图扫流动性后，怎么用 FVG？
            </CardTitle>
            <CardDescription>
              清算图负责告诉你哪里可能被扫，FVG 负责告诉你扫完后哪里可以等回踩。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            <p className="text-muted-foreground">
              清算热力图上的亮区，可以理解成潜在的杠杆清算区域。
              但价格扫到亮区之后，不代表立刻反转。真正要看的是：
              扫完之后价格是接受这个方向，还是快速拒绝这个方向。
            </p>

            <div className="rounded-xl border border-chart-2/20 bg-chart-2/5 p-4">
              <h3 className="mb-3 font-semibold text-chart-2">
                偏多模型：下扫清算区后出现 Bullish FVG
              </h3>

              <div className="mb-3 rounded-lg bg-background p-3 font-mono text-sm">
                <div>1. 清算图下方有明显亮区</div>
                <div className="text-destructive">2. 价格下扫该区域</div>
                <div>3. 下扫后没有继续下跌</div>
                <div className="text-chart-2">4. 价格重新收回关键低点上方</div>
                <div>5. 低周期出现 bullish MSS</div>
                <div>6. 向上推动形成 Bullish FVG</div>
                <div className="font-medium text-chart-2">
                  7. 回踩 Bullish FVG，观察做多机会
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                这个模型的核心是：下方流动性被扫掉后，卖方没有延续能力。 随后的
                Bullish FVG
                不是单独信号，而是买方重新夺回短线结构后的回踩入场区域。
              </p>
            </div>

            <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-4">
              <h3 className="mb-3 font-semibold text-destructive">
                偏空模型：上扫清算区后出现 Bearish FVG
              </h3>

              <div className="mb-3 rounded-lg bg-background p-3 font-mono text-sm">
                <div>1. 清算图上方有明显亮区</div>
                <div className="text-chart-2">2. 价格上扫该区域</div>
                <div>3. 上扫后没有继续上涨</div>
                <div className="text-destructive">
                  4. 价格重新跌回关键高点下方
                </div>
                <div>5. 低周期出现 bearish MSS</div>
                <div>6. 向下推动形成 Bearish FVG</div>
                <div className="font-medium text-destructive">
                  7. 反弹 Bearish FVG，观察做空机会
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                这个模型的核心是：上方流动性被扫掉后，买方无法维持突破。 随后的
                Bearish FVG 是价格拒绝上方区域之后，
                空头重新掌控短线结构的回踩区域。
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-brand" />
              扫完流动性后：接受还是拒绝？
            </CardTitle>
            <CardDescription>
              这是判断 FVG 能不能参与交易的核心。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-chart-2/20 bg-muted p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-chart-2">
                  <CheckCircle2 className="h-4 w-4" />
                  接受价格
                </h3>

                <p className="text-sm text-muted-foreground">
                  价格扫完流动性后，站稳在突破区域外，回踩不破，
                  继续向下一组流动性移动。这种情况更像趋势延续，
                  不适合马上反手。
                </p>
              </div>

              <div className="rounded-xl border border-destructive/20 bg-muted p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-destructive">
                  <XCircle className="h-4 w-4" />
                  拒绝价格
                </h3>

                <p className="text-sm text-muted-foreground">
                  价格扫完流动性后，快速回到原区间，并出现反向结构转变。
                  这种情况更接近 liquidity sweep reversal，后续 FVG
                  才有交易意义。
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-brand/20 bg-brand/5 p-4">
              <h3 className="mb-3 font-semibold text-brand">交易员视角</h3>

              <p className="text-sm text-muted-foreground">
                价格扫清算图亮区之后，不要立刻反手。先看它是否快速收回，
                再看低周期是否出现 MSS。只有当市场拒绝扫盘方向，并用
                displacement 留下 FVG，FVG 才能作为回踩入场区。
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-chart-2" />
              趋势行情中怎么用 FVG？
            </CardTitle>
            <CardDescription>
              趋势行情里，FVG 更多用于顺势回踩，而不是逆势摸顶抄底。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            <p className="text-muted-foreground">
              在强趋势行情中，FVG 最稳定的用法通常是顺势使用。
              也就是说，上升趋势中优先看 Bullish FVG 回踩做多； 下降趋势中优先看
              Bearish FVG 反弹做空。
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-chart-2/20 bg-muted p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-chart-2">
                  <TrendingUp className="h-4 w-4" />
                  上升趋势中的 Bullish FVG
                </h3>

                <div className="rounded-lg bg-background p-3 font-mono text-sm">
                  <div>价格结构 HH / HL</div>
                  <div>向上 displacement</div>
                  <div className="text-chart-2">形成 Bullish FVG</div>
                  <div>价格回踩 FVG</div>
                  <div>没有跌破前一个 HL</div>
                  <div className="font-medium text-chart-2">顺势观察做多</div>
                </div>
              </div>

              <div className="rounded-xl border border-destructive/20 bg-muted p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-destructive">
                  <TrendingDown className="h-4 w-4" />
                  下降趋势中的 Bearish FVG
                </h3>

                <div className="rounded-lg bg-background p-3 font-mono text-sm">
                  <div>价格结构 LH / LL</div>
                  <div>向下 displacement</div>
                  <div className="text-destructive">形成 Bearish FVG</div>
                  <div>价格反弹 FVG</div>
                  <div>没有突破前一个 LH</div>
                  <div className="font-medium text-destructive">
                    顺势观察做空
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-brand/20 bg-brand/5 p-4">
              <h3 className="mb-3 font-semibold text-brand">趋势里的关键点</h3>

              <p className="text-sm text-muted-foreground">
                趋势行情中，不是所有反向 FVG 都值得做。 比如强上涨中出现小的
                bearish FVG，可能只是回调噪音。 交易员更重视和大趋势一致的
                FVG，因为它更可能是顺势回踩区域。
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldAlert className="h-5 w-5 text-destructive" />
              什么时候放弃这个 FVG？
            </CardTitle>
            <CardDescription>
              FVG 只是计划区域，不是必须生效的区域。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="rounded-xl border border-destructive/20 bg-muted p-4">
              <h3 className="mb-3 font-semibold text-destructive">失效条件</h3>

              <div className="rounded-lg bg-background p-3 font-mono text-sm">
                <div>价格回补 FVG 后没有任何反应</div>
                <div>直接穿透 FVG 并接受该区域</div>
                <div>做多时跌破 sweep low / 关键 HL</div>
                <div>做空时突破 sweep high / 关键 LH</div>
                <div>价格结构重新反向</div>
                <div className="font-medium text-destructive">
                  放弃该 FVG 的交易意义
                </div>
              </div>
            </div>

            <p className="text-muted-foreground">
              对交易员来说，FVG 不是信仰。价格如果没有在 FVG 区域产生预期反应，
              或者直接破坏了结构失效位，就说明原来的交易计划不成立。
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
