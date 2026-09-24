import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-12 sm:py-20" aria-labelledby="home-title">
      <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
        A personal trading notebook
      </p>
      <h1 id="home-title" className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
        记录交易，<br />
        <span className="text-muted-foreground">也记录每一次思考。</span>
      </h1>
      <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
        这里是我的交易手记。记录每一次 trade、每一个 trading idea，
        整理交易笔记与个人想法，也留下实盘中的判断、情绪和经验。
        从观察到执行，再回到复盘，让每一次经历都有迹可循。
      </p>
      <Link href="/trading/notes" className="mt-8 inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
        阅读交易笔记 <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </section>
  );
}
