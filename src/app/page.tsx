import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Hero from "@/components/home/Hero";
import TradingCompass from "@/components/home/TradingCompass";
import Footer from "@/components/home/Footer";

const collections = [
  { number: "01", title: "交易笔记与复盘", subtitle: "Trades & notes", description: "留住交易中的观察、执行与反思，整理实盘积累的经验。", href: "/trading/notes" },
  { number: "02", title: "交易思路与框架", subtitle: "Ideas & frameworks", description: "梳理市场结构、流动性与交易模型，为自己的判断留下依据。", href: "/trading/page" },
  { number: "03", title: "个人想法与记录", subtitle: "Thoughts & reflections", description: "收集尚在生长的想法，以及交易之外值得记下的思考。", href: "/notes" },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl">
      <Hero />
      <TradingCompass />
      <section className="py-14 sm:py-20" aria-labelledby="collections-title">
        <div className="mb-7 flex items-baseline justify-between gap-4">
          <h2 id="collections-title" className="text-xl font-semibold tracking-tight">持续记录，持续复盘。</h2>
          <span className="hidden text-xs uppercase tracking-widest text-muted-foreground sm:block">The notebook</span>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {collections.map((collection) => (
            <Link key={collection.href} href={collection.href} className="group rounded-2xl border bg-card p-6 transition-colors hover:border-foreground/30 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
              <div className="mb-8 flex items-center justify-between text-muted-foreground">
                <span className="font-mono text-xs">{collection.number}</span>
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" aria-hidden="true" />
              </div>
              <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{collection.subtitle}</p>
              <h3 className="text-lg font-medium">{collection.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{collection.description}</p>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
