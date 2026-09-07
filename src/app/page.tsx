"use client";

import { useMemo, useRef, useState } from "react";
import type { MapRef } from "react-map-gl/maplibre";
import { CaliforniaMap } from "@/components/map/CaliforniaMap";
import { LayerControls } from "@/components/hud/LayerControls";
import { PlaceDrawer } from "@/components/hud/PlaceDrawer";
import { places, stateFacts } from "@/data/places";
import type { Place, PlaceCategory } from "@/types/geography";

export default function Home() {
  const mapRef = useRef<MapRef>(null);
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [activeCategories, setActiveCategories] = useState<Record<PlaceCategory, boolean>>({
    city: true,
    landmark: true
  });

  const visiblePlaces = useMemo(
    () => places.filter((place) => activeCategories[place.category]),
    [activeCategories]
  );

  function selectPlace(place: Place) {
    setSelectedPlace(place);
    mapRef.current?.flyTo({ center: place.coordinates, zoom: place.category === "city" ? 7.5 : 8.2, duration: 1600 });
  }

  function resetView() {
    setSelectedPlace(null);
    mapRef.current?.flyTo({ center: [-119.5, 36.6], zoom: 5.25, bearing: -8, pitch: 18, duration: 1200 });
  }

  function toggleCategory(category: PlaceCategory) {
    setActiveCategories((current) => ({ ...current, [category]: !current[category] }));
    if (selectedPlace?.category === category) setSelectedPlace(null);
  }

  return (
    <main className="compass-app">
      <div className="map-layer">
        <CaliforniaMap ref={mapRef} places={visiblePlaces} selectedPlaceId={selectedPlace?.id ?? null} onSelect={selectPlace} />
      </div>
      <div className="map-vignette" />
      <header className="topbar">
        <div className="brand-lockup">
          <div className="brand-mark" aria-hidden="true">✦</div>
          <div>
            <div className="brand-name">California <span>Compass</span></div>
            <div className="brand-subtitle">A visual field guide to the Golden State</div>
          </div>
        </div>
        <div className="topbar-status"><span className="status-dot" /> Live atlas · 01</div>
      </header>
      <section className="hero-copy" aria-labelledby="hero-title">
        <div className="eyebrow">The western edge / 36° 46′ N</div>
        <h1 id="hero-title">Find your<br /><em>north star.</em></h1>
        <p>Explore the places, landscapes, and stories that make California impossible to hold still.</p>
      </section>
      <section className="facts-panel" aria-label="California facts">
        <div className="eyebrow">California / at a glance</div>
        {stateFacts.map((fact) => <div className="fact-row" key={fact.label}><span>{fact.label}</span><strong>{fact.value}</strong></div>)}
      </section>
      <LayerControls activeCategories={activeCategories} onToggle={toggleCategory} />
      <button type="button" className="reset-view" onClick={resetView}><span>◎</span> Recenter compass</button>
      <div className="map-credit">Map data © OpenStreetMap contributors</div>
      <PlaceDrawer place={selectedPlace} onClose={() => setSelectedPlace(null)} />
    </main>
  );
}
