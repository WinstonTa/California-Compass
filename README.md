# California Compass

A visual field guide to California, built around an exploratory map experience.

## MVP checklist

- [x] Establish the Next.js, TypeScript, custom HUD styling, and MapLibre foundation
- [x] Build the full-screen map shell with a California-centered default camera
- [x] Add typed city and landmark data
- [x] Render markers and category filters
- [x] Implement selection, camera fly-to, and the detail drawer
- [x] Add initial HUD styling, state facts, and responsive layout
- [ ] Add keyboard navigation and a searchable place list
- [ ] Add one polished signature interaction, such as a featured-place camera tour
- [ ] Evaluate Zustand, external APIs, deck.gl, and PMTiles as the dataset grows

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to explore the app.

The initial map uses OpenStreetMap raster tiles and includes the required contributor attribution in the interface. Place content is currently curated in `src/data/places.ts`, keeping the data layer independent from the map and HUD components.
