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
  Coins,
  Gauge,
  Target,
  Database,
  TrendingUp,
  Users,
} from "lucide-react";

export default function FundingRatePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <section className="mb-10 space-y-4 motion-safe:animate-fadeSlide">
          <Badge variant="outline" className="border-brand/40 text-brand">
            Trading Concept
          </Badge>

          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            Funding Rate 是什么？它是方向指标吗？
          </h1>

          <p className="max-w-3xl text-muted-foreground">
            Funding Rate，中文叫资金费率，是永续合约中多空之间定期支付的费用。
            专业交易员不会把它当成单独的方向指标，而是用它判断市场哪一边更拥挤。
          </p>
        </section>

        <Card className="border-card-border bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Coins className="h-5 w-5 text-brand" />
              核心理解
            </CardTitle>
            <CardDescription>
              Funding Rate 回答的问题不是下一步涨跌，而是哪一边仓位更拥挤。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <p>
              当 Funding Rate 为正时，通常是多头付钱给空头； 当 Funding Rate
              为负时，通常是空头付钱给多头。
            </p>

            <p className="text-muted-foreground">
              但这不等于 Funding 为正就做空，Funding 为负就做多。 它更像一个
              <span className="font-medium text-brand"> 情绪和拥挤度指标 </span>
              ，不是直接的买卖信号。
            </p>
          </CardContent>
        </Card>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card className="border-chart-2/30 bg-chart-2/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-chart-2">
                <ArrowUp className="h-5 w-5" />
                Funding 为正
              </CardTitle>
              <CardDescription>多头付钱给空头</CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
              <p>通常说明市场偏多，多头更愿意支付成本持仓：</p>

              <div className="rounded-xl border border-chart-2/20 bg-muted p-4 font-mono text-sm">
                <div>Funding Rate：+0.05%</div>
                <div className="text-chart-2">多头付费给空头</div>
                <div>市场情绪偏多</div>
                <div className="font-medium text-chart-2">多头可能逐渐拥挤</div>
              </div>

              <p className="text-muted-foreground">
                但如果趋势很强，Funding
                长时间为正也可能只是趋势延续，而不是立刻见顶。
              </p>
            </CardContent>
          </Card>

          <Card className="border-destructive/30 bg-destructive/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <ArrowDown className="h-5 w-5" />
                Funding 为负
              </CardTitle>
              <CardDescription>空头付钱给多头</CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
              <p>通常说明市场偏空，空头更愿意支付成本持仓：</p>

              <div className="rounded-xl border border-destructive/20 bg-muted p-4 font-mono text-sm">
                <div>Funding Rate：-0.05%</div>
                <div className="text-destructive">空头付费给多头</div>
                <div>市场情绪偏空</div>
                <div className="font-medium text-destructive">
                  空头可能逐渐拥挤
                </div>
              </div>

              <p className="text-muted-foreground">
                但如果下跌趋势很强，Funding 长时间为负也可能只是空头趋势延续。
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gauge className="h-5 w-5 text-chart-3" />
              专业交易员真正看什么？
            </CardTitle>
            <CardDescription>
              Funding Rate 最重要的不是正负，而是是否进入极端拥挤状态。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              普通 Funding 只能说明市场略微偏向某一边。 极端 Funding
              才值得重视，因为它代表一边仓位可能过度拥挤，
              一旦价格反向，就容易引发止损和清算。
            </p>

            <Separator />

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-card-border bg-muted p-4">
                <h3 className="mb-2 flex items-center gap-2 font-semibold">
                  <Users className="h-4 w-4 text-chart-2" />
                  Funding 高
                </h3>
                <p className="text-sm text-muted-foreground">
                  说明多头更拥挤。不能直接做空，但如果价格扫 BSL 后跌回区间，
                  就要警惕多头被反杀。
                </p>
              </div>

              <div className="rounded-xl border border-card-border bg-muted p-4">
                <h3 className="mb-2 flex items-center gap-2 font-semibold">
                  <Users className="h-4 w-4 text-destructive" />
                  Funding 低或为负
                </h3>
                <p className="text-sm text-muted-foreground">
                  说明空头更拥挤。不能直接做多，但如果价格扫 SSL 后收回区间，
                  就要警惕空头被轧空。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5 text-brand" />
              Funding Rate 和 OI 的区别
            </CardTitle>
            <CardDescription>
              OI 看仓位规模，Funding 看仓位倾向。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-card-border bg-muted p-4">
                <h3 className="mb-2 font-semibold">OI</h3>
                <p className="text-sm text-muted-foreground">
                  回答：市场里有多少仓位？有没有新仓进场，还是旧仓释放？
                </p>
              </div>

              <div className="rounded-xl border border-card-border bg-muted p-4">
                <h3 className="mb-2 font-semibold">Funding Rate</h3>
                <p className="text-sm text-muted-foreground">
                  回答：哪一边更拥挤？多头更拥挤，还是空头更拥挤？
                </p>
              </div>
            </div>

            <p className="text-muted-foreground">
              所以 OI 和 Funding 都不是单独的方向指标。
              但它们组合起来，可以帮助判断当前行情是健康趋势，还是拥挤后的潜在反杀。
            </p>
          </CardContent>
        </Card>
        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-brand" />
              Funding + OI 实战解读
            </CardTitle>
            <CardDescription>
              单独看 Funding 或 OI 都不够，真正有价值的是价格、OI、Funding
              三者一起看。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            <div className="rounded-xl border border-chart-2/20 bg-chart-2/5 p-4">
              <h3 className="mb-3 font-semibold text-chart-2">
                案例一：上涨 + OI 上升 + Funding 仍为负
              </h3>

              <div className="mb-3 rounded-lg bg-background p-3 font-mono text-sm">
                <div>BTC 当日上涨：+3%</div>
                <div>OI：363 亿 → 379 亿</div>
                <div>OI 变化率：约 +4.4%</div>
                <div>Funding：多数交易所仍为负</div>
              </div>

              <p className="text-sm text-muted-foreground">
                这种结构说明，价格上涨的同时有大量新仓位进入市场。如果只是空头回补，
                OI 通常会下降；但这里 OI 同步上升，说明多空双方都在加仓。
              </p>

              <p className="text-sm text-muted-foreground">
                同时 Funding 仍为负，说明市场里仍有不少人偏空。价格却继续上涨，
                代表多头暂时占优，并且存在继续轧空的可能。
              </p>

              <div className="mt-3 rounded-lg border border-chart-2/20 bg-background p-3 text-sm">
                <span className="font-medium text-chart-2">核心结论：</span>
                <span className="text-muted-foreground">
                  {" "}
                  这是偏强结构，不是单纯反弹。上涨仍有燃料，因为空头还没有完全投降。
                </span>
              </div>
            </div>

            <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-4">
              <h3 className="mb-3 font-semibold text-destructive">
                案例二：上涨 + OI 上升 + Funding 快速转高
              </h3>

              <div className="mb-3 rounded-lg bg-background p-3 font-mono text-sm">
                <div>BTC 持续上涨</div>
                <div>OI 持续创新高</div>
                <div>Funding 从负数转为明显正数</div>
                <div>市场情绪开始一致看多</div>
              </div>

              <p className="text-sm text-muted-foreground">
                这种情况下，上涨不一定马上结束，但风险开始变高。因为空头被打掉后，
                原本推动上涨的空头止损买盘会减少，而新追多的仓位会越来越拥挤。
              </p>

              <p className="text-sm text-muted-foreground">
                当 Funding 变得很高，说明多头愿意支付更高成本持仓。
                这在牛市中很常见，但短线交易上要警惕回调和多头清算。
              </p>

              <div className="mt-3 rounded-lg border border-destructive/20 bg-background p-3 text-sm">
                <span className="font-medium text-destructive">核心结论：</span>
                <span className="text-muted-foreground">
                  {" "}
                  牛市里 Funding 可以长期为正，但 Funding 极端偏高代表多头拥挤，
                  不适合盲目追高。
                </span>
              </div>
            </div>

            <div className="rounded-xl border border-card-border bg-muted p-4">
              <h3 className="mb-3 font-semibold">快速判断框架</h3>

              <div className="grid gap-3 text-sm md:grid-cols-2">
                <div className="rounded-lg bg-background p-3">
                  <div className="font-medium text-chart-2">
                    涨 + OI 涨 + Funding 负
                  </div>
                  <div className="text-muted-foreground">
                    偏强，可能是空头还在抵抗，后续有轧空空间。
                  </div>
                </div>

                <div className="rounded-lg bg-background p-3">
                  <div className="font-medium text-chart-2">
                    涨 + OI 涨 + Funding 小幅正
                  </div>
                  <div className="text-muted-foreground">
                    健康趋势，新增资金进场，多头占优。
                  </div>
                </div>

                <div className="rounded-lg bg-background p-3">
                  <div className="font-medium text-destructive">
                    涨 + OI 暴涨 + Funding 极高
                  </div>
                  <div className="text-muted-foreground">
                    多头拥挤，行情可能继续冲，但短线回调风险升高。
                  </div>
                </div>

                <div className="rounded-lg bg-background p-3">
                  <div className="font-medium text-destructive">
                    跌 + OI 涨 + Funding 高
                  </div>
                  <div className="text-muted-foreground">
                    多头被套，若跌破关键位，容易触发多头止损和清算。
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-brand" />
              Funding Rate 在实际开单中的用法
            </CardTitle>
            <CardDescription>
              Funding Rate 更适合用来判断反向风险，而不是直接预测方向。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            <div className="rounded-xl border border-chart-2/20 bg-chart-2/5 p-4">
              <h3 className="mb-3 font-semibold text-chart-2">
                做多模型：空头拥挤后被轧空
              </h3>

              <div className="mb-3 rounded-lg bg-background p-3 font-mono text-sm">
                <div>Funding 长时间为负</div>
                <div>市场空头拥挤</div>
                <div className="text-destructive">价格扫 SSL</div>
                <div>CVD 不创新低</div>
                <div>价格重新收回区间</div>
                <div className="text-chart-2">形成 Bullish FVG</div>
                <div className="font-medium text-chart-2">观察做多机会</div>
              </div>

              <p className="text-sm text-muted-foreground">
                这个模型的重点是：市场已经偏空，价格再扫下方流动性后却无法继续下跌，
                说明空头可能过度拥挤，随后容易出现轧空反弹。
              </p>
            </div>

            <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-4">
              <h3 className="mb-3 font-semibold text-destructive">
                做空模型：多头拥挤后被反杀
              </h3>

              <div className="mb-3 rounded-lg bg-background p-3 font-mono text-sm">
                <div>Funding 长时间为正且偏高</div>
                <div>市场多头拥挤</div>
                <div className="text-chart-2">价格扫 BSL</div>
                <div>CVD 不创新高</div>
                <div>价格重新跌回区间</div>
                <div className="text-destructive">形成 Bearish FVG</div>
                <div className="font-medium text-destructive">观察做空机会</div>
              </div>

              <p className="text-sm text-muted-foreground">
                这个模型的重点是：市场已经偏多，价格再扫上方流动性后却无法继续上涨，
                说明多头可能过度拥挤，随后容易出现多头止损或清算。
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-card-border bg-card">
          <CardHeader>
            <CardTitle>Funding Rate 和其他指标怎么组合？</CardTitle>
          </CardHeader>

          <CardContent className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-card-border bg-muted p-4">
              <h3 className="mb-2 font-semibold">Funding + OI</h3>
              <p className="text-sm text-muted-foreground">
                OI 上升代表仓位增加，Funding 极端代表某一边拥挤。
                两者同时出现，要警惕拥挤方向被清算。
              </p>
            </div>

            <div className="rounded-xl border border-card-border bg-muted p-4">
              <h3 className="mb-2 font-semibold">Funding + Liquidity</h3>
              <p className="text-sm text-muted-foreground">
                多头拥挤时关注 SSL，空头拥挤时关注 BSL。
                因为拥挤一边的止损和清算会形成重要流动性。
              </p>
            </div>

            <div className="rounded-xl border border-card-border bg-muted p-4">
              <h3 className="mb-2 font-semibold">Funding + CVD</h3>
              <p className="text-sm text-muted-foreground">
                当 Funding 极端，而价格扫流动性后 CVD 不跟随创新高或新低，
                说明主动力量可能衰竭。
              </p>
            </div>

            <div className="rounded-xl border border-card-border bg-muted p-4">
              <h3 className="mb-2 font-semibold">Funding + FVG</h3>
              <p className="text-sm text-muted-foreground">
                Funding 极端后出现反向 FVG，说明拥挤方向被打掉后，
                市场可能留下新的失衡区域。
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
              <span className="font-medium">误区 1：</span>
              Funding 为正就做空，Funding 为负就做多。
            </p>

            <p>
              <span className="font-medium">误区 2：</span>
              忽略趋势环境。强趋势里 Funding 可以长时间保持偏高或偏低。
            </p>

            <p>
              <span className="font-medium">误区 3：</span>
              不结合 OI。Funding 极端但 OI 没有明显增加，拥挤程度可能没那么强。
            </p>

            <p>
              <span className="font-medium">误区 4：</span>
              看到 Funding 极端就立刻反向开单，而不是等待扫流动性和结构确认。
            </p>

            <p className="text-muted-foreground">
              更专业的理解是：Funding Rate 是情绪和拥挤度指标。
              它告诉你哪边人多，但不直接告诉你价格马上往哪走。
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
