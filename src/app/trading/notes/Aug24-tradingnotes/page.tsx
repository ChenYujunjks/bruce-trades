import {
  AlertTriangle,
  ArrowDownRight,
  Brain,
  CircleDollarSign,
  GitBranch,
  Lightbulb,
  RefreshCcw,
  Scale,
  ShieldCheck,
  Target,
} from "lucide-react";

import { Card } from "@/components/ui/card";

const timeline = [
  {
    step: "01",
    title: "63,000 附近建立多单",
    description:
      "交易员在 BTC 约 63,000 附近建立多头仓位，当时给出的阶段目标大约是 74,000。他对更高时间周期的核心判断是：牛市已经重新回来。",
    takeaway:
      "这里最重要的是，他原本的 Higher Timeframe Bias 其实是偏多，而不是长期看空。",
  },
  {
    step: "02",
    title: "74,000～76,000 附近开始做空",
    description:
      "价格到达原先阶段目标后，他结束此前的多头思路，并在约 74,000～76,000 区域重新建立短线空单。",
    takeaway:
      "这是 Tactical Short，而不是把长期观点彻底转成熊市。短周期交易方向和长期市场观点可以不同。",
  },
  {
    step: "03",
    title: "BTC 快速拉升到 79,500",
    description:
      "行情快速向上，空单进入明显不利状态。按照自己的风险管理系统，他在约 79,500 附近减掉了大部分仓位，并因此产生大约 1,000 万美元的已实现亏损。",
    takeaway: "真正困难的决策发生在这里：继续相信自己的判断，还是先降低风险。",
  },
  {
    step: "04",
    title: "价格后来重新回到 76,000",
    description:
      "周末 BTC 又重新回到了约 76,000。事后看，如果他当时在 79,500 什么都不做、一直硬扛，这笔交易甚至已经重新接近不亏。",
    takeaway:
      "这正是最容易产生错误学习的地方：结果变好了，不代表之前承担巨大风险的行为就是正确的。",
  },
  {
    step: "05",
    title: "重新思考 80,400 的硬止损",
    description:
      "原本这笔交易的计划是 80,400 硬止损。但经过两天冷静之后，他开始重新问自己：如果现在已经认为这笔交易很可能是错的，是否还必须机械地等到 80,400 才退出？",
    takeaway:
      "止损不仅可以是价格止损，也可以是交易逻辑和市场行为发生变化后的主动退出。",
  },
  {
    step: "06",
    title: "准备在重新站稳 78,000～78,500 后提前认错",
    description:
      "他的最新计划变成：如果美股开盘以后 BTC 日线重新站回 78,000～78,500，就开始平掉空单，接受亏损并暂时休息，而不是为了证明自己正确继续死守。",
    takeaway:
      "主动认错并不意味着交易系统失败，有时候反而是在保护自己不被一笔交易绑架。",
  },
];

const lessons = [
  {
    icon: Scale,
    title: "决策质量 ≠ 最终结果",
    description:
      "79,500 减仓以后，价格重新跌回 76,000，很容易让人产生“早知道就不减仓”的想法。但交易决策必须使用当时可获得的信息评价，而不能使用未来行情倒推。",
  },
  {
    icon: AlertTriangle,
    title: "扛单最危险的地方，是它偶尔真的会成功",
    description:
      "如果每一次扛单都立刻爆仓，反而没人会长期坚持。真正危险的是，价格经常会回来，让交易员逐渐相信“不止损也没关系”。这种错误行为因此被不断奖励。",
  },
  {
    icon: RefreshCcw,
    title: "过去的亏损是沉没成本",
    description:
      "前面已经实现的亏损，不应该成为继续持仓的理由。现在的仓位应该重新独立评估：如果此刻完全没有仓位，你是否还愿意在当前位置重新建立同样的交易？",
  },
  {
    icon: GitBranch,
    title: "Hard Stop 和 Thesis Invalidation 是两回事",
    description:
      "80,400 是预先设置的价格止损，但如果市场在到达这个价格之前已经表现出与原交易预期完全不同的结构，那么可以提前结束交易，而不必机械等待硬止损。",
  },
  {
    icon: Brain,
    title: "不要让仓位变成身份",
    description:
      "危险的心理变化通常是：我持有空单 → 我认为市场会跌 → 我必须证明我是对的。到了最后，交易员已经不再观察市场，而是在保护自己的观点。",
  },
  {
    icon: Target,
    title: "不要为了赢回这一单，错过下一段真正的大趋势",
    description:
      "如果更高周期依然看多，那么一笔短线空单失败以后，最大的风险不只是这一单亏钱，而是因为执着于回本，导致真正的上涨趋势出现时仍然站在错误的一边。",
  },
];

const selfQuestions = [
  "如果我现在完全没有仓位，我还会主动开这一单吗？",
  "我现在继续持有，是因为 setup 仍然有效，还是因为我想回本？",
  "如果不知道自己的开仓价格，我还会做出同样的决定吗？",
  "市场现在的表现，是否仍然符合我进场时预期的路径？",
  "我是在执行原来的交易系统，还是在保护自己的观点？",
  "如果这一单直接止损，我是否能够马上接受下一笔相反方向的机会？",
];

export const metadata = {
  title: "不要奖励扛单 | Trading Notes",
  description:
    "通过一笔 BTC 空单复盘结果偏差、扛单、沉没成本、主动认错和交易观点失效。",
};

export default function DontRewardHoldingLosersPage() {
  return (
    <div className="mx-auto w-full max-w-5xl py-6 md:py-10">
      {/* Header */}
      <section className="mb-12">
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <ShieldCheck className="h-5 w-5" />
        </div>

        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Trading Psychology
        </p>

        <h1 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight md:text-4xl">
          不要因为一次扛回来，
          <br className="hidden sm:block" />
          就把侥幸误认为正确
        </h1>

        <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground">
          这是一笔 BTC
          空单的复盘。真正值得学习的不是交易员最后有没有把亏损赚回来，
          而是他如何处理一个更危险的问题：
          当价格后来重新回到成本附近时，是否应该因此认为之前硬扛才是正确选择？
        </p>
      </section>

      {/* Core idea */}
      <section className="mb-14">
        <Card className="border-primary/20 bg-primary/3 p-6 md:p-8">
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Lightbulb className="h-5 w-5" />
            </div>

            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Core Idea
              </p>

              <h2 className="mt-1 text-xl font-semibold tracking-tight">
                一个坏决策，完全可能产生一个好结果
              </h2>

              <p className="mt-4 text-base leading-8 text-muted-foreground">
                交易中最危险的学习机制之一，是错误行为偶尔会得到市场奖励。
                不设置止损、扩大止损、亏损补仓、硬扛仓位，都可能因为价格最终回来了而暂时成功。
                但这种成功并不能证明行为正确，反而可能让交易员下一次承担更大的风险。
              </p>

              <p className="mt-4 border-l-2 border-primary pl-4 text-sm font-medium leading-7">
                复盘要评价的是：当时的决策是否合理，而不是后来行情有没有替我解套。
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* Story */}
      <section className="mb-14">
        <div className="mb-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            The Story
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            这笔交易发生了什么
          </h2>
        </div>

        <div className="grid gap-4">
          {timeline.map((item) => (
            <Card key={item.step} className="p-5 md:p-6">
              <div className="flex gap-4">
                <div className="shrink-0 pt-1">
                  <span className="text-xs font-semibold text-muted-foreground">
                    {item.step}
                  </span>
                </div>

                <div className="min-w-0">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-base leading-7 text-muted-foreground">
                    {item.description}
                  </p>

                  <div className="mt-4 rounded-lg border bg-muted/40 px-4 py-3">
                    <p className="text-sm leading-6">
                      <span className="font-medium">重点：</span>
                      <span className="text-muted-foreground">
                        {item.takeaway}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Outcome bias */}
      <section className="mb-14">
        <div className="mb-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Outcome Bias
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            为什么“早知道我就扛着”是危险的复盘方式
          </h2>
        </div>

        <Card className="p-6 md:p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                错误的复盘
              </p>

              <div className="mt-4 rounded-xl border p-5">
                <p className="text-base leading-7">
                  BTC 从 79,500 又跌回 76,000。
                </p>

                <ArrowDownRight className="my-4 h-5 w-5 text-muted-foreground" />

                <p className="text-base leading-7">
                  所以如果当时不减仓，现在就没有亏损。
                </p>

                <ArrowDownRight className="my-4 h-5 w-5 text-muted-foreground" />

                <p className="font-medium">因此，当时减仓是错误的。</p>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-muted-foreground">
                更合理的复盘
              </p>

              <div className="mt-4 rounded-xl border border-primary/20 bg-primary/3 p-5">
                <p className="text-base leading-7">
                  在 79,500 的那个时刻，没有人知道 BTC 一定会重新跌回 76,000。
                </p>

                <ArrowDownRight className="my-4 h-5 w-5 text-muted-foreground" />

                <p className="text-base leading-7">
                  当时仓位风险已经明显上升，减仓符合预先存在的风险管理规则。
                </p>

                <ArrowDownRight className="my-4 h-5 w-5 text-muted-foreground" />

                <p className="font-medium">
                  所以即使后来价格回来，减仓仍然可能是正确决策。
                </p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Why holding losers is dangerous */}
      <section className="mb-14">
        <div className="mb-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Reinforcement
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            扛单为什么会越来越严重
          </h2>
        </div>

        <Card className="p-6 md:p-8">
          <p className="max-w-3xl text-base leading-8 text-muted-foreground">
            扛单真正危险的地方，并不是它每一次都会失败。恰恰相反，
            市场非常经常会回撤、震荡和重新测试原来的价格区域，因此很多错误仓位最后真的能够解套。
          </p>

          <div className="mt-7 grid gap-3">
            {[
              "第一次：没有止损，后来价格回来了。",
              "第二次：继续扛，又回来了。",
              "第三次：开始觉得止损似乎没有必要。",
              "第四次：仓位可以再大一点，因为以前都扛回来了。",
              "最后一次：真正的单边趋势出现，价格再也没有回来。",
            ].map((text, index) => (
              <div
                key={text}
                className="flex items-start gap-4 rounded-lg border px-4 py-3"
              >
                <span className="mt-0.5 text-xs font-semibold text-muted-foreground">
                  0{index + 1}
                </span>

                <p className="text-sm leading-6">{text}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 border-l-2 border-primary pl-4 text-sm font-medium leading-7">
            市场短期奖励一个错误行为，不代表这个行为具有正期望值。
          </p>
        </Card>
      </section>

      {/* Lessons */}
      <section className="mb-14">
        <div className="mb-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Lessons
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            我从这次复盘里应该记住什么
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {lessons.map((lesson) => {
            const Icon = lesson.icon;

            return (
              <Card key={lesson.title} className="p-5 md:p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-5 text-lg font-semibold tracking-tight">
                  {lesson.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {lesson.description}
                </p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Sunk cost */}
      <section className="mb-14">
        <Card className="p-6 md:p-8">
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <CircleDollarSign className="h-5 w-5" />
            </div>

            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Sunk Cost
              </p>

              <h2 className="mt-1 text-xl font-semibold tracking-tight">
                “我要把前面的亏损赚回来”本身不是持仓理由
              </h2>

              <p className="mt-4 text-base leading-8 text-muted-foreground">
                已经实现的亏损，无论是一千美元还是一千万美元，都已经属于过去。
                市场不知道我的成本，也不会因为我需要回本就一定走到某个价格。
              </p>

              <p className="mt-4 text-base leading-8 text-muted-foreground">
                因此当前仓位应该重新当成一笔新的交易评估：
                从现在的价格、结构和风险收益来看，我是否仍然愿意建立它？
              </p>

              <p className="mt-5 border-l-2 border-primary pl-4 text-sm font-medium leading-7">
                如果答案是否定的，那么继续持有很可能只是在等待市场替过去的自己解围。
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* Self check */}
      <section className="mb-14">
        <div className="mb-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Self Check
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            当我发现自己可能正在扛单时
          </h2>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
            不急着预测下一根 K 线，而是先回答下面几个问题。
          </p>
        </div>

        <div className="grid gap-3">
          {selfQuestions.map((question, index) => (
            <Card key={question} className="px-5 py-4">
              <div className="flex gap-4">
                <span className="pt-0.5 text-xs font-semibold text-muted-foreground">
                  0{index + 1}
                </span>

                <p className="text-sm font-medium leading-6">{question}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Final principle */}
      <section>
        <Card className="border-primary/20 bg-primary/3 p-6 md:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Final Principle
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight">
            我的目标不是证明自己是对的
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground">
            每一笔交易都只是长期交易序列中的一个样本。
            我可以判断错误，可以止损以后看到价格重新回来，也可以错过一段行情。
            这些都比形成一个危险的行为习惯更容易修复。
          </p>

          <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground">
            真正需要保护的不是这一笔交易的盈亏，而是下一次面对类似行情时，
            我是否仍然能够按照系统做出独立、理性并且风险受控的决定。
          </p>

          <div className="mt-6 rounded-xl border bg-background px-5 py-4">
            <p className="font-medium leading-7">
              可以接受止损以后价格回来。
              <br />
              不能因为价格回来，就开始相信扛单。
            </p>
          </div>
        </Card>
      </section>
    </div>
  );
}
