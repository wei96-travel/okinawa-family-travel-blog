import { createRequire } from "node:module";
import { unlink } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dependencies =
  process.env.CODEX_NODE_MODULES ||
  path.join(
    process.env.USERPROFILE,
    ".cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules",
  );

if (!dependencies) {
  throw new Error("Set CODEX_NODE_MODULES to the bundled node_modules directory.");
}

const requireFromDependencies = createRequire(path.join(dependencies, "package.json"));
const { chromium } = requireFromDependencies("playwright");
const sharp = requireFromDependencies("sharp");
const chrome =
  process.env.CHROME_PATH ||
  path.join(process.env.ProgramFiles, "Google/Chrome/Application/chrome.exe");

const here = path.dirname(fileURLToPath(import.meta.url));
const source = new URL("./license-docs.html", import.meta.url).href;
const preview = path.join(os.tmpdir(), "okinawa-license-docs-preview.png");
const output = path.resolve(
  here,
  "../../public/images/articles/okinawa-rental-car-license-translation/three-documents.jpg",
);

const browser = await chromium.launch({ executablePath: chrome, headless: true });
const page = await browser.newPage({
  viewport: { width: 1080, height: 1350 },
  deviceScaleFactor: 1,
});

await page.goto(source, { waitUntil: "load" });
await page.screenshot({
  path: preview,
  clip: { x: 0, y: 0, width: 1080, height: 1350 },
});
await browser.close();

await sharp(preview)
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(output);
await unlink(preview);

console.log(`Article image: ${output}`);
