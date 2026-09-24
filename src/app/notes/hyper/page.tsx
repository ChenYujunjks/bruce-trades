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
  AlertTriangle,
  ArrowDown,
  ArrowRight,
  Banknote,
  Blocks,
  Building2,
  CircleDollarSign,
  Fingerprint,
  Globe2,
  KeyRound,
  Landmark,
  Layers3,
  LockKeyhole,
  Network,
  Scale,
  Shield,
  ShieldCheck,
  Smartphone,
  Wallet,
  WifiOff,
} from "lucide-react";

const policyComparison = [
  {
    label: "按实名认证识别某国用户",
    cex: "非常容易",
    dex: "困难很多",
    cexTone: "text-red-500",
    dexTone: "text-emerald-500",
  },
  {
    label: "直接关闭某个用户账户",
    cex: "容易",
    dex: "传统意义上较难",
    cexTone: "text-red-500",
    dexTone: "text-emerald-500",
  },
  {
    label: "限制某个用户提款",
    cex: "容易",
    dex: "明显更难",
    cexTone: "text-red-500",
    dexTone: "text-emerald-500",
  },
  {
    label: "限制官方网站访问",
    cex: "可以",
    dex: "同样可以",
    cexTone: "text-orange-500",
    dexTone: "text-orange-500",
  },
  {
    label: "国家屏蔽网站 / App",
    cex: "可以发生",
    dex: "同样可以发生",
    cexTone: "text-orange-500",
    dexTone: "text-orange-500",
  },
  {
    label: "限制银行和法币出入金",
    cex: "影响很大",
    dex: "仍然影响很大",
    cexTone: "text-red-500",
    dexTone: "text-red-500",
  },
  {
    label: "直接改变区块链上的钱包私钥",
    cex: "不适用",
    dex: "通常做不到",
    cexTone: "text-muted-foreground",
    dexTone: "text-emerald-500",
  },
  {
    label: "稳定币发行方冻结资产",
    cex: "可能",
    dex: "仍然可能",
    cexTone: "text-yellow-500",
    dexTone: "text-yellow-500",
  },
];

export default function CexDexPolicyRiskPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-16">
        {/* Hero */}
        <section className="mb-10 space-y-5">
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">CEX vs DEX</Badge>

            <Badge variant="secondary">国家政策风险</Badge>

            <Badge variant="secondary">Hyperliquid</Badge>
          </div>

          <h1 className="max-w-5xl text-3xl font-bold tracking-tight md:text-5xl md:leading-[1.08]">
            当国家开始收紧加密货币政策，
            <span className="text-brand">
              Binance、OKX 和 Hyperliquid 会有什么不同？
            </span>
          </h1>

          <p className="max-w-4xl text-base leading-7 text-muted-foreground md:text-lg">
            很多人会认为： “Hyperliquid 是去中心化交易所，所以政府无法限制。”
            这个说法只对了一半。
          </p>
        </section>

        {/* Main conclusion */}
        <Card className="mb-12 border-brand/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl md:text-2xl">
              <Scale className="h-5 w-5 text-brand" />
              最重要的结论
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-5">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
                <p className="mb-2 font-semibold text-emerald-600 dark:text-emerald-400">
                  DEX 确实更难被“账户级封锁”
                </p>

                <p className="text-sm leading-6 text-muted-foreground">
                  Hyperliquid 主要通过钱包地址识别用户， 不像 Binance、OKX
                  那样天然拥有一个完整的 “姓名 + 国籍 + 身份证 + 实名账户”体系。
                </p>
              </div>

              <div className="rounded-xl border border-orange-500/20 bg-orange-500/5 p-5">
                <p className="mb-2 font-semibold text-orange-600 dark:text-orange-400">
                  但 DEX 绝对不是“不受政府限制”
                </p>

                <p className="text-sm leading-6 text-muted-foreground">
                  国家仍然可以影响网站访问、App、网络入口、
                  银行系统、法币出入金， 平台官方前端本身也可以进行地区限制。
                </p>
              </div>
            </div>

            <div className="rounded-xl border-l-4 border-l-brand bg-muted/30 p-5">
              <p className="text-lg font-semibold leading-8">
                DEX 更抗“账户控制”， 但不等于更抗所有形式的国家监管。
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Basic concepts */}
        <section className="mb-12 grid gap-5 md:grid-cols-3">
          <Card>
            <CardHeader>
              <Fingerprint className="mb-2 h-6 w-6 text-brand" />

              <CardTitle>KYC = 实名认证</CardTitle>

              <CardDescription>平台知道这个账户是谁</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4 text-sm leading-6 text-muted-foreground">
              <p>Binance、OKX 这类平台通常要求用户提交：</p>

              <div className="space-y-2 rounded-xl border bg-muted/30 p-4">
                <p>身份证 / 护照</p>
                <p>姓名</p>
                <p>出生日期</p>
                <p>国家 / 居住地区</p>
                <p>人脸识别</p>
              </div>

              <p>所以平台可以知道：</p>

              <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4">
                <p className="font-medium text-foreground">
                  “这个账户属于某个国家或地区的居民。”
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Building2 className="mb-2 h-6 w-6 text-brand" />

              <CardTitle>CEX = 中心化交易所</CardTitle>

              <CardDescription>Binance、OKX 属于这一类</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4 text-sm leading-6 text-muted-foreground">
              <p>可以把 CEX 理解成：</p>

              <p className="font-medium text-foreground">
                一家公司运营的加密货币交易平台。
              </p>

              <div className="rounded-xl border bg-muted/30 p-5">
                <div className="flex flex-col items-center text-center">
                  <Wallet className="h-6 w-6" />

                  <p className="mt-2">你的资产</p>

                  <ArrowDown className="my-3 h-4 w-4" />

                  <Badge variant="secondary">Binance / OKX</Badge>

                  <ArrowDown className="my-3 h-4 w-4" />

                  <p>平台控制账户和提款</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-emerald-500/20">
            <CardHeader>
              <Blocks className="mb-2 h-6 w-6 text-emerald-500" />

              <CardTitle>DEX = 去中心化交易所</CardTitle>

              <CardDescription>Hyperliquid 属于这一类</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4 text-sm leading-6 text-muted-foreground">
              <p>
                DEX 通常不是先注册一个传统实名账户，
                而是直接连接自己的区块链钱包。
              </p>

              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
                <div className="flex flex-col items-center text-center">
                  <Wallet className="h-6 w-6 text-emerald-500" />

                  <p className="mt-2">Rabby / MetaMask</p>

                  <ArrowDown className="my-3 h-4 w-4" />

                  <Badge variant="secondary">Hyperliquid</Badge>

                  <ArrowDown className="my-3 h-4 w-4" />

                  <p className="font-mono text-xs">0x7aF2...91B3</p>
                </div>
              </div>

              <p>系统首先看到的是钱包地址， 而不是一个传统实名交易所账户。</p>
            </CardContent>
          </Card>
        </section>

        {/* Government tightening */}
        <section className="mb-12">
          <div className="mb-6">
            <Badge variant="outline" className="mb-3">
              国家政策收紧
            </Badge>

            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              假设一个国家决定严格限制加密货币交易
            </h2>

            <p className="mt-3 max-w-4xl text-sm leading-6 text-muted-foreground md:text-base">
              真正重要的问题不是“政府能不能让区块链消失”，
              而是政府可以通过哪些入口影响普通用户。
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="grid gap-4 md:grid-cols-5">
                <PolicyLayer icon={Landmark} title="政府" text="发布监管政策" />

                <PolicyLayer
                  icon={Globe2}
                  title="互联网"
                  text="网站 / App / 网络访问"
                />

                <PolicyLayer
                  icon={Building2}
                  title="交易平台"
                  text="账户与服务限制"
                />

                <PolicyLayer
                  icon={CircleDollarSign}
                  title="稳定币"
                  text="USDC / USDT"
                />

                <PolicyLayer
                  icon={Banknote}
                  title="银行体系"
                  text="人民币出入金"
                />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CEX under pressure */}
        <section className="mb-12">
          <div className="mb-5">
            <Badge variant="outline" className="mb-3 border-red-500/30">
              CEX
            </Badge>

            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              CEX 面对国家政策收紧时，为什么更容易受到直接影响？
            </h2>
          </div>

          <Card className="border-red-500/20">
            <CardContent className="space-y-6 p-6">
              <div className="grid items-center gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
                <div className="rounded-xl border bg-muted/30 p-5 text-center">
                  <Landmark className="mx-auto mb-2 h-6 w-6" />

                  <p className="font-semibold">政策收紧</p>
                </div>

                <ArrowRight className="mx-auto hidden h-5 w-5 md:block" />

                <div className="rounded-xl border bg-muted/30 p-5 text-center">
                  <Building2 className="mx-auto mb-2 h-6 w-6" />

                  <p className="font-semibold">Binance / OKX</p>
                </div>

                <ArrowRight className="mx-auto hidden h-5 w-5 md:block" />

                <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5 text-center">
                  <LockKeyhole className="mx-auto mb-2 h-6 w-6 text-red-500" />

                  <p className="font-semibold">直接限制账户</p>
                </div>
              </div>

              <Separator />

              <p className="text-sm leading-6 text-muted-foreground">
                因为平台已经知道你的姓名、身份证、
                国家和居住地区，所以如果平台决定停止服务某个地区，
                从技术上看非常简单。
              </p>

              <div className="grid gap-3 md:grid-cols-4">
                <RestrictionCard title="交易" status="暂停" />

                <RestrictionCard title="充值" status="关闭" />

                <RestrictionCard title="合约" status="禁止" />

                <RestrictionCard title="提款" status="审核 / 限制" />
              </div>

              <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
                <p className="font-semibold">CEX 最大的问题</p>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  账户、身份资料、交易权限和提款权限，
                  全部集中在同一家公司的系统里。
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* DEX under pressure */}
        <section className="mb-12">
          <div className="mb-5">
            <Badge variant="outline" className="mb-3 border-emerald-500/30">
              DEX
            </Badge>

            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              那 Hyperliquid 是不是就可以完全不受限制？
            </h2>
          </div>

          <Card className="border-emerald-500/20">
            <CardContent className="space-y-7 p-6">
              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-emerald-500" />

                  <div>
                    <p className="font-semibold">
                      在“传统实名账户冻结”这一层， Hyperliquid 确实更抗限制
                    </p>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Hyperliquid 协议主要识别钱包地址， 所以不存在一个与
                      Binance 完全相同的
                      “筛选所有中国实名账户，然后批量关闭账户”结构。
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <KeyRound className="h-5 w-5 text-emerald-500" />
                      私钥
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="text-sm leading-6 text-muted-foreground">
                    政府或者交易平台不能像修改 Binance
                    数据库账户一样简单修改你的钱包私钥。
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Network className="h-5 w-5 text-emerald-500" />
                      链上账户
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="text-sm leading-6 text-muted-foreground">
                    链上首先看到的是 0x 开头的钱包地址，而不是护照国籍字段。
                  </CardContent>
                </Card>
              </div>

              <Separator />

              <div>
                <p className="mb-4 text-lg font-semibold">
                  但是国家仍然可以影响下面这些地方：
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <RiskCard
                    icon={WifiOff}
                    title="屏蔽官方网站"
                    text="即使链还在运行，国家仍然可以限制普通用户访问 Hyperliquid 官方网站或相关网络入口。"
                  />

                  <RiskCard
                    icon={Globe2}
                    title="官方前端自己限制地区"
                    text="DEX 的底层协议和官方网页不是同一个东西。官方网页完全可以因为合规要求拒绝某些地区访问。"
                  />

                  <RiskCard
                    icon={Banknote}
                    title="限制法币出入金"
                    text="即使你链上有 USDC，最终想换成人民币进入银行卡，仍然会重新进入银行和支付体系。"
                  />

                  <RiskCard
                    icon={CircleDollarSign}
                    title="稳定币仍可能被控制"
                    text="Hyperliquid 永续交易大量依赖 USDC，而 USDC 由 Circle 发行，因此仍然存在中心化发行方这一层。"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Key distinction */}
        <Card className="mb-12 overflow-hidden">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl">
              所以真正应该区分两种“封锁”
            </CardTitle>
          </CardHeader>

          <CardContent className="grid gap-5 md:grid-cols-2">
            <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
              <LockKeyhole className="mb-3 h-6 w-6 text-red-500" />

              <p className="mb-2 font-semibold">账户被控制</p>

              <p className="text-sm leading-6 text-muted-foreground">
                例如 Binance 告诉你：
              </p>

              <div className="mt-4 rounded-lg border bg-background/50 p-4 text-sm leading-7">
                <p>账户无法交易</p>
                <p>合约功能关闭</p>
                <p>提款进入审核</p>
              </div>

              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                这是 CEX 特别容易发生的风险。
              </p>
            </div>

            <div className="rounded-xl border border-orange-500/20 bg-orange-500/5 p-5">
              <WifiOff className="mb-3 h-6 w-6 text-orange-500" />

              <p className="mb-2 font-semibold">访问被限制</p>

              <p className="text-sm leading-6 text-muted-foreground">例如：</p>

              <div className="mt-4 rounded-lg border bg-background/50 p-4 text-sm leading-7">
                <p>Hyperliquid 网站打不开</p>
                <p>App / API 无法正常访问</p>
                <p>银行无法进行相关资金结算</p>
              </div>

              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                DEX 同样可能遇到这一类风险。
              </p>
            </div>
          </CardContent>
        </Card>

        {/* China case */}
        <section className="mb-12">
          <div className="mb-5">
            <Badge variant="outline" className="mb-3">
              中国大陆情景
            </Badge>

            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              如果中国大陆继续收紧政策，会发生什么？
            </h2>
          </div>

          <Card>
            <CardContent className="space-y-6 p-6">
              <p className="max-w-4xl text-sm leading-7 text-muted-foreground">
                中国大陆目前的政策并不是只针对 Binance 或 OKX
                这样的中心化交易所， 而是针对虚拟货币相关业务活动本身。
              </p>

              <div className="grid gap-4 md:grid-cols-3">
                <PolicyEffect
                  number="01"
                  title="CEX"
                  text="可以通过实名资料直接识别并限制某个地区用户。"
                />

                <PolicyEffect
                  number="02"
                  title="DEX 前端"
                  text="官方网站、App、API 和相关网络入口仍可能受到访问限制。"
                />

                <PolicyEffect
                  number="03"
                  title="资金入口"
                  text="银行、支付体系和人民币出入金依然处于传统监管范围。"
                />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Comparison */}
        <section className="mb-12">
          <div className="mb-5">
            <Badge variant="outline" className="mb-3">
              最终对比
            </Badge>

            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              国家政策收紧时：CEX vs DEX
            </h2>
          </div>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-[1.5fr_.8fr_.8fr] border-b bg-muted/40 px-4 py-4 text-sm font-semibold md:grid-cols-[2fr_1fr_1fr] md:px-6">
                <div>政府或平台可以做什么？</div>

                <div>Binance / OKX</div>

                <div>Hyperliquid</div>
              </div>

              {policyComparison.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[1.5fr_.8fr_.8fr] items-center border-b px-4 py-4 text-sm last:border-b-0 md:grid-cols-[2fr_1fr_1fr] md:px-6"
                >
                  <div className="pr-4 font-medium">{row.label}</div>

                  <div className={row.cexTone}>{row.cex}</div>

                  <div className={row.dexTone}>{row.dex}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        {/* Layers */}
        <section className="mb-12">
          <div className="mb-5">
            <Badge variant="outline" className="mb-3">
              理解 DEX 的关键
            </Badge>

            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Hyperliquid 其实有多个不同的“层”
            </h2>
          </div>

          <div className="space-y-3">
            <LayerCard
              icon={Smartphone}
              number="01"
              title="官方网页 / App"
              description="最容易受到地区限制、网络屏蔽和合规政策影响。"
              risk="高"
            />

            <LayerCard
              icon={Network}
              number="02"
              title="Hyperliquid 网络"
              description="底层区块链和验证者继续运行，并不等于官方网页一定能够访问。"
              risk="中"
            />

            <LayerCard
              icon={Wallet}
              number="03"
              title="你的钱包和私钥"
              description="只要私钥仍然由你掌握，它不像 CEX 账户密码一样由交易所后台直接控制。"
              risk="较低"
            />

            <LayerCard
              icon={CircleDollarSign}
              number="04"
              title="USDC"
              description="虽然是链上资产，但存在 Circle 这一中心化发行方。"
              risk="中"
            />

            <LayerCard
              icon={Landmark}
              number="05"
              title="银行 / 法币体系"
              description="最终涉及人民币、银行卡和支付系统时，仍然完全进入传统监管体系。"
              risk="高"
            />
          </div>
        </section>

        {/* Final */}
        <Card className="border-brand/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl md:text-2xl">
              <Shield className="h-5 w-5 text-brand" />
              最终应该怎么理解？
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-5">
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
              <p className="mb-2 font-semibold">
                Hyperliquid 确实解决了一类重要问题
              </p>

              <p className="text-sm leading-6 text-muted-foreground">
                它明显降低了 “一家中心化交易所通过实名认证资料找到你，
                然后直接修改你的账户和提款权限” 这一风险。
              </p>
            </div>

            <div className="rounded-xl border border-orange-500/20 bg-orange-500/5 p-5">
              <p className="mb-2 font-semibold">但它不是监管豁免工具</p>

              <p className="text-sm leading-6 text-muted-foreground">
                国家仍然可以监管网站访问、金融机构、
                银行、稳定币入口和境内服务。 Hyperliquid
                官方界面本身也仍然可能设置地区限制。
              </p>
            </div>

            <Separator />

            <div className="rounded-xl bg-brand/5 p-6 text-center">
              <p className="text-xl font-bold md:text-2xl">
                CEX 更容易被
                <span className="text-red-500">“控制账户”</span>
              </p>

              <p className="mt-3 text-xl font-bold md:text-2xl">
                DEX 更难控制账户， 但仍然可以被
                <span className="text-orange-500">“限制入口”</span>
              </p>
            </div>

            <div className="rounded-xl border-l-4 border-l-brand bg-muted/30 p-5">
              <p className="text-lg font-semibold leading-8">
                Hyperliquid 不是“不受国家限制”。
              </p>

              <p className="mt-2 leading-7 text-muted-foreground">
                更准确的说法是：
                <span className="font-medium text-foreground">
                  国家要像控制 Binance 实名账户一样控制一个 DEX
                  钱包账户，会困难很多；
                </span>
                但是国家仍然可以控制用户通往这个协议的很多入口。
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-8 flex items-start gap-3 rounded-xl border bg-muted/20 p-4">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />

          <p className="text-xs leading-5 text-muted-foreground">
            本页面讨论的是中心化交易所和去中心化交易所在国家政策变化下的技术结构和风险差异。
            “技术上更难限制”不等于“法律上允许使用”，也不代表任何司法辖区中的法律建议。
          </p>
        </div>
      </div>
    </main>
  );
}

function PolicyLayer({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ElementType;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border bg-muted/20 p-4 text-center">
      <Icon className="mx-auto mb-3 h-6 w-6 text-brand" />

      <p className="font-semibold">{title}</p>

      <p className="mt-1 text-xs leading-5 text-muted-foreground">{text}</p>
    </div>
  );
}

function RestrictionCard({ title, status }: { title: string; status: string }) {
  return (
    <div className="rounded-xl border p-4">
      <p className="text-sm text-muted-foreground">{title}</p>

      <p className="mt-1 font-semibold text-red-500">{status}</p>
    </div>
  );
}

function RiskCard({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ElementType;
  title: string;
  text: string;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Icon className="h-5 w-5 text-orange-500" />
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="text-sm leading-6 text-muted-foreground">
        {text}
      </CardContent>
    </Card>
  );
}

function PolicyEffect({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border p-5">
      <p className="mb-4 font-mono text-xs text-muted-foreground">{number}</p>

      <p className="font-semibold">{title}</p>

      <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
    </div>
  );
}

function LayerCard({
  icon: Icon,
  number,
  title,
  description,
  risk,
}: {
  icon: React.ElementType;
  number: string;
  title: string;
  description: string;
  risk: string;
}) {
  return (
    <Card>
      <CardContent className="grid items-center gap-4 p-5 md:grid-cols-[50px_50px_1fr_auto]">
        <Icon className="h-5 w-5 text-brand" />

        <p className="font-mono text-xs text-muted-foreground">{number}</p>

        <div>
          <p className="font-semibold">{title}</p>

          <p className="mt-1 text-sm leading-6 text-muted-foreground">
            {description}
          </p>
        </div>

        <Badge variant="secondary">受政策影响：{risk}</Badge>
      </CardContent>
    </Card>
  );
}
