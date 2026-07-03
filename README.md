# 沖繩親子旅遊筆記

一個使用 Next.js App Router、TypeScript、Tailwind CSS 與 Markdown 文章管理的日本親子旅遊部落格範例。

## 本機啟動

~~~bash
npm install
npm run dev
~~~

開啟 http://localhost:3000。

## 新增文章

在 content/blog 新增一個 .md 檔，例如：

~~~md
---
title: "文章標題"
description: "文章摘要"
date: "2026-07-02"
category: "沖繩住宿"
tags: ["沖繩", "親子旅遊"]
---

文章內容從這裡開始。
~~~

檔名會成為網址 slug，例如 my-post.md 會變成 /blog/my-post。

可用分類：沖繩住宿、沖繩行程、親子景點、租車交通、旅遊用品。

## 部署到 Vercel

1. 將專案推到 GitHub。
2. 到 Vercel 建立 New Project。
3. 匯入 GitHub repo。
4. Framework Preset 選 Next.js。
5. Build Command 使用 npm run build。
6. Deploy。

## Google Analytics

GA 位置已預留在 app/layout.tsx，之後把 NEXT_PUBLIC_GA_ID 放進 Vercel 環境變數即可啟用。
