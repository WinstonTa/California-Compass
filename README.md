# California Compass

California Compass is an interactive visual field guide to the Golden State. Explore a California-centered map, browse curated cities and landmarks, filter map layers, search places, and select locations to learn more through focused summaries and facts. A featured route and recenter control make it easy to move from a broad overview into a guided exploration.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to explore the app.

The map uses OpenStreetMap raster tiles and includes contributor attribution in the interface. Place content is curated in `src/data/places.ts`, keeping the data layer independent from the map and HUD components. The interface is built with Next.js, TypeScript, React, and MapLibre.
