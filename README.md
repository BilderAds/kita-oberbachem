# Kita "Die kleinen Strolche" Oberbachem

Website fuer die staedtische Kita "Die kleinen Strolche" am Pfarrer-Weuster-Weg 16 in Wachtberg-Oberbachem. Traeger: Gemeinde Wachtberg.

## Stand

Prototyp der Homepage. Komplette Seite als statisches HTML mit Tailwind-freiem Custom-CSS und einem interaktiven Three.js Hero. Server-los, laeuft ueberall mit einem beliebigen Static-Host.

## Struktur

```
.
├── briefing.md      Projekt-Briefing, Modus, Zielgruppe, Seitenvorschlag
├── research.md      Deep Research mit allen oeffentlich recherchierten Infos
└── website/
    ├── index.html   Semantische Homepage mit SEO-Tags und JSON-LD
    ├── style.css    Palette, Typografie, Layout, Komponenten
    ├── main.js      Three.js Hero, Custom Cursor, Scroll-Reveal, Nav-State
    ├── robots.txt
    └── sitemap.xml
```

## Lokal starten

```bash
cd website
python3 -m http.server 4321
```

Dann [http://localhost:4321](http://localhost:4321) oeffnen.

## Tech-Entscheidungen

- **Approach B (Design Inspiration, kein React-Bundle).** Eltern suchen Vertrauen und Klarheit, kein Animation-Feuerwerk. Die Seite laedt ohne Framework-Overhead.
- **Three.js via ESM CDN** fuer den Hero. Vanilla, kein Build noetig.
- **Google Fonts:** Fraunces (Display, warm), Inter (Body), Caveat (handschriftliche Akzente).
- **Palette:** Waldgruen, Terrakotta, Sonnengelb, Himmelblau, Creme.
- **Accessibility:** Skip-Link, `aria-*`, Focus-Ringe, semantische Landmarks.
- **SEO:** Open Graph, Twitter Card, Geo-Tags, JSON-LD (`Preschool`, `WebSite`, `BreadcrumbList`).

## Kontakt (Kita)

- Adresse: Pfarrer-Weuster-Weg 16, 53343 Wachtberg-Oberbachem
- Telefon: 0228 341477
- E-Mail: kita-oberbachem@t-online.de
- Oeffnungszeiten: Mo bis Fr, 07:00 bis 16:00 Uhr

## Naechste Schritte

- Echte Fotos von Team, Raeumen, Aussengelaende einbauen (Einverstaendnis der Eltern fuer Kinderfotos)
- Aktuelle Inhalte mit der Leitung abgleichen (Tagesablauf, Team-Aktualitaet, Gruppennamen, Essen, Beitraege, Schliesstage)
- Echtes Open-Graph-Bild, echtes Favicon
- Domain registrieren und Canonical-URL anpassen
- Optional Migration zu Astro oder Next.js wenn Redaktion ueber ein CMS laufen soll
