from bs4 import BeautifulSoup
import json

with open('_reference/slashvibe_index.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

def dump_section(selector, name):
    el = soup.select_one(selector)
    print(f"\n==================== {name} ({selector}) ====================")
    if el:
        print(el.prettify()[:3000])
    else:
        print("NOT FOUND")

dump_section('.v6-site-nav', 'NAVBAR')
dump_section('.v6-hero', 'HERO')
dump_section('.v6-compatibility', 'COMPATIBILITY / MARQUEE')
dump_section('.v6-how', 'HOW IT WORKS')
dump_section('.v6-usps', 'USPS')
dump_section('.v6-scenarios', 'SCENARIOS')
dump_section('.v6-specs', 'SPECS')
dump_section('.v6-faq', 'FAQ')
dump_section('.v6-waitlist-panel', 'WAITLIST')
dump_section('.v6-footer', 'FOOTER')

