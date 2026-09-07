"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { MapRef } from "react-map-gl/maplibre";
import { CaliforniaMap } from "@/components/map/CaliforniaMap";
import { LayerControls } from "@/components/hud/LayerControls";
import { PlaceDrawer } from "@/components/hud/PlaceDrawer";
import { SearchPanel } from "@/components/hud/SearchPanel";
import { places, stateFacts } from "@/data/places";
import type { Place, PlaceCategory } from "@/types/geography";

const featuredRoute: Place[] = [
  places.find((place) => place.id === "los-angeles")!,
  places.find((place) => place.id === "big-sur")!,
  places.find((place) => place.id === "yosemite")!,
  places.find((place) => place.id === "lake-tahoe")!,
  places.find((place) => place.id === "san-francisco")!
];

export default function Home() {
  const mapRef = useRef<MapRef>(null);
  const [isExploring, setIsExploring] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [tourIndex, setTourIndex] = useState<number | null>(null);
  const [activeCategories, setActiveCategories] = useState<Record<PlaceCategory, boolean>>({
    city: true,
    landmark: true
  });

  const visiblePlaces = useMemo(
    () => places.filter((place) => activeCategories[place.category]),
    [activeCategories]
  );

  const selectPlace = useCallback((place: Place) => {
    setSelectedPlace(place);
    mapRef.current?.flyTo({ center: place.coordinates, zoom: place.category === "city" ? 7.5 : 8.2, duration: 1600 });
  }, []);

  useEffect(() => {
    if (tourIndex === null) return;

    const activePlace = featuredRoute[tourIndex];
    if (!activePlace) {
      setTourIndex(null);
      return;
    }

    setActiveCategories((current) => ({
      city: current.city || activePlace.category === "city",
      landmark: current.landmark || activePlace.category === "landmark"
    }));

    selectPlace(activePlace);

    const timeoutId = window.setTimeout(() => {
      setTourIndex((current) => {
        if (current === null) return null;
        return current + 1 >= featuredRoute.length ? null : current + 1;
      });
    }, 1800);

    return () => window.clearTimeout(timeoutId);
  }, [selectPlace, tourIndex]);

  function resetView() {
    setSelectedPlace(null);
    setTourIndex(null);
    mapRef.current?.flyTo({ center: [-119.5, 36.6], zoom: 5.25, bearing: -8, pitch: 18, duration: 1200 });
  }

  function toggleCategory(category: PlaceCategory) {
    setActiveCategories((current) => ({ ...current, [category]: !current[category] }));
    if (selectedPlace?.category === category) setSelectedPlace(null);
  }

  function startFeaturedRoute() {
    setTourIndex(0);
    setActiveCategories({ city: true, landmark: true });
  }

  return (
    <main className="compass-app">
      {isExploring && (
        <>
          <div className="map-layer">
            <CaliforniaMap ref={mapRef} places={visiblePlaces} selectedPlaceId={selectedPlace?.id ?? null} onSelect={selectPlace} />
          </div>
          <div className="map-vignette" />
        </>
      )}
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
      {isExploring ? (
        <>
          <section className="facts-panel" aria-label="California facts">
            <div className="eyebrow">California / at a glance</div>
            {stateFacts.map((fact) => <div className="fact-row" key={fact.label}><span>{fact.label}</span><strong>{fact.value}</strong></div>)}
          </section>
          <SearchPanel places={places} selectedPlaceId={selectedPlace?.id ?? null} onSelect={selectPlace} />
          <LayerControls activeCategories={activeCategories} onToggle={toggleCategory} />
          <button type="button" className="feature-tour" onClick={startFeaturedRoute}>
            {tourIndex === null ? "Featured route" : "Touring..."}
          </button>
          <button type="button" className="reset-view" onClick={resetView}><span>◎</span> Recenter compass</button>
          <div className="map-credit">Map data © OpenStreetMap contributors</div>
          <PlaceDrawer place={selectedPlace} onClose={() => setSelectedPlace(null)} />
        </>
      ) : (
        <section className="landing-hero" aria-labelledby="landing-title">
          <div className="landing-hero__glow landing-hero__glow--left" />
          <div className="landing-hero__glow landing-hero__glow--right" />
          <div className="eyebrow">The western edge / 36° 46′ N</div>
          <h1 id="landing-title">Find your<br /><em>north star.</em></h1>
          <p className="landing-hero__subtitle">Explore the places, landscapes, and stories that make California impossible to hold still.</p>
          <div className="landing-features" aria-label="California Compass features">
            <span><b>01</b> Curated places</span>
            <span><b>02</b> Living landscapes</span>
            <span><b>03</b> Your next horizon</span>
          </div>
          <button type="button" className="explore-button" onClick={() => setIsExploring(true)}>
            Explore Map <span aria-hidden="true">↗</span>
          </button>
          <div className="landing-coordinate">Pacific / California / 2024</div>
        </section>
      )}
    </main>
  );
}
