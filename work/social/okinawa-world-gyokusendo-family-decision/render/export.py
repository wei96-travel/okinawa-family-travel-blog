"""Export the four Instagram slides to PNG files."""

import pathlib
from playwright.sync_api import sync_playwright

HERE = pathlib.Path(__file__).parent
HTML = HERE / "carousel.html"
OUT = HERE / "png"
SLIDES = ["p1", "p2", "p3", "p4"]

OUT.mkdir(exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 1080, "height": 1350})
    page.goto(HTML.resolve().as_uri(), wait_until="networkidle")
    page.wait_for_timeout(800)
    for number, slide_id in enumerate(SLIDES, start=1):
        output = OUT / f"{number:02d}.png"
        page.locator(f"#{slide_id}").screenshot(path=str(output))
        print(f"saved {output.name}")
    browser.close()
