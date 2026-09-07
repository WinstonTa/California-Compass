export type PlaceCategory = "city" | "landmark";

export type Place = {
  id: string;
  name: string;
  category: PlaceCategory;
  coordinates: [number, number];
  region: string;
  summary: string;
  description: string;
  stats: Array<{ label: string; value: string }>;
};
