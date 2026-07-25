const path = require("node:path");
const fs = require("node:fs");
const http = require("node:http");
const { chromium } = require("playwright");

const root = path.resolve(__dirname, "../../../..");
const output = path.join(__dirname, "facebook-cover.png");
const url = "http://127.0.0.1:4182/work/social/trip-okinawa-stay-pilot/render/cover.html";

(async () => {
  const server = http.createServer((request, response) => {
    const pathname = decodeURIComponent(new URL(request.url, url).pathname);
    const filePath = path.resolve(root, `.${pathname}`);
    if (!filePath.startsWith(root) || !fs.existsSync(filePath)) {
      response.writeHead(404).end("Not found");
      return;
    }
    const contentTypes = {
      ".html": "text/html; charset=utf-8",
      ".png": "image/png",
      ".jpg": "image/jpeg",
      ".webp": "image/webp",
    };
    response.writeHead(200, {
      "Content-Type": contentTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream",
    });
    fs.createReadStream(filePath).pipe(response);
  });

  await new Promise((resolve) => server.listen(4182, "127.0.0.1", resolve));

  const launchOptions = process.env.PLAYWRIGHT_CHROME_PATH
    ? { executablePath: process.env.PLAYWRIGHT_CHROME_PATH }
    : {};
  const browser = await chromium.launch(launchOptions);
  const page = await browser.newPage({
    viewport: { width: 1080, height: 1350 },
    deviceScaleFactor: 1,
  });

  await page.goto(url, { waitUntil: "networkidle" });
  await page.screenshot({ path: output });

  await browser.close();
  await new Promise((resolve) => server.close(resolve));
})();
