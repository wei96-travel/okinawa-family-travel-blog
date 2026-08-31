import { mkdir, rm } from "node:fs/promises";
import { createRequire } from "node:module";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const require = createRequire(import.meta.url);
const runtimeModules = "C:/Users/wei96/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules";
const { chromium } = require(`${runtimeModules}/playwright`);
const sharp = require(`${runtimeModules}/sharp`);

const here = path.dirname(fileURLToPath(import.meta.url));
const output = path.join(here, "output");
const frameDir = path.join(output, "frames");

await rm(output, { recursive: true, force: true });
await mkdir(frameDir, { recursive: true });

const browser = await chromium.launch({
  headless: true,
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
});
const context = await browser.newContext({ viewport: { width: 540, height: 960 } });
const page = await context.newPage();
const url = pathToFileURL(path.join(here, "preview.html")).href;
await page.goto(url, { waitUntil: "load" });

const frameRate = 15;
for (let frame = 0; frame < 15 * frameRate; frame += 1) {
  const seconds = frame / frameRate;
  await page.evaluate((time) => {
    for (const scene of document.querySelectorAll(".scene")) {
      scene.style.animationDelay = `-${time}s`;
      scene.style.animationPlayState = "paused";
    }
  }, seconds);
  await page.screenshot({ path: path.join(frameDir, `frame-${String(frame).padStart(4, "0")}.png`) });
}
await context.close();

const shotContext = await browser.newContext({ viewport: { width: 540, height: 960 } });
const shotPage = await shotContext.newPage();
const scenes = [];
for (let scene = 1; scene <= 4; scene += 1) {
  await shotPage.goto(`${url}?scene=${scene}`, { waitUntil: "load" });
  await shotPage.waitForTimeout(250);
  const file = path.join(output, `scene-${scene}.png`);
  await shotPage.screenshot({ path: file });
  scenes.push(file);
}
await shotContext.close();
await browser.close();

await sharp(scenes[0]).png().toFile(path.join(output, "cover.png"));
const canvas = sharp({ create: { width: 1128, height: 2028, channels: 3, background: "#e7eceb" } });
const composites = [];
for (let index = 0; index < scenes.length; index += 1) {
  const input = await sharp(scenes[index]).resize(540, 960).png().toBuffer();
  composites.push({ input, left: index % 2 === 0 ? 16 : 572, top: index < 2 ? 36 : 1032 });
}
await canvas.composite(composites).png().toFile(path.join(output, "contact-sheet.png"));
process.stdout.write(output);

