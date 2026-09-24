import { z } from "zod";

// ✅ 独立的密码规则：≥8 位，至少 1 个大写字母，至少 1 个数字
export const PasswordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters long")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/\d/, "Password must contain at least one number");

// 基础对象校验：字符串、整数、下限
export const UserSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, "name is required"),
  age: z.number().int().min(0, "age must be >= 0"),
});

// 从 schema 推导类型，避免重复写 type/interface
export type User = z.infer<typeof UserSchema>;

// extend 扩展对象
export const UserWithPasswordSchema = UserSchema.extend({
  password: PasswordSchema,
});
export type UserWithPassword = z.infer<typeof UserWithPasswordSchema>;
