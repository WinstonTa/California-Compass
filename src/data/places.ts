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
    id: "santa-barbara",
    name: "Santa Barbara",
    category: "city",
    coordinates: [-119.6982, 34.4208],
    region: "Central Coast",
    summary: "A Spanish-influenced coastal city backed by the Santa Ynez Mountains.",
    description: "Santa Barbara pairs red-tile architecture and palm-lined beaches with a relaxed gateway to the central coast.",
    stats: [{ label: "Known for", value: "Architecture + coast" }, { label: "Region", value: "Central Coast" }]
  },
  {
    id: "burbank",
    name: "Burbank",
    category: "city",
    coordinates: [-118.3089, 34.1808],
    region: "Los Angeles County",
    summary: "A foothill city with deep roots in California's film and television industry.",
    description: "Burbank sits between the Verdugo Mountains and Los Angeles, home to major studios and a distinctly creative identity.",
    stats: [{ label: "Known for", value: "Film + television" }, { label: "Setting", value: "Verdugo foothills" }]
  },
  {
    id: "pasadena",
    name: "Pasadena",
    category: "city",
    coordinates: [-118.1445, 34.1478],
    region: "Los Angeles County",
    summary: "A tree-lined foothill city where art, science, and historic neighborhoods meet.",
    description: "Pasadena brings together grand civic spaces, independent culture, and a front-row view of the San Gabriel Mountains.",
    stats: [{ label: "Known for", value: "Arts + science" }, { label: "Landmark", value: "Rose Bowl" }]
  },
  {
    id: "irvine",
    name: "Irvine",
    category: "city",
    coordinates: [-117.8265, 33.6846],
    region: "Orange County",
    summary: "A planned city of parks, trails, research, and Southern California growth.",
    description: "Irvine's carefully connected neighborhoods and open spaces make it a distinctive lens on contemporary Orange County.",
    stats: [{ label: "Known for", value: "Parks + research" }, { label: "County", value: "Orange" }]
  },
  {
    id: "oakland",
    name: "Oakland",
    category: "city",
    coordinates: [-122.2712, 37.8044],
    region: "East Bay",
    summary: "A diverse waterfront city with deep roots in art, food, and community.",
    description: "Oakland faces San Francisco across the bay, connecting vibrant neighborhoods, port history, and views of the East Bay hills.",
    stats: [{ label: "Known for", value: "Arts + food" }, { label: "Setting", value: "East Bay" }]
  },
  {
    id: "san-jose",
    name: "San Jose",
    category: "city",
    coordinates: [-121.8863, 37.3382],
    region: "South Bay",
    summary: "The inventive heart of Silicon Valley, shaped by technology and valley history.",
    description: "San Jose blends a global technology economy with a rich agricultural past and access to the Santa Cruz Mountains.",
    stats: [{ label: "Known for", value: "Innovation" }, { label: "Region", value: "Silicon Valley" }]
  },
  {
    id: "monterey",
    name: "Monterey",
    category: "city",
    coordinates: [-121.8947, 36.6002],
    region: "Central Coast",
    summary: "A historic coastal city beside one of the world's richest marine habitats.",
    description: "Monterey pairs California history with kelp forests, sea otters, and the dramatic edge of Monterey Bay.",
    stats: [{ label: "Known for", value: "Marine life" }, { label: "Bay", value: "Monterey" }]
  },
  {
    id: "santa-cruz",
    name: "Santa Cruz",
    category: "city",
    coordinates: [-122.0308, 36.9741],
    region: "Central Coast",
    summary: "A surf-minded coastal city where redwoods meet the Pacific.",
    description: "Santa Cruz brings together a legendary beach culture, historic boardwalk, and the forested landscapes of the nearby mountains.",
    stats: [{ label: "Known for", value: "Surf + redwoods" }, { label: "Coast", value: "Monterey Bay" }]
  },
  {
    id: "palm-springs",
    name: "Palm Springs",
    category: "city",
    coordinates: [-116.5453, 33.8303],
    region: "Coachella Valley",
    summary: "A desert oasis known for modernist architecture, palms, and mountain light.",
    description: "Palm Springs is a gateway to the Coachella Valley, pairing mid-century design with dramatic views of the San Jacinto Mountains.",
    stats: [{ label: "Known for", value: "Modernism + desert" }, { label: "Setting", value: "Coachella Valley" }]
  },
  {
    id: "fresno",
    name: "Fresno",
    category: "city",
    coordinates: [-119.7871, 36.7378],
    region: "Central Valley",
    summary: "An agricultural crossroads and gateway to the southern Sierra Nevada.",
    description: "Fresno sits at the center of California's productive valley, within reach of Kings Canyon, Sequoia, and Yosemite country.",
    stats: [{ label: "Known for", value: "Agriculture" }, { label: "Gateway to", value: "Southern Sierra" }]
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
  },
  {
    id: "golden-gate-bridge",
    name: "Golden Gate Bridge",
    category: "landmark",
    coordinates: [-122.4783, 37.8199],
    region: "San Francisco Bay",
    summary: "A vermilion suspension bridge spanning the entrance to San Francisco Bay.",
    description: "The Golden Gate Bridge links San Francisco and Marin County in one of California's defining feats of engineering and design.",
    stats: [{ label: "Opened", value: "1937" }, { label: "Span", value: "4,200 ft" }]
  },
  {
    id: "alcatraz-island",
    name: "Alcatraz Island",
    category: "landmark",
    coordinates: [-122.423, 37.8267],
    region: "San Francisco Bay",
    summary: "A storied island fortress with layered histories in the middle of the bay.",
    description: "Alcatraz's former prison, military buildings, and gardens tell a complex story against a backdrop of city and water.",
    stats: [{ label: "Setting", value: "San Francisco Bay" }, { label: "Known for", value: "Island history" }]
  },
  {
    id: "griffith-observatory",
    name: "Griffith Observatory",
    category: "landmark",
    coordinates: [-118.3004, 34.1184],
    region: "Los Angeles",
    summary: "A hilltop observatory with sweeping views across Los Angeles and the stars.",
    description: "Griffith Observatory makes astronomy accessible while offering one of Southern California's most memorable city overlooks.",
    stats: [{ label: "Opened", value: "1935" }, { label: "View", value: "Los Angeles basin" }]
  },
  {
    id: "sequoia-national-park",
    name: "Sequoia National Park",
    category: "landmark",
    coordinates: [-118.5658, 36.4864],
    region: "Southern Sierra",
    summary: "High mountain country anchored by the world's largest trees.",
    description: "Sequoia National Park protects immense giant sequoias, deep canyons, and the western slopes of the Sierra Nevada.",
    stats: [{ label: "Established", value: "1890" }, { label: "Signature", value: "Giant sequoias" }]
  },
  {
    id: "death-valley",
    name: "Death Valley",
    category: "landmark",
    coordinates: [-116.9325, 36.5323],
    region: "Mojave Desert",
    summary: "A vast desert basin of salt flats, badlands, and extraordinary extremes.",
    description: "Death Valley National Park reveals California at its most austere, from below-sea-level basins to high desert mountains.",
    stats: [{ label: "Lowest point", value: "Badwater Basin" }, { label: "Landscape", value: "Desert basin" }]
  },
  {
    id: "channel-islands",
    name: "Channel Islands National Park",
    category: "landmark",
    coordinates: [-119.7785, 34.0069],
    region: "Southern California Coast",
    summary: "Wild islands and rich marine ecosystems just offshore from Southern California.",
    description: "The Channel Islands preserve rare island species, sea caves, kelp forests, and a coastline best explored by boat or trail.",
    stats: [{ label: "Islands", value: "5 protected" }, { label: "Known for", value: "Marine life" }]
  },
  {
    id: "muir-woods",
    name: "Muir Woods",
    category: "landmark",
    coordinates: [-122.5965, 37.8957],
    region: "Marin County",
    summary: "A quiet cathedral of old-growth coastal redwoods north of San Francisco.",
    description: "Muir Woods protects towering redwoods along Redwood Creek, offering an intimate encounter with one of California's signature forests.",
    stats: [{ label: "Landscape", value: "Coastal redwoods" }, { label: "Setting", value: "Marin County" }]
  },
  {
    id: "point-reyes",
    name: "Point Reyes National Seashore",
    category: "landmark",
    coordinates: [-122.9669, 38.0432],
    region: "Northern California Coast",
    summary: "A windswept peninsula of cliffs, beaches, wetlands, and abundant wildlife.",
    description: "Point Reyes reaches into the Pacific with rugged trails, historic ranches, migrating whales, and a famously foggy coast.",
    stats: [{ label: "Landscape", value: "Coastal wilderness" }, { label: "Known for", value: "Wildlife + fog" }]
  },
  {
    id: "hearst-castle",
    name: "Hearst Castle",
    category: "landmark",
    coordinates: [-121.1667, 35.6852],
    region: "Central Coast",
    summary: "A hilltop estate where Mediterranean architecture meets sweeping ocean views.",
    description: "Hearst Castle, or San Simeon, preserves the grand rooms, gardens, and art collection of William Randolph Hearst's coastal estate.",
    stats: [{ label: "Setting", value: "San Simeon" }, { label: "Style", value: "Mediterranean Revival" }]
  },
  {
    id: "lassen-volcanic",
    name: "Lassen Volcanic National Park",
    category: "landmark",
    coordinates: [-121.51, 40.4977],
    region: "Cascade Range",
    summary: "A volcanic landscape of peaks, hydrothermal features, and alpine lakes.",
    description: "Lassen Volcanic National Park gathers all four major types of volcanoes alongside wildflower meadows, forests, and steaming earth.",
    stats: [{ label: "Established", value: "1916" }, { label: "Known for", value: "Volcanic features" }]
  }
];

export const stateFacts = [
  { label: "Coastline", value: "840 mi" },
  { label: "Highest point", value: "Mt. Whitney · 14,505 ft" },
  { label: "Lowest point", value: "Badwater Basin · −282 ft" }
];
