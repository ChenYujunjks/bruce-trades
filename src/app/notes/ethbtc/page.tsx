import type { Metadata } from "next";
import Image from "next/image";
import {
  AlertTriangle,
  ArrowUpRight,
  CheckCircle2,
  CircleX,
  GitCompareArrows,
  LineChart,
  Repeat2,
  Telescope,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "ETH/BTC 熊市相对强势观察 | Bruce Chen",
  description:
    "对比 2022 与 2026 年 ETH/BTC 结构，区分历史规律、独立催化与交易确认。",
};

const observations = [
  {
    label: "2022 样本",
    value: "约 0.053 → 0.085",
    detail: "7 月中旬至 9 月上旬，ETH/BTC 最大涨幅约 60%。",
  },
  {
    label: "2026 当前结构",
    value: "约 0.0256 → 0.0298",
    detail: "目前更像底部反转初段，尚未等同于 2022 年完整行情。",
  },
  {
    label: "第一验证区",
    value: "0.0300–0.0312",
    detail: "需要有效突破并站稳，才能确认相对强势继续扩张。",
  },
];

export default function EthBtcNotePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <header className="space-y-4 motion-safe:animate-fadeSlide">
          <Badge variant="outline" className="border-brand/40 text-brand">
            ETH/BTC Relative Strength
          </Badge>
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight md:text-5xl">
            BTC 熊市里，ETH/BTC 会不会重演 2022 年的强势上涨？
          </h1>
          <p className="max-w-3xl leading-7 text-muted-foreground">
            我的观察是：2022 年 7 月到 9 月，即使 BTC 仍处于熊市，ETH/BTC
            却走出了一段强烈的相对上涨，并在 9 月形成此后多年都未突破的高点。
            2026 年的结构开始出现相似之处，但“相似”只能建立假设，不能直接证明历史必然重演。
          </p>
        </header>

        <Card className="mt-8 border-brand/30 bg-brand/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Telescope className="h-5 w-5 text-brand" />
              先给结论
            </CardTitle>
            <CardDescription>这个想法有逻辑基础，但真正的规律不是“四年一次”。</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 leading-7">
            <p>
              更可靠的解释是：当 BTC 的单边下跌暂时放缓、ETH 出现独立催化，且 ETH/BTC
              从长期超卖区重新站上关键均线时，资金会从“只求避险”转向“寻找更高弹性的核心资产”，从而推动 ETH
              相对 BTC 走强。
            </p>
            <p className="text-muted-foreground">
              因此，2026 年值得跟踪的不是日历是否刚好相隔四年，而是同一组条件有没有再次出现：
              <strong className="text-foreground">
                {" "}BTC 下跌动能减弱、ETH/BTC 完成底部结构、突破长期成本线，以及 ETH 自身出现新的基本面催化。
              </strong>
            </p>
          </CardContent>
        </Card>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          {observations.map((item) => (
            <Card key={item.label} className="border-card-border bg-card">
              <CardHeader className="pb-3">
                <CardDescription>{item.label}</CardDescription>
                <CardTitle className="text-2xl text-brand">{item.value}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-6 text-muted-foreground">
                {item.detail}
              </CardContent>
            </Card>
          ))}
        </section>

        <Separator className="my-10" />

        <section className="space-y-6">
          <div>
            <Badge variant="secondary">Historical Sample</Badge>
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
              2022：熊市中的相对强势行情
            </h2>
          </div>

          <figure className="overflow-hidden rounded-2xl border border-card-border bg-card">
            <Image
              src="/images/trading/ethbtc2022.png"
              alt="2022 年 ETH/BTC 日线图，上升通道从约 0.053 延伸至约 0.085"
              width={2940}
              height={1912}
              sizes="(max-width: 1024px) 100vw, 960px"
              className="h-auto w-full"
              priority
            />
            <figcaption className="border-t px-5 py-4 text-sm leading-6 text-muted-foreground">
              图一：2022 年 ETH/BTC 从 7 月低位快速回升，突破短中长期均线后沿通道上行，9 月上旬在约
              0.085 附近见顶。
            </figcaption>
          </figure>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-card-border bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LineChart className="h-5 w-5 text-brand" />
                  图表告诉我们的
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm leading-6 text-muted-foreground">
                <p>低点附近出现快速拒绝，说明相对卖压开始衰竭。</p>
                <p>价格依次收复 EMA 21、55、100 和 200，趋势从反弹升级为相对强势。</p>
                <p>突破长期均线后回踩不破，才形成可持续的上升通道。</p>
              </CardContent>
            </Card>

            <Card className="border-amber-500/30 bg-amber-500/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                  不能忽略 The Merge
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm leading-6 text-muted-foreground">
                <p>
                  2022 年这段行情有非常明确的 ETH 独立催化：市场提前交易 9 月的 The Merge。
                  Coinbase 当年 7 月也记录到 ETH 因 Merge 预期而领涨市场。
                </p>
                <p>
                  Merge 于 2022 年 9 月 15 日完成，而 ETH/BTC 在事件前后形成阶段高点，带有典型的
                  “buy the rumor, sell the news” 特征。
                </p>
                <div className="flex flex-wrap gap-3 pt-1">
                  <a
                    href="https://ethereum.org/roadmap/merge/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-brand hover:underline"
                  >
                    Ethereum 官方记录 <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="https://www.coinbase.com/institutional/research-insights/research/weekly-market-commentary/weekly-market-commentary-july-29-2022"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-brand hover:underline"
                  >
                    Coinbase 2022 市场评论 <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-10" />

        <section className="space-y-6">
          <div>
            <Badge variant="secondary">Current Hypothesis</Badge>
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
              2026：相似结构已经出现，但仍在确认阶段
            </h2>
          </div>

          <figure className="overflow-hidden rounded-2xl border border-card-border bg-card">
            <Image
              src="/images/trading/ethbtc2026.png"
              alt="2026 年 ETH/BTC 日线图，从约 0.0256 反弹至 0.0298 附近"
              width={2940}
              height={1912}
              sizes="(max-width: 1024px) 100vw, 960px"
              className="h-auto w-full"
            />
            <figcaption className="border-t px-5 py-4 text-sm leading-6 text-muted-foreground">
              图二：2026 年 ETH/BTC 从约 0.0256 构筑低点后回升，目前正在测试 0.0300
              一带与长期均线密集区。
            </figcaption>
          </figure>

          <Card className="border-card-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GitCompareArrows className="h-5 w-5 text-brand" />
                相似点与关键差异
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3">
                <h3 className="flex items-center gap-2 font-semibold text-emerald-500">
                  <Repeat2 className="h-4 w-4" /> 相似点
                </h3>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
                  <li>都经历了长期下跌和低位压缩，潜在卖方已经释放较多。</li>
                  <li>低点后出现高低点抬升，并重新收复多条短中期均线。</li>
                  <li>BTC 弱势环境下，ETH 开始表现出更高的相对弹性。</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="flex items-center gap-2 font-semibold text-amber-500">
                  <AlertTriangle className="h-4 w-4" /> 关键差异
                </h3>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
                  <li>2022 有 The Merge 这一可定价的明确事件，2026 需要自己的催化。</li>
                  <li>2022 突破长期均线后已经进入趋势扩张；2026 仍靠近均线密集区。</li>
                  <li>四年周期只是时间上的巧合，目前只有一个历史样本，不能形成统计规律。</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <Card className="border-emerald-500/30 bg-emerald-500/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-emerald-500">
                <CheckCircle2 className="h-5 w-5" /> 多头确认条件
              </CardTitle>
              <CardDescription>满足得越多，2022 类比才越可信。</CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal space-y-3 pl-5 text-sm leading-6 text-muted-foreground">
                <li>日线稳定站在约 0.0292–0.0294 的均线密集区上方。</li>
                <li>放量突破 0.0300，并把它从压力转化为回踩支撑。</li>
                <li>进一步突破图中的 0.0308–0.0312 目标/压力区。</li>
                <li>上涨不只依靠 BTC 下跌，而是 ETH/USD 同时保持相对韧性。</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="border-destructive/30 bg-destructive/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <CircleX className="h-5 w-5" /> 假设失效条件
              </CardTitle>
              <CardDescription>类比失效比预测目标更重要。</CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal space-y-3 pl-5 text-sm leading-6 text-muted-foreground">
                <li>突破 0.0300 后迅速跌回长期均线下方，形成假突破。</li>
                <li>跌破约 0.0288，短中期均线重新转为空头排列。</li>
                <li>进一步失守 0.0265，则当前上升通道结构明显受损。</li>
                <li>跌破约 0.0256 前低，当前“2022 重演”假设应被否定。</li>
              </ol>
            </CardContent>
          </Card>
        </section>

        <Card className="mt-8 border-brand/30 bg-card">
          <CardHeader>
            <CardTitle>我的最终判断</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 leading-7 text-muted-foreground">
            <p>
              2026 年 ETH/BTC 确实具备发展成中期相对强势行情的技术基础，但当前更准确的定义是
              <strong className="text-foreground">“值得验证的早期反转”</strong>，不是
              <strong className="text-foreground">“已经确认的四年周期重演”</strong>。
            </p>
            <p>
              如果价格能站稳长期成本区、突破 0.0308–0.0312，并在回踩时守住，那么 2022
              的类比会明显增强；如果反复被 0.0300 附近拒绝，则这更可能只是长期下降趋势中的一次反弹。
            </p>
            <p className="rounded-xl border border-brand/20 bg-brand/5 p-4 text-sm">
              核心原则：先用历史提出假设，再让当前价格确认假设。不要因为图形相似，就提前把未来结果写进仓位。
            </p>
          </CardContent>
        </Card>

        <p className="mt-6 text-xs leading-5 text-muted-foreground">
          本页是个人市场研究笔记，不构成投资建议。图中数值来自保存时的 TradingView 截图，市场价格会持续变化。
        </p>
      </div>
    </main>
  );
}
