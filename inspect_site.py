from bs4 import BeautifulSoup

with open('_reference/slashvibe_index.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

print("=== ALL SECTIONS & HEADERS ===")
for sec in soup.find_all(['header', 'section', 'footer']):
    print(f"\n--- <{sec.name} id='{sec.get('id', '')}' class='{' '.join(sec.get('class', []))}'> ---")
    for child in sec.find_all(recursive=False):
        cls = ' '.join(child.get('class', []))
        print(f"  <{child.name} class='{cls}'>")
        # if there are inner interesting elements
        for inner in child.find_all(['h1', 'h2', 'h3', 'h4', 'p', 'button', 'a'], recursive=False):
            txt = inner.get_text(strip=True)[:60]
            print(f"    <{inner.name}> {txt}")

