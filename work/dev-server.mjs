// 用途：讓預覽工具能從別的工作目錄啟動這個專案的 dev server。
// Next.js 用 process.cwd() 找 content/ 與 public/，直接用 `node next dev <dir>`
// 不會改變 cwd，會跑去別的資料夾找文章，因此這裡先 chdir 再交給 next。
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
process.chdir(projectRoot);

const port = process.env.PORT ?? "3100";
process.argv = [process.argv[0], "next", "dev", "--port", port];

await import("next/dist/bin/next");
