// lib/todoClassify.ts
import { parseISO, startOfDay, differenceInCalendarDays } from "date-fns";

export type TodoBucket = "expired" | "week" | "future";

/** 统一的分类：以“日”为单位，比较本地日历天 */
export function classifyTodoDate(
  dueDate?: string | null,
  now: Date = new Date()
): TodoBucket {
  if (!dueDate) return "future"; // 无截止日期归为“未来”

  // 关键：parseISO + startOfDay，按本地日历天比较
  //只比“天”，不比具体时间
  const due = startOfDay(parseISO(dueDate));
  const today = startOfDay(now);
  const delta = differenceInCalendarDays(due, today);

  if (delta < 0) return "expired";
  if (delta <= 7) return "week";
  return "future";
}
