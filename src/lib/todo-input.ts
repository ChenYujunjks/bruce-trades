import { z } from "zod";

// Calendar dates stay local; do not convert them through UTC timestamps.
export const optionalTodoDate = z.string().refine((value) => {
  if (value === "") return true;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(0);
  date.setUTCFullYear(year, month - 1, day);
  return date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day;
}, "请输入有效日期").nullable().optional().transform(value => value || null);

export const todoDetailsInput = z.object({
  title: z.string().trim().min(1, "请输入标题").max(300),
  description: z.string().max(20000).optional(),
  due_date: optionalTodoDate,
  kind: z.enum(["task", "note"]).default("task"),
  tags: z.array(z.string().trim().min(1).max(24)).max(12).default([])
    .transform(tags => [...new Set(tags)]),
  is_pinned: z.boolean().default(false),
});
