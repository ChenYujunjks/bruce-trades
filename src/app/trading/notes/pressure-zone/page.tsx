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
  BrainCircuit,
  CandlestickChart,
  CheckCircle2,
  Crosshair,
  Eye,
  Layers3,
  LineChart,
  Scale,
  ShieldAlert,
  TimerReset,
  TrendingDown,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

export default function PressureZoneBehaviorPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <section className="mb-10 space-y-4 motion-safe:animate-fadeSlide">
          <Badge variant="outline" className="border-brand/40 text-brand">
            Market Microstructure
          </Badge>

          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            快速大阴线跌破 vs 长时间盘整后跌破：回踩时谁的压力更强？
          </h1>

          <p className="max-w-3xl text-muted-foreground">
            两种跌破表面上都是“原支撑变压力”，但它们留下的交易者库存完全不同。
            一个主要留下恐惧记忆和价格失衡，另一个留下大量被套仓位与成本密集区。
            回踩时的压力强弱，最终取决于谁被套、谁盈利，以及谁被迫行动。
          </p>
        </section>

        <Card className="border-card-border bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scale className="h-5 w-5 text-brand" />
              先给结论
            </CardTitle>
            <CardDescription>
              快速跌破通常更尖锐；盘整后跌破通常更厚、更分层。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <p>
              通常情况下，长时间盘整后再跌破的区间，第一次反弹回去时压力更稳定、
              更持久；几根大阴线快速跌破的区间，第一次触碰可能反应更猛烈，
              但压力层往往更薄，也更容易在卖方没有立刻发力时被穿透。
            </p>

            <div className="rounded-xl border border-brand/20 bg-brand/5 p-4">
              <p className="text-sm text-muted-foreground">
                真正需要比较的不是“哪段 K 线看起来更凶”，而是：
                <span className="font-medium text-brand">
                  {" "}
                  该区间积累了多少持仓成本、跌破后有多少人被套，
                  以及价格重新回去时会触发多少被迫卖出或被迫回补。
                </span>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card className="border-destructive/30 bg-destructive/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <Zap className="h-5 w-5" />
                几根大阴线直接跌破
              </CardTitle>
              <CardDescription>
                主要留下恐惧记忆、价格失衡与追空者仓位。
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="rounded-xl border border-destructive/20 bg-muted p-4 font-mono text-sm">
                <div>价格在区间附近短暂停留</div>
                <div className="text-destructive">连续大阴线快速下杀</div>
                <div>多头止损 / 爆仓 / 被迫平仓</div>
                <div>空头追击，错过者等待回踩</div>
                <div className="font-medium text-destructive">
                  回踩时反应快，但库存未必深
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                因为价格快速穿过该区域，真正以这里为成本建立仓位的人可能并不多。
                下跌过程本身又已经清理掉一部分高杠杆多头，所以未来回踩时，
                虽然卖方记忆很强，但实际等待解套的库存未必特别庞大。
              </p>
            </CardContent>
          </Card>

          <Card className="border-chart-3/30 bg-chart-3/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-chart-3">
                <Layers3 className="h-5 w-5" />
                长时间盘整后跌破
              </CardTitle>
              <CardDescription>
                主要留下被套库存、分层成本与主动防守空头。
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="rounded-xl border border-chart-3/20 bg-muted p-4 font-mono text-sm">
                <div>价格在区间内长期换手</div>
                <div>多头在下沿、中部、上沿分批建仓</div>
                <div className="text-destructive">最终向下跌破</div>
                <div>大量持仓同时进入亏损</div>
                <div className="font-medium text-chart-3">
                  回踩时卖压厚、分层、持续
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                盘整时间越长，通常意味着越多交易者在这里形成成本。
                跌破后，这些人不会都在同一个价格卖出，而会随着价格逐步进入区间，
                一层一层地接近回本并减仓，因此更像一整块压力带。
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-brand" />
              快速跌破：不同交易者如何被迫行动？
            </CardTitle>
            <CardDescription>
              压力不只是“有人想卖”，而是谁必须在某个位置执行订单。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-destructive/20 bg-muted p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-destructive">
                  <ShieldAlert className="h-4 w-4" />
                  被套多头
                </h3>
                <p className="text-sm text-muted-foreground">
                  突破追多者、支撑抄底者和未及时止损的多头会等待反弹减仓。
                  但快速下跌中已有一部分仓位被止损或强平，
                  这些已被清理的仓位未来不会再次形成解套卖盘。
                </p>
              </div>

              <div className="rounded-xl border border-brand/20 bg-muted p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-brand">
                  <TrendingDown className="h-4 w-4" />
                  盈利空头
                </h3>
                <p className="text-sm text-muted-foreground">
                  原空头通常愿意在回踩原区间时重新开空；错过下跌的人也会把这里视为
                  第二次入场机会。因此第一次触碰常有快速拒绝，
                  但这些新空头一旦防守失败，会迅速转化为空头止损买盘。
                </p>
              </div>
            </div>

            <Separator />

            <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-4">
              <h3 className="mb-3 font-semibold text-destructive">
                为什么它可能“反应很大，却不一定很强”？
              </h3>
              <p className="text-sm text-muted-foreground">
                大阴线制造了极强的视觉记忆，所以很多交易者会在同一区域同步做空。
                第一次触碰时，卖单集中出现，价格可能快速下跌；但如果价格没有立刻被压回，
                而是在区间内停留，拥挤的空头就会逐渐承受压力，
                原本的卖压可能反过来变成逼空燃料。
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BrainCircuit className="h-5 w-5 text-chart-3" />
              盘整后跌破：为什么压力更像“厚墙”？
            </CardTitle>
            <CardDescription>
              时间越长，仓位成本越密集，回踩时越容易出现分层抛压。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-chart-3/20 bg-muted p-4">
                <h3 className="mb-2 font-semibold text-chart-3">区间下沿多头</h3>
                <p className="text-sm text-muted-foreground">
                  价格刚重新触碰区间时，他们最先接近成本，倾向于快速退出。
                </p>
              </div>

              <div className="rounded-xl border border-chart-3/20 bg-muted p-4">
                <h3 className="mb-2 font-semibold text-chart-3">区间中部多头</h3>
                <p className="text-sm text-muted-foreground">
                  价格继续深入后，这批持仓开始减亏，形成第二层卖压。
                </p>
              </div>

              <div className="rounded-xl border border-chart-3/20 bg-muted p-4">
                <h3 className="mb-2 font-semibold text-chart-3">区间上沿多头</h3>
                <p className="text-sm text-muted-foreground">
                  只有价格回到更深位置，他们才接近回本，因此压力会延伸到整个区间。
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-brand/20 bg-brand/5 p-4">
              <h3 className="mb-3 font-semibold text-brand">两股卖盘叠加</h3>
              <div className="rounded-lg bg-background p-3 font-mono text-sm">
                <div>被套多头：终于接近成本，选择减仓</div>
                <div>趋势空头：原支撑转压力，主动重新开空</div>
                <div className="font-medium text-brand">
                  解套卖盘 + 主动做空 = 第一次回踩更稳定
                </div>
              </div>
            </div>

            <p className="text-muted-foreground">
              这种压力往往不会只在一条水平线上出现，而是随着价格深入区间持续释放。
              因此价格更容易在里面反复震荡、冲高失败，而不是一次触碰就完成全部消化。
            </p>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CandlestickChart className="h-5 w-5 text-brand" />
              两种结构的核心差异
            </CardTitle>
            <CardDescription>
              一个偏向失衡与记忆，一个偏向库存与成本。
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="overflow-hidden rounded-xl border border-card-border">
              <div className="grid grid-cols-3 bg-muted px-4 py-3 text-sm font-medium">
                <div>比较维度</div>
                <div className="text-destructive">快速大阴线跌破</div>
                <div className="text-chart-3">盘整后跌破</div>
              </div>

              {[
                ["主要遗留", "恐惧记忆、失衡、追空仓位", "被套库存、密集成本、分层卖压"],
                ["首次回踩", "容易快速拒绝", "容易持续受阻"],
                ["压力形态", "尖锐、集中、可能较薄", "厚重、分层、范围更宽"],
                ["失效方式", "未立即拒绝后容易逼空", "重新进入并站稳后容易触发大规模空头回补"],
                ["更像什么", "薄但冲击力强的墙", "厚而需要时间消化的墙"],
              ].map(([label, fast, range]) => (
                <div
                  key={label}
                  className="grid grid-cols-3 border-t border-card-border px-4 py-3 text-sm"
                >
                  <div className="font-medium">{label}</div>
                  <div className="pr-4 text-muted-foreground">{fast}</div>
                  <div className="text-muted-foreground">{range}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Crosshair className="h-5 w-5 text-chart-3" />
              实战中怎么判断压力是否真的强？
            </CardTitle>
            <CardDescription>
              不要只看历史结构，要看价格重新进入时卖方能否真正阻止上涨。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-destructive/20 bg-muted p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-destructive">
                  <ArrowDown className="h-4 w-4" />
                  压力仍然有效
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>上涨速度进入区间后明显减慢</p>
                  <p>上影线增加，多次冲高失败</p>
                  <p>高点不再抬高，形成 lower high</p>
                  <p>主动买盘很多，但价格依然涨不动</p>
                  <p className="font-medium text-destructive">
                    少量卖盘就能把价格压下去，说明需求较弱
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-chart-2/20 bg-muted p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-chart-2">
                  <ArrowUp className="h-4 w-4" />
                  压力正在被吸收
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>进入压力区后回调很浅</p>
                  <p>价格能够在区间内部横住</p>
                  <p>低点不断抬高，每次下跌都被买回</p>
                  <p>大量成交发生，但价格不再明显下跌</p>
                  <p className="font-medium text-chart-2">
                    大量卖盘仍压不下去，说明供应正在被吸收
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-brand" />
              三个额外变量
            </CardTitle>
            <CardDescription>
              同样的历史区间，因为时间、反弹来源与成交行为不同，结果会完全不同。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-brand/20 bg-muted p-4">
                <h3 className="mb-2 flex items-center gap-2 font-semibold text-brand">
                  <TimerReset className="h-4 w-4" />
                  回踩间隔
                </h3>
                <p className="text-sm text-muted-foreground">
                  刚跌破不久就回踩，仓位记忆最强；间隔越久，原持仓越可能已经止损、
                  对冲或换手，压力通常会衰减。
                </p>
              </div>

              <div className="rounded-xl border border-brand/20 bg-muted p-4">
                <h3 className="mb-2 flex items-center gap-2 font-semibold text-brand">
                  <TrendingUp className="h-4 w-4" />
                  反弹来源
                </h3>
                <p className="text-sm text-muted-foreground">
                  空头回补驱动的上涨通常缺少后续需求；持续现货主动买入驱动的上涨，
                  更可能逐步吸收压力并完成突破。
                </p>
              </div>

              <div className="rounded-xl border border-brand/20 bg-muted p-4">
                <h3 className="mb-2 flex items-center gap-2 font-semibold text-brand">
                  <LineChart className="h-4 w-4" />
                  量价效率
                </h3>
                <p className="text-sm text-muted-foreground">
                  卖出量很大但价格跌不动，代表卖盘被吸收；成交不大却快速下跌，
                  代表买方承接不足，压力依然高效。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-destructive/20 bg-destructive/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <BadgeAlert className="h-5 w-5" />
              为什么有时结论会反过来？
            </CardTitle>
            <CardDescription>
              盘整不一定是派发，快速下跌也不一定只是短暂失衡。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              长时间盘整如果伴随每次下跌都被买回、卖盘逐渐枯竭，
              那么它可能是吸筹而不是派发。最后的跌破也可能只是一次 sweep，
              一旦重新收复区间，反而容易触发快速上涨。
            </p>

            <p className="text-muted-foreground">
              相反，快速大阴线如果伴随高时间级别趋势转空、持续现货卖出、
              反弹量能不断衰减，那么即使没有长时间盘整，原区间仍可能形成非常强的压力。
            </p>
          </CardContent>
        </Card>

        <Card className="mt-8 border-brand/20 bg-brand/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-brand">
              <CheckCircle2 className="h-5 w-5" />
              回踩压力判断清单
            </CardTitle>
            <CardDescription>
              每次看到原支撑转压力，可以按这个顺序检查。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-3">
            <p>
              <span className="font-medium">检查 1：</span>
              原区间停留了多久，是否形成了明显成本密集区？
            </p>
            <p>
              <span className="font-medium">检查 2：</span>
              跌破过程中，多头是仍被套，还是已经大量止损与清算？
            </p>
            <p>
              <span className="font-medium">检查 3：</span>
              回踩时上涨来自现货主动买入，还是主要来自空头平仓？
            </p>
            <p>
              <span className="font-medium">检查 4：</span>
              价格进入区间后，是立即被拒绝，还是能够停留并形成接受？
            </p>
            <p>
              <span className="font-medium">检查 5：</span>
              大量主动买盘是否仍然无法推动价格，还是卖盘已经压不动价格？
            </p>
            <p>
              <span className="font-medium">检查 6：</span>
              一旦重新进入区间，追空者的止损会不会成为逼空燃料？
            </p>
          </CardContent>
        </Card>

        <Card className="mt-8 border-brand/20 bg-brand/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-brand">
              <Eye className="h-5 w-5" />
              一句话总结
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-lg leading-8">
              快速大阴线跌破留下的主要是
              <span className="font-medium text-destructive">
                {" "}恐惧记忆与价格失衡
              </span>
              ，所以回踩常常反应快、但未必厚；长时间盘整后跌破留下的主要是
              <span className="font-medium text-chart-3">
                {" "}被套库存与成本密集区
              </span>
              ，所以压力更分层、更持久。最终仍要看价格重新回来时，
              卖方究竟能否真正把价格压下去。
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
