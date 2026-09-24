import { z } from "zod";

// 跨字段校验（开始 < 结束）演示 superRefine
export const RangeSchema = z
  .object({
    start: z.number(),
    end: z.number(),
  })
  .superRefine((val, ctx) => {
    if (val.start >= val.end) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "start must be < end",
        path: ["start"], // 指定报错在 start 字段
      });
    }
  });

export type Range = z.infer<typeof RangeSchema>;
