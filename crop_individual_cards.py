from PIL import Image

cats_img = Image.open('public/assets/categories/all_categories_block.webp')
w, h = cats_img.size

# Top row has 5 items, Bottom row has 4 items
# Top row y: 0 to h*0.5
# Bottom row y: h*0.5 to h

# Top row 5 items:
# 1. Be Social
# 2. Brain Teasers
# 3. Quick Creativity
# 4. Body and Move
# 5. Calm & Relax

# Let's crop each carefully
items = [
    # (name, box: (x1, y1, x2, y2))
    ("be_social", (int(w * 0.01), int(h * 0.02), int(w * 0.20), int(h * 0.48))),
    ("brain_teasers", (int(w * 0.205), int(h * 0.02), int(w * 0.40), int(h * 0.48))),
    ("quick_creativity", (int(w * 0.405), int(h * 0.02), int(w * 0.60), int(h * 0.48))),
    ("body_move", (int(w * 0.605), int(h * 0.02), int(w * 0.80), int(h * 0.48))),
    ("calm_relax", (int(w * 0.805), int(h * 0.02), int(w * 0.99), int(h * 0.48))),
    # Bottom row 4 items:
    ("focus_mode", (int(w * 0.05), int(h * 0.50), int(w * 0.26), int(h * 0.98))),
    ("look_around", (int(w * 0.28), int(h * 0.50), int(w * 0.49), int(h * 0.98))),
    ("healthy_habits", (int(w * 0.51), int(h * 0.50), int(w * 0.72), int(h * 0.98))),
    ("mindfulness", (int(w * 0.74), int(h * 0.50), int(w * 0.95), int(h * 0.98))),
]

for name, box in items:
    crop = cats_img.crop(box)
    crop.save(f'public/assets/categories/{name}.webp', format='WEBP', quality=95)
    print(f"Saved {name}.webp")

