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

網站會在有設定 `NEXT_PUBLIC_GA_ID` 時載入 Google Analytics 4，並記錄 App Router 頁面切換。

1. 在 Google Analytics 建立 GA4 資源與網站資料串流。
2. 複製格式為 `G-XXXXXXXXXX` 的評估 ID。
3. 在 Vercel 專案的 Environment Variables 新增 `NEXT_PUBLIC_GA_ID`。
4. Production、Preview、Development 都可勾選；至少必須勾選 Production。
5. 重新部署後，到 Analytics 即時報表確認自己的瀏覽紀錄。

本機測試可參考 `.env.example` 建立 `.env.local`，不要把真正的評估 ID 提交到公開儲存庫。
