# lucio.id

A quiet personal bio page for Lucio Paiva. Plain HTML and CSS; no build step, dependencies, analytics, or external fonts.

The theme follows the system preference until you choose light or dark. A small script stores your choice in localStorage and restores it before styles load. If storage is unavailable, switching still works for the current visit. The CSS toggle also works without JavaScript. All icons are inline SVG with no external requests.

## Preview locally

From this directory:

```sh
python -m http.server 4173 --bind 127.0.0.1
```

Open http://127.0.0.1:4173.

## Edit

- `index.html`: biography and contact links.
- `style.css`: layout, colors, and responsive styles.
- `theme.js`: theme selection and persistence.
- `favicon.svg`: browser icon.

## Hosting

This folder is prepared for a separate GitHub Pages repository for `lucio.id`. Publish from the root of the default branch. The `CNAME` file contains the intended custom domain. Repository creation, Pages settings, and DNS setup are separate steps; nothing here changes the existing `luciopaiva.com` site.
