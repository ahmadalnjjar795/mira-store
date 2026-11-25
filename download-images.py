#!/usr/bin/env python3
"""ينزّل كل صور الموقع من Unsplash إلى مجلد images/ (مرة وحدة بس).
التشغيل:  python3 download-images.py
بعدها الموقع بيشتغل من الصور المحلية بدون إنترنت."""
import os, urllib.request, sys

PHOTOS = [
 "1441986300917-64674bd600d8",
 "1445205170230-053b83016050",
 "1469334031218-e382a71b716b",
 "1473496169904-658ba7c44d8a",
 "1483721310020-03333e577078",
 "1483985988355-763728e1935b",
 "1485968579580-b6d095142e6e",
 "1488161628813-04466f872be2",
 "1490481651871-ab68de25d43d",
 "1491553895911-0055eca6402d",
 "1496747611176-843222e1e57c",
 "1507679799987-c73779587ccf",
 "1509631179647-0177331693ae",
 "1511499767150-a48a237f0083",
 "1515562141207-7a88fb7ce338",
 "1515886657613-9f3515b0c78f",
 "1516826957135-700dedea698c",
 "1523275335684-37898b6baf30",
 "1523381210434-271e8be1f52b",
 "1524592094714-0f0654e20314",
 "1529139574466-a303027c1d8b",
 "1535043934128-cf0b28d52f95",
 "1535632066927-ab7c9ab60908",
 "1539008835657-9e8e9680c956",
 "1539109136881-3be0616acf4b",
 "1542291026-7eec264c27ff",
 "1543163521-1bf539c55dd2",
 "1547996160-81dfa63595aa",
 "1548036328-c9fa89d128fa",
 "1549298916-b41d501d3772",
 "1551028719-00167b16eac5",
 "1553062407-98eeb64c6a62",
 "1556905055-8f358a7a47b2",
 "1572635196237-14b3f281503f",
 "1584917865442-de89df76afd3",
 "1591047139829-d91aecb6caea",
 "1595950653106-6c9ebd614d3a",
 "1596755094514-f87e34085b2c",
 "1599643478518-a784e5dc4c8f",
 "1600185365926-3a2ce3cdb9eb",
 "1602810318383-e386cc2a3ccf",
 "1605100804763-247f67b3557e",
 "1608231387042-66d1773070a5",
 "1611591437281-460bfbe1220a",
 "1617137968427-85924c800a22"
]
AVATARS = [
 "1438761681033-6461ffad8d80",
 "1472099645785-5658abf4ff4e",
 "1494790108377-be9c29b29330",
 "1500648767791-00dcc994a43e",
 "1507003211169-0a1dd7228f2d",
 "1544005313-94ddf0286df2"
]

HERE = os.path.dirname(os.path.abspath(__file__))
os.makedirs(os.path.join(HERE, "images", "avatars"), exist_ok=True)

def get(pid, dest, q):
    if os.path.exists(dest) and os.path.getsize(dest) > 1000:
        return "موجودة"
    url = f"https://images.unsplash.com/photo-{pid}?{q}"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    try:
        with urllib.request.urlopen(req, timeout=30) as r, open(dest, "wb") as f:
            f.write(r.read())
        return "تم"
    except Exception as e:
        return f"فشل ({e})"

fails = 0
for pid in PHOTOS:
    s = get(pid, os.path.join(HERE, "images", pid + ".jpg"), "auto=format&fit=crop&w=1200&q=80")
    fails += s.startswith("فشل"); print(pid, s)
for pid in AVATARS:
    s = get(pid, os.path.join(HERE, "images", "avatars", pid + ".jpg"), "auto=format&fit=crop&w=120&h=120&q=80")
    fails += s.startswith("فشل"); print("avatar", pid, s)
print("\nخلص. صور فاشلة:", fails)
sys.exit(1 if fails else 0)
