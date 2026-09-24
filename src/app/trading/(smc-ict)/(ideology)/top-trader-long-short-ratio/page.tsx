import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Users,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

export default function TopTraderLongShortRatioPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10 space-y-8">
      <section className="space-y-4">
        <Badge variant="outline">Market Sentiment Model</Badge>

        <h1 className="text-3xl font-bold tracking-tight">大户多空比模型</h1>

        <p className="text-muted-foreground leading-7">
          大户多空比不是一个单独的开仓信号，而是用来观察市场中大资金当前更偏向多头还是空头。
          它的核心价值在于判断：大户是否在顺势加仓，以及当前某一方向是否已经过度拥挤。
        </p>
      </section>

      <Separator />

      <section className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center gap-3">
            <Users className="h-5 w-5" />
            <CardTitle>它代表什么？</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground leading-6">
            <p>
              大户多空比通常表示交易所中大账户的多头与空头比例。 数值大于
              1，说明大户整体更偏多；数值小于 1，说明大户整体更偏空。
            </p>
            <p>但它只能说明仓位倾向，不能直接说明价格马上上涨或下跌。</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-3">
            <AlertTriangle className="h-5 w-5" />
            <CardTitle>它不是方向指标</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground leading-6">
            <p>
              大户多不一定马上做多，大户空也不一定马上做空。
              真正重要的是它和价格结构、OI、Funding、流动性位置之间的关系。
            </p>
            <p>单独看这个指标，很容易被高位多头拥挤或低位空头拥挤误导。</p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">一般是顺着看，还是反着看？</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-center gap-3">
              <TrendingUp className="h-5 w-5" />
              <CardTitle>趋势确认时：顺着看</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-6">
              <p>
                如果价格突破关键压力，OI 上升，大户多空比同步上升， 同时 Funding
                没有极端过热，那么大户偏多可以视为顺势确认。
              </p>

              <div className="rounded-lg border bg-muted/40 p-4 text-foreground">
                <p className="font-medium">偏多组合：</p>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>价格突破关键压力位</li>
                  <li>OI 上升，说明有新仓位进场</li>
                  <li>大户多空比上升</li>
                  <li>Funding 没有极端过热</li>
                  <li>回踩不破突破位</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-3">
              <TrendingDown className="h-5 w-5" />
              <CardTitle>情绪极端时：反着警惕</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-6">
              <p>
                如果大户多空比已经极高，Funding 也很高，但价格却涨不动，
                这时就不能继续盲目看多，反而要小心多头拥挤后的杀多。
              </p>

              <div className="rounded-lg border bg-muted/40 p-4 text-foreground">
                <p className="font-medium">反向风险：</p>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>大户多空比极高</li>
                  <li>Funding 明显过热</li>
                  <li>OI 高位继续增加</li>
                  <li>价格冲高失败</li>
                  <li>上方流动性被扫后快速跌回</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">交易员视角的使用方式</h2>

        <Card>
          <CardContent className="pt-6 space-y-4 text-sm text-muted-foreground leading-6">
            <div className="flex gap-3">
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-foreground" />
              <p>
                <span className="font-medium text-foreground">趋势中期：</span>
                大户多空比可以顺着看，用来确认大资金是否支持当前方向。
              </p>
            </div>

            <div className="flex gap-3">
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-foreground" />
              <p>
                <span className="font-medium text-foreground">
                  高位或低位极端：
                </span>
                大户多空比要反着警惕，因为某一边仓位过度拥挤时，容易出现清算行情。
              </p>
            </div>

            <div className="flex gap-3">
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-foreground" />
              <p>
                <span className="font-medium text-foreground">实盘开单：</span>
                不要只看大户多空比开单，要结合价格结构、OI、Funding、CVD
                和流动性清扫后的右侧确认。
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="rounded-xl border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold mb-3">一句话总结</h2>
        <p className="text-muted-foreground leading-7">
          大户多空比的最佳用法是：
          <span className="font-medium text-foreground">
            趋势确认时顺着大户看，情绪极端时反着警惕。
          </span>
          它更适合作为市场背景和风险判断工具，而不是单独的买卖信号。
        </p>
      </section>
    </main>
  );
}
