# WSFM website

Marketing site for Western Sydney Facility Maintenance. Pages are ported from the
design export in `design-reference/` (each phone and desktop artboard is the same
page at two breakpoints).

## Run

```bash
npm install
npm run dev
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server |
| `npm run build` | Typecheck and build to `dist/` |
| `npm run preview` | Serve the built site |
| `npm run lint` | Oxlint |

## Layout

- `src/styles/site.css` is the design's stylesheet, ported as-is.
- `src/pages/` holds the routes. `/` is Home and `/about` is About.
- `src/components/sections/` holds one component per Home section. About-specific
  sections live inside `src/pages/About.tsx`.
- `src/data/site.ts` holds the copy and the link map. Home and About are routes.
  The other nav items point at in-page anchors until those pages are built, and
  each link is defined once in `ROUTES`.

## Design reference

`design-reference/desktop` and `design-reference/phone` are the raw export
(artboard HTML, CSS, assets). They are reference material and are not built.
Photos in `public/assets` are style stand-ins from the design and need replacing
before launch.
