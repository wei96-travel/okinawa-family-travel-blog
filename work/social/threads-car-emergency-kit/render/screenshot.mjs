import { chromium } from "file:///C:/Users/wei96/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs";
import { pathToFileURL } from "node:url";
import path from "node:path";
import fs from "node:fs";

const root = path.resolve(import.meta.dirname);
const tempDir = path.join(root, ".tmp");
fs.mkdirSync(tempDir, { recursive: true });
process.env.TEMP = tempDir;
process.env.TMP = tempDir;
const browser = await chromium.launch({
  headless: true,
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
});
const page = await browser.newPage({ viewport: { width: 1080, height: 1350 } });

await page.goto(pathToFileURL(path.join(root, "preview.html")).href, {
  waitUntil: "networkidle",
});
await page.screenshot({
  path: path.join(root, "threads-car-emergency-kit.png"),
  clip: { x: 0, y: 0, width: 1080, height: 1350 },
});

await browser.close();
