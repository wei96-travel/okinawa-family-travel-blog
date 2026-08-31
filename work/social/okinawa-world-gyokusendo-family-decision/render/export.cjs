const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

const here = __dirname;
const html = path.join(here, 'carousel.html');
const out = path.join(here, 'png');
const slides = ['p1', 'p2', 'p3', 'p4'];

fs.mkdirSync(out, { recursive: true });

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  });
  const page = await browser.newPage({ viewport: { width: 1080, height: 1350 } });
  await page.goto(pathToFileURL(html).href, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  for (let index = 0; index < slides.length; index += 1) {
    const output = path.join(out, `${String(index + 1).padStart(2, '0')}.png`);
    await page.locator(`#${slides[index]}`).screenshot({ path: output });
    process.stdout.write(`saved ${path.basename(output)}\n`);
  }
  await browser.close();
})().catch((error) => {
  process.stderr.write(`${error.stack || error}\n`);
  process.exit(1);
});
