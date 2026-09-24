import { z } from "zod";

export const tradingNoteDraftSchema = z.object({
  content: z.string().trim().min(1, "写点内容再添加吧").max(101000, "笔记内容过长"),
  label_id: z.string().uuid().nullable(),
});
export const tradingLabelSchema = z.object({
  name: z.string().trim().min(1, "请输入标签含义").max(25, "标签最多 25 字"),
  color: z.string().regex(/^#[0-9a-fA-F]{6}$/, "请选择有效颜色"),
});
export type TradingNoteDraft = z.infer<typeof tradingNoteDraftSchema>;
export type TradingNote = TradingNoteDraft & { id: string; created_at: string; updated_at: string };
export type TradingLabel = z.infer<typeof tradingLabelSchema> & { id: string };
