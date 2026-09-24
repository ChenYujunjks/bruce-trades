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
  CheckCircle2,
  CircleDot,
  Crosshair,
  Eye,
  LineChart,
  ShieldAlert,
  Target,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

export default function LongLowerShadowPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <section className="mb-10 space-y-4 motion-safe:animate-fadeSlide">
          <Badge variant="outline" className="border-brand/40 text-brand">
            Sweep Reclaim Model
          </Badge>

          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            长下影线与假跌破收回：为什么一根针不能直接看多？
          </h1>

          <p className="max-w-3xl text-muted-foreground">
            长下影线不是天然的买入信号。它只能说明某个价格位置出现过承接，
            但不能单独证明趋势已经反转。交易员真正关心的是：
            价格是否扫掉下方流动性后重新收回，并且在后续结构中证明买盘有效。
          </p>
        </section>

        <Card className="border-card-border bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CandlestickChart className="h-5 w-5 text-brand" />
              核心理解
            </CardTitle>
            <CardDescription>
              长下影线 = 低位出现承接；有效交易信号 = 扫流动性后收回并确认。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <p>
              很多人看到长下影线，会马上认为这是底部信号。但专业交易员不会只看 K
              线形状，而是会追问：这根下影线扫到了哪里？是否跌破了前低？
              是否收回了关键支撑？后续是否守住了影线低点？
            </p>

            <p className="text-muted-foreground">
              所以这个模型的核心不是“有针就买”，而是：
              <span className="font-medium text-brand">
                {" "}
                价格向下扫掉 sell-side liquidity 之后，如果卖盘无法延续，
                并且价格重新 reclaim 关键位置，才开始具备交易价值。
              </span>
            </p>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CircleDot className="h-5 w-5 text-chart-3" />
              为什么不能轻易把两个低点叫双底？
            </CardTitle>
            <CardDescription>
              双底不是两个低点接近，而是买盘完成防守并重新夺回结构。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              两个低点接近，只能说明价格在同一区域发生过两次争夺。
              但这还不等于双底成立。真正的双底需要恐慌释放、低位承接、
              中间反弹、二次回踩防守，以及最终突破颈线。
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-destructive/20 bg-muted p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-destructive">
                  <ShieldAlert className="h-4 w-4" />
                  潜在双底
                </h3>

                <p className="text-sm text-muted-foreground">
                  价格出现两个相近低点，但没有明显插针、没有放量收回、
                  没有突破颈线。这种结构只能叫二次探底区域，不能叫确认双底。
                </p>
              </div>

              <div className="rounded-xl border border-chart-2/20 bg-muted p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-chart-2">
                  <CheckCircle2 className="h-4 w-4" />
                  确认双底
                </h3>

                <p className="text-sm text-muted-foreground">
                  第二次下探后没有继续破位，价格重新收回关键水平，
                  后续站上短期均线，并突破中间颈线，双底才真正获得确认。
                </p>
              </div>
            </div>

            <Separator />

            <div className="rounded-xl border border-brand/20 bg-brand/5 p-4">
              <h3 className="mb-3 font-semibold text-brand">交易员视角</h3>

              <p className="text-sm text-muted-foreground">
                如果两个低点都很“圆”，没有明显的流动性清扫，也没有强承接，
                交易员通常不会急着判断双底，而是会等待一次更清晰的 sweep
                reclaim：跌破前低，触发止损和恐慌盘，然后日线重新收回。
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card className="border-chart-2/30 bg-chart-2/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-chart-2">
                <ArrowUp className="h-5 w-5" />
                有效长下影线
              </CardTitle>
              <CardDescription>
                扫低点后快速收回，卖盘无法延续。
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
              <p>更有交易价值的长下影线，通常出现在充分下跌之后：</p>

              <div className="rounded-xl border border-chart-2/20 bg-muted p-4 font-mono text-sm">
                <div>价格跌破前低</div>
                <div className="text-destructive">↓ 扫 SSL</div>
                <div>触发止损和恐慌盘</div>
                <div className="text-chart-2">日线重新收回关键支撑</div>
                <div>后续不再跌破影线低点</div>
                <div className="font-medium text-chart-2">
                  承接有效，观察做多机会
                </div>
              </div>

              <p className="text-muted-foreground">
                这种结构的重点不是“下影线很长”，而是空头向下打穿后，
                没有获得继续下跌的延续，价格重新回到支撑上方。
              </p>
            </CardContent>
          </Card>

          <Card className="border-destructive/30 bg-destructive/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <ArrowDown className="h-5 w-5" />
                失败长下影线
              </CardTitle>
              <CardDescription>有承接，但后续结构没有确认。</CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
              <p>有些长下影线出现后，价格反而继续下跌：</p>

              <div className="rounded-xl border border-destructive/20 bg-muted p-4 font-mono text-sm">
                <div>高位下跌初期出现长下影线</div>
                <div>低位短暂有人接</div>
                <div>反弹无法突破关键压力</div>
                <div className="text-destructive">形成 lower high</div>
                <div>后续跌破影线低点</div>
                <div className="font-medium text-destructive">
                  承接失败，下跌延续
                </div>
              </div>

              <p className="text-muted-foreground">
                一旦影线低点被跌破，说明此前低位接盘失败。
                这根长下影线不再是看多证据，反而会变成新的套牢区。
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-brand" />
              实战模型：Sweep → Reclaim → Confirmation
            </CardTitle>
            <CardDescription>
              交易员不会交易“针”，而是交易针之后的结构确认。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            <div className="rounded-xl border border-chart-2/20 bg-chart-2/5 p-4">
              <h3 className="mb-3 font-semibold text-chart-2">
                偏多模型：扫 SSL 后收回
              </h3>

              <div className="mb-3 rounded-lg bg-background p-3 font-mono text-sm">
                <div>1. 价格已经充分下跌</div>
                <div>2. 来到大级别支撑或历史成交密集区</div>
                <div className="text-destructive">3. 跌破前低，扫 SSL</div>
                <div className="text-chart-2">4. 日线收回前低上方</div>
                <div>5. 次日不再跌破影线低点</div>
                <div>6. 重新站上 EMA21</div>
                <div>7. 突破最近 lower high 或颈线</div>
                <div className="font-medium text-chart-2">开始观察多单机会</div>
              </div>

              <p className="text-sm text-muted-foreground">
                这个模型的核心是：空头向下打穿前低，但无法让价格继续下跌。
                当价格重新收回并站上短期均线时，说明买盘不只是短线承接，
                而是开始尝试夺回结构。
              </p>
            </div>

            <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-4">
              <h3 className="mb-3 font-semibold text-destructive">
                偏空模型：长下影线失败
              </h3>

              <div className="mb-3 rounded-lg bg-background p-3 font-mono text-sm">
                <div>1. 高位或下跌初期出现长下影线</div>
                <div>2. 价格短暂反弹</div>
                <div>3. 反弹无法重新站上 EMA21 / EMA55</div>
                <div className="text-destructive">4. 形成 lower high</div>
                <div>5. 再次回落测试影线低点</div>
                <div className="text-destructive">6. 跌破影线低点</div>
                <div className="font-medium text-destructive">
                  承接失败，观察下跌延续
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                失败长下影线的危险在于：当时抄底的人被套住。
                一旦影线低点被跌破，这批多头可能会止损，
                新的空头也会进场，卖压反而会变强。
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Crosshair className="h-5 w-5 text-chart-3" />
              交易员真正看的四个位置
            </CardTitle>
            <CardDescription>
              长下影线有没有意义，取决于它扫到哪里，以及收在哪里。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-brand/20 bg-muted p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-brand">
                  <CircleDot className="h-4 w-4" />
                  前低 / 区间低点
                </h3>

                <p className="text-sm text-muted-foreground">
                  最有价值的下影线，通常会扫掉明显前低。
                  因为前低下方往往聚集了多头止损和突破空单。
                </p>
              </div>

              <div className="rounded-xl border border-brand/20 bg-muted p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-brand">
                  <LineChart className="h-4 w-4" />
                  历史成交密集区
                </h3>

                <p className="text-sm text-muted-foreground">
                  如果价格回到过去长时间震荡的区域，说明这里有大量历史成本。
                  下影线扫进这个区域后收回，通常比普通位置更重要。
                </p>
              </div>

              <div className="rounded-xl border border-chart-2/20 bg-muted p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-chart-2">
                  <ArrowUp className="h-4 w-4" />
                  收盘位置
                </h3>

                <p className="text-sm text-muted-foreground">
                  交易员更重视收盘，而不是最低点。
                  如果盘中跌破但日线收回关键位，说明破位没有得到确认。
                </p>
              </div>

              <div className="rounded-xl border border-destructive/20 bg-muted p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-destructive">
                  <ArrowDown className="h-4 w-4" />
                  影线低点
                </h3>

                <p className="text-sm text-muted-foreground">
                  影线低点是承接是否有效的防守线。
                  后续如果跌破这个低点，说明此前承接失败。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-chart-2" />
              低位长下影线 vs 高位长下影线
            </CardTitle>
            <CardDescription>
              同样是长下影线，出现在不同位置，含义完全不同。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-chart-2/20 bg-muted p-4">
                <h3 className="mb-2 font-semibold text-chart-2">
                  低位长下影线
                </h3>

                <p className="text-sm text-muted-foreground">
                  如果价格已经经过充分下跌，来到大级别支撑区，
                  再出现跌破前低后快速收回，这可能代表卖盘被吸收，
                  有阶段底部的可能。
                </p>
              </div>

              <div className="rounded-xl border border-destructive/20 bg-muted p-4">
                <h3 className="mb-2 font-semibold text-destructive">
                  高位长下影线
                </h3>

                <p className="text-sm text-muted-foreground">
                  如果价格刚从高位开始下跌，长下影线可能只是第一波恐慌后的反抽。
                  它代表多空分歧加剧，不代表趋势已经恢复。
                </p>
              </div>
            </div>

            <p className="text-muted-foreground">
              所以不能把所有长下影线都当成底部信号。位置越低、支撑越明确、
              扫流动性越充分、收回越强，长下影线的交易价值才越高。
            </p>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-brand" />
              如果没有长下影线，底部就不存在吗？
            </CardTitle>
            <CardDescription>
              不一定。市场也可以通过横盘吸收完成筑底。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              有些底部不会出现明显插针，而是通过很长时间的低位横盘完成。
              这种情况通常不是暴力反转，而是卖盘逐渐枯竭，买盘慢慢吸收筹码。
            </p>

            <div className="rounded-xl border border-brand/20 bg-brand/5 p-4">
              <h3 className="mb-3 font-semibold text-brand">横盘吸收型底部</h3>

              <div className="rounded-lg bg-background p-3 font-mono text-sm">
                <div>价格在低位横盘</div>
                <div>低点不再继续明显下移</div>
                <div>每次下跌成交量逐渐减少</div>
                <div>反弹开始逐渐变强</div>
                <div className="text-chart-2">站上 EMA21 / EMA55</div>
                <div className="font-medium text-chart-2">放量突破区间上沿</div>
              </div>
            </div>

            <p className="text-muted-foreground">
              所以没有长下影线时，不代表一定不能见底。
              只是这种底部需要用更长时间的横盘、低点抬高和均线突破来确认。
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
              一根长下影线想要变成可交易信号，至少要通过这些检查。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-3">
            <p>
              <span className="font-medium">确认 1：</span>
              是否出现在充分下跌之后，而不是高位下跌初期？
            </p>

            <p>
              <span className="font-medium">确认 2：</span>
              是否扫掉了前低、区间低点或明显 SSL？
            </p>

            <p>
              <span className="font-medium">确认 3：</span>
              日线是否收回关键支撑上方？
            </p>

            <p>
              <span className="font-medium">确认 4：</span>
              后续是否守住影线低点？
            </p>

            <p>
              <span className="font-medium">确认 5：</span>
              是否重新站上 EMA21，并进一步挑战 EMA55 / EMA100？
            </p>

            <p>
              <span className="font-medium">确认 6：</span>
              是否突破最近的 lower high 或双底颈线？
            </p>

            <p>
              <span className="font-medium">确认 7：</span>
              是否有成交量、Delta、CVD 或 OI 的辅助确认？
            </p>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-chart-3" />和 Delta / CVD / OI
              怎么组合？
            </CardTitle>
            <CardDescription>
              长下影线最好不要单独使用，而是和主动成交、累积成交差、
              持仓变化一起看。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-brand/20 bg-muted p-4">
                <h3 className="mb-2 font-semibold text-brand">Delta</h3>

                <p className="text-sm text-muted-foreground">
                  如果扫低点时 Delta 极度为负，但价格没有继续跌，
                  说明大量主动卖盘可能被吸收。
                </p>
              </div>

              <div className="rounded-xl border border-brand/20 bg-muted p-4">
                <h3 className="mb-2 font-semibold text-brand">CVD</h3>

                <p className="text-sm text-muted-foreground">
                  如果价格创新低，但 CVD 没有同步创新低，
                  可能代表卖盘衰竭，或者下跌动能开始减弱。
                </p>
              </div>

              <div className="rounded-xl border border-brand/20 bg-muted p-4">
                <h3 className="mb-2 font-semibold text-brand">OI</h3>

                <p className="text-sm text-muted-foreground">
                  如果下杀时 OI 快速下降，可能是多头清算。 如果价格收回后 OI
                  没有继续异常堆高，结构会更健康。
                </p>
              </div>
            </div>

            <p className="text-muted-foreground">
              更完整的做多确认不是“有一根针”，而是：
              扫低点、卖盘释放、价格收回、持仓降温、后续站上均线。
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
              看到长下影线就直接认为底部出现。
            </p>

            <p>
              <span className="font-medium">误区 2：</span>
              不看这根针出现的位置，把高位长下影线和低位长下影线混在一起判断。
            </p>

            <p>
              <span className="font-medium">误区 3：</span>
              只看最低价，不看日线有没有收回关键支撑。
            </p>

            <p>
              <span className="font-medium">误区 4：</span>
              影线低点被跌破之后，还继续认为这根针有效。
            </p>

            <p>
              <span className="font-medium">误区 5：</span>
              没有突破 EMA21、EMA55 或颈线之前，就提前判断趋势反转。
            </p>

            <p className="text-muted-foreground">
              更专业的理解是：长下影线不是方向信号，而是承接信号。
              承接是否有效，要由后续结构来验证。
            </p>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingDown className="h-5 w-5 text-destructive" />
              什么时候应该放弃看多？
            </CardTitle>
            <CardDescription>
              好的交易模型必须有失效条件，否则很容易从交易变成信仰。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="rounded-xl border border-destructive/20 bg-muted p-4">
              <h3 className="mb-3 font-semibold text-destructive">失效条件</h3>

              <div className="rounded-lg bg-background p-3 font-mono text-sm">
                <div>长下影线出现后，价格无法站上 EMA21</div>
                <div>反弹形成 lower high</div>
                <div>再次回落测试影线低点</div>
                <div className="text-destructive">日线跌破影线低点</div>
                <div>跌破后无法快速收回</div>
                <div className="font-medium text-destructive">
                  放弃该长下影线的看多意义
                </div>
              </div>
            </div>

            <p className="text-muted-foreground">
              对交易员来说，长下影线的低点通常是关键失效位。
              如果这个位置被有效跌破，说明此前承接失败，
              原来的多头逻辑就应该重新评估。
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
              长下影线的核心价值不是告诉你马上买入，而是提醒你：
              <span className="font-medium text-brand">
                {" "}
                下方出现过流动性清扫和低位承接。真正的交易信号，
                来自收回关键位置、守住影线低点、重新站上均线，
                并突破最近的下跌结构。
              </span>
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
