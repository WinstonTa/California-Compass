"use client";

import "maplibre-gl/dist/maplibre-gl.css";
import Map, { Marker, NavigationControl, type MapRef } from "react-map-gl/maplibre";
import { forwardRef } from "react";
import type { Place } from "@/types/geography";

const mapStyle = {
  version: 8 as const,
  sources: {
    osm: {
      type: "raster" as const,
      tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
      tileSize: 256,
      attribution: "© OpenStreetMap contributors"
    }
  },
  layers: [
    { id: "background", type: "background" as const, paint: { "background-color": "#09151d" } },
    { id: "osm", type: "raster" as const, source: "osm", paint: { "raster-opacity": 0.32, "raster-saturation": -0.7 } }
  ]
};

type CaliforniaMapProps = {
  places: Place[];
  selectedPlaceId: string | null;
  onSelect: (place: Place) => void;
};

export const CaliforniaMap = forwardRef<MapRef, CaliforniaMapProps>(function CaliforniaMap(
  { places, selectedPlaceId, onSelect },
  ref
) {
  return (
    <Map
      ref={ref}
      initialViewState={{ longitude: -119.5, latitude: 36.6, zoom: 5.25, bearing: -8, pitch: 18 }}
      mapStyle={mapStyle}
      minZoom={4.4}
      maxZoom={12}
      maxBounds={[
        [-130, 30],
        [-111, 44]
      ]}
      attributionControl={false}
      reuseMaps
    >
      <NavigationControl position="bottom-right" showCompass={false} />
      {places.map((place) => (
        <Marker
          key={place.id}
          longitude={place.coordinates[0]}
          latitude={place.coordinates[1]}
          anchor="center"
          onClick={(event) => {
            event.originalEvent.stopPropagation();
            onSelect(place);
          }}
        >
          <button
            type="button"
            className={`map-marker map-marker--${place.category} ${selectedPlaceId === place.id ? "map-marker--selected" : ""}`}
            aria-label={`Explore ${place.name}`}
          >
            <span className="map-marker__core" />
          </button>
        </Marker>
      ))}
    </Map>
  );
});
