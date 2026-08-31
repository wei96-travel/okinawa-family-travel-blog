from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parent

for name in ("01", "02", "03"):
    source = Image.open(ROOT / f"{name}-screen.png").convert("RGB")
    card = source.crop((0, 0, 576, 720))
    card.resize((1080, 1350), Image.Resampling.LANCZOS).save(
        ROOT / f"{name}.png", quality=94
    )
