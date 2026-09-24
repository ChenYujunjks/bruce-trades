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
  ArrowRight,
  ArrowUp,
  CandlestickChart,
  CheckCircle2,
  CircleDot,
  Clock3,
  Gauge,
  GitMerge,
  MoveHorizontal,
  RefreshCcw,
  Repeat2,
  Scale,
  TrendingDown,
  TrendingUp,
  Waves,
  Zap,
} from "lucide-react";

export default function CorrectionConvergencePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-10">
        {/* Hero */}
        <section className="mb-10 space-y-4 motion-safe:animate-fadeSlide">
          <Badge variant="outline" className="border-brand/40 text-brand">
            Price × Time Framework
          </Badge>

          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            Correction 与 Convergence：
            <br className="hidden md:block" />
            为什么暴涨暴跌之后，市场经常进入重新平衡？
          </h1>

          <p className="max-w-3xl leading-7 text-muted-foreground">
            一段剧烈上涨或下跌之后，市场往往无法永远维持相同的扩张速度。
            原本高度单边的订单流会逐渐重新形成双边交易，仓位开始换手，
            流动性重新建立，价格开始寻找新的接受区域。
          </p>

          <p className="max-w-3xl leading-7 text-muted-foreground">
            这个重新平衡过程就是我们所说的{" "}
            <span className="font-medium text-foreground">Correction</span>。
            它既可以通过价格完成，也可以通过时间完成。
          </p>
        </section>

        {/* Core idea */}
        <Card className="border-card-border bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <RefreshCcw className="h-5 w-5 text-brand" />
              核心理解
            </CardTitle>

            <CardDescription>
              Expansion 之后，市场经常从单边失衡重新走向双边平衡。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-4">
              <FlowBox
                icon={<Zap className="h-5 w-5" />}
                title="Expansion"
                description="价格快速扩张"
              />

              <FlowBox
                icon={<Scale className="h-5 w-5" />}
                title="Correction"
                description="重新平衡"
              />

              <FlowBox
                icon={<GitMerge className="h-5 w-5" />}
                title="Convergence"
                description="可能出现收敛"
              />

              <FlowBox
                icon={<Activity className="h-5 w-5" />}
                title="Expansion"
                description="波动再次释放"
              />
            </div>

            <div className="rounded-lg border border-border bg-muted/30 p-4">
              <p className="text-sm leading-6 text-muted-foreground">
                <span className="font-medium text-foreground">注意：</span>
                这是一种常见的市场状态转换，而不是必然公式。 暴涨后不一定马上
                correction，correction 也不一定形成 convergence， convergence
                之后更不保证一定沿原趋势突破。
              </p>
            </div>
          </CardContent>
        </Card>

        <Separator className="my-10" />

        {/* Why correction */}
        <section className="space-y-6">
          <div className="space-y-2">
            <Badge variant="secondary">01 · Why Correction?</Badge>

            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              为什么暴涨或暴跌之后，经常出现 Correction？
            </h2>

            <p className="max-w-3xl leading-7 text-muted-foreground">
              与其理解成“价格涨太多，所以必须跌回来”，更准确的理解是：
              剧烈行情通常意味着订单流在短时间内高度不对称，
              而这种状态往往无法永久持续。
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <ConceptCard
              icon={<TrendingUp className="h-5 w-5 text-brand" />}
              title="Order Flow Imbalance"
              subtitle="订单流失衡"
            >
              暴涨时，主动买单持续吃掉上方卖单；暴跌时，则是主动卖单持续打掉下方买单。
              价格因此快速离开原来的平衡区域。
            </ConceptCard>

            <ConceptCard
              icon={<Repeat2 className="h-5 w-5 text-brand" />}
              title="Position Transfer"
              subtitle="仓位换手"
            >
              趋势走远之后，早期持仓者开始止盈，新参与者开始进场，
              空头或多头也可能重新建立仓位，市场持仓结构发生变化。
            </ConceptCard>

            <ConceptCard
              icon={<Scale className="h-5 w-5 text-brand" />}
              title="Price Acceptance"
              subtitle="寻找新的价格接受区域"
            >
              市场需要判断新的价格到底是否能够被接受。
              价格可能在新的区域停留、震荡，并重新形成双边成交。
            </ConceptCard>

            <ConceptCard
              icon={<Waves className="h-5 w-5 text-brand" />}
              title="Liquidity Rebuild"
              subtitle="流动性重新建立"
            >
              快速行情会消耗原本挂在盘口中的流动性。
              行情停下来以后，新的限价单、止损单和突破单逐渐重新聚集。
            </ConceptCard>
          </div>

          <Card className="border-card-border bg-card">
            <CardContent className="pt-6">
              <div className="flex gap-3">
                <CircleDot className="mt-1 h-5 w-5 shrink-0 text-brand" />

                <div className="space-y-2">
                  <p className="font-medium">
                    Correction 的本质不是“价格必须跌回来”
                  </p>

                  <p className="leading-7 text-muted-foreground">
                    更准确地说，Correction 是前面单边 expansion
                    之后，市场重新形成双边交易、重新换手和重新寻找 value
                    的过程。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-10" />

        {/* Two dimensions */}
        <section className="space-y-6">
          <div className="space-y-2">
            <Badge variant="secondary">02 · Two Types of Correction</Badge>

            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Correction 可以通过 Price，也可以通过 Time 完成
            </h2>

            <p className="max-w-3xl leading-7 text-muted-foreground">
              市场不一定需要大幅反向移动才能完成修正。
              有时候价格几乎不跌，却通过长时间横盘完成同样的重新平衡过程。
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Price correction */}
            <Card className="border-card-border bg-card">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10">
                  <ArrowDown className="h-5 w-5 text-brand" />
                </div>

                <CardTitle>Price Correction</CardTitle>

                <CardDescription>通过价格空间完成修正</CardDescription>
              </CardHeader>

              <CardContent className="space-y-5">
                <MiniPriceCorrectionChart />

                <p className="leading-7 text-muted-foreground">
                  前面的趋势扩张之后，价格发生明显反向移动。
                  市场主要通过价格本身重新寻找平衡。
                </p>

                <div className="rounded-lg border border-border bg-muted/30 p-4 font-mono text-sm">
                  <p>1900 → 2500</p>
                  <p className="text-brand">2500 → 2250</p>
                  <p>2250 → ?</p>
                </div>

                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span>
                    修正主要发生在{" "}
                    <span className="font-medium text-foreground">
                      Price Axis
                    </span>
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Time correction */}
            <Card className="border-card-border bg-card">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10">
                  <Clock3 className="h-5 w-5 text-brand" />
                </div>

                <CardTitle>Time Correction</CardTitle>

                <CardDescription>通过时间完成修正</CardDescription>
              </CardHeader>

              <CardContent className="space-y-5">
                <MiniTimeCorrectionChart />

                <p className="leading-7 text-muted-foreground">
                  价格没有明显深回撤，而是在高位或低位长时间横盘。
                  市场主要通过时间来消化前面的快速趋势。
                </p>

                <div className="rounded-lg border border-border bg-muted/30 p-4 font-mono text-sm">
                  <p>1900 → 2500</p>
                  <p className="text-brand">2500 ↔ 2430</p>
                  <p className="text-brand">2500 ↔ 2450</p>
                  <p>持续多日...</p>
                </div>

                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span>
                    修正主要发生在{" "}
                    <span className="font-medium text-foreground">
                      Time Axis
                    </span>
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-brand/20 bg-brand/3">
            <CardContent className="pt-6">
              <div className="flex gap-3">
                <MoveHorizontal className="mt-1 h-5 w-5 shrink-0 text-brand" />

                <div>
                  <p className="font-medium">
                    Time Correction 不需要漂亮的 HL → HH → HL → HH
                  </p>

                  <p className="mt-2 leading-7 text-muted-foreground">
                    强趋势之后，价格完全可以直接进入一个 horizontal range。
                    它没有明显回调结构，却仍然在进行 correction。 这正是你前面
                    ETH 图里看到的那种情况。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-10" />

        {/* Price + time */}
        <section className="space-y-6">
          <div className="space-y-2">
            <Badge variant="secondary">03 · Price × Time</Badge>

            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Price Correction 与 Time Correction 不是完全分开的
            </h2>
          </div>

          <Card className="border-card-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CandlestickChart className="h-5 w-5 text-brand" />
                现实行情通常是两者混合
              </CardTitle>

              <CardDescription>
                Correction 应该理解成二维过程，而不是只有回撤百分比。
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-3">
                <MetricBox
                  title="Price"
                  value="回撤多少？"
                  description="价格空间"
                />

                <MetricBox
                  title="Time"
                  value="持续多久？"
                  description="时间空间"
                />

                <MetricBox
                  title="Volatility"
                  value="波动如何变化？"
                  description="扩张 / 收缩"
                />
              </div>

              <div className="rounded-lg border border-border bg-muted/30 p-5">
                <p className="font-mono text-sm leading-7">
                  2500 → 2380{" "}
                  <span className="text-muted-foreground">
                    // Price Correction
                  </span>
                  <br />
                  2380 ↔ 2450 for 10 days{" "}
                  <span className="text-muted-foreground">
                    // Time Correction
                  </span>
                </p>
              </div>

              <p className="leading-7 text-muted-foreground">
                所以一个 correction 完全可能先通过价格快速回撤，
                然后再通过横盘时间继续消化。
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-10" />

        {/* convergence */}
        <section className="space-y-6">
          <div className="space-y-2">
            <Badge variant="secondary">04 · Convergence</Badge>

            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Correction 为什么经常伴随着 Convergence？
            </h2>

            <p className="max-w-3xl leading-7 text-muted-foreground">
              当市场持续重新平衡时，原本强烈的单边力量可能逐渐消失，
              买卖双方开始在更接近的价格区域成交。 这时候波动可能逐步压缩。
            </p>
          </div>

          <Card className="border-card-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GitMerge className="h-5 w-5 text-brand" />
                Volatility Convergence
              </CardTitle>

              <CardDescription>
                Swing range 越来越小，市场逐渐进入 compression。
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <ConvergenceChart />

              <div className="grid gap-4 md:grid-cols-3">
                <MetricBox
                  title="Swing Range"
                  value="120 → 80 → 45"
                  description="波动幅度缩小"
                />

                <MetricBox
                  title="Volatility"
                  value="High → Low"
                  description="波动收缩"
                />

                <MetricBox
                  title="Displacement"
                  value="Strong → Weak"
                  description="推动效率下降"
                />
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <ConceptCard
              icon={<MoveHorizontal className="h-5 w-5 text-brand" />}
              title="Range Shrinks"
              subtitle="震荡区间逐渐缩小"
            >
              每一轮向上和向下的 swing 都比之前更短，
              市场开始集中在越来越窄的价格区域。
            </ConceptCard>

            <ConceptCard
              icon={<Gauge className="h-5 w-5 text-brand" />}
              title="Volatility Contracts"
              subtitle="波动率下降"
            >
              Candle range、ATR 或 realized volatility
              都可能随着盘整推进而下降。
            </ConceptCard>
          </div>
        </section>

        <Separator className="my-10" />

        {/* Not necessary */}
        <section className="space-y-6">
          <div className="space-y-2">
            <Badge variant="secondary">05 · Important Distinction</Badge>

            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Correction 不等于 Convergence
            </h2>

            <p className="max-w-3xl leading-7 text-muted-foreground">
              Convergence 是 correction 过程中常见的一种表现， 但不是所有
              correction 都必须越来越窄。
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <StateCard
              icon={<MoveHorizontal className="h-5 w-5" />}
              title="Range Correction"
              formula="2500 ↔ 2400"
              description="横盘，但是整个 range 基本不缩小。"
            />

            <StateCard
              icon={<GitMerge className="h-5 w-5" />}
              title="Converging Correction"
              formula="120 → 80 → 45"
              description="每一轮 swing 越来越小，真正形成 compression。"
            />

            <StateCard
              icon={<Activity className="h-5 w-5" />}
              title="Expanding Correction"
              formula="40 → 70 → 120"
              description="盘整过程中波动反而扩大，说明双方冲突增强。"
            />
          </div>
        </section>

        <Separator className="my-10" />

        {/* volatility return */}
        <section className="space-y-6">
          <div className="space-y-2">
            <Badge variant="secondary">06 · Volatility Expansion</Badge>

            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              为什么收敛之后，经常又出现更大的波动？
            </h2>
          </div>

          <Card className="border-card-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-brand" />
                Compression → Expansion
              </CardTitle>

              <CardDescription>
                市场从低波动平衡状态重新进入不平衡状态。
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-8">
              <CompressionExpansionChart />

              <div className="grid gap-6 md:grid-cols-3">
                <Step
                  number="01"
                  title="Liquidity Accumulates"
                  description="横盘过程中，range high / low 附近逐渐聚集止损、突破单和挂单。"
                />

                <Step
                  number="02"
                  title="Balance Breaks"
                  description="新的主动订单流进入以后，原来的买卖平衡开始被打破。"
                />

                <Step
                  number="03"
                  title="Price Expands"
                  description="价格快速离开旧的交易区域，重新寻找能够匹配对手盘的新区域。"
                />
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-10" />

        {/* full model */}
        <section className="space-y-6">
          <div className="space-y-2">
            <Badge variant="outline" className="border-brand/40 text-brand">
              Complete Framework
            </Badge>

            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              把整个过程连起来
            </h2>
          </div>

          <Card className="border-brand/20 bg-card">
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <div className="flex min-w-205 items-center justify-between gap-3">
                  <FrameworkNode
                    icon={<Zap className="h-5 w-5" />}
                    title="Expansion"
                    description="Order-flow imbalance"
                  />

                  <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground" />

                  <FrameworkNode
                    icon={<Scale className="h-5 w-5" />}
                    title="Correction"
                    description="Rebalancing"
                  />

                  <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground" />

                  <div className="space-y-2">
                    <SmallNode title="Price Correction" />
                    <div className="text-center text-xs text-muted-foreground">
                      OR / AND
                    </div>
                    <SmallNode title="Time Correction" />
                  </div>

                  <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground" />

                  <FrameworkNode
                    icon={<GitMerge className="h-5 w-5" />}
                    title="Convergence?"
                    description="Possible compression"
                  />

                  <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground" />

                  <FrameworkNode
                    icon={<Activity className="h-5 w-5" />}
                    title="Expansion"
                    description="Volatility returns"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-card-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-brand" />
                最终框架
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-lg font-medium">
                市场不是简单地在“上涨”和“下跌”之间切换。
              </p>

              <p className="leading-7 text-muted-foreground">
                更有用的理解是，市场不断在
                <span className="mx-1 font-medium text-foreground">
                  Expansion
                </span>
                、
                <span className="mx-1 font-medium text-foreground">
                  Rebalancing
                </span>
                、
                <span className="mx-1 font-medium text-foreground">
                  Compression
                </span>
                与新的
                <span className="mx-1 font-medium text-foreground">
                  Expansion
                </span>
                之间切换。
              </p>

              <div className="grid gap-3 pt-2 md:grid-cols-3">
                <SummaryRow
                  icon={<CandlestickChart className="h-4 w-4" />}
                  label="Price"
                  text="市场移动了多远"
                />

                <SummaryRow
                  icon={<Clock3 className="h-4 w-4" />}
                  label="Time"
                  text="市场花了多久重新平衡"
                />

                <SummaryRow
                  icon={<Activity className="h-4 w-4" />}
                  label="Volatility"
                  text="市场处于扩张还是收缩"
                />
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}

function FlowBox({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-muted/20 p-4">
      <div className="mb-3 text-brand">{icon}</div>

      <p className="font-semibold">{title}</p>

      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

function ConceptCard({
  icon,
  title,
  subtitle,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <Card className="border-card-border bg-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          {icon}
          {title}
        </CardTitle>

        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>

      <CardContent>
        <p className="leading-7 text-muted-foreground">{children}</p>
      </CardContent>
    </Card>
  );
}

function MetricBox({
  title,
  value,
  description,
}: {
  title: string;
  value: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-muted/20 p-4">
      <p className="text-sm text-muted-foreground">{title}</p>

      <p className="mt-2 font-mono font-semibold text-foreground">{value}</p>

      <p className="mt-1 text-xs text-muted-foreground">{description}</p>
    </div>
  );
}

function StateCard({
  icon,
  title,
  formula,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  formula: string;
  description: string;
}) {
  return (
    <Card className="border-card-border bg-card">
      <CardHeader>
        <div className="mb-2 text-brand">{icon}</div>

        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="rounded-md border border-border bg-muted/30 px-3 py-2 font-mono text-sm">
          {formula}
        </div>

        <p className="text-sm leading-6 text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

function Step({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <p className="font-mono text-xs text-brand">{number}</p>

      <p className="mt-2 font-semibold">{title}</p>

      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

function FrameworkNode({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="min-w-36.25 rounded-xl border border-border bg-muted/20 p-4 text-center">
      <div className="mx-auto mb-2 flex w-fit text-brand">{icon}</div>

      <p className="font-semibold">{title}</p>

      <p className="mt-1 text-xs text-muted-foreground">{description}</p>
    </div>
  );
}

function SmallNode({ title }: { title: string }) {
  return (
    <div className="min-w-38.75 rounded-lg border border-border bg-muted/20 px-4 py-3 text-center text-sm font-medium">
      {title}
    </div>
  );
}

function SummaryRow({
  icon,
  label,
  text,
}: {
  icon: React.ReactNode;
  label: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-border bg-muted/20 p-4">
      <div className="mt-0.5 text-brand">{icon}</div>

      <div>
        <p className="font-medium">{label}</p>
        <p className="mt-1 text-sm text-muted-foreground">{text}</p>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   CHARTS                                   */
/* -------------------------------------------------------------------------- */

function MiniPriceCorrectionChart() {
  return (
    <div className="rounded-xl border border-border bg-muted/20 p-4">
      <svg viewBox="0 0 500 200" className="w-full">
        <line
          x1="20"
          y1="175"
          x2="480"
          y2="175"
          stroke="currentColor"
          className="text-border"
        />

        <path
          d="M35 165 C95 155 120 125 165 100 C210 75 225 30 285 30"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          className="text-brand"
        />

        <path
          d="M285 30 C320 45 340 95 405 130"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          className="text-muted-foreground"
        />

        <text
          x="70"
          y="80"
          fill="currentColor"
          className="fill-muted-foreground text-[13px]"
        >
          Expansion
        </text>

        <text
          x="325"
          y="90"
          fill="currentColor"
          className="fill-muted-foreground text-[13px]"
        >
          Correction
        </text>
      </svg>
    </div>
  );
}

function MiniTimeCorrectionChart() {
  return (
    <div className="rounded-xl border border-border bg-muted/20 p-4">
      <svg viewBox="0 0 500 200" className="w-full">
        <line
          x1="20"
          y1="175"
          x2="480"
          y2="175"
          stroke="currentColor"
          className="text-border"
        />

        <path
          d="M35 165 C90 155 120 120 165 95 C205 70 225 30 270 30"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          className="text-brand"
        />

        <path
          d="M270 30
               C288 55 305 28 325 50
               C345 70 360 35 380 52
               C400 67 420 38 455 50"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          className="text-muted-foreground"
        />

        <text x="70" y="80" className="fill-muted-foreground text-[13px]">
          Expansion
        </text>

        <text x="315" y="95" className="fill-muted-foreground text-[13px]">
          Time Correction
        </text>
      </svg>
    </div>
  );
}

function ConvergenceChart() {
  return (
    <div className="rounded-xl border border-border bg-muted/20 p-4">
      <svg viewBox="0 0 700 260" className="w-full">
        <path
          d="M40 210
               L125 35
               L210 220
               L290 70
               L360 195
               L420 100
               L475 175
               L520 120
               L565 160
               L610 135
               L650 150"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-brand"
        />

        <path
          d="M120 40 L650 145"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="8 8"
          className="text-muted-foreground"
        />

        <path
          d="M125 220 L650 145"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="8 8"
          className="text-muted-foreground"
        />

        <text x="65" y="25" className="fill-muted-foreground text-[13px]">
          High Volatility
        </text>

        <text x="520" y="105" className="fill-muted-foreground text-[13px]">
          Compression
        </text>
      </svg>
    </div>
  );
}

function CompressionExpansionChart() {
  return (
    <div className="rounded-xl border border-border bg-muted/20 p-4">
      <svg viewBox="0 0 900 280" className="w-full">
        <path
          d="M35 225
               C90 215 115 150 170 75
               C205 30 245 55 275 110

               C305 160 340 125 370 150
               C400 175 425 140 450 160
               C475 177 500 150 530 165

               C570 180 595 130 625 85
               C675 25 740 55 855 25"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          className="text-brand"
        />

        <line
          x1="290"
          y1="25"
          x2="290"
          y2="245"
          stroke="currentColor"
          strokeDasharray="6 8"
          className="text-border"
        />

        <line
          x1="550"
          y1="25"
          x2="550"
          y2="245"
          stroke="currentColor"
          strokeDasharray="6 8"
          className="text-border"
        />

        <text x="95" y="265" className="fill-muted-foreground text-[13px]">
          Expansion
        </text>

        <text x="335" y="265" className="fill-muted-foreground text-[13px]">
          Correction / Compression
        </text>

        <text x="690" y="265" className="fill-muted-foreground text-[13px]">
          Expansion
        </text>
      </svg>
    </div>
  );
}
