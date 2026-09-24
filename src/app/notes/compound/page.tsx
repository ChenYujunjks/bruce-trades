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
  ArrowRight,
  Banknote,
  BrainCircuit,
  CircleDollarSign,
  Crosshair,
  Landmark,
  Layers3,
  LineChart,
  PiggyBank,
  Scale,
  ShieldCheck,
  TrendingUp,
  WalletCards,
  Zap,
} from "lucide-react";

export default function TradingCapital100KPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-10">
        {/* Hero */}
        <section className="mb-10 space-y-4 motion-safe:animate-fadeSlide">
          <Badge variant="outline" className="border-brand/40 text-brand">
            Trading Capital
          </Badge>

          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            当交易资金达到 $100k，会有什么本质区别？
          </h1>

          <p className="max-w-3xl text-muted-foreground">
            $100k 并不是一个神奇数字，但它是一个很重要的资金阶段。
            从这一刻开始，交易的重点逐渐从“如何快速做大本金”，转向
            “如何在控制风险的同时，让每一个正确决策产生有意义的美元收益”。
          </p>
        </section>

        {/* Conclusion */}
        <Card className="border-card-border bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scale className="h-5 w-5 text-brand" />
              先给结论
            </CardTitle>

            <CardDescription>
              $100k
              最大的价值，不是让你承担更大的风险，而是让你不需要承担那么大的风险。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <p>
              当账户只有 $10k–$20k 时，即使一笔交易做得很好，
              美元收益依然可能比较小，因此交易者很容易产生提高杠杆、
              增加单笔风险或者频繁交易的冲动。
            </p>

            <p>
              但到了 $100k，同样的交易系统、同样的风险比例，
              已经能够产生明显不同的结果。
            </p>

            <div className="rounded-xl border border-brand/20 bg-brand/5 p-4">
              <p className="text-sm text-muted-foreground">
                真正重要的变化是：
                <span className="font-medium text-brand">
                  {" "}
                  每一个百分点开始变得值钱，因此你不再需要依靠极端风险，
                  才能获得有意义的绝对收益。
                </span>
              </p>
            </div>
          </CardContent>
        </Card>

        <Separator className="my-8" />

        {/* Risk comparison */}
        <section className="grid gap-6 md:grid-cols-2">
          <Card className="border-card-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <WalletCards className="h-5 w-5 text-brand" />
                $15k 账户
              </CardTitle>

              <CardDescription>
                小账户阶段，美元风险和美元收益都比较有限。
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="rounded-xl border p-4">
                <p className="text-sm text-muted-foreground">单笔风险 0.5%</p>
                <p className="mt-1 text-2xl font-semibold">$75</p>
              </div>

              <div className="rounded-xl border p-4">
                <p className="text-sm text-muted-foreground">3R 盈利</p>
                <p className="mt-1 text-2xl font-semibold">$225</p>
              </div>

              <p className="text-sm text-muted-foreground">
                即使执行完全正确，一笔优秀交易产生的美元结果依然有限。
                这也是小账户交易者容易过度提高风险的原因之一。
              </p>
            </CardContent>
          </Card>

          <Card className="border-brand/30 bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CircleDollarSign className="h-5 w-5 text-brand" />
                $100k 账户
              </CardTitle>

              <CardDescription>
                策略没有变化，但资金效率开始发生明显变化。
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="rounded-xl border border-brand/20 bg-brand/5 p-4">
                <p className="text-sm text-muted-foreground">单笔风险 0.5%</p>
                <p className="mt-1 text-2xl font-semibold text-brand">$500</p>
              </div>

              <div className="rounded-xl border border-brand/20 bg-brand/5 p-4">
                <p className="text-sm text-muted-foreground">3R 盈利</p>
                <p className="mt-1 text-2xl font-semibold text-brand">$1,500</p>
              </div>

              <p className="text-sm text-muted-foreground">
                同样只冒 0.5% 的风险，一笔高质量交易已经能够贡献 $1,000–$2,000
                级别的 P&amp;L。
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-8" />

        {/* Difference 1 */}
        <Card className="mb-6 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Crosshair className="h-5 w-5 text-brand" />
              01. 你可以开始真正等待 A+ Setup
            </CardTitle>

            <CardDescription>
              账户越大，等待高质量机会的经济价值越高。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <p>
              小账户很容易出现一种心理： “这一笔只赚
              $100–$200，好像没有什么意义。”
            </p>

            <p>于是交易者开始主动寻找更多机会，而不是等待市场真正给出机会。</p>

            <div className="flex items-center gap-3 rounded-xl border p-4">
              <ArrowRight className="h-5 w-5 shrink-0 text-brand" />

              <p className="text-sm text-muted-foreground">
                到 $100k 后，一个 3R–4R 的优秀机会可能产生 $1,500–$2,000+
                的收益，因此
                <span className="font-medium text-foreground">
                  {" "}
                  “什么都不做，直到真正的机会出现”
                </span>
                本身开始成为一种有价值的行为。
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Difference 2 */}
        <Card className="mb-6 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-brand" />
              02. Risk % 可以下降，而美元收益反而上升
            </CardTitle>

            <CardDescription>
              这是从小账户进入中等规模账户后最重要的变化之一。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border p-4">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  Account
                </p>
                <p className="mt-2 text-xl font-semibold">$100k</p>
              </div>

              <div className="rounded-xl border p-4">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  Risk
                </p>
                <p className="mt-2 text-xl font-semibold">0.30%</p>
              </div>

              <div className="rounded-xl border border-brand/20 bg-brand/5 p-4">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  Dollar Risk
                </p>
                <p className="mt-2 text-xl font-semibold text-brand">$300</p>
              </div>
            </div>

            <p>如果这一笔交易最后达到 4R，那么收益就是：</p>

            <div className="rounded-xl border border-brand/20 bg-brand/5 p-5">
              <p className="text-3xl font-bold tracking-tight text-brand">
                $300 × 4R = $1,200
              </p>

              <p className="mt-2 text-sm text-muted-foreground">
                你不需要 risk 2%、3% 甚至 5%，依然能够获得有意义的绝对收益。
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Difference 3 */}
        <Card className="mb-6 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-brand" />
              03. 复利开始真正有威力
            </CardTitle>

            <CardDescription>
              从 $100k 开始，同样的百分比收益会对应完全不同的财富变化。
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border p-5">
                <p className="text-sm text-muted-foreground">+10%</p>
                <p className="mt-2 text-2xl font-bold">$10,000</p>
              </div>

              <div className="rounded-xl border p-5">
                <p className="text-sm text-muted-foreground">+20%</p>
                <p className="mt-2 text-2xl font-bold">$20,000</p>
              </div>

              <div className="rounded-xl border border-brand/20 bg-brand/5 p-5">
                <p className="text-sm text-muted-foreground">+50%</p>
                <p className="mt-2 text-2xl font-bold text-brand">$50,000</p>
              </div>
            </div>

            <p className="mt-5 text-sm text-muted-foreground">
              这也是为什么第一桶比较大的 Trading Capital 很重要。
              一旦本金跨过某个规模之后，你不再需要每年追求 3x，
              相对普通的收益率已经能够产生非常明显的绝对收益。
            </p>
          </CardContent>
        </Card>

        {/* Difference 4 */}
        <Card className="mb-6 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers3 className="h-5 w-5 text-brand" />
              04. 可以开始管理 Portfolio Risk
            </CardTitle>

            <CardDescription>
              资金规模增加后，风险管理开始从单笔交易升级到整个组合。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <p>
              $100k 不代表一定要把所有资本压在一个 BTC setup 上。
              你可以开始同时考虑多个市场和多个风险来源。
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "BTC 主趋势仓位",
                "ETH 相对强弱机会",
                "XAU / Index Setup",
                "Cash Reserve",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border p-4"
                >
                  <div className="h-2 w-2 rounded-full bg-brand" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-brand/20 bg-brand/5 p-4">
              <p className="text-sm text-muted-foreground">
                特别要注意：
                <span className="font-medium text-brand">
                  {" "}
                  BTC Long + ETH Long 并不一定是真正的两笔独立交易。
                </span>
                它们可能暴露于同一个 Crypto Beta，因此需要控制组合总风险。
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Difference 5 */}
        <Card className="mb-6 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Banknote className="h-5 w-5 text-brand" />
              05. Trading 开始产生有意义的现金流
            </CardTitle>

            <CardDescription>但 $100k 仍然不是“稳定工资账户”。</CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border p-5">
                <p className="text-sm text-muted-foreground">$100k × 30%</p>
                <p className="mt-2 text-3xl font-bold">$30k</p>
              </div>

              <div className="rounded-xl border border-brand/20 bg-brand/5 p-5">
                <p className="text-sm text-muted-foreground">$100k × 50%</p>
                <p className="mt-2 text-3xl font-bold text-brand">$50k</p>
              </div>
            </div>

            <p>
              到这个阶段，Trading P&amp;L 已经可能覆盖相当一部分生活支出。
              但危险也来自这里：如果开始要求市场“每年必须给我 $50k”，
              就会重新出现收入压力。
            </p>

            <p className="text-sm text-muted-foreground">
              所以 $100k 更像是
              <span className="font-medium text-foreground">
                {" "}
                从资本积累向职业化交易过渡的阶段，
              </span>
              而不是完全依赖交易收入生活的终点。
            </p>
          </CardContent>
        </Card>

        {/* Capital stages */}
        <Card className="mb-6 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LineChart className="h-5 w-5 text-brand" />
              资金阶段的变化
            </CardTitle>

            <CardDescription>
              不同资金规模，对应的核心任务应该不同。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-3">
            {[
              {
                capital: "$15k",
                goal: "验证 Edge，建立执行纪律，首先避免 Ruin。",
              },
              {
                capital: "$30k–$50k",
                goal: "建立稳定的 Expectancy，让复利开始发挥作用。",
              },
              {
                capital: "$100k",
                goal: "让 Trading 开始产生有意义的绝对美元收益。",
                active: true,
              },
              {
                capital: "$200k–$300k",
                goal: "开始具备认真考虑 Full-time Trading 的条件。",
              },
              {
                capital: "$500k+",
                goal: "重点逐渐从快速增长，转向 Capital Preservation。",
              },
            ].map((stage) => (
              <div
                key={stage.capital}
                className={`flex flex-col gap-2 rounded-xl border p-4 sm:flex-row sm:items-center sm:justify-between ${
                  stage.active ? "border-brand/30 bg-brand/5" : ""
                }`}
              >
                <span
                  className={`font-semibold ${
                    stage.active ? "text-brand" : ""
                  }`}
                >
                  {stage.capital}
                </span>

                <span className="max-w-2xl text-sm text-muted-foreground">
                  {stage.goal}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Profit extraction */}
        <Card className="mb-6 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PiggyBank className="h-5 w-5 text-brand" />
              06. 到 $100k 后，要开始学会提取利润
            </CardTitle>

            <CardDescription>
              Trading P&amp;L 只有离开高风险账户之后，才逐渐变成真正的财富。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-center">
              <div className="flex-1 rounded-xl border p-4 text-center">
                <p className="text-sm text-muted-foreground">Trading Account</p>
                <p className="mt-2 text-xl font-semibold">$100k</p>
              </div>

              <ArrowRight className="mx-auto h-5 w-5 text-muted-foreground md:mx-0" />

              <div className="flex-1 rounded-xl border border-brand/20 bg-brand/5 p-4 text-center">
                <p className="text-sm text-muted-foreground">Bull Market</p>
                <p className="mt-2 text-xl font-semibold text-brand">$160k</p>
              </div>

              <ArrowRight className="mx-auto h-5 w-5 text-muted-foreground md:mx-0" />

              <div className="flex-1 rounded-xl border p-4 text-center">
                <p className="text-sm text-muted-foreground">
                  Withdraw / Reserve
                </p>
                <p className="mt-2 text-xl font-semibold">$20k–$30k</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              不一定需要让全部利润继续留在高波动环境中。 可以逐渐把一部分
              Trading P&amp;L 转移到现金、Treasury、 长期投资或者生活储备中。
            </p>

            <div className="rounded-xl border border-brand/20 bg-brand/5 p-4">
              <p className="text-sm font-medium text-brand">
                Trading P&amp;L → Protected Capital → Real Wealth
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Psychology */}
        <Card className="mb-6 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BrainCircuit className="h-5 w-5 text-brand" />
              07. 心理模式需要改变
            </CardTitle>

            <CardDescription>
              $100k 之后最危险的想法，反而是“我终于可以更激进了”。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border p-5">
                <Badge variant="outline" className="mb-3">
                  Small Account
                </Badge>

                <p className="font-medium">$15k 阶段</p>

                <p className="mt-2 text-sm text-muted-foreground">
                  核心任务更多是增长资本、验证 Edge、提高执行能力。
                </p>
              </div>

              <div className="rounded-xl border border-brand/30 bg-brand/5 p-5">
                <Badge
                  variant="outline"
                  className="mb-3 border-brand/40 text-brand"
                >
                  $100k+
                </Badge>

                <p className="font-medium">$100k 阶段</p>

                <p className="mt-2 text-sm text-muted-foreground">
                  核心任务逐渐变成增长资本 + 保护资本。
                </p>
              </div>
            </div>

            <p>
              如果 $100k 之后依然继续不断提高 leverage 和单笔 risk，
              那么账户规模增长带来的优势反而会被重新抵消。
            </p>
          </CardContent>
        </Card>

        {/* Final */}
        <Card className="border-brand/30 bg-brand/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-brand" />
              最重要的一句话
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <blockquote className="border-l-2 border-brand pl-4 text-lg font-medium leading-relaxed md:text-xl">
              $100k 的意义不是让你终于可以冒更大的风险，
              而是让你终于可以少冒一点风险， 同时依然获得足够有意义的收益。
            </blockquote>

            <p className="text-sm text-muted-foreground">
              $15k 阶段重点是建立能力和增长本金；$100k 阶段开始进入 Capital
              Growth 与 Capital Preservation 并存的阶段。
              真正成熟的交易者，随着本金增加，通常会逐渐降低 Risk %，
              而不是不断提高风险。
            </p>
          </CardContent>
        </Card>

        {/* Footer note */}
        <div className="mt-8 flex items-start gap-3 rounded-xl border border-dashed p-4">
          <Landmark className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />

          <p className="text-xs leading-relaxed text-muted-foreground">
            Note: 本页讨论的是交易资金管理框架，而不是固定收益目标。
            市场环境、策略 Expectancy、最大回撤、交易频率与个人生活成本，
            都会影响适合的资本规模和风险水平。
          </p>
        </div>
      </div>
    </main>
  );
}
