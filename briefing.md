---
title: Briefing Kita "Die kleinen Strolche" Oberbachem
tags: [briefing, kita-oberbachem]
erstellt: 2026-04-12
status: in-bearbeitung-freigabe-ausstehend
---

# Briefing: Kita "Die kleinen Strolche" Oberbachem

## Modus
**A: Neubau.** Die Kita hat aktuell keine eigene Website, nur einen rudimentaeren Eintrag auf wachtberg.de. Wir bauen die Website komplett neu auf.

## Kunde
- **Einrichtung:** Kita "Die kleinen Strolche" Oberbachem
- **Branche:** Staedtische Kindertagesstaette
- **Traeger:** Gemeinde Wachtberg
- **Leitung:** Helene Zahn (zu verifizieren), Stv. Alisa Weiler
- **Besonderheit:** Kundin ist die Mutter des Auftraggebers, arbeitet in der Kita

## Ziel der Website (Vorschlag, Freigabe ausstehend)
1. **Eltern informieren:** Was ist das fuer eine Kita, wie sieht der Alltag aus, wer ist das Team
2. **Vertrauen aufbauen:** Fotos, Geschichten, Paedagogik, Werte
3. **Anmeldung erleichtern:** Klarer Weg zum Platz, Link zum kitaportal-rhein-sieg-kreis.de, Kontakt zur Leitung
4. **Dorf-Gemeinschaft sichtbar machen:** St. Martin, Sommerfest, Wald- und Feldtage, VBO, Umgebung
5. **Auffindbarkeit:** Lokales SEO "Kita Oberbachem", "Kindergarten Wachtberg Oberbachem", "Kleine Strolche"

## 21st.dev Approach (Empfehlung)
**Approach B: Design Inspiration + nativer Nachbau.**

Begruendung: Die Zielgruppe sind Eltern im laendlichen Wachtberg, die Vertrauen, Klarheit und Geborgenheit suchen, keine Tech-affine SaaS-Crowd. Die Website muss:
- schnell laden auch auf alten Smartphones
- barrierefrei sein (Oma liest auch mal)
- warm, menschlich, ehrlich wirken, nicht kalt-technisch
- nicht durch "Effekt-Feuerwerk" ablenken vom Inhalt

Approach B passt nach der Entscheidungsmatrix in CLAUDE.md fuer Gesundheit, Handwerk, Bildung, Non-Profit, und das ist hier der richtige Platz.

Design: warmer, natuerlicher Stil, echte Fotos von Kindern (mit Einverstaendnis), Farben aus dem Wald-Thema (Moosgruen, Sandbeige, Himmelblau, Sonnengelb), handschriftliche Akzente, runde Formen, kein harter Corporate-Look.

## Tech-Stack (Empfehlung)
**Astro + Tailwind CSS + minimaler JavaScript-Einsatz.**

Begruendung:
- Maximale Performance (statische Seiten, kein unnoetiger JS-Overhead)
- Perfektes SEO von Haus aus
- Einfaches Hosting (kann spaeter sogar auf GitHub Pages, Netlify, Vercel)
- Spaetere Redaktion ueber MDX moeglich
- Keine React-Komplexitaet die hier nichts bringt
- Passt zu Approach B (nativer Nachbau, kein React noetig)

Alternativen auf Wunsch:
- Next.js + Tailwind wenn spaeter ein Headless CMS dazu soll
- Pures HTML + Tailwind wenn es maximal simpel sein soll

## Bestehende Inhalte
Keine bestehende Website. Keine Texte zu uebernehmen. Alles wird neu erstellt, basierend auf:
- oeffentlich recherchierten Infos (siehe research.md)
- Infos die Mom noch liefern muss (siehe research.md Abschnitt 11)
- echten Fotos die Mom bereitstellt (einverstaendnis-konform)

## Offene Punkte (brauche Input vom Auftraggeber und/oder Mom)

### Organisatorisch
1. Ist Helene Zahn noch aktuell die Leitung? Stv. Alisa Weiler?
2. Anzahl Kinder, Anzahl freie Plaetze aktuell
3. Genauer Tagesablauf (Bringzeit, Morgenkreis, Aktivitaeten, Essen, Ruhezeit, Abholung)
4. Essenskonzept (Caterer? Frisch gekocht? Bio?)
5. Ferien- und Schliesstage
6. Beitraege und wer das einzieht (Gemeinde direkt)
7. Familienzentrum-Status oder nur Kita

### Paedagogik
8. Ist das Konzept "Kreativitaet und aesthetische Bildung" noch aktuell oder gibt es Neues
9. Welche besonderen Angebote (Musik, Turnen, Englisch, Vorschule, Projekte)
10. Kooperationen mit Grundschule Berkum/Niederbachem
11. Gibt es ein schriftliches Konzept das wir verwenden koennen

### Content und Assets
12. Echte Fotos vom Gebaeude, Aussengelaende, Raeumen, Team, Aktionen (mit Einverstaendnis der Eltern fuer Kinderfotos)
13. Logo? Oder sollen wir eins entwerfen?
14. Gruppennamen (haben die Gruppen eigene Namen wie "Baeren", "Fuechse")
15. Team-Kurzvorstellungen (Name, Rolle, Qualifikation, ein Satz "Warum ich gerne hier arbeite")
16. Drei bis fuenf Eltern-Stimmen als Testimonials
17. Eine kleine Geschichte: "Wie sieht ein Tag bei den kleinen Strolchen aus"

### Website-Umfang
18. Seiten-Vorschlag (siehe unten). Freigabe noetig.
19. Kontaktformular ja/nein. Wenn ja: wo landet das Ergebnis (E-Mail der Kita? Leitung? Gemeinde?)
20. Anmelde-Link nur zum Kitaportal oder zusaetzlicher Infoflyer zum Download
21. Newsletter ja/nein (empfohlen nein, zu viel Aufwand fuer eine Kita)
22. Impressum und Datenschutz: Wer ist verantwortlich (Gemeinde als Traeger)
23. Domain: Gibt es eine? Muss eine registriert werden? Vorschlag: `kita-oberbachem.de` oder `kleine-strolche-oberbachem.de`

## Seitenvorschlag (zur Freigabe)
1. **Startseite** Hero mit Wald/Kindern, Kernbotschaft, CTA Anmeldung, Highlights
2. **Ueber uns** Leitbild, Konzept, Geschichte, Team-Vorstellung
3. **Unser Alltag** Tagesablauf, Wald- und Feldtag, Freispiel, Kreativitaet
4. **Gruppen und Raeume** Zwei Gruppen, Raeume, Aussengelaende, Bilder
5. **Essen und Schlafen** Verpflegung, Ruhezeiten
6. **Feste und Traditionen** St. Martin, Sommerfest, Karneval, Ostern, Advent
7. **Anmeldung** Schritt-fuer-Schritt Erklaerung, Link zum Kitaportal, Unterlagen, Fristen
8. **Kontakt** Adresse, Telefon, E-Mail, Karte, Anfahrt, Oeffnungszeiten
9. **Aktuelles/News** optional, einfache Blog-Struktur fuer Infos an Eltern
10. **Impressum + Datenschutz** rechtlich Pflicht

## Naechste Schritte
1. Auftraggeber liest briefing.md und research.md
2. Auftraggeber beantwortet die offenen Punkte 1 bis 23, holt fehlende Infos bei Mom
3. Freigabe fuer Approach B, Tech-Stack Astro, Seitenvorschlag
4. Dann gehe ich in Phase 2 (Planung mit Wireframes, Copy, SEO, Component-Map)
5. Nach Freigabe Phase 2: Phase 3 Build
6. Dann Phase 4 Validierung
