"""Mask customer phone numbers in showcase table screenshots."""
from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[1] / "public" / "product" / "showcase"

# Solid rectangles over phone lines under Customer names (names left intact).
MASKS: dict[str, list[tuple[int, int, int, int]]] = {
    "showcase-bookings.png": [
        (408, 142, 485, 154),
        (408, 182, 485, 194),
        (408, 222, 485, 234),
        (408, 262, 485, 274),
        (408, 302, 485, 314),
        (408, 342, 485, 354),
        (408, 382, 485, 394),
    ],
    "showcase-sold.png": [
        (520, 143, 595, 155),
        (520, 184, 595, 195),
        (520, 224, 595, 235),
        (520, 264, 595, 275),
        (520, 304, 595, 315),
    ],
    "showcase-payments.png": [
        (300, 197, 375, 210),
        (300, 237, 375, 250),
        (300, 317, 375, 330),
        (300, 357, 375, 370),
        (300, 397, 375, 410),
    ],
}


def fill_for(im: Image.Image, box: tuple[int, int, int, int]) -> tuple[int, int, int]:
    l, t, r, _ = box
    y = max(0, t - 2)
    for x in range(l, min(r, im.width)):
        p = im.getpixel((x, y))
        if sum(p) / 3 > 230:
            return (p[0], p[1], p[2])
    return (255, 255, 255)


def main() -> None:
    for name, boxes in MASKS.items():
        path = ROOT / name
        im = Image.open(path).convert("RGB")
        draw = ImageDraw.Draw(im)
        for box in boxes:
            draw.rectangle(box, fill=fill_for(im, box))
        im.save(path, optimize=True)
        print(f"masked {name}: {len(boxes)} phones")


if __name__ == "__main__":
    main()
