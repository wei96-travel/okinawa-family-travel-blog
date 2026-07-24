const path = require("node:path");
const fs = require("node:fs");
const http = require("node:http");
const { chromium } = require("playwright");

const output = path.join(__dirname, "png");
const root = path.resolve(__dirname, "../../../..");
const url = "http://localhost:4181/work/social/okinawa-kokusai-dori-family-guide/render/carousel.html";

(async () => {
  const server = http.createServer((request, response) => {
    const pathname = decodeURIComponent(new URL(request.url, url).pathname);
    const filePath = path.resolve(root, `.${pathname}`);
    if (!filePath.startsWith(root) || !fs.existsSync(filePath)) {
      response.writeHead(404).end("Not found");
      return;
    }
    const type = path.extname(filePath).toLowerCase();
    const contentTypes = {
      ".html": "text/html; charset=utf-8",
      ".jpg": "image/jpeg",
      ".png": "image/png",
      ".svg": "image/svg+xml",
    };
    response.writeHead(200, { "Content-Type": contentTypes[type] || "application/octet-stream" });
    fs.createReadStream(filePath).pipe(response);
  });
  await new Promise((resolve) => server.listen(4181, "127.0.0.1", resolve));

  const launchOptions = process.env.PLAYWRIGHT_CHROME_PATH
    ? { executablePath: process.env.PLAYWRIGHT_CHROME_PATH }
    : {};
  const browser = await chromium.launch(launchOptions);
  const page = await browser.newPage({
    viewport: { width: 1080, height: 1350 },
    deviceScaleFactor: 1,
  });

  await page.goto(url, { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);

  for (let index = 1; index <= 8; index += 1) {
    const slide = page.locator(`#p${index}`);
    await slide.scrollIntoViewIfNeeded();
    await page.waitForTimeout(100);
    await slide.screenshot({
      path: path.join(output, `${String(index).padStart(2, "0")}.png`),
    });
  }

  await browser.close();
  await new Promise((resolve) => server.close(resolve));
})();
