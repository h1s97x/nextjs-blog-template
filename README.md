# Next.js Blog Template

Next.js 博客模板 - 基于 App Router、TypeScript、Tailwind CSS，内容使用 MDX。

## 📦 包含内容

- ✅ Next.js 14 + App Router
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ MDX 内容支持
- ✅ 语法高亮（Prism / Shiki）
- ✅ 响应式设计
- ✅ SEO 优化

## 🚀 快速开始

### 使用模板创建新项目

1. 点击 **"Use this template"** 按钮
2. 输入新项目名称
3. 开始创作！

### 本地开发

```bash
git clone https://github.com/h1s97x/nextjs-blog-template.git
cd nextjs-blog-template
npm install
npm run dev
```

访问 http://localhost:3000

## 📁 项目结构

```
.
├── app/
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   ├── posts/
│   │   └── [slug]/
│   │       └── page.tsx   # 文章页
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── MDXComponents.tsx
├── content/
│   └── posts/            # MDX 文章
├── public/               # 静态资源
├── package.json
└── README.md
```

## ✍️ 写作

在 `content/posts/` 目录下创建 `.mdx` 文件：

```mdx
---
title: 我的第一篇文章
date: 2024-01-01
description: 这是文章描述
---

# Hello World

这是文章内容...
```

## 🚀 部署

```bash
npm run build
```

支持 Vercel、Netlify、Cloudflare Pages 等平台。

## 📝 License

MIT
