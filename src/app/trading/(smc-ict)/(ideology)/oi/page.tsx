import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowDown,
  ArrowUp,
  BadgeAlert,
  Database,
  Gauge,
  Map,
  Target,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

export default function OIPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <section className="mb-10 space-y-4 motion-safe:animate-fadeSlide">
          <Badge variant="outline" className="border-brand/40 text-brand">
            Trading Concept
          </Badge>

          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            OI 是什么？专业交易员怎么用它判断仓位？
          </h1>

          <p className="max-w-3xl text-muted-foreground">
            OI，全称 Open Interest，中文叫未平仓量。它不是方向指标，
            而是用来判断市场里是否有新仓位进场，或者旧仓位正在释放。
          </p>
        </section>

        <Card className="border-card-border bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5 text-brand" />
              核心理解
            </CardTitle>
            <CardDescription>
              OI 回答的问题不是涨跌，而是：市场里有多少仓位正在参与。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <p>
              OI 上升，说明有新合约仓位进入市场；OI
              下降，说明仓位正在平仓、爆仓或释放。
            </p>

            <p className="text-muted-foreground">
              专业交易员看 OI，不是简单地说 OI 涨就看多、OI 跌就看空，
              而是把它和价格一起看：
              <span className="font-medium text-brand">
                {" "}
                价格变化有没有新仓位支持？
              </span>
            </p>
          </CardContent>
        </Card>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card className="border-chart-2/30 bg-chart-2/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-chart-2">
                <ArrowUp className="h-5 w-5" />
                OI 上升
              </CardTitle>
              <CardDescription>新仓位进入市场</CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
              <p>OI 上升说明市场参与度增加：</p>

              <div className="rounded-xl border border-chart-2/20 bg-muted p-4 font-mono text-sm">
                <div>价格波动变大</div>
                <div className="text-chart-2">OI 上升</div>
                <div>新多头 / 新空头进场</div>
                <div className="font-medium text-chart-2">
                  趋势可能正在积累能量
                </div>
              </div>

              <p className="text-muted-foreground">
                但 OI
                上升本身不能告诉你方向，因为每一个合约都有一个多头和一个空头。
              </p>
            </CardContent>
          </Card>

          <Card className="border-destructive/30 bg-destructive/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <ArrowDown className="h-5 w-5" />
                OI 下降
              </CardTitle>
              <CardDescription>仓位正在释放</CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
              <p>OI 下降说明市场中已有仓位正在减少：</p>

              <div className="rounded-xl border border-destructive/20 bg-muted p-4 font-mono text-sm">
                <div>价格快速波动</div>
                <div className="text-destructive">OI 下降</div>
                <div>平仓 / 止损 / 爆仓</div>
                <div className="font-medium text-destructive">
                  原有仓位正在退出
                </div>
              </div>

              <p className="text-muted-foreground">
                OI
                下降通常代表一波行情的仓位释放，趋势可能进入短暂缓和或反弹阶段。
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-chart-3" />
              价格 + OI 的四种核心组合
            </CardTitle>
            <CardDescription>
              这是专业交易员最常用的 OI 判断框架。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-chart-2/20 bg-muted p-4">
                <h3 className="mb-2 flex items-center gap-2 font-semibold text-chart-2">
                  <TrendingUp className="h-4 w-4" />
                  价格涨 + OI 涨
                </h3>
                <p className="text-sm text-muted-foreground">
                  有新仓位进场推动上涨。通常偏趋势延续，但还要结合 Funding
                  判断是否多头过度拥挤。
                </p>
              </div>

              <div className="rounded-xl border border-brand/20 bg-muted p-4">
                <h3 className="mb-2 flex items-center gap-2 font-semibold text-brand">
                  <TrendingUp className="h-4 w-4" />
                  价格涨 + OI 跌
                </h3>
                <p className="text-sm text-muted-foreground">
                  更像空头回补，不一定是真多头趋势。上涨如果没有新仓支持，持续性要打折。
                </p>
              </div>

              <div className="rounded-xl border border-destructive/20 bg-muted p-4">
                <h3 className="mb-2 flex items-center gap-2 font-semibold text-destructive">
                  <TrendingDown className="h-4 w-4" />
                  价格跌 + OI 涨
                </h3>
                <p className="text-sm text-muted-foreground">
                  有新仓位进场推动下跌。通常偏空头延续，但要警惕跌到 SSL
                  后卖盘被吸收。
                </p>
              </div>

              <div className="rounded-xl border border-brand/20 bg-muted p-4">
                <h3 className="mb-2 flex items-center gap-2 font-semibold text-brand">
                  <TrendingDown className="h-4 w-4" />
                  价格跌 + OI 跌
                </h3>
                <p className="text-sm text-muted-foreground">
                  更像多头平仓或爆仓释放。下跌动能可能进入释放阶段，要小心反弹。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gauge className="h-5 w-5 text-brand" />
              OI 变化率的真正意义
            </CardTitle>

            <CardDescription>
              交易员不是看 OI 有多少，而是在观察仓位增长的速度是否异常。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="rounded-xl border border-card-border bg-muted p-4">
              <h4 className="mb-2 font-semibold">核心思维</h4>

              <p className="text-muted-foreground text-sm">
                OI 本质上代表市场中的未平仓合约数量。 真正值得关注的不是当前
                OI， 而是 OI 增长或下降的速度是否突然发生变化。
              </p>

              <p className="mt-3 text-muted-foreground text-sm">
                当 OI 的变化速度远高于平时， 往往说明有大量新资金正在进入市场，
                市场即将从平衡转向失衡。
              </p>
            </div>
            <div className="rounded-xl border border-card-border bg-muted p-4">
              <h4 className="mb-2 font-semibold">
                为什么要同时看 24H、4H、1H OI 变化率？
              </h4>

              <p className="text-sm text-muted-foreground">
                很多人看到 CoinGlass 的 OI 变化率后会疑惑： 1H、4H、24H
                经常互相矛盾。 例如：
              </p>

              <div className="mt-3 rounded-lg border border-card-border bg-background p-3 font-mono text-sm">
                <div>24H OI：+12%</div>
                <div>4H OI：-4%</div>
                <div>1H OI：-2%</div>
              </div>

              <p className="mt-3 text-sm text-muted-foreground">
                实际上这并不矛盾。 交易员不会把它们看成三个独立指标，
                而是看成三个不同时间尺度下的资金行为。
              </p>
            </div>

            <div className="rounded-xl border border-card-border bg-muted p-4">
              <h4 className="mb-2 font-semibold">我的分析框架</h4>

              <div className="space-y-3 text-sm text-muted-foreground">
                <div>
                  <span className="font-semibold text-foreground">
                    24H OI变化率
                  </span>
                  ：判断最近一天是谁在主导市场。
                </div>

                <div>
                  <span className="font-semibold text-foreground">
                    4H OI变化率
                  </span>
                  ：观察当前结构是否仍在延续。
                </div>

                <div>
                  <span className="font-semibold text-foreground">
                    1H OI变化率
                  </span>
                  ：观察最新资金行为是否发生变化。
                </div>
              </div>

              <div className="mt-4 rounded-lg border border-brand/20 bg-brand/5 p-3 text-sm">
                24H = 背景趋势
                <br />
                4H = 当前结构
                <br />
                1H = 最新资金行为
              </div>
            </div>

            <div className="rounded-xl border border-card-border bg-muted p-4">
              <h4 className="mb-2 font-semibold">OI 必须结合价格一起看</h4>

              <p className="text-sm text-muted-foreground">
                单独看 OI 没有方向意义。 OI 只能告诉你仓位增加还是减少，
                无法告诉你新增的是多头还是空头。
              </p>

              <div className="mt-4 space-y-2 text-sm">
                <div>价格↑ + OI↑ → 新多进场</div>
                <div>价格↑ + OI↓ → 空头回补</div>
                <div>价格↓ + OI↑ → 新空进场</div>
                <div>价格↓ + OI↓ → 多头止损离场</div>
              </div>
            </div>

            <div className="rounded-xl border border-brand/20 bg-brand/5 p-4">
              <h4 className="mb-2 font-semibold text-brand">实战解读案例</h4>

              <div className="rounded-lg border border-brand/20 bg-background p-3 font-mono text-sm">
                <div>24H：Price +10% | OI +15%</div>
                <div>4H：Price -2% | OI -4%</div>
                <div>1H：Price -1% | OI -2%</div>
              </div>

              <p className="mt-3 text-sm text-muted-foreground">
                过去一天有大量资金推动上涨， 说明整体趋势偏多。
              </p>

              <p className="mt-2 text-sm text-muted-foreground">
                但最近 4 小时和 1 小时开始出现 OI 下降，
                说明部分仓位正在获利了结， 市场进入短线回调阶段。
              </p>

              <p className="mt-2 text-sm text-muted-foreground">
                结论：
                <span className="font-semibold text-foreground">
                  大趋势偏多，短线回调。
                </span>
              </p>
            </div>

            <div className="rounded-xl border border-brand/20 bg-brand/5 p-4">
              <h4 className="mb-2 font-semibold text-brand">我的观察重点</h4>

              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ OI 是否正在加速增长</li>
                <li>✓ 增长速度是否远超历史平均</li>
                <li>✓ 当前价格是否接近 BSL / SSL</li>
                <li>✓ 是否靠近大量清算区</li>
                <li>✓ 是否出现明显订单墙</li>
                <li>✓ CVD 是否同步确认</li>
              </ul>
            </div>
            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-4">
              <h4 className="mb-2 font-semibold text-yellow-400">实战经验</h4>

              <p className="text-sm text-muted-foreground">
                当价格接近流动性区域时， 如果 OI 突然出现远超平时的增长速度，
                通常意味着大资金已经开始建仓。 这时候我不会先看 RSI 或 MACD，
                而是优先观察 OI、CVD、Funding 和流动性位置是否形成共振。
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Map className="h-5 w-5 text-chart-3" />
              OI 和清算图怎么一起看？
            </CardTitle>
            <CardDescription>
              OI 告诉你仓位是否增加，清算图告诉你这些仓位可能在哪里被打掉。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              当 OI 增加时，说明市场中新增了更多杠杆仓位。接下来要看清算热图：
              如果上方堆积大量空头清算，价格可能被吸向上方流动性；如果下方堆积大量多头清算，
              价格可能被吸向下方流动性。
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-chart-2/20 bg-chart-2/5 p-4">
                <h3 className="mb-2 font-semibold text-chart-2">
                  上方空头清算密集
                </h3>
                <p className="text-sm text-muted-foreground">
                  如果价格上涨、OI增加、Funding仍偏负，说明空头还在抵抗。
                  上方清算区可能成为价格继续上冲的目标。
                </p>
              </div>

              <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-4">
                <h3 className="mb-2 font-semibold text-destructive">
                  下方多头清算密集
                </h3>
                <p className="text-sm text-muted-foreground">
                  如果价格上涨后 Funding
                  变得很高，OI继续堆高，下方多头清算区会变得危险。
                  一旦价格反向，容易引发多头止损和清算。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-chart-2" />
              OI 和趋势：健康上涨还是过热上涨？
            </CardTitle>
            <CardDescription>
              牛市里 Funding 可以长期为正，但极端 Funding + 极端 OI 才是风险。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-card-border bg-muted p-4">
                <h3 className="mb-2 font-semibold">健康趋势</h3>
                <p className="text-sm text-muted-foreground">
                  价格上涨，OI温和增加，Funding小幅为正。说明趋势有新资金支持，但还没有过度拥挤。
                </p>
              </div>

              <div className="rounded-xl border border-chart-2/20 bg-chart-2/5 p-4">
                <h3 className="mb-2 font-semibold text-chart-2">挤空上涨</h3>
                <p className="text-sm text-muted-foreground">
                  价格上涨，OI增加，Funding仍为负。说明空头还在抵抗，后续可能继续被迫回补。
                </p>
              </div>

              <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-4">
                <h3 className="mb-2 font-semibold text-destructive">
                  过热上涨
                </h3>
                <p className="text-sm text-muted-foreground">
                  价格上涨，OI暴增，Funding极高。说明多头过度拥挤，短期回调风险上升。
                </p>
              </div>
            </div>

            <p className="text-muted-foreground">
              所以牛市里 Funding 高并不矛盾。关键不是 Funding 是否为正，
              而是它有没有进入极端状态，以及 OI 是否也在快速堆高。
            </p>
          </CardContent>
        </Card>

        <Card className="mt-8 border-brand/20 bg-brand/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-brand">
              <Target className="h-5 w-5" />
              实战案例：上涨 + OI上涨 + Funding仍为负
            </CardTitle>
            <CardDescription>这种结构通常比单纯空头回补更强。</CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="rounded-xl border border-brand/20 bg-background p-4 font-mono text-sm">
              <div>BTC 上涨：+3%</div>
              <div>OI：363亿 → 379亿</div>
              <div>OI变化率：约 +4.4%</div>
              <div>Funding：大部分交易所仍为负</div>
            </div>

            <p className="text-muted-foreground">
              价格上涨，同时 OI
              明显增加，说明不是单纯空头回补，而是有新仓位进场。
              如果只是空头回补，OI 通常会下降。
            </p>

            <p className="text-muted-foreground">
              Funding
              仍然为负，说明市场中仍有大量空头存在。也就是说，多头暂时占优，
              但空头还没有完全投降。只要上方清算热图继续堆积空头清算，
              价格就可能继续向上方流动性移动。
            </p>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-brand" />
              OI 在实际开单中的用法
            </CardTitle>
            <CardDescription>
              OI 用来判断这波行情是新仓推动，还是旧仓释放。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            <div className="rounded-xl border border-chart-2/20 bg-chart-2/5 p-4">
              <h3 className="mb-3 font-semibold text-chart-2">
                做多模型：扫 SSL 后，OI 释放再重新增加
              </h3>

              <div className="mb-3 rounded-lg bg-background p-3 font-mono text-sm">
                <div>价格跌破前低</div>
                <div className="text-destructive">↓ 扫 SSL</div>
                <div>OI 快速下降</div>
                <div>多头止损 / 空头止盈释放</div>
                <div>价格重新收回区间</div>
                <div className="text-chart-2">回踩不破，OI 重新增加</div>
                <div className="font-medium text-chart-2">观察做多机会</div>
              </div>

              <p className="text-sm text-muted-foreground">
                这个模型的重点是：下方流动性被扫后，旧仓位先释放，
                如果价格收回并且 OI 重新增加，说明可能有新多头开始介入。
              </p>
            </div>

            <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-4">
              <h3 className="mb-3 font-semibold text-destructive">
                做空模型：扫 BSL 后，OI 释放再重新增加
              </h3>

              <div className="mb-3 rounded-lg bg-background p-3 font-mono text-sm">
                <div>价格突破前高</div>
                <div className="text-chart-2">↑ 扫 BSL</div>
                <div>OI 快速下降</div>
                <div>空头止损 / 多头止盈释放</div>
                <div>价格重新跌回区间</div>
                <div className="text-destructive">反抽不破，OI 重新增加</div>
                <div className="font-medium text-destructive">观察做空机会</div>
              </div>

              <p className="text-sm text-muted-foreground">
                这个模型的重点是：上方流动性被扫后，旧仓位先释放，
                如果价格跌回并且 OI 重新增加，说明可能有新空头开始介入。
              </p>
            </div>
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
              <span className="font-medium">误区 3：</span>
              不结合价格位置。OI 在区间中间上升，和在 BSL / SSL
              附近上升，意义不同。
            </p>

            <p>
              <span className="font-medium">误区 4：</span>
              忽略 OI 变化率。BTC 这种大品种，总 OI
              很大，绝对值变化看起来不明显， 但 1%～3%
              的变化已经可能代表大量新仓位进场。
            </p>

            <p>
              <span className="font-medium">误区 5：</span>
              只看 OI，不看 Funding 和清算热图。OI 只能告诉你仓位是否增加，
              不能告诉你哪一边更拥挤，也不能告诉你流动性在哪里。
            </p>

            <p className="text-muted-foreground">
              更专业的理解是：OI 是仓位参与度指标，不是方向指标。
              它要和价格、Funding、CVD、Liquidity、Liquidation Map 一起看。
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
