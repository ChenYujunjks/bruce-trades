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
  ArrowUpRight,
  BadgeAlert,
  CandlestickChart,
  CheckCircle2,
  CircleDot,
  GitCompare,
  LineChart,
  MoveDown,
  MoveUp,
  ShieldAlert,
  Target,
  TrendingUp,
} from "lucide-react";

export default function ReversalPatternsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-10">
        {/* Header */}
        <section className="mb-10 space-y-4 motion-safe:animate-fadeSlide">
          <Badge variant="outline" className="border-brand/40 text-brand">
            Price Action / Market Structure
          </Badge>

          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            双底与头肩底：专业交易员如何理解底部反转
          </h1>

          <p className="max-w-3xl text-muted-foreground md:text-lg">
            双底和头肩底不是简单的“看涨图形”。它们真正表达的是：
            卖方推动价格继续下跌的能力正在减弱，买方开始在关键区域吸收卖压，
            并尝试夺回结构控制权。
          </p>
        </section>

        {/* Core idea */}
        <Card className="mb-8 border-brand/20">
          <CardHeader>
            <div className="flex items-center gap-2">
              <CandlestickChart className="h-5 w-5 text-brand" />
              <CardTitle>本质：它们都属于什么？</CardTitle>
            </div>
            <CardDescription>
              双底和头肩底都属于底部反转类形态，但它们不是孤立的 K 线信号。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4 text-sm leading-7 text-muted-foreground md:text-base">
            <p>
              从分类上看，双底和头肩底属于{" "}
              <span className="font-semibold text-foreground">
                chart patterns
              </span>
              ，也就是图形形态。它们也属于{" "}
              <span className="font-semibold text-foreground">
                price action
              </span>
              的一部分，因为它们是由价格行为本身形成的。
            </p>

            <p>
              但从专业交易员视角来看，更重要的是把它们放进{" "}
              <span className="font-semibold text-foreground">
                market structure
              </span>
              里面理解。也就是说，交易员不会只问： “这是不是双底？”而是会问：
            </p>

            <div className="rounded-xl border bg-muted/30 p-4 font-mono text-sm text-foreground">
              1. 当前是下跌趋势，还是震荡区间？
              <br />
              2. 第二次下探有没有扫掉 SSL？
              <br />
              3. 下跌是否失败并快速收回？
              <br />
              4. 有没有突破颈线？
              <br />
              5. 突破后是否回踩不破？
            </div>
          </CardContent>
        </Card>

        {/* Double bottom */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-2">
              <CircleDot className="h-5 w-5 text-brand" />
              <CardTitle>一、双底 Double Bottom</CardTitle>
            </div>
            <CardDescription>
              双底的核心不是“两次碰到低点”，而是“低位卖压两次失败”。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="rounded-xl border bg-muted/30 p-5">
              <pre className="overflow-x-auto text-sm leading-7 text-foreground">
                {`        Neckline / 颈线
          ─────────────
         /             \\
        /               \\
  _____/                 \\_____
   First Low          Second Low
   第一次底             第二次底`}
              </pre>
            </div>

            <div className="space-y-3 text-sm leading-7 text-muted-foreground md:text-base">
              <p>
                双底通常出现在一段下跌之后。价格第一次跌到低位后反弹，
                说明这个区域开始有买盘承接。随后价格第二次回落到类似区域，
                但没有有效跌破，或者只是短暂跌破后快速收回。
              </p>

              <p>
                专业交易员不会简单理解成：
                <span className="font-semibold text-foreground">
                  “双底等于看涨”
                </span>
                。更准确的理解是：
              </p>

              <div className="rounded-xl border-l-4 border-brand bg-muted/30 p-4 text-foreground">
                卖方第二次尝试向下推动价格，但没有获得延续。下方可能存在买盘吸收、
                空头止盈、或者扫掉前低止损后的快速回收。
              </div>
            </div>

            <Separator />

            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader className="space-y-1">
                  <MoveDown className="h-5 w-5 text-muted-foreground" />
                  <CardTitle className="text-base">第一底</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  价格第一次下跌到关键低位，出现反弹，说明该区域暂时有买盘。
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="space-y-1">
                  <ShieldAlert className="h-5 w-5 text-muted-foreground" />
                  <CardTitle className="text-base">第二底</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  第二次回踩低位，如果不能有效跌破，说明卖方继续推动能力减弱。
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="space-y-1">
                  <MoveUp className="h-5 w-5 text-muted-foreground" />
                  <CardTitle className="text-base">颈线突破</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  只有突破中间反弹高点，双底才从“潜在形态”变成“确认形态”。
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Inverse H&S */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-2">
              <LineChart className="h-5 w-5 text-brand" />
              <CardTitle>二、头肩底 Inverse Head and Shoulders</CardTitle>
            </div>
            <CardDescription>
              头肩底比双底更强调趋势衰竭和市场结构变化。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="rounded-xl border bg-muted/30 p-5">
              <pre className="overflow-x-auto text-sm leading-7 text-foreground">
                {`             Neckline / 颈线
          ───────────────────
         /                   \\
        /                     \\
  _____/                       \\_____
   Left Shoulder     Head     Right Shoulder
     左肩             头部         右肩`}
              </pre>
            </div>

            <div className="space-y-3 text-sm leading-7 text-muted-foreground md:text-base">
              <p>
                头肩底通常也出现在下跌趋势后期。它由三个低点组成：
                左肩、头部、右肩。中间的头部最低，右肩低点高于头部低点。
              </p>

              <p>
                它背后的市场逻辑是：空头一开始还能继续打出新低，
                形成“头部”；但之后再次下跌时，已经无法再创新低，
                只能形成一个更高的低点，也就是右肩。
              </p>

              <div className="rounded-xl border-l-4 border-brand bg-muted/30 p-4 text-foreground">
                头肩底的重点不是形状像不像，而是右肩有没有显示出：
                卖方衰竭，买方开始抬高低点，市场结构从 LL 转向 HL。
              </div>
            </div>

            <Separator />

            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader className="space-y-1">
                  <MoveDown className="h-5 w-5 text-muted-foreground" />
                  <CardTitle className="text-base">左肩</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  下跌趋势中的一次低点反弹，暂时还不能说明趋势反转。
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="space-y-1">
                  <BadgeAlert className="h-5 w-5 text-muted-foreground" />
                  <CardTitle className="text-base">头部</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  价格继续创新低，扫掉左肩低点下方流动性，但随后没有延续下跌。
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="space-y-1">
                  <TrendingUp className="h-5 w-5 text-muted-foreground" />
                  <CardTitle className="text-base">右肩</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  右肩形成更高低点，是头肩底最关键的部分，代表卖压明显减弱。
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Difference */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-2">
              <GitCompare className="h-5 w-5 text-brand" />
              <CardTitle>三、双底和头肩底的核心区别</CardTitle>
            </div>
            <CardDescription>
              两者都可以是底部反转形态，但交易含义并不完全一样。
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="overflow-hidden rounded-xl border">
              <div className="grid grid-cols-3 bg-muted/50 text-sm font-semibold text-foreground">
                <div className="border-r p-4">对比点</div>
                <div className="border-r p-4">双底</div>
                <div className="p-4">头肩底</div>
              </div>

              {[
                ["低点数量", "两个主要低点", "三个主要低点"],
                ["结构特征", "两个低点相近", "中间头部最低，右肩抬高"],
                ["核心含义", "支撑区被两次防守", "空头创新低后衰竭"],
                ["市场结构", "更像支撑确认", "更像结构反转"],
                ["关键位置", "第二个底和颈线", "右肩和颈线"],
                ["确认方式", "突破中间反弹高点", "突破颈线并最好回踩不破"],
              ].map(([label, doubleBottom, inverseHs]) => (
                <div
                  key={label}
                  className="grid grid-cols-3 border-t text-sm text-muted-foreground"
                >
                  <div className="border-r p-4 font-medium text-foreground">
                    {label}
                  </div>
                  <div className="border-r p-4">{doubleBottom}</div>
                  <div className="p-4">{inverseHs}</div>
                </div>
              ))}
            </div>

            <p className="mt-5 text-sm leading-7 text-muted-foreground md:text-base">
              简单记忆：双底更像是{" "}
              <span className="font-semibold text-foreground">
                支撑区域被两次验证
              </span>
              ；头肩底更像是{" "}
              <span className="font-semibold text-foreground">
                下跌趋势从强到弱，再到尝试反转
              </span>
              。
            </p>
          </CardContent>
        </Card>

        {/* Trading process */}
        <Card className="mb-8 border-brand/20">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-brand" />
              <CardTitle>四、交易员如何通过它们做单？</CardTitle>
            </div>
            <CardDescription>
              专业交易员不是看到形态就进场，而是等待确认、寻找失效点、计算盈亏比。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">双底做多逻辑</CardTitle>
                  <CardDescription>
                    适合观察第二次探底是否失败。
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 text-sm leading-7 text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground">
                      1. 等待第二底
                    </p>
                    <p>
                      第二次回到前低附近时，不急着接。观察是否出现长下影线、
                      假跌破、快速收回，或者成交量/CVD/OI 出现背离。
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">
                      2. 等待颈线突破
                    </p>
                    <p>
                      保守交易员通常等价格突破中间反弹高点。没有突破之前，
                      它只是潜在双底，不是确认双底。
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">3. 回踩入场</p>
                    <p>
                      更稳健的方式是等突破颈线后回踩不破，再寻找多头信号入场。
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">4. 止损位置</p>
                    <p>
                      止损通常放在第二个底部下方，或者假跌破低点下方。
                      如果价格重新跌破第二底，双底逻辑失效。
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">头肩底做多逻辑</CardTitle>
                  <CardDescription>
                    重点观察右肩是否形成更高低点。
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 text-sm leading-7 text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground">
                      1. 观察头部扫低
                    </p>
                    <p>
                      头部往往会跌破左肩低点，扫掉前低止损。如果扫低后快速收回，
                      说明下方卖盘可能被吸收。
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">
                      2. 重点看右肩
                    </p>
                    <p>
                      右肩不能再创新低，最好形成更高低点。右肩越清晰，
                      说明空头越难继续向下推动。
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">
                      3. 突破颈线确认
                    </p>
                    <p>
                      颈线突破代表买方正式夺回局部结构控制权。
                      突破后回踩颈线不破，是更高质量的入场机会。
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">4. 止损位置</p>
                    <p>
                      激进止损可放在右肩低点下方，保守止损可放在头部低点下方。
                      如果价格跌破右肩，头肩底结构开始被破坏。
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Separator />

            <div className="rounded-xl border bg-muted/30 p-5">
              <div className="mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-brand" />
                <h3 className="font-semibold">专业交易员更关注的确认条件</h3>
              </div>

              <div className="grid gap-3 text-sm text-muted-foreground md:grid-cols-2">
                <div className="rounded-lg bg-background p-4">
                  第二底或右肩是否出现长下影线、吞没、快速收回？
                </div>
                <div className="rounded-lg bg-background p-4">
                  是否扫掉 SSL 后重新站回关键低点上方？
                </div>
                <div className="rounded-lg bg-background p-4">
                  颈线突破是否有效？是假突破还是实体突破？
                </div>
                <div className="rounded-lg bg-background p-4">
                  回踩颈线时，是否从压力转为支撑？
                </div>
                <div className="rounded-lg bg-background p-4">
                  CVD 是否不再创新低，显示卖盘推动不足？
                </div>
                <div className="rounded-lg bg-background p-4">
                  OI 和 Funding 是否显示空头拥挤后被挤压？
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Entry models */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-2">
              <ArrowUpRight className="h-5 w-5 text-brand" />
              <CardTitle>五、两种常见入场模型</CardTitle>
            </div>
            <CardDescription>
              同一个形态，不同交易员会选择不同确认程度。
            </CardDescription>
          </CardHeader>

          <CardContent className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <Badge variant="outline" className="w-fit">
                  Aggressive
                </Badge>
                <CardTitle className="text-lg">激进入场</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm leading-7 text-muted-foreground">
                <p>
                  在第二底或右肩形成时，如果出现假跌破、长下影线、强反包，
                  交易员可能提前轻仓试多。
                </p>
                <p>优点是盈亏比好，止损短；缺点是形态尚未确认，失败率更高。</p>
                <div className="rounded-lg bg-muted/40 p-3 font-mono text-xs text-foreground">
                  入场：第二底 / 右肩出现反转信号
                  <br />
                  止损：低点下方
                  <br />
                  目标：颈线 / 区间高点
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Badge variant="outline" className="w-fit">
                  Conservative
                </Badge>
                <CardTitle className="text-lg">保守入场</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm leading-7 text-muted-foreground">
                <p>
                  等价格突破颈线，再等待回踩颈线不破，确认原来的压力变成支撑。
                </p>
                <p>优点是确认更强；缺点是入场位置更高，盈亏比可能下降。</p>
                <div className="rounded-lg bg-muted/40 p-3 font-mono text-xs text-foreground">
                  入场：突破颈线后回踩不破
                  <br />
                  止损：回踩低点下方
                  <br />
                  目标：前高 / 流动性区域 / measured move
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        {/* Failure */}
        <Card className="mb-8 border-destructive/20">
          <CardHeader>
            <div className="flex items-center gap-2">
              <BadgeAlert className="h-5 w-5 text-destructive" />
              <CardTitle>六、什么情况下不能做？</CardTitle>
            </div>
            <CardDescription>
              很多亏损来自把“疑似形态”当成“确认反转”。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4 text-sm leading-7 text-muted-foreground md:text-base">
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-xl border bg-muted/30 p-4">
                第二底或右肩没有明显买盘反应，只是弱反弹。
              </div>
              <div className="rounded-xl border bg-muted/30 p-4">
                颈线没有突破，价格仍然处于下跌结构内。
              </div>
              <div className="rounded-xl border bg-muted/30 p-4">
                突破颈线后马上跌回去，形成假突破。
              </div>
              <div className="rounded-xl border bg-muted/30 p-4">
                大级别仍是强下跌趋势，小级别底部形态容易失败。
              </div>
              <div className="rounded-xl border bg-muted/30 p-4">
                右肩跌破头部低点，头肩底结构被破坏。
              </div>
              <div className="rounded-xl border bg-muted/30 p-4">
                双底第二底有效跌破并延续下跌，支撑区失效。
              </div>
            </div>

            <div className="rounded-xl border-l-4 border-destructive bg-muted/30 p-4 text-foreground">
              交易员真正关心的不是“图形像不像”，而是：
              这个形态有没有给出清晰的失效点？有没有足够的盈亏比？
              有没有结构确认？
            </div>
          </CardContent>
        </Card>

        {/* Summary */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-brand" />
              <CardTitle>总结</CardTitle>
            </div>
          </CardHeader>

          <CardContent className="space-y-4 text-sm leading-7 text-muted-foreground md:text-base">
            <p>
              <span className="font-semibold text-foreground">双底</span>
              的核心是：同一个低位区域被两次测试，但卖方无法有效跌破。
              它更强调支撑区防守。
            </p>

            <p>
              <span className="font-semibold text-foreground">头肩底</span>
              的核心是：价格先创新低，再形成更高低点，说明空头推动能力衰竭，
              市场结构开始从下跌转向反转。
            </p>

            <div className="rounded-xl border bg-muted/30 p-4 font-mono text-sm text-foreground">
              双底 = 支撑被两次验证
              <br />
              头肩底 = 下跌趋势衰竭后形成结构反转
              <br />
              真正入场 = 等待颈线突破、回踩确认、风险可控
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
