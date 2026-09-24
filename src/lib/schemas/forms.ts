import { z } from "zod";

// 表单输入常见处理：trim、Number 转换、coerce 简化
export const FormInputSchema = z.object({
  // 用户可能输入 "  23 "，先 trim -> 再转 number
  age: z.preprocess(
    (v) => (typeof v === "string" ? v.trim() : v),
    z.coerce.number().int().min(1).max(120)
  ),
  // 始终去掉首尾空格
  name: z.string().transform((s) => s.trim()),
  // 用 coerce 简化布尔/数字字符串转换
  subscribed: z.enum(["true", "false"]).transform((v) => v === "true"),
});

export type FormInput = z.infer<typeof FormInputSchema>;
