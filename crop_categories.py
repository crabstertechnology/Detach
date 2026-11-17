import os
from PIL import Image

os.makedirs('public/assets/categories', exist_ok=True)
banner = Image.open('Detach_ Reconnect With What Matters_upscayl_5x_upscayl-standard-4x.png')
bw, bh = banner.size

# Let's crop the categories area
# In 8360 x 4705, the categories block is roughly:
# X: 4100 to 7900, Y: 2000 to 3600
cat_area = banner.crop((int(bw * 0.49), int(bh * 0.43), int(bw * 0.95), int(bh * 0.77)))
cat_area.save('public/assets/categories/all_categories_block.webp', format='WEBP', quality=95)
print("Saved categories block!")

