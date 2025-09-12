// Simple client-side data services for weather, geocoding, and soil metrics
// Exposes a global namespace: window.SYServices

(function () {
    const OPEN_METEO_GEOCODE = 'https://geocoding-api.open-meteo.com/v1/search';
    const OPEN_METEO_WEATHER = 'https://api.open-meteo.com/v1/forecast';
    // SoilGrids by ISRIC (public, but rate-limited). We'll fetch a small subset.
    const SOILGRIDS = 'https://rest.isric.org/soilgrids/v2.0/properties/query';

    async function geocodeCityState(city, state) {
        const name = encodeURIComponent(`${city}, ${state}, India`);
        const url = `${OPEN_METEO_GEOCODE}?name=${name}&count=1&language=en&format=json`;
        try {
            const res = await fetch(url, { headers: { 'Accept': 'application/json' } });
            const data = await res.json();
            if (data && Array.isArray(data.results) && data.results.length > 0) {
                const { latitude, longitude } = data.results[0];
                return { lat: latitude, lon: longitude };
            }
            throw new Error('No geocode result');
        } catch (_) {
            // Fallback for a few common cities
            const lower = (city || '').toLowerCase();
            const map = {
                mumbai: [19.076, 72.8777], pune: [18.5204, 73.8567], nagpur: [21.1458, 79.0882],
                delhi: [28.6139, 77.209], chennai: [13.0827, 80.2707], jaipur: [26.9124, 75.7873]
            };
            if (map[lower]) return { lat: map[lower][0], lon: map[lower][1] };
            // Default to Nagpur
            return { lat: 21.1458, lon: 79.0882 };
        }
    }

    async function fetchWeather(lat, lon) {
        const params = new URLSearchParams({
            latitude: String(lat),
            longitude: String(lon),
            current: 'temperature_2m,relative_humidity_2m,precipitation,wind_speed_10m',
            daily: 'temperature_2m_max,temperature_2m_min,precipitation_sum',
            timezone: 'auto'
        });
        const url = `${OPEN_METEO_WEATHER}?${params.toString()}`;
        try {
            const res = await fetch(url, { headers: { 'Accept': 'application/json' } });
            const data = await res.json();
            const current = data.current || {};
            const daily = data.daily || {};
            return {
                temperature: current.temperature_2m ?? 28,
                humidity: current.relative_humidity_2m ?? 65,
                rainfall: current.precipitation ?? 2,
                windSpeed: current.wind_speed_10m ?? 8,
                daily
            };
        } catch (_) {
            return { temperature: 28, humidity: 65, rainfall: 2, windSpeed: 8, daily: {} };
        }
    }

    // Soil metrics (very small subset): organic carbon and pH where available
    async function fetchSoil(lat, lon) {
        const params = new URLSearchParams({
            lat: String(lat),
            lon: String(lon),
            property: ['phh2o', 'soc'].join(','),
            depths: '0-5cm',
            value: 'mean'
        });
        const url = `${SOILGRIDS}?${params.toString()}`;
        try {
            const res = await fetch(url, { headers: { 'Accept': 'application/json' } });
            const data = await res.json();
            let ph = 6.8;
            let soc = 12; // g/kg
            if (data && Array.isArray(data.properties)) {
                data.properties.forEach(p => {
                    if (p.name === 'phh2o') ph = p.layers?.[0]?.depths?.[0]?.values?.mean ?? ph;
                    if (p.name === 'soc') soc = p.layers?.[0]?.depths?.[0]?.values?.mean ?? soc;
                });
            }
            return { ph, soc };
        } catch (_) {
            return { ph: 6.8, soc: 12 };
        }
    }

    window.SYServices = {
        geocodeCityState,
        fetchWeather,
        fetchSoil
    };
})();


