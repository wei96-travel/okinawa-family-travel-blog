import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dependencies = path.join(
  process.env.USERPROFILE,
  ".cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules",
);
const requireFromDependencies = createRequire(path.join(dependencies, "package.json"));
const { chromium } = requireFromDependencies("playwright");
const sharp = requireFromDependencies("sharp");
const chrome = path.join(process.env.ProgramFiles, "Google/Chrome/Application/chrome.exe");
const here = path.dirname(fileURLToPath(import.meta.url));

const browser = await chromium.launch({ executablePath: chrome, headless: true });
const page = await browser.newPage({
  viewport: { width: 1080, height: 1350 },
  deviceScaleFactor: 1,
});

await page.goto(new URL("./family-decision.html", import.meta.url).href, {
  waitUntil: "load",
});
await page.screenshot({
  path: path.join(here, "family-decision-v1.png"),
  clip: { x: 0, y: 0, width: 1080, height: 1350 },
});
await browser.close();

await sharp(path.join(here, "family-decision-v1.png"))
  .resize({ width: 390 })
  .png()
  .toFile(path.join(here, "family-decision-mobile.png"));

console.log(path.join(here, "family-decision-v1.png"));
