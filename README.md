# Gedanken zu Bitcoin

Astro-Projekt für **gedanken-zu-bitcoin.de** – ein persönliches Journal mit kurzen Gedanken, Reflexionen und Essays.

## Lokal starten

```bash
npm install
npm run dev
npm run build
```

## Cloudflare Pages

- Repository: `HenkF1972/gedanken-zu-bitcoin-de`
- Framework: Astro
- Build: `npm run build`
- Build output: `dist`
- Production branch: `main`
- Domain: `gedanken-zu-bitcoin.de`

## Inhalte

Markdown-Dateien in `src/content/beitraege/`. Metadaten:

```yaml
title: "Ein Gedanke"
description: "Optional"
date: 2026-11-10
type: gedanke # gedanke | reflexion | essay
tags: [Geld, Freiheit]
sourceId: "discord:123" # optional
related: []
draft: false
```

Dateinamen stabil lassen, damit Artikel-URLs bei Updates gleich bleiben.

## Geplant

- Discord-Bot für spontane Gedanken und KI-Formulierungsvorschläge, Freigabe durch Auswahl.
- Google Drive: Dokument in Ordner „02 – Veröffentlichen“ verschieben; n8n exportiert und schreibt Markdown nach GitHub.
- Benachrichtigungen nach erfolgreichem Deployment über Discord.

## Vor öffentlichem Livegang

1. Impressum und Datenschutz vervollständigen (derzeit Platzhalter).
2. Drei Demobeiträge sind `draft: true` und werden nicht veröffentlicht.
3. Extern eingebundene Google Fonts vor Livegang lokal hosten oder durch Systemschriften ersetzen; Datenschutz prüfen.
4. Discord-/Google-Docs-/n8n-Workflows sind noch nicht implementiert.
5. Build und Darstellung auf Cloudflare Pages prüfen.
