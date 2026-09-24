import { Compass } from "lucide-react";

export default function TradingReminder() {
  return (
    <aside
      aria-label="交易指南针"
      className="border-t border-emerald-200/60 bg-emerald-50 text-emerald-950 dark:border-emerald-800/50 dark:bg-[#112a26] dark:text-emerald-50"
    >
      <div className="container mx-auto flex items-center justify-center gap-4 px-4 py-2.5 sm:gap-6">
        <span className="flex shrink-0 items-center gap-2 text-emerald-700 dark:text-emerald-200">
          <Compass className="h-4 w-4" aria-hidden="true" />
          <span className="hidden text-xs font-medium sm:inline">交易指南针</span>
        </span>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-xs font-medium tracking-wider sm:text-sm">
          <span className="flex gap-4"><span>关键位置</span><span>关键信号</span></span>
          <span className="flex gap-4"><span>心态管理</span><span>仓位管理</span></span>
        </div>
      </div>
    </aside>
  );
}
