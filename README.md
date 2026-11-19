# WSFM website

Marketing site for Western Sydney Facility Maintenance. The Home page is ported
from the design export in `design-reference/` (phone and desktop artboards are the
same page at two breakpoints).

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
- `src/components/sections/` holds one component per artboard section.
- `src/data/site.ts` holds the copy and the link map. Only the Home page exists,
  so nav items point at in-page anchors there until the other pages are built.

## Design reference

`design-reference/desktop` and `design-reference/phone` are the raw export
(artboard HTML, CSS, assets). They are reference material and are not built.
Photos in `public/assets` are style stand-ins from the design and need replacing
before launch.
