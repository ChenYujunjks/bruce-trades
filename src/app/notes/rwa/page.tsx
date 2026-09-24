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
  Blocks,
  Building2,
  ChartNoAxesCombined,
  CircleDollarSign,
  Coins,
  Database,
  Flame,
  Gauge,
  Globe2,
  Landmark,
  Layers3,
  Network,
  Orbit,
  Pickaxe,
  Scale,
  ShieldCheck,
  TrendingUp,
  Wallet,
  Zap,
} from "lucide-react";

const coreAssets = [
  {
    ticker: "ETH",
    name: "Ethereum",
    layer: "Settlement",
    thesis: "Public Blockchain 结算层",
    description:
      "如果美元、美债、美股、ETF 与其他金融资产大规模进入公共区块链，Ethereum 最直接捕获的是 blockspace、Gas、staking 与链上抵押品需求。",
    capture: "★★★★★",
    elasticity: "★★★★☆",
    icon: Blocks,
  },
  {
    ticker: "AAVE",
    name: "Aave",
    layer: "Credit",
    thesis: "链上信用市场",
    description:
      "如果 Tokenized Assets 不只是被持有，而是真正进入抵押、借贷、杠杆与结构化金融，Aave 的可服务市场可能出现非常强的扩张。",
    capture: "★★★★☆",
    elasticity: "★★★★★",
    icon: Banknote,
  },
  {
    ticker: "LINK",
    name: "Chainlink",
    layer: "Data & Interoperability",
    thesis: "Tokenized Capital Markets 的中间层",
    description:
      "更多现实资产上链意味着更多价格数据、NAV、Proof of Reserve、跨链通信与 TradFi ↔ Blockchain 信息交换需求。",
    capture: "★★★★☆",
    elasticity: "★★★★☆",
    icon: Network,
  },
  {
    ticker: "SOL",
    name: "Solana",
    layer: "High Performance Settlement",
    thesis: "高吞吐链上经济 Beta",
    description:
      "SOL 可能受益于稳定币、支付、交易、RWA 与消费金融增长，但它的核心逻辑更接近整个高性能链上经济扩张，而不是单一 RWA。",
    capture: "★★★★☆",
    elasticity: "★★★★★",
    icon: Zap,
  },
];

const extendedAssets = [
  {
    ticker: "COIN",
    role: "Crypto Infrastructure",
    description: "交易、托管、Base、USDC、机构服务与资产发行入口。",
  },
  {
    ticker: "HOOD",
    role: "TradFi → Onchain",
    description: "把传统证券用户与券商体验迁移到链上资本市场。",
  },
  {
    ticker: "CRCL",
    role: "Stablecoin",
    description: "USDC 作为链上美元、支付与金融资产结算中的现金腿。",
  },
  {
    ticker: "ONDO",
    role: "Tokenization",
    description: "股票、ETF、Treasury 与其他传统金融资产的直接上链入口。",
  },
  {
    ticker: "HYPE",
    role: "Trading",
    description: "押注未来全球资产进入 24/7 原生链上交易与衍生品体系。",
  },
];

const valueCaptureQuestions = [
  {
    number: "01",
    title: "RWA 增长是否必须使用它？",
    description:
      "如果使用关系只是可选的，行业增长未必能够长期转化成该 Token 的需求。",
  },
  {
    number: "02",
    title: "使用增长是否会购买、锁定或消耗 Token？",
    description:
      "真正重要的是网络使用量与 Token demand 之间是否存在协议层面的强制连接。",
  },
  {
    number: "03",
    title: "协议收入是否能够回流 Token？",
    description:
      "协议赚钱并不等于 Token holder 获益，需要观察 buyback、burn、staking、fee sharing 等机制。",
  },
  {
    number: "04",
    title: "行业扩大 100 倍时，它的经济弹性有多大？",
    description:
      "同样受益于 RWA，底层公链、信用协议和数据基础设施的收入弹性可能完全不同。",
  },
];

const deepDive = [
  {
    ticker: "ETH",
    title: "最直接的底层价值捕获",
    icon: Flame,
    flow: [
      "更多资产上链",
      "更多结算与交易",
      "Blockspace Demand",
      "ETH Gas",
      "Fee Burn",
      "Staking / Collateral Demand",
    ],
    conclusion:
      "ETH 的优势在于价值传导路径非常清晰。只要大量经济活动真正落在 Ethereum 及其结算体系中，网络使用天然需要 ETH。",
    risk: "最大变量是未来大量 RWA 是否真的选择 Ethereum-centric public blockchain，而不是私有链、其他 L1 或封闭式金融网络。",
  },
  {
    ticker: "AAVE",
    title: "最大的信用市场弹性",
    icon: Banknote,
    flow: [
      "Tokenized Assets",
      "Collateral",
      "Borrowing",
      "Leverage",
      "Protocol Revenue",
      "Token Accrual",
    ],
    conclusion:
      "如果美股、ETF、Treasury 真正进入 DeFi 抵押体系，Aave 的 TAM 可能从 Crypto Lending 扩张成全球链上信用市场。",
    risk: "最大的风险不是协议没有收入，而是 Protocol Value Capture 与 AAVE Token Value Capture 之间仍然需要持续验证。",
  },
  {
    ticker: "LINK",
    title: "最典型的 Picks-and-Shovels",
    icon: Network,
    flow: [
      "更多链上资产",
      "Price / NAV Data",
      "Proof of Reserve",
      "Cross-chain Messaging",
      "Chainlink Fees",
      "LINK Demand",
    ],
    conclusion:
      "LINK 不需要押注单一公链胜出。只要全球资产进入多链环境，并需要可信数据与跨链连接，Chainlink 就拥有成为标准中间层的机会。",
    risk: "关键依然是服务收入增长能否持续、规模化并足够强地转化成 LINK 的经济需求。",
  },
  {
    ticker: "SOL",
    title: "高增长 Onchain Economy Beta",
    icon: Zap,
    flow: [
      "Stablecoin / RWA 增长",
      "交易与支付",
      "高吞吐链上活动",
      "SOL Fees",
      "Validator Economics",
      "Staking Demand",
    ],
    conclusion:
      "SOL 的赔率来自高吞吐量。如果大量支付、交易与 Tokenized Assets 选择 Solana，极大的网络活动规模可以推动 SOL 的经济需求。",
    risk: "Solana 单笔交易成本低，因此单纯依赖 fee burn 的价值捕获弱于直觉，需要更依赖 staking、网络货币属性和生态规模。",
  },
];

const hierarchy = [
  {
    level: "Tier 1",
    title: "Core Settlement Exposure",
    assets: "ETH",
    description: "押注 Public Blockchain 最终成为全球金融资产的重要结算层。",
  },
  {
    level: "Tier 2",
    title: "High-Elasticity Financial Infrastructure",
    assets: "AAVE · LINK",
    description:
      "分别押注链上信用扩张，以及资产数据与跨链基础设施成为金融市场标准层。",
  },
  {
    level: "Tier 3",
    title: "High-Growth Ecosystem Beta",
    assets: "SOL",
    description: "押注大量金融活动最终选择高吞吐公共链，并形成庞大的链上经济。",
  },
];

export default function OnchainCapitalMarketsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-16">
        {/* Hero */}
        <section className="mb-10 space-y-5">
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">RWA</Badge>
            <Badge variant="secondary">Tokenization</Badge>
            <Badge variant="secondary">Institutional DeFi</Badge>
            <Badge variant="secondary">Value Capture</Badge>
          </div>

          <h1 className="max-w-5xl text-3xl font-bold tracking-tight md:text-5xl md:leading-[1.08]">
            RWA 可能不只是下一轮叙事，
            <span className="text-brand">
              而是全球资本市场开始迁移到链上的长期趋势
            </span>
          </h1>

          <p className="max-w-4xl text-base leading-7 text-muted-foreground md:text-lg">
            稳定币已经证明美元可以存在于公共区块链上。下一阶段可能是美国国债、股票、ETF、
            基金与更多金融资产逐步进入同一个可编程金融系统。
          </p>

          <p className="max-w-4xl text-base leading-7 text-muted-foreground md:text-lg">
            但投资真正需要回答的问题不是：
            <span className="font-medium text-foreground">
              “谁和 RWA 有关系？”
            </span>
            而是：
            <span className="font-medium text-brand">
              “谁能够把 RWA 的增长真正转化成 Token Demand 与经济价值？”
            </span>
          </p>
        </section>

        {/* Main Thesis */}
        <Card className="mb-12 border-brand/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl md:text-2xl">
              <Scale className="h-5 w-5 text-brand" />
              核心判断
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-5">
            <p className="max-w-4xl leading-7 text-muted-foreground">
              RWA
              的真正终局可能不是“把资产放到链上”，而是形成一套新的全球资本市场基础设施：
              <span className="font-medium text-foreground">
                资产发行、结算、数据、抵押、信用、交易和稳定币现金结算全部实现链上组合。
              </span>
            </p>

            <div className="rounded-xl bg-muted/50 p-5 md:p-6">
              <div className="flex flex-wrap items-center gap-2 text-sm font-medium md:text-base">
                <span>美元 Stablecoin</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
                <span>Treasuries</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
                <span>Stocks / ETFs</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
                <span>Collateral</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
                <span>Credit</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
                <span>Derivatives</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
                <span className="text-brand">
                  Global Onchain Capital Market
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Value Capture Framework */}
        <section className="mb-14">
          <div className="mb-6 space-y-2">
            <Badge variant="outline">Value Capture Framework</Badge>

            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              不要再问“谁受益”，而要问这四个问题
            </h2>

            <p className="max-w-4xl leading-7 text-muted-foreground">
              最受益的协议，不一定对应最值得持有的
              Token。真正重要的是行业增长能否强制、持续地进入 Token 本身。
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {valueCaptureQuestions.map((item) => (
              <Card key={item.number}>
                <CardHeader>
                  <div className="mb-2 text-xs font-semibold tracking-[0.2em] text-brand">
                    {item.number}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="mb-14" />

        {/* Core Token Ranking */}
        <section className="mb-14">
          <div className="mb-7 space-y-2">
            <Badge variant="outline">Core Token Exposure</Badge>

            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              真正需要重点研究的四个 Token
            </h2>

            <p className="max-w-4xl leading-7 text-muted-foreground">
              如果我们只研究能够直接捕获金融上链价值的 Crypto Token，
              ETH、AAVE、LINK 和 SOL 的逻辑最值得单独拆解。
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {coreAssets.map((asset) => {
              const Icon = asset.icon;

              return (
                <Card
                  key={asset.ticker}
                  className="transition-colors hover:border-brand/30"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10">
                          <Icon className="h-5 w-5 text-brand" />
                        </div>

                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <CardTitle className="text-xl">
                              {asset.ticker}
                            </CardTitle>
                            <Badge variant="secondary">{asset.layer}</Badge>
                          </div>

                          <CardDescription className="mt-1">
                            {asset.name}
                          </CardDescription>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-5">
                    <div>
                      <p className="mb-1 font-medium">{asset.thesis}</p>
                      <p className="text-sm leading-6 text-muted-foreground">
                        {asset.description}
                      </p>
                    </div>

                    <Separator />

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="mb-1 text-xs text-muted-foreground">
                          Value Capture Directness
                        </p>
                        <p className="font-mono text-sm font-semibold text-brand">
                          {asset.capture}
                        </p>
                      </div>

                      <div>
                        <p className="mb-1 text-xs text-muted-foreground">
                          Growth Elasticity
                        </p>
                        <p className="font-mono text-sm font-semibold text-brand">
                          {asset.elasticity}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* ETH AAVE LINK SOL Deep Dive */}
        <section className="mb-14">
          <div className="mb-7 space-y-2">
            <Badge variant="outline">Deep Dive</Badge>

            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              RWA 增长，究竟如何传导到 Token？
            </h2>
          </div>

          <div className="space-y-5">
            {deepDive.map((item) => {
              const Icon = item.icon;

              return (
                <Card key={item.ticker}>
                  <CardHeader>
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10">
                        <Icon className="h-5 w-5 text-brand" />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <CardTitle className="text-xl">
                            {item.ticker}
                          </CardTitle>
                          <Badge variant="secondary">{item.title}</Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div className="rounded-xl border bg-muted/20 p-4">
                      <div className="flex flex-wrap items-center gap-2 text-sm font-medium">
                        {item.flow.map((step, index) => (
                          <div key={step} className="flex items-center gap-2">
                            <span>{step}</span>
                            {index !== item.flow.length - 1 && (
                              <ArrowRight className="h-4 w-4 text-muted-foreground" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <p className="mb-2 text-sm font-semibold text-foreground">
                          Bull Case
                        </p>
                        <p className="text-sm leading-6 text-muted-foreground">
                          {item.conclusion}
                        </p>
                      </div>

                      <div>
                        <p className="mb-2 text-sm font-semibold text-foreground">
                          Key Risk
                        </p>
                        <p className="text-sm leading-6 text-muted-foreground">
                          {item.risk}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Directness vs Elasticity */}
        <section className="mb-14">
          <div className="mb-6 space-y-2">
            <Badge variant="outline">Directness vs Elasticity</Badge>

            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              最直接的，不一定是弹性最大的
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-brand" />
                  更高确定性
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-2xl font-bold text-brand">ETH</p>

                <p className="text-sm leading-6 text-muted-foreground">
                  如果金融活动真正落在 Ethereum 结算层，Gas、Fee Burn、Staking
                  与 Collateral Demand 都提供了相对直接的价值传导路径。
                </p>

                <p className="text-sm font-medium">
                  特征：高确定性 × 较成熟价值捕获
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gauge className="h-5 w-5 text-brand" />
                  更高增长弹性
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-2xl font-bold text-brand">
                  AAVE · LINK · SOL
                </p>

                <p className="text-sm leading-6 text-muted-foreground">
                  如果 RWA
                  从几十亿美元扩大到数万亿美元，这些基础设施的可服务市场可能出现比底层结算层更强的收入与使用量弹性。
                </p>

                <p className="text-sm font-medium">
                  特征：更高赔率 × 更高执行与竞争风险
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Investment Hierarchy */}
        <section className="mb-14">
          <div className="mb-6 space-y-2">
            <Badge variant="outline">Investment Hierarchy</Badge>

            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              如果按照 Value Capture 来分层
            </h2>
          </div>

          <div className="space-y-4">
            {hierarchy.map((item) => (
              <Card key={item.level}>
                <CardContent className="p-5 md:p-6">
                  <div className="grid gap-4 md:grid-cols-[120px_1fr_220px] md:items-center">
                    <Badge variant="outline" className="w-fit">
                      {item.level}
                    </Badge>

                    <div>
                      <h3 className="mb-1 font-semibold">{item.title}</h3>
                      <p className="text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>

                    <p className="font-mono text-lg font-bold text-brand md:text-right">
                      {item.assets}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Broader Stack */}
        <section className="mb-14">
          <div className="mb-6 space-y-2">
            <Badge variant="outline">Broader Exposure</Badge>

            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              其他仍然重要的链上资本市场受益资产
            </h2>

            <p className="max-w-4xl leading-7 text-muted-foreground">
              它们可能非常受益，但和 ETH / AAVE / LINK / SOL 不同，
              很多属于公司股权、Tokenization 平台或交易基础设施，而不是底层
              Token Value Capture 的同一种逻辑。
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {extendedAssets.map((asset) => (
              <Card key={asset.ticker}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-3">
                    <CardTitle className="font-mono text-xl">
                      {asset.ticker}
                    </CardTitle>
                    <Badge variant="secondary">{asset.role}</Badge>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {asset.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Final Investment Map */}
        <section className="mb-14">
          <Card className="overflow-hidden border-brand/30">
            <CardHeader>
              <Badge variant="outline" className="w-fit">
                Final Framework
              </Badge>

              <CardTitle className="text-xl md:text-2xl">
                我的链上资本市场 Value Capture Map
              </CardTitle>
            </CardHeader>

            <CardContent>
              <div className="grid gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-2 lg:grid-cols-4">
                {[
                  ["ETH", "Settlement"],
                  ["AAVE", "Credit"],
                  ["LINK", "Data / Interop"],
                  ["SOL", "High-Performance Chain"],
                  ["ONDO", "Assets"],
                  ["CRCL", "Money"],
                  ["HYPE", "Trading"],
                  ["COIN / HOOD", "Distribution"],
                ].map(([ticker, role]) => (
                  <div key={ticker} className="bg-background p-5">
                    <p className="mb-1 font-mono text-xl font-bold text-brand">
                      {ticker}
                    </p>
                    <p className="text-sm text-muted-foreground">{role}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Final Thesis */}
        <Card className="border-brand/40 bg-brand/[0.03]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl md:text-2xl">
              <Globe2 className="h-5 w-5 text-brand" />
              最终 Thesis
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-5 text-base leading-7">
            <p>
              RWA 最值得关注的地方，不是出现了多少个所谓的 RWA Token，
              而是全球金融资产是否开始真正进入一个
              <span className="font-semibold text-brand">
                可编程、24/7、可抵押、可组合的链上资本市场。
              </span>
            </p>

            <p className="text-muted-foreground">
              如果这个趋势成立，最值得长期研究的资产不是所有“相关项目”，而是那些能够把资产规模增长持续转化成
              Gas、Staking、Protocol Revenue、Token Buy Demand、Collateral
              Demand 和网络效应的基础设施。
            </p>

            <div className="rounded-xl border bg-background p-5">
              <p className="mb-3 text-sm font-semibold">
                当前最值得研究的 Token Value Capture：
              </p>

              <div className="flex flex-wrap gap-2">
                {["ETH", "AAVE", "LINK", "SOL"].map((ticker) => (
                  <Badge key={ticker} variant="secondary" className="font-mono">
                    {ticker}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator />

            <p className="text-sm font-medium">
              最关键的问题永远不是：
              <span className="text-muted-foreground">“RWA 会不会增长？”</span>
            </p>

            <p className="text-lg font-semibold text-brand">
              而是：当 RWA 增长 100 倍时，哪个 Token
              的需求、收入和稀缺性能够跟着增长最多？
            </p>

            <p className="text-xs leading-5 text-muted-foreground">
              本页面仅用于记录个人研究框架，不构成投资建议。行业增长、协议收入和
              Token
              价格表现之间并不存在必然对应关系，仍需持续验证真实收入、Tokenomics、竞争格局与监管环境。
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
