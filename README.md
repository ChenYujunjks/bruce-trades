# Personal Website

这是一个自己开发和维护的个人网站，用来记录个人项目、待办事项以及我最喜欢的交易和生活 Notes。

## 主要功能

### Todo List

网站包含 Todo List，可以新增、读取、更新和删除待办事项。

- 使用 Supabase 保存 Todo 数据
- 使用 tRPC 定义类型安全的后端 API
- 前端通过 React Query 和 tRPC Client 调用后端
- 前后端共享 TypeScript 类型，减少接口字段不一致的问题

Todo 的主要通信流程：

```text
React 页面
  → tRPC Client
  → /api/trpc
  → tRPC Router
  → Supabase
```

### Trading Notes

交易是这个网站最重要的内容之一，包含市场结构、SMC / ICT、流动性、订单流和衍生品数据等学习笔记。

交易 Notes 位于：

```text
src/app/trading/
```

个人交易笔记可以通过下面的索引页面集中访问：

```text
src/app/trading/my-notes/page.tsx
```

### Personal Notes

网站也用来保存生活和个人主题的 Notes，例如租房计划、补助记录和 NVIDIA 设置笔记。

Notes 页面位于：

```text
src/app/notes/
```

`src/app/notes/page.tsx` 是 Notes 的入口和管理页面。它会扫描 `notes` 目录中包含 `page.tsx` 的子文件夹，并自动生成对应链接。

新增一个 Note 的基本结构：

```text
src/app/notes/
└── new-note/
    └── page.tsx
```

页面路由会是：

```text
/notes/new-note
```

新增后，`/notes` 页面会自动显示这个 Note。

## 技术栈

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- shadcn/ui 与 Radix UI
- tRPC
- TanStack React Query
- Supabase

## 本地运行

安装依赖：

```bash
pnpm install
```

复制环境变量并填写自己的 Supabase 配置：

```bash
cp .env.example .env.local
```

需要的环境变量：

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
```

启动开发服务器：

```bash
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000)。

## 常用命令

```bash
pnpm dev
pnpm build
pnpm start
```

## 其他文档

- [项目命名与编码规范](docs/coding-conventions.md)
- [Supabase Keepalive 方案](docs/supabase-keepalive-plan.md)
