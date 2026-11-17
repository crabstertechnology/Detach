import re

with open('_reference/30mjkxozam2an.css', 'r', encoding='utf-8', errors='ignore') as f:
    css = f.read()

# Find rules for .v6-hero, .v6-aurora, .v6-section-title, .v6-how, .v6-usps, .v6-specs
classes = ['v6-hero', 'v6-aurora', 'v6-section-title', 'v6-how', 'v6-usps', 'v6-specs', 'v6-waitlist-panel']

for cls in classes:
    pattern = rf'\.{cls}[^{{]*\{{([^}}]+)\}}'
    matches = re.findall(pattern, css)
    print(f"\n--- .{cls} matches ({len(matches)}) ---")
    for m in matches[:3]:
        print(" ", m.strip()[:200])
