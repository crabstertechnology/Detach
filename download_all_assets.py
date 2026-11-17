import os
import urllib.request
from bs4 import BeautifulSoup

os.makedirs('public/assets/current/how', exist_ok=True)
os.makedirs('public/assets/current/usp', exist_ok=True)
os.makedirs('public/assets/current/sdk/screens', exist_ok=True)
os.makedirs('public/assets/current/sdk/thumbs', exist_ok=True)
os.makedirs('public/assets/favicon', exist_ok=True)
os.makedirs('public/videos', exist_ok=True)

with open('_reference/slashvibe_index.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

asset_urls = set()

# images
for img in soup.find_all('img'):
    if img.get('src'):
        asset_urls.add(img['src'])
    if img.get('srcset'):
        for part in img['srcset'].split(','):
            u = part.strip().split(' ')[0]
            if u:
                asset_urls.add(u)

# link href
for link in soup.find_all('link'):
    href = link.get('href', '')
    if any(href.endswith(ext) for ext in ['.svg', '.png', '.jpg', '.webp', '.ico']):
        asset_urls.add(href)

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

print(f"Total assets to download: {len(asset_urls)}")

downloaded = 0
failed = 0

for path in sorted(asset_urls):
    if not path.startswith('/assets/'):
        continue
    
    local_path = os.path.join('public', path.lstrip('/'))
    os.makedirs(os.path.dirname(local_path), exist_ok=True)
    
    if os.path.exists(local_path) and os.path.getsize(local_path) > 0:
        downloaded += 1
        continue
        
    url = 'https://slashvibe.ai' + path
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as resp, open(local_path, 'wb') as out_f:
            out_f.write(resp.read())
        downloaded += 1
        print(f"[{downloaded}/{len(asset_urls)}] {path}")
    except Exception as e:
        failed += 1
        print(f"Failed {path}: {e}")

print(f"Done downloading assets! Downloaded: {downloaded}, Failed: {failed}")

