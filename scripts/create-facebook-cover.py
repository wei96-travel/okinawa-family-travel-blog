from pathlib import Path

from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "public/images/articles/okinawa-family-beach-guide/okinawa-coast-real.jpg"
OUTPUT = ROOT / "outputs/social/facebook-cover-okinawa-family-notes-v1.png"

WIDTH = 1640
HEIGHT = 624


def fit_cover(image: Image.Image, width: int, height: int) -> Image.Image:
    target_ratio = width / height
    source_ratio = image.width / image.height

    if source_ratio > target_ratio:
        crop_width = round(image.height * target_ratio)
        left = (image.width - crop_width) // 2
        box = (left, 0, left + crop_width, image.height)
    else:
        crop_height = round(image.width / target_ratio)
        top = round((image.height - crop_height) * 0.32)
        box = (0, top, image.width, top + crop_height)

    return image.crop(box).resize((width, height), Image.Resampling.LANCZOS)


def centered_text(draw: ImageDraw.ImageDraw, xy: tuple[int, int], text: str, font: ImageFont.FreeTypeFont, fill: str) -> None:
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    draw.text((xy[0] - text_width / 2, xy[1]), text, font=font, fill=fill, stroke_width=2, stroke_fill=(0, 44, 55, 150))


def main() -> None:
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)

    source = Image.open(SOURCE).convert("RGB")
    cover = fit_cover(source, WIDTH, HEIGHT)
    cover = ImageEnhance.Color(cover).enhance(0.94)
    cover = ImageEnhance.Contrast(cover).enhance(1.03)

    overlay = Image.new("RGBA", cover.size, (0, 0, 0, 0))
    pixels = overlay.load()
    for y in range(HEIGHT):
        vertical = 1.0 - abs((y / HEIGHT) - 0.48) * 0.32
        for x in range(WIDTH):
            center = 1.0 - min(abs(x - 960) / 900, 1.0)
            alpha = int((42 + 78 * center) * vertical)
            pixels[x, y] = (4, 42, 49, alpha)
    overlay = overlay.filter(ImageFilter.GaussianBlur(radius=10))
    cover = Image.alpha_composite(cover.convert("RGBA"), overlay)

    draw = ImageDraw.Draw(cover)
    bold = ImageFont.truetype("C:/Windows/Fonts/msjhbd.ttc", 74)
    regular = ImageFont.truetype("C:/Windows/Fonts/msjh.ttc", 31)
    url_font = ImageFont.truetype("C:/Windows/Fonts/msjh.ttc", 27)
    credit_font = ImageFont.truetype("C:/Windows/Fonts/msjh.ttc", 18)

    center_x = 965
    centered_text(draw, (center_x, 154), "沖繩親子旅遊筆記", bold, "#FFFFFF")
    centered_text(draw, (center_x, 274), "行程・租車・住宿・帶小孩旅行的實用整理", regular, "#F7FBFA")
    centered_text(draw, (center_x, 344), "okinawafamilynotes.com", url_font, "#FFE0AE")

    credit = "Photo: Yasuaki Uechi / Unsplash"
    bbox = draw.textbbox((0, 0), credit, font=credit_font)
    draw.text((WIDTH - (bbox[2] - bbox[0]) - 28, HEIGHT - 35), credit, font=credit_font, fill=(255, 255, 255, 190))

    cover.convert("RGB").save(OUTPUT, "PNG", optimize=True)
    print(OUTPUT)


if __name__ == "__main__":
    main()
