import { Compass } from "lucide-react";

const principles = [
  { title: "关键位置", label: "Location", description: "先看位置，再做判断。" },
  { title: "关键信号", label: "Confirmation", description: "耐心等待，确认再行动。" },
  { title: "心态管理", label: "Mindset", description: "觉察情绪，守住纪律。" },
  { title: "仓位管理", label: "Position sizing", description: "尊重风险，保持主动。" },
];

export default function TradingCompass() {
  return (
    <section aria-labelledby="compass-title" className="relative overflow-hidden rounded-3xl border border-emerald-900 bg-[#112a26] p-6 text-emerald-50 sm:p-10 lg:p-12">
      <Compass aria-hidden="true" strokeWidth={0.6} className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 text-emerald-100/5" />
      <div className="relative flex items-center gap-3 text-emerald-200">
        <Compass className="h-5 w-5" aria-hidden="true" />
        <h2 id="compass-title" className="text-sm font-medium tracking-widest">我的交易指南针</h2>
      </div>
      <p className="relative mt-4 text-sm leading-7 text-emerald-100/65">十六个字，提醒自己每一次入场的方向。</p>
      <div className="relative mt-8 grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
        {principles.map((principle, index) => (
          <div key={principle.title} className="border-t border-emerald-100/20 py-6">
            <p className="mb-4 text-[11px] uppercase tracking-widest text-emerald-200/60">0{index + 1} / {principle.label}</p>
            <h3 className="whitespace-nowrap text-3xl font-medium tracking-wider">{principle.title}</h3>
            <p className="mt-3 text-sm text-emerald-100/65">{principle.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
