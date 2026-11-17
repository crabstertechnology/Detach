import re

with open('_reference/30mjkxozam2an.css', 'r', encoding='utf-8', errors='ignore') as f:
    css30 = f.read()

with open('_reference/0c_1ma4nc331f.css', 'r', encoding='utf-8', errors='ignore') as f:
    css0c = f.read()

full_css = css30 + "\n" + css0c

targets = [
    'v6-hero', 'v6-site-nav', 'v6-button', 'v6-how', 'v6-how-card', 'v6-usp', 
    'v6-specs', 'v6-scenarios', 'v6-faq', 'v6-waitlist-panel', 'v6-footer',
    'v6-section-title', 'v6-agent-marquee'
]

with open('extracted_styles.txt', 'w', encoding='utf-8') as out:
    for target in targets:
        out.write(f"\n{'='*30} TARGET: {target} {'='*30}\n")
        # search for rules matching .target
        matches = re.findall(rf'(\.{target}[^{{]*\{{[^}}]+\}})', full_css)
        for m in matches[:10]:
            out.write(m + "\n")

print("Saved to extracted_styles.txt")

