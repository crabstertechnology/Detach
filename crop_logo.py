# Let's inspect the top-left corner of the banner where Crabster Technology logo is
from PIL import Image

banner = Image.open('Detach_ Reconnect With What Matters_upscayl_5x_upscayl-standard-4x.png')
# Crop top left area for Crabster logo
logo_crop = banner.crop((100, 100, 1800, 800))
logo_crop.save('public/assets/crabster_logo_crop.png')
print("Cropped Crabster logo!")

