import type { PlaceCategory } from "@/types/geography";

type LayerControlsProps = {
  activeCategories: Record<PlaceCategory, boolean>;
  onToggle: (category: PlaceCategory) => void;
};

export function LayerControls({ activeCategories, onToggle }: LayerControlsProps) {
  return (
    <div className="layer-controls" aria-label="Map layers">
      <span className="eyebrow">Explore layers</span>
      {(["city", "landmark"] as const).map((category) => (
        <button
          type="button"
          key={category}
          className={`layer-toggle layer-toggle--${category} ${activeCategories[category] ? "layer-toggle--active" : ""}`}
          onClick={() => onToggle(category)}
          aria-pressed={activeCategories[category]}
        >
          <span className="layer-toggle__dot" />
          {category === "city" ? "Cities" : "Landmarks"}
        </button>
      ))}
    </div>
  );
}
