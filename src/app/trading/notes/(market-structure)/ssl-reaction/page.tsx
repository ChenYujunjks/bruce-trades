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
  CheckCircle2,
  Crosshair,
  GitBranch,
  Layers,
  ShieldCheck,
  ShieldX,
  Target,
  TrendingDown,
  TrendingUp,
  WalletCards,
} from "lucide-react";

export default function SslSweepReactionPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <section className="mb-10 space-y-4 motion-safe:animate-fadeSlide">
          <Badge variant="outline" className="border-brand/40 text-brand">
            Sweep Reclaim / SSL Analysis
          </Badge>

          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            下杀刺穿 SSL 之后：为什么有时变强支撑，有时变强阻力？
          </h1>

          <p className="max-w-3xl text-muted-foreground">
            专业交易员不会只看“有没有跌破 SSL”，而是看跌破之后的市场反应。
            同样是扫 sell-side liquidity，如果价格快速
            reclaim，原区域可能变成强支撑；
            如果价格深度下杀并被市场接受，原区域反而会变成强阻力。
          </p>
        </section>

        <Card className="border-card-border bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-brand" />
              核心理解
            </CardTitle>
            <CardDescription>
              扫 SSL 只是事件，真正重要的是扫完之后价格是否重新夺回结构。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <p>
              价格在收敛区间下杀刺穿 SSL，通常意味着下方多头止损被触发，
              市场完成了一次 sell-side liquidity
              sweep。但这个动作本身不等于做多， 也不等于继续做空。
            </p>

            <p className="text-muted-foreground">
              关键在于：
              <span className="font-medium text-brand">
                {" "}
                价格扫完 SSL 后，是快速 reclaim
                原区间，还是长时间运行在区间下方。
              </span>
              前者代表下跌失败，后者代表市场接受更低价格。
            </p>
          </CardContent>
        </Card>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card className="border-chart-2/30 bg-chart-2/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-chart-2">
                <ArrowUp className="h-5 w-5" />
                情况 A：Sweep → Reclaim
              </CardTitle>
              <CardDescription>
                刺穿 SSL 后快速收回，原区域转为强支撑。
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="rounded-xl border border-chart-2/20 bg-background p-4 font-mono text-sm">
                <div>收敛区间</div>
                <div className="text-destructive">↓ 刺穿 SSL</div>
                <div>↓ 多头止损被扫掉</div>
                <div>↓ 追空者被诱导进场</div>
                <div className="text-chart-2">↑ 快速 reclaim</div>
                <div className="text-chart-2">↑ 重新站回原区间</div>
                <div className="font-medium text-chart-2">
                  原 SSL 区域转为强支撑
                </div>
              </div>

              <p className="text-muted-foreground">
                这种结构不是单纯的插针，而是一次失败下跌。空头把价格打穿 SSL，
                但没有获得继续下跌的延续，说明下方卖盘被吸收，原区域反而更容易成为防守区。
              </p>
            </CardContent>
          </Card>

          <Card className="border-destructive/30 bg-destructive/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <ArrowDown className="h-5 w-5" />
                情况 B：Breakdown → Acceptance Lower
              </CardTitle>
              <CardDescription>
                跌穿 SSL 后收不回，原区域转为强阻力。
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="rounded-xl border border-destructive/20 bg-background p-4 font-mono text-sm">
                <div>收敛区间</div>
                <div className="text-destructive">↓ 实体跌穿 SSL</div>
                <div className="text-destructive">↓ 长时间运行在区间下方</div>
                <div>↑ 反抽原区间下沿</div>
                <div className="text-destructive">× 被拒绝</div>
                <div className="font-medium text-destructive">
                  原 SSL 区域转为强阻力
                </div>
              </div>

              <p className="text-muted-foreground">
                这种结构不是简单扫流动性，而是价格被市场接受在更低位置。
                原来的支撑失败后，未来反弹到该区域，往往会遇到大量卖盘。
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GitBranch className="h-5 w-5 text-brand" />
              两种情况的真正分界线
            </CardTitle>
            <CardDescription>
              不是“刺穿多深”，而是市场是否接受 SSL 下方的价格。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              很多新手会把注意力放在“这根针有多长”或者“这根阴线有多大”。
              但更专业的判断方式是观察价格是否 reclaim 原区域。 深插针也可能是
              sweep，只要它快速收回；浅跌破也可能是 breakdown，
              只要它持续收在区间下方。
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-chart-2/20 bg-chart-2/5 p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-chart-2">
                  <ShieldCheck className="h-4 w-4" />
                  Reclaim 的确认
                </h3>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>价格扫 SSL 后快速回到区间内部。</p>
                  <p>后续回踩原 SSL 区域不再继续破位。</p>
                  <p>短线结构重新形成 higher low 或突破小级别 lower high。</p>
                </div>
              </div>

              <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-destructive">
                  <ShieldX className="h-4 w-4" />
                  Acceptance Lower 的确认
                </h3>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>价格跌穿 SSL 后无法重新站回区间。</p>
                  <p>反抽原区间下沿、breakdown level 或 FVG 被拒绝。</p>
                  <p>市场继续形成 lower high，并寻找更低 SSL。</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card className="border-chart-2/30 bg-chart-2/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-chart-2">
                <TrendingUp className="h-5 w-5" />
                为什么情况 A 会变强支撑？
              </CardTitle>
              <CardDescription>
                Sweep 的价值不在于跌破，而在于跌破失败后重新夺回结构。
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="rounded-xl border border-chart-2/20 bg-background p-4">
                <h3 className="mb-2 flex items-center gap-2 font-semibold text-chart-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-chart-2/15 text-sm">
                    1
                  </span>
                  多头止损被扫掉
                </h3>

                <p className="text-sm text-muted-foreground">
                  区间内做多者的止损通常堆在 SSL 下方。价格刺穿后，
                  这些止损被触发，形成卖单。但如果价格没有继续崩，
                  反而快速收回，说明这批卖压被承接了。
                </p>
              </div>

              <div className="rounded-xl border border-chart-2/20 bg-background p-4">
                <h3 className="mb-2 flex items-center gap-2 font-semibold text-chart-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-chart-2/15 text-sm">
                    2
                  </span>
                  追空者被诱导进场
                </h3>

                <p className="text-sm text-muted-foreground">
                  跌破区间低点后，很多突破交易者会以为破位下跌开始，
                  于是追空进场。如果价格迅速 reclaim，这批空头会被套住，
                  他们的止损会变成后续上行的 buy-side liquidity。
                </p>
              </div>

              <div className="rounded-xl border border-chart-2/20 bg-background p-4">
                <h3 className="mb-2 flex items-center gap-2 font-semibold text-chart-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-chart-2/15 text-sm">
                    3
                  </span>
                  原 SSL 区域从“止损区”变成“防守区”
                </h3>

                <p className="text-sm text-muted-foreground">
                  弱多头被洗掉，追空者被困住，主动买盘已经证明存在。
                  所以后续价格回踩原 SSL 附近时，交易员更容易把它视为防守区，
                  而不是普通支撑。
                </p>
              </div>

              <div className="rounded-xl border border-chart-2/20 bg-chart-2/10 p-4">
                <p className="text-sm font-medium text-chart-2">
                  交易员理解：强支撑不是因为“这里曾经是低点”，
                  而是因为市场向下测试失败，并且价格重新夺回了结构。
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-destructive/30 bg-destructive/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <TrendingDown className="h-5 w-5" />
                为什么情况 B 会变强阻力？
              </CardTitle>
              <CardDescription>
                原支撑失效后，该区域会聚集解套卖、加仓空和短多止盈。
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="rounded-xl border border-destructive/20 bg-background p-4">
                <h3 className="mb-2 flex items-center gap-2 font-semibold text-destructive">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-destructive/15 text-sm">
                    1
                  </span>
                  原区间多头被套
                </h3>

                <p className="text-sm text-muted-foreground">
                  当价格实体跌穿 SSL，并且长期停留在区间下方，
                  原先把该区域当支撑做多的人会被套住。未来价格反弹回来时，
                  他们更倾向于少亏离场或解套卖出。
                </p>
              </div>

              <div className="rounded-xl border border-destructive/20 bg-background p-4">
                <h3 className="mb-2 flex items-center gap-2 font-semibold text-destructive">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-destructive/15 text-sm">
                    2
                  </span>
                  破位空头会把反抽当成加仓机会
                </h3>

                <p className="text-sm text-muted-foreground">
                  趋势空头会认为原支撑已经失效。因此当价格反抽到区间下沿、
                  breakdown level 或下杀留下的 FVG
                  时，他们会把这里视为新的做空区域。
                </p>
              </div>

              <div className="rounded-xl border border-destructive/20 bg-background p-4">
                <h3 className="mb-2 flex items-center gap-2 font-semibold text-destructive">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-destructive/15 text-sm">
                    3
                  </span>
                  抢反弹的短多也会在这里止盈
                </h3>

                <p className="text-sm text-muted-foreground">
                  下方抢反弹的人通常知道原区间低点附近存在压力。
                  所以价格反弹到这里时，他们会选择止盈离场，
                  这也会给该区域增加额外卖压。
                </p>
              </div>

              <div className="rounded-xl border border-destructive/20 bg-destructive/10 p-4">
                <p className="text-sm font-medium text-destructive">
                  交易员理解：强阻力不是因为“这里以前是支撑”，
                  而是因为这里聚集了“解套卖 + 加仓空 + 短多止盈”。
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="h-5 w-5 text-brand" />
              两种结果，本质上只看一件事
            </CardTitle>
            <CardDescription>
              扫 SSL 后，是 reclaim 原区域，还是 acceptance lower。
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="overflow-hidden rounded-xl border border-card-border">
              <div className="grid grid-cols-4 bg-muted text-sm font-medium">
                <div className="border-r border-card-border p-3">类型</div>
                <div className="border-r border-card-border p-3">关键表现</div>
                <div className="border-r border-card-border p-3">区域性质</div>
                <div className="p-3">后续倾向</div>
              </div>

              <div className="grid grid-cols-4 border-t border-card-border text-sm">
                <div className="border-r border-card-border p-3 font-medium text-chart-2">
                  Reclaim
                </div>
                <div className="border-r border-card-border p-3 text-muted-foreground">
                  扫 SSL 后快速收回，重新站回区间
                </div>
                <div className="border-r border-card-border p-3 font-medium text-chart-2">
                  强支撑
                </div>
                <div className="p-3 text-muted-foreground">偏向上扫 BSL</div>
              </div>

              <div className="grid grid-cols-4 border-t border-card-border text-sm">
                <div className="border-r border-card-border p-3 font-medium text-destructive">
                  Acceptance Lower
                </div>
                <div className="border-r border-card-border p-3 text-muted-foreground">
                  跌穿后收不回，反抽区间下沿被拒绝
                </div>
                <div className="border-r border-card-border p-3 font-medium text-destructive">
                  强阻力
                </div>
                <div className="p-3 text-muted-foreground">
                  偏向继续找下方 SSL
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-brand/20 bg-brand/5 p-4">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-brand">重点：</span>
                真正重要的不是刺穿多深，而是市场是否接受更低价格。 只要价格快速
                reclaim，深插针也可能是 sweep；
                只要价格持续收在下方，浅跌破也可能是 breakdown。
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Crosshair className="h-5 w-5 text-chart-3" />
              专业交易员如何用这两种情况做右侧交易？
            </CardTitle>
            <CardDescription>
              右侧交易不是猜最低点或最高点，而是等待市场给出方向确认后，
              在结构失效位清楚的位置参与。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Sweep SSL 之后，专业交易员通常不会在刺穿的一瞬间直接进场。
              因为那时还不知道这是空头陷阱，还是有效 breakdown。
              更稳健的做法是等待价格给出右侧确认： 要么 reclaim 后回踩不破，要么
              breakdown 后反抽被拒绝。
            </p>

            <div className="rounded-xl border border-brand/20 bg-brand/5 p-4">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-brand">右侧交易的核心：</span>
                不追第一下，而是等市场证明方向。好单子的特点不是“看起来会涨或会跌”，
                而是入场后止损位非常清楚，错了能快速退出。
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card className="border-chart-2/30 bg-chart-2/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-chart-2">
                <TrendingUp className="h-5 w-5" />
                情况 A 的右侧多单：Reclaim 后等回踩
              </CardTitle>
              <CardDescription>
                不是在刺穿 SSL 的最低点抄底，而是在 reclaim 后找回踩确认。
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="rounded-xl border border-chart-2/20 bg-background p-4 font-mono text-sm">
                <div>1. 价格下杀刺穿 SSL</div>
                <div>2. 多头止损被扫，追空者进场</div>
                <div className="text-chart-2">3. 价格快速 reclaim 原区间</div>
                <div>4. 等待回踩原 SSL / reclaim level</div>
                <div className="text-chart-2">5. 回踩不破，出现小级别转强</div>
                <div className="font-medium text-chart-2">右侧多单成立</div>
              </div>

              <div className="rounded-xl border border-chart-2/20 bg-muted p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-chart-2">
                  <Target className="h-4 w-4" />
                  入场逻辑
                </h3>

                <p className="text-sm text-muted-foreground">
                  价格扫 SSL 后重新站回原区间，说明第一次下跌失败。
                  但专业交易员通常不会立刻追多，而是等价格回踩 reclaim 区域。
                  如果回踩时卖盘无法再次把价格打回 SSL 下方， 说明原 SSL
                  区域开始从“止损区”转成“防守区”。
                </p>
              </div>

              <div className="rounded-xl border border-chart-2/20 bg-muted p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-chart-2">
                  <ShieldCheck className="h-4 w-4" />
                  止损怎么放？
                </h3>

                <p className="text-sm text-muted-foreground">
                  多单的止损应该放在 reclaim 失败的位置。 最常见的位置是 sweep
                  low 下方，或者回踩形成的小级别 higher low 下方。
                  因为如果价格重新跌回 SSL 下方，说明 reclaim 失败，
                  空头陷阱逻辑不成立。
                </p>

                <div className="mt-3 rounded-lg bg-background p-3 font-mono text-sm">
                  <div>Entry：回踩 reclaim level 后转强</div>
                  <div className="text-destructive">
                    Stop：sweep low 下方 / 回踩 HL 下方
                  </div>
                  <div className="text-chart-2">
                    Target：区间中轴 / 区间上沿 / 上方 BSL
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-chart-2/20 bg-chart-2/10 p-4">
                <p className="text-sm font-medium text-chart-2">
                  好处：这个多单不是靠猜底，而是靠 reclaim 后的结构确认。
                  止损点清楚，失效逻辑明确，盈亏比也更容易计算。
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-destructive/30 bg-destructive/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <TrendingDown className="h-5 w-5" />
                情况 B 的右侧空单：Breakdown 后等反抽
              </CardTitle>
              <CardDescription>
                不是追第一根大阴线，而是等反抽原支撑失败后参与。
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="rounded-xl border border-destructive/20 bg-background p-4 font-mono text-sm">
                <div>1. 价格下杀实体跌穿 SSL</div>
                <div>2. 长时间运行在原区间下方</div>
                <div className="text-destructive">
                  3. reclaim 失败，市场接受低价
                </div>
                <div>4. 等待反抽原区间下沿 / breakdown level</div>
                <div className="text-destructive">
                  5. 反抽被拒绝，形成 lower high
                </div>
                <div className="font-medium text-destructive">右侧空单成立</div>
              </div>

              <div className="rounded-xl border border-destructive/20 bg-muted p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-destructive">
                  <Target className="h-4 w-4" />
                  入场逻辑
                </h3>

                <p className="text-sm text-muted-foreground">
                  价格跌穿 SSL 后没有 reclaim，说明原支撑失效。
                  但专业交易员通常不会在大阴线之后追空，
                  因为那时离止损太远，盈亏比不好。
                  更好的方式是等价格反抽原区间下沿、breakdown level 或 FVG，
                  如果反抽被拒绝，再寻找右侧空单。
                </p>
              </div>

              <div className="rounded-xl border border-destructive/20 bg-muted p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-destructive">
                  <ShieldX className="h-4 w-4" />
                  止损怎么放？
                </h3>

                <p className="text-sm text-muted-foreground">
                  空单的止损应该放在 breakdown 失败的位置。
                  最常见的位置是反抽形成的 lower high 上方，
                  或者原区间下沿重新被站回的位置上方。 因为如果价格重新 reclaim
                  原区间，说明 acceptance lower 失败， 强阻力逻辑不成立。
                </p>

                <div className="mt-3 rounded-lg bg-background p-3 font-mono text-sm">
                  <div>Entry：反抽 breakdown level 后被拒绝</div>
                  <div className="text-destructive">
                    Stop：反抽 lower high 上方 / 原区间下沿上方
                  </div>
                  <div className="text-chart-2">
                    Target：更低前低 / equal lows / 下方 SSL
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-destructive/20 bg-destructive/10 p-4">
                <p className="text-sm font-medium text-destructive">
                  好处：这个空单不是追跌，而是等支撑失效后反抽确认。
                  止损可以放在 lower high 上方，结构失效非常清楚。
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <WalletCards className="h-5 w-5 text-brand" />
              为什么这两类单子“止损好找”？
            </CardTitle>
            <CardDescription>
              因为它们都不是在混乱位置进场，而是在结构确认后围绕失效位交易。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-chart-2/20 bg-chart-2/5 p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-chart-2">
                  <ArrowUp className="h-4 w-4" />
                  Reclaim 多单的失效位
                </h3>

                <p className="text-sm text-muted-foreground">
                  如果价格 reclaim 后再次跌回 SSL 下方，
                  说明多头没有真正夺回结构。这个位置就是多单的逻辑失效位。
                  所以止损可以放在 sweep low 或回踩 higher low 下方。
                </p>
              </div>

              <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-destructive">
                  <ArrowDown className="h-4 w-4" />
                  Breakdown 空单的失效位
                </h3>

                <p className="text-sm text-muted-foreground">
                  如果价格反抽后重新站回原区间， 说明 breakdown
                  没有被市场接受。这个位置就是空单的逻辑失效位。
                  所以止损可以放在反抽 lower high 或原区间下沿上方。
                </p>
              </div>
            </div>

            <Separator />

            <div className="rounded-xl border border-brand/20 bg-brand/5 p-4">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-brand">重点：</span>
                止损不是随便放一个百分比，也不是根据自己能亏多少随便设。
                专业交易员更关注“如果价格走到哪里，说明我的交易逻辑错了”。
                这个“逻辑错了的位置”，才是最自然的止损位。
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="h-5 w-5 text-brand" />
              右侧交易的完整执行框架
            </CardTitle>
            <CardDescription>
              先确认区域性质，再找入场触发，最后围绕结构失效位放止损。
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="overflow-hidden rounded-xl border border-card-border">
              <div className="grid grid-cols-5 bg-muted text-sm font-medium">
                <div className="border-r border-card-border p-3">方向</div>
                <div className="border-r border-card-border p-3">前提</div>
                <div className="border-r border-card-border p-3">入场触发</div>
                <div className="border-r border-card-border p-3">止损位置</div>
                <div className="p-3">目标区域</div>
              </div>

              <div className="grid grid-cols-5 border-t border-card-border text-sm">
                <div className="border-r border-card-border p-3 font-medium text-chart-2">
                  右侧多
                </div>
                <div className="border-r border-card-border p-3 text-muted-foreground">
                  扫 SSL 后 reclaim
                </div>
                <div className="border-r border-card-border p-3 text-muted-foreground">
                  回踩 reclaim level 不破
                </div>
                <div className="border-r border-card-border p-3 text-muted-foreground">
                  sweep low / HL 下方
                </div>
                <div className="p-3 text-muted-foreground">
                  区间中轴 / 上沿 / BSL
                </div>
              </div>

              <div className="grid grid-cols-5 border-t border-card-border text-sm">
                <div className="border-r border-card-border p-3 font-medium text-destructive">
                  右侧空
                </div>
                <div className="border-r border-card-border p-3 text-muted-foreground">
                  跌穿 SSL 后 acceptance lower
                </div>
                <div className="border-r border-card-border p-3 text-muted-foreground">
                  反抽 breakdown level 被拒绝
                </div>
                <div className="border-r border-card-border p-3 text-muted-foreground">
                  lower high / 区间下沿上方
                </div>
                <div className="p-3 text-muted-foreground">
                  更低前低 / equal lows / SSL
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-brand/20 bg-brand/5 p-4">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-brand">交易员视角：</span>
                好的右侧单子，通常不是最早进场，而是最容易定义风险。
                当入场点靠近结构失效位时，止损小、逻辑清楚、盈亏比自然更好。
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-destructive/20 bg-destructive/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <BadgeAlert className="h-5 w-5" />
              右侧交易最容易犯的错误
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-3">
            <p>
              <span className="font-medium">错误 1：</span>
              入场点离结构失效位太远，导致止损不好放。
            </p>

            <p>
              <span className="font-medium">错误 2：</span>
              价格已经重新 reclaim 原区间，却还坚持 breakdown 空头逻辑。
            </p>

            <p>
              <span className="font-medium">错误 3：</span>
              价格已经反抽被拒绝，却还幻想原 SSL 区域一定能重新变支撑。
            </p>

            <p className="text-muted-foreground">
              右侧交易的关键不是更晚，而是更清楚。
              等确认会牺牲一部分价格优势，但换来的是更明确的方向和更清晰的止损位。
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
