# ⚡ Sieleolie.com — Electrical Engineering Portfolio

This repository contains the source code for the **SIEL** (Servizi Impianti Elettrici) website, a professional landing page and portfolio for a specialized electrical firm in the Aeolian Islands. 🏝️

The project showcases technical expertise through a dedicated visual portfolio of civil and industrial installations.

## ✨ Key Features

- **🖼️ Optimized Visual Portfolio:** High-performance image gallery using modern `.webp` formats to ensure high quality with minimal loading times.
- **🏎️ Ultra-Lightweight:** Built with a "Zero-Framework" philosophy (Vanilla HTML, CSS, and JS) for maximum efficiency.
- **🌍 Bilingual Interface:** Integrated localization (Italian/English) to serve both local and international clients.
- **📱 Responsive Design:** Seamlessly adapts to all devices, ensuring the technical portfolio looks great on smartphones and desktops alike.
- **🔒 Privacy-Focused:** No external trackers or third-party dependencies.

## 📁 Project Structure

- **`/` (Root):** Production HTML files (`index.html`, `404.html`) and SEO configurations.
- **`/source/`**:
  - **`style.css`**: Modular CSS focused on a professional, technical aesthetic.
  - **`script.js`**: Logic for bilingual switching and UI interactions.
  - **`/img/`**: Contains the core UI assets.
  - **`/img/portfolio/`**: A curated collection of industrial, civil, and electrical panelboard projects. 📸
  - **`/fonts/`**: Self-hosted typography for performance.

## 🚀 Deployment

The site is hosted on **Cloudflare Pages**. The deployment pipeline ensures that every update to the technical gallery is instantly available worldwide via Cloudflare's edge network.

## 🛠️ Build Workflow

- Edit source files under `source/`.
- Run `./tools/build.sh` from the repository root.
- The build regenerates:
  - `index.html`
  - `404.html`
  - `certifications/index.html`
  - `source/style.min.css`
  - `source/script.min.js`
  - `sitemap.xml` (auto-generated every build)

`robots.txt` already points to `https://sieleolie.com/sitemap.xml`, so no manual sitemap editing is needed.

## 📄 License

**Copyright © 2026 WaretaGarasu.** All rights reserved. The design, photography, and technical content are proprietary. No part of this project may be reproduced or repurposed without explicit permission.