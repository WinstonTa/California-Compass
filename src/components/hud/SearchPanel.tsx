import { useEffect, useState } from "react";
import type { Place } from "@/types/geography";

type SearchPanelProps = {
  places: Place[];
  selectedPlaceId: string | null;
  onSelect: (place: Place) => void;
};

export function SearchPanel({ places, selectedPlaceId, onSelect }: SearchPanelProps) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const filteredPlaces = places.filter((place) => {
    const haystack = `${place.name} ${place.region} ${place.summary}`.toLowerCase();
    return haystack.includes(query.trim().toLowerCase());
  });

  useEffect(() => {
    setActiveIndex(0);
  }, [query, places.length]);

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (!filteredPlaces.length) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((current) => (current + 1) % filteredPlaces.length);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((current) => (current - 1 + filteredPlaces.length) % filteredPlaces.length);
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      onSelect(filteredPlaces[activeIndex]);
    }
  }

  return (
    <div className="search-panel" aria-label="Search California places">
      <button
        type="button"
        className={`search-toggle ${isOpen ? "search-toggle--open" : ""}`}
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        aria-controls="search-interests-panel"
      >
        <span className="search-toggle__icon" aria-hidden="true">⌕</span>
        Search Interests
        <span className="search-toggle__chevron" aria-hidden="true">{isOpen ? "⌃" : "⌄"}</span>
      </button>
      {isOpen && (
        <div className="search-panel__drawer" id="search-interests-panel">
          <div className="eyebrow">Search places</div>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Find a city or landmark"
            className="search-input"
            aria-label="Search California places"
          />
          {filteredPlaces.length > 0 ? (
            <ul className="search-list" role="listbox" aria-label="Search results">
              {filteredPlaces.map((place, index) => (
                <li key={place.id}>
                  <button
                    type="button"
                    className={`search-item ${index === activeIndex ? "search-item--active" : ""} ${selectedPlaceId === place.id ? "search-item--selected" : ""}`}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => onSelect(place)}
                  >
                    <span className="search-item__name">{place.name}</span>
                    <span className="search-item__meta">{place.category === "city" ? "City" : "Landmark"}</span>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="search-empty">No places match this search.</div>
          )}
        </div>
      )}
    </div>
  );
}
