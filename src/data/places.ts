import type { Place } from "@/types/geography";

export const places: Place[] = [
  {
    id: "san-francisco",
    name: "San Francisco",
    category: "city",
    coordinates: [-122.4194, 37.7749],
    region: "Northern California",
    summary: "A compact, creative city wrapped around one of the world's most recognizable bays.",
    description: "From redwood ridges to the Pacific edge, San Francisco is a city of dramatic hills, big ideas, and layered neighborhoods.",
    stats: [{ label: "Known for", value: "Innovation + culture" }, { label: "Elevation", value: "52 ft" }]
  },
  {
    id: "sacramento",
    name: "Sacramento",
    category: "city",
    coordinates: [-121.4944, 38.5816],
    region: "Central Valley",
    summary: "California's riverfront capital and a gateway to the northern interior.",
    description: "Sacramento sits at the meeting point of the Sacramento and American Rivers, connecting California's civic life with its agricultural heartland.",
    stats: [{ label: "Known for", value: "State capital" }, { label: "Founded", value: "1850" }]
  },
  {
    id: "los-angeles",
    name: "Los Angeles",
    category: "city",
    coordinates: [-118.2437, 34.0522],
    region: "Southern California",
    summary: "A sprawling constellation of neighborhoods, studios, beaches, and ambition.",
    description: "Los Angeles is a global creative capital where the San Gabriel Mountains, Pacific coastline, and a mosaic of communities meet.",
    stats: [{ label: "Known for", value: "Film + design" }, { label: "Metro area", value: "13M+" }]
  },
  {
    id: "san-diego",
    name: "San Diego",
    category: "city",
    coordinates: [-117.1611, 32.7157],
    region: "Southern California",
    summary: "A sunlit coastal city where canyon trails meet a deep blue Pacific.",
    description: "San Diego blends a relaxed beach culture with an active innovation scene and a border-region perspective.",
    stats: [{ label: "Known for", value: "Coast + biotech" }, { label: "Climate", value: "Mediterranean" }]
  },
  {
    id: "yosemite",
    name: "Yosemite Valley",
    category: "landmark",
    coordinates: [-119.5383, 37.8651],
    region: "Sierra Nevada",
    summary: "Granite walls, waterfalls, and giant sequoias in the high country.",
    description: "Yosemite's glacially carved valley is one of California's most iconic landscapes, framed by El Capitan and Half Dome.",
    stats: [{ label: "Established", value: "1890" }, { label: "Signature", value: "Half Dome" }]
  },
  {
    id: "big-sur",
    name: "Big Sur",
    category: "landmark",
    coordinates: [-121.8081, 36.2704],
    region: "Central Coast",
    summary: "A rugged meeting of redwood forest, cliffside roads, and open ocean.",
    description: "Big Sur is less a single destination than a powerful stretch of coastline where the Santa Lucia Mountains drop into the Pacific.",
    stats: [{ label: "Landscape", value: "Coastal range" }, { label: "Route", value: "Highway 1" }]
  },
  {
    id: "joshua-tree",
    name: "Joshua Tree",
    category: "landmark",
    coordinates: [-115.901, 33.8734],
    region: "Mojave Desert",
    summary: "An otherworldly desert of sculpted rock and unmistakable trees.",
    description: "Joshua Tree National Park brings two desert ecosystems together in a landscape shaped by wind, light, and granite.",
    stats: [{ label: "Landscape", value: "Mojave + Colorado" }, { label: "Best at", value: "Sunrise" }]
  },
  {
    id: "lake-tahoe",
    name: "Lake Tahoe",
    category: "landmark",
    coordinates: [-120.0324, 39.0968],
    region: "Sierra Nevada",
    summary: "A high alpine lake with clear water, deep forests, and snow-bright peaks.",
    description: "Lake Tahoe rests along the California–Nevada border, inviting year-round exploration from shoreline trails to ski slopes.",
    stats: [{ label: "Elevation", value: "6,225 ft" }, { label: "Depth", value: "1,645 ft" }]
  }
];

export const stateFacts = [
  { label: "Coastline", value: "840 mi" },
  { label: "Highest point", value: "Mt. Whitney · 14,505 ft" },
  { label: "Lowest point", value: "Badwater Basin · −282 ft" }
];
