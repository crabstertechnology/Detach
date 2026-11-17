import numpy as np
from PIL import Image, ImageFilter

im = Image.open('image.png').convert('RGBA')
arr = np.array(im)

r = arr[:, :, 0].astype(float)
g = arr[:, :, 1].astype(float)
b = arr[:, :, 2].astype(float)

# background is (247, 247, 247)
bg_color = np.array([247.0, 247.0, 247.0])
dist = np.sqrt((r - bg_color[0])**2 + (g - bg_color[1])**2 + (b - bg_color[2])**2)

# Create smooth alpha ramp
# dist < 10 -> alpha 0
# dist > 25 -> alpha 255
alpha = np.clip((dist - 10) / 15.0, 0, 1) * 255
arr[:, :, 3] = alpha.astype(np.uint8)

res = Image.fromarray(arr)
# Save as WebP and PNG
res.save('public/assets/detach_hero.png', format='PNG')
res.save('public/assets/detach_hero.webp', format='WEBP', quality=95)
print("Successfully generated transparent studio render for DEtach hero!")

# Also generate optimized banner
banner = Image.open('Detach_ Reconnect With What Matters_upscayl_5x_upscayl-standard-4x.png')
# Resize banner to 2560px max width for web performance
w_percent = 2560 / float(banner.size[0])
h_size = int((float(banner.size[1]) * float(w_percent)))
banner_resized = banner.resize((2560, h_size), Image.Resampling.LANCZOS)
banner_resized.save('public/assets/detach_banner_2560.webp', format='WEBP', quality=90)
print("Successfully generated web-optimized 2560px banner WebP!")

