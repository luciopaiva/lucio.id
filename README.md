# lucio.id

A quiet personal bio page for Lucio Paiva. Plain HTML and CSS; no build step, dependencies, analytics, or external fonts.

The theme follows the system preference by default. An accessible sun/moon checkbox toggles to the opposite theme using CSS `:has()` without JavaScript. The icon shows the theme you can switch to. Manual choices are not stored across visits. The toggle requires a modern browser; system preference still works without `:has()` support. All icons are inline SVG with no external requests.

## Preview locally

From this directory:

```sh
python -m http.server 4173 --bind 127.0.0.1
```

Open http://127.0.0.1:4173.

## Edit

- `index.html`: biography and contact links.
- `style.css`: layout, colors, and responsive styles.
- `favicon.svg`: browser icon.

## Hosting

This folder is prepared for a separate GitHub Pages repository for `lucio.id`. Publish from the root of the default branch. The `CNAME` file contains the intended custom domain. Repository creation, Pages settings, and DNS setup are separate steps; nothing here changes the existing `luciopaiva.com` site.
