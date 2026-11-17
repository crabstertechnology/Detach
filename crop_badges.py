from PIL import Image

banner = Image.open('Detach_ Reconnect With What Matters_upscayl_5x_upscayl-standard-4x.png')
bw, bh = banner.size

# Bottom 4 value badges are around Y: 3700 to 4250, X: 1100 to 7300
badges_crop = banner.crop((int(bw * 0.14), int(bh * 0.77), int(bw * 0.88), int(bh * 0.90)))
badges_crop.save('public/assets/detach_benefits_strip.webp', format='WEBP', quality=95)
print("Saved benefits strip!")

