import type { Place } from "@/types/geography";

type PlaceDrawerProps = {
  place: Place | null;
  onClose: () => void;
};

export function PlaceDrawer({ place, onClose }: PlaceDrawerProps) {
  if (!place) return null;

  return (
    <aside className="place-drawer" aria-label={`${place.name} details`}>
      <button type="button" className="icon-button place-drawer__close" onClick={onClose} aria-label="Close details">
        ×
      </button>
      <div className="eyebrow">{place.category === "city" ? "City anchor" : "Natural landmark"}</div>
      <h2>{place.name}</h2>
      <p className="place-drawer__region">{place.region}</p>
      <p className="place-drawer__summary">{place.summary}</p>
      <p className="place-drawer__description">{place.description}</p>
      <div className="place-stats">
        {place.stats.map((stat) => (
          <div key={stat.label} className="place-stat">
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
          </div>
        ))}
      </div>
    </aside>
  );
}
