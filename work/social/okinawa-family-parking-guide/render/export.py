"""把 carousel.html 的 8 張投影片匯出成 1080x1350 PNG。

用法：
  1. 先啟動靜態伺服器（專案根目錄）：python -m http.server 4180 --directory "C:/AI/codex 部落格"
  2. python export.py

輸出到同目錄的 png/ 資料夾（不要用 out/，專案 .gitignore 有 out），檔名 01.png ~ 08.png，可直接上傳 Facebook / Instagram。
"""
import pathlib
from playwright.sync_api import sync_playwright

URL = "http://localhost:4180/work/social/okinawa-family-parking-guide/render/carousel.html"
OUT = pathlib.Path(__file__).parent / "png"
SLIDES = ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8"]

OUT.mkdir(exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 1080, "height": 1350}, device_scale_factor=1)
    page.goto(URL, wait_until="networkidle")
    page.wait_for_timeout(1200)  # 等字型與封面圖載入
    for i, sid in enumerate(SLIDES, start=1):
        el = page.locator("#" + sid)
        el.scroll_into_view_if_needed()
        page.wait_for_timeout(120)
        path = OUT / f"{i:02d}.png"
        el.screenshot(path=str(path))
        print("saved", path.name)
    browser.close()

print("\n完成，輸出在：", OUT)
