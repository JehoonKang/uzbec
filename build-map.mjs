import { readFileSync, writeFileSync } from 'node:fs';

const geo = JSON.parse(readFileSync(new URL('./data/natural-earth-countries.geojson', import.meta.url), 'utf8'));
const bounds = { west: 53, east: 75, south: 35.5, north: 45.5 };
const scaleX = 47;
const scaleY = 57;
const project = ([longitude, latitude]) => [
  44 + (longitude - bounds.west) * scaleX,
  30 + (bounds.north - latitude) * scaleY
];
const countryNames = new Set(['Uzbekistan', 'Tajikistan', 'Kyrgyzstan', 'Kazakhstan', 'Turkmenistan', 'Afghanistan', 'Iran', 'China']);
const countries = geo.features.filter((feature) => countryNames.has(feature.properties.ADMIN));
const pathForRing = (ring) => ring.map((point, index) => {
  const [x, y] = project(point);
  return `${index ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`;
}).join(' ') + 'Z';
const countryPaths = countries.map((feature) => {
  const polygons = feature.geometry.type === 'Polygon' ? [feature.geometry.coordinates] : feature.geometry.coordinates;
  const d = polygons.map((polygon) => polygon.map(pathForRing).join(' ')).join(' ');
  const home = feature.properties.ADMIN === 'Uzbekistan' || feature.properties.ADMIN === 'Tajikistan';
  return `<path class="country${home ? ' country-journey' : ''}" d="${d}"/>`;
}).join('\n');
const cities = {
  tashkent: { name: '타슈켄트', en: 'TASHKENT', lon: 69.2401, lat: 41.2995, dx: -82, dy: -28, day: 1 },
  urgench: { name: '우르겐치', en: 'URGENCH', lon: 60.6310, lat: 41.5500, dx: -16, dy: -16, day: 2 },
  khiva: { name: '히바', en: 'KHIVA', lon: 60.3630, lat: 41.3783, dx: -15, dy: 29, day: 2 },
  bukhara: { name: '부하라', en: 'BUKHARA', lon: 64.4286, lat: 39.7681, dx: -82, dy: 12, day: 4 },
  samarkand: { name: '사마르칸트', en: 'SAMARKAND', lon: 66.9597, lat: 39.6542, dx: -45, dy: 44, day: 5 },
  panjikent: { name: '펜지켄트', en: 'PANJIKENT · TAJIKISTAN', lon: 67.6093, lat: 39.4952, dx: 18, dy: 3, day: 6 },
  lakes: { name: '7개 호수', en: 'FANN MOUNTAINS', lon: 66.3167, lat: 39.1500, dx: -66, dy: 26, day: 6 },
  chimgan: { name: '침간산', en: 'CHIMGAN', lon: 70.0550, lat: 41.5167, dx: 26, dy: -28, day: 8 },
  charvak: { name: '차르박 호수', en: 'CHARVAK', lon: 70.0500, lat: 41.6333, dx: 27, dy: 34, day: 8 }
};
const point = (key) => project([cities[key].lon, cities[key].lat]);
const landRoutes = [['urgench', 'khiva'], ['khiva', 'bukhara'], ['bukhara', 'samarkand'], ['samarkand', 'panjikent'], ['panjikent', 'lakes'], ['samarkand', 'tashkent'], ['tashkent', 'chimgan'], ['chimgan', 'charvak']];
const airRoutes = [['tashkent', 'urgench']];
const routeMarkup = (routes, className) => routes.map(([from, to]) => {
  const [x1, y1] = point(from); const [x2, y2] = point(to);
  const midX = (x1 + x2) / 2; const midY = Math.min(y1, y2) - Math.min(38, Math.abs(x2 - x1) * .06);
  return `<path class="${className}" marker-end="url(#route-arrow)" d="M${x1.toFixed(1)} ${y1.toFixed(1)} Q${midX.toFixed(1)} ${midY.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}"/>`;
}).join('\n');
const grid = [];
for (let longitude = 54; longitude <= 74; longitude += 2) {
  const [x] = project([longitude, bounds.south]);
  grid.push(`<path class="map-grid" d="M${x} 20V620"/><text class="map-coordinate" x="${x + 3}" y="640">${longitude}°E</text>`);
}
for (let latitude = 36; latitude <= 45; latitude += 2) {
  const [, y] = project([bounds.west, latitude]);
  grid.push(`<path class="map-grid" d="M30 ${y}H1080"/><text class="map-coordinate" x="8" y="${y - 4}">${latitude}°N</text>`);
}
const markers = Object.entries(cities).map(([key, city]) => {
  const [x, y] = point(key);
  return `<a class="map-marker" href="#day-${city.day}" aria-label="${city.name} 지도 표식: ${city.day}일차 여행기로 이동"><circle class="map-hit-area" cx="${x}" cy="${y}" r="19"/><circle class="map-marker-dot" cx="${x}" cy="${y}" r="9"/><circle class="map-marker-core" cx="${x}" cy="${y}" r="3"/><text class="map-label-ko" x="${x + city.dx}" y="${y + city.dy}">${city.name}</text><text class="map-label-en" x="${x + city.dx}" y="${y + city.dy + 15}">${city.en}</text></a>`;
}).join('\n');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1120 670" role="img" aria-labelledby="title description"><title id="title">우즈베키스탄과 타지키스탄 실제 좌표 기반 여행 경로 지도</title><desc id="description">Natural Earth 국가 경계 위에 타슈켄트, 우르겐치, 히바, 부하라, 사마르칸트, 펜지켄트, 판 산맥 7개 호수, 침간산과 차르박 호수 위치를 표시한 지도입니다. 도시 간 이동은 실선 화살표, 항공 이동은 점선 화살표입니다.</desc><defs><clipPath id="map-clip"><rect x="35" y="20" width="1050" height="600"/></clipPath><marker id="route-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 8 4 0 8Z" fill="#17665e"/></marker></defs><style>.map-grid{stroke:#c9c9bd;stroke-width:1;stroke-dasharray:2 5}.map-coordinate{fill:#666f68;font:12px Arial,sans-serif}.country{fill:#ddd9ca;stroke:#9ba095;stroke-width:1.35;stroke-linejoin:round}.country-journey{fill:#e6c9a8;stroke:#777f73;stroke-width:2}.route-land{fill:none;stroke:#17665e;stroke-width:4;stroke-linecap:round;stroke-linejoin:round}.route-air{fill:none;stroke:#bd6849;stroke-width:3.6;stroke-dasharray:9 8;stroke-linecap:round}.map-marker{cursor:pointer}.map-marker .map-hit-area{fill:transparent;stroke:transparent;stroke-width:1;pointer-events:all}.map-marker .map-marker-dot,.map-marker .map-marker-core{pointer-events:none}.map-marker .map-marker-dot{fill:#fff9eb;stroke:#17665e;stroke-width:3.5}.map-marker .map-marker-core{fill:#17665e;stroke:none}.map-marker:hover .map-marker-dot,.map-marker:focus .map-marker-dot{fill:#f2d5b2;stroke:#a34f36;stroke-width:4.5}.map-marker:focus{outline:none}.map-marker:focus .map-label-ko,.map-marker:focus .map-label-en{fill:#9d432e}.map-label-ko{fill:#203b36;font:bold 19px Arial,sans-serif;paint-order:stroke;stroke:#fffaf0;stroke-width:6;stroke-linejoin:round}.map-label-en{fill:#53645d;font:12px Arial,sans-serif;font-weight:600;letter-spacing:1px;paint-order:stroke;stroke:#fffaf0;stroke-width:4;stroke-linejoin:round}.map-country-labels{fill:#897d68;font:bold 14px Arial,sans-serif;letter-spacing:3px;opacity:.78}.map-north,.map-scale{fill:#56665e;stroke:#56665e;font:12px Arial,sans-serif;text-anchor:middle}.map-north path,.map-scale path{fill:none;stroke-width:2}.map-north text,.map-scale text{stroke:none}</style><rect width="1120" height="670" fill="#e9e7dc"/>${grid.join('')}<g clip-path="url(#map-clip)" fill-rule="evenodd">${countryPaths}</g><g class="map-routes">${routeMarkup(landRoutes, 'route-land')}${routeMarkup(airRoutes, 'route-air')}</g><g>${markers}</g><g class="map-country-labels"><text x="500" y="420">UZBEKISTAN</text><text x="700" y="515">TAJIKISTAN</text><text x="745" y="165">KYRGYZSTAN</text><text x="330" y="125">KAZAKHSTAN</text></g><g class="map-north"><path d="M1050 105V50m0 0-10 17m10-17 10 17"/><text x="1050" y="38">N</text></g><g class="map-scale"><path d="M810 610h94m-94-5v10m94-10v10"/><text x="857" y="603">약 200 km</text></g></svg>`;
writeFileSync(new URL('./img/central-asia-route.svg', import.meta.url), svg, 'utf8');
console.log(`Generated central-asia-route.svg from Natural Earth boundaries (${countries.length} countries).`);
