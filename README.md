# Bruce Personal Website

个人交易手记，用来记录交易、trading ideas、交易笔记、个人想法与实盘经验。

## 内容

- 首页：网站介绍、十六字交易指南针和笔记入口。
- `/trading/notes`：静态交易笔记索引。
- `/trading/*`：市场结构、SMC / ICT、流动性和衍生品相关笔记。
- `/notes`：个人笔记索引，构建时扫描 `src/app/notes` 下包含 `page.tsx` 的子目录。

新增个人笔记时，创建 `src/app/notes/new-note/page.tsx`，对应路由为 `/notes/new-note`。

## 技术栈

Next.js App Router、React、TypeScript、Tailwind CSS、shadcn/ui 和 Radix UI。

网站不需要数据库、后端 API 或 Supabase 环境变量。原项目的 Todo 和在线交易日志功能已移除。

## 本地运行

```bash
pnpm install
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000)。

## 检查和生产构建

```bash
pnpm lint
pnpm build
pnpm start
```

构建时 `next/font/google` 会下载 Inter 字体，需要能够访问 Google Fonts。
