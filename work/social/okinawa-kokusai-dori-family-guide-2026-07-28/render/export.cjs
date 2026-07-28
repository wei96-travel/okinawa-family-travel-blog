const { chromium } = require('playwright');
const path = require('path');
const { pathToFileURL } = require('url');
const fs = require('fs');
const out = path.join(__dirname, 'png'); fs.mkdirSync(out, { recursive: true });
(async () => { const browser = await chromium.launch({ headless: true, executablePath: process.env.PLAYWRIGHT_CHROME_PATH }); const page = await browser.newPage({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 1 }); await page.goto(pathToFileURL(path.join(__dirname, 'carousel.html')).href, { waitUntil: 'networkidle' }); const slides = await page.locator('.slide').all(); for (let i = 0; i < slides.length; i++) await slides[i].screenshot({ path: path.join(out, `${String(i + 1).padStart(2, '0')}.png`) }); await browser.close(); })();
