# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Static, no-build website for **Siel Eolie** — an electrical contractor based in Lipari, Italy. Bilingual (IT/EN), no framework, no npm, no bundler.

## Development server

Asset paths in every HTML file are **absolute** (`/source/...`), so the site **must** be served by an HTTP server — opening via `file://` breaks CSS, JS, and fonts.

```bash
bash tools/serve.sh           # → http://localhost:8000
bash tools/serve.sh 3000      # → http://localhost:3000
```

The script auto-selects the first available backend: `python3 -m http.server`, `python`, `npx serve`, or `php -S`. No installation needed beyond one of those.

On Windows, run from Git Bash or WSL. Alternatively, use any static HTTP server pointed at the repo root.

## Architecture

### Pages

| File | URL | Notes |
|---|---|---|
| `source/index.html` | `/` | Main SPA-style single page with all sections |
| `source/certifications/certifications.html` | `/certifications/` | Sub-page for certifications detail |
| `source/404.html` | `/404.html` | Error page (served by Cloudflare on 404) |

Header, footer, nav, and the FOUC-prevention inline script are **duplicated** in every HTML file — there is no templating engine. When editing shared structure, all three files must be updated.

### Source files

```
source/
  style.css         ← canonical stylesheet (edit this)
  style.min.css     ← minified copy (must be regenerated manually after edits)
  script.js         ← canonical JS (edit this)
  script.min.js     ← minified copy (must be regenerated manually after edits)
  fonts/            ← self-hosted Inter (variable) + Outfit (variable), woff2 only
  img/              ← favicons, OG card, portfolio images (WebP)
  site.webmanifest
```

The HTML pages load `style.min.css` and `script.min.js`. After any CSS or JS change, the minified files must be updated manually before the changes are visible. During development, switch the `<link>` and `<script>` tags to the unminified sources.

### i18n system

Translations live **entirely inside `script.js`**, in the `translations` object (keys `it` and `en`). Italian is the canonical default and the language baked into HTML attributes.

- Text nodes: `data-i18n="dot.separated.key"` → `el.textContent = dict[key]`
- Attributes: `data-i18n-attr="attr-name:dot.separated.key"` → `el.setAttribute(attr, dict[key])`
- Language persisted to `localStorage` key `lang`; falls back to `'it'`

When adding or changing any user-visible string:
1. Add/update both `it` and `en` entries in `translations` in `script.js`
2. Set the Italian text in the HTML attribute (canonical default)
3. Add the `data-i18n` attribute pointing to the key

### Theme system

Light/dark via `data-theme` attribute on `<html>`. Each HTML page has an identical FOUC-prevention inline `<script>` in `<head>` that reads `localStorage` key `theme` and sets the attribute before CSS loads. When adding a new page, copy this block verbatim from an existing page.

CSS theming is done through CSS custom properties defined in `:root` (light) and `[data-theme="dark"]` blocks at the top of `style.css`.

### Hosting

Deployed on **Cloudflare** (see `cloudflare/workers-autoconfig` remote branch). The `robots.txt` references a sitemap at `/sitemap.xml` that does not currently exist in the repo.

## Skill priorities for this project

Invoke skills **before** acting — even a 1% chance of relevance is enough.

| Task | Skill(s) to invoke first |
|---|---|
| Any UI/visual/layout change | `impeccable`, then `ui-ux-pro-max` |
| Building new UI sections or components | `anthropic-frontend-design` |
| Polish / micro-interactions / animation | `taste-skill` or `emil-design-eng` |
| Code review of HTML/CSS/JS | `code-review` |
| Security audit | `security-review` |
| Web design direction / brand reference | `vercel-web-design-guidelines` or `awesome-design-md` |
| Workspace/config setup | `init`, then `update-config` |

`impeccable` is the default for any front-end task. Always run it before making visual changes.
