# A/V Device Matrix

Interactive 3D explorer for **Logitech**, **Poly**, and **Neat** video conferencing devices — room systems, cameras, and controllers.

Built with React, Three.js (React Three Fiber), and Vite. Deployed to GitHub Pages.

## Features

- **Showroom** — orbit a 3D layout grouped by device category
- **Aisle** — scrollable product aisle with category sections
- **Finder** — pick a room size and device type to narrow matches
- **Compare** — side-by-side spec comparison (up to 3 devices, cross-vendor)
- **Vendor filter** — All · Logitech · Poly · Neat
- **Deep links** — share `?vendor=logitech&device=logitech-rally-bar&view=finder`

## Local development

```bash
npm ci
npm run dev
```

## Build

```bash
npm run build
npm run verify:product-urls   # optional URL health check
```

## GitHub Pages

Push to `main`. Enable **Settings → Pages → GitHub Actions** on first deploy.

The workflow sets `VITE_BASE_PATH` automatically from the repository name (e.g. `/av-device-matrix/`).

## Disclaimer

This site is **unaffiliated** with Logitech, Poly (HP), or Neat. Product names and specifications are summarized from publicly available documentation for buyer reference. Trademarks belong to their respective owners.

## Related

- [Cisco Collaboration Device Matrix](https://bnarcum.github.io/cisco-device-matrix/) — Cisco/Webex catalog explorer (separate site)
