// Weather, geocoding and soil data service for SatYield / SmartKisan

const OPEN_METEO_GEOCODE = 'https://geocoding-api.open-meteo.com/v1/search';
const OPEN_METEO_WEATHER = 'https://api.open-meteo.com/v1/forecast';
const SOILGRIDS = 'https://rest.isric.org/soilgrids/v2.0/properties/query';

export const CITY_COORDS = {
  mumbai: { lat: 19.0760, lon: 72.8777, state: 'Maharashtra' },
  pune: { lat: 18.5204, lon: 73.8567, state: 'Maharashtra' },
  nagpur: { lat: 21.1458, lon: 79.0882, state: 'Maharashtra' },
  nashik: { lat: 19.9975, lon: 73.7898, state: 'Maharashtra' },
  aurangabad: { lat: 19.8762, lon: 75.3433, state: 'Maharashtra' },
  solapur: { lat: 17.6599, lon: 75.9064, state: 'Maharashtra' },
  amravati: { lat: 20.9333, lon: 77.7500, state: 'Maharashtra' },
  kolhapur: { lat: 16.7050, lon: 74.2433, state: 'Maharashtra' },
  bangalore: { lat: 12.9716, lon: 77.5946, state: 'Karnataka' },
  mysore: { lat: 12.2958, lon: 76.6394, state: 'Karnataka' },
  mangalore: { lat: 12.9141, lon: 74.8560, state: 'Karnataka' },
  hubli: { lat: 15.3647, lon: 75.1240, state: 'Karnataka' },
  chennai: { lat: 13.0827, lon: 80.2707, state: 'Tamil Nadu' },
  coimbatore: { lat: 11.0168, lon: 76.9558, state: 'Tamil Nadu' },
  madurai: { lat: 9.9252, lon: 78.1198, state: 'Tamil Nadu' },
  hyderabad: { lat: 17.3850, lon: 78.4867, state: 'Telangana' },
  visakhapatnam: { lat: 17.6868, lon: 83.2185, state: 'Andhra Pradesh' },
  vijayawada: { lat: 16.5062, lon: 80.6480, state: 'Andhra Pradesh' },
  ahmedabad: { lat: 23.0225, lon: 72.5714, state: 'Gujarat' },
  surat: { lat: 21.1702, lon: 72.8311, state: 'Gujarat' },
  vadodara: { lat: 22.3072, lon: 73.1812, state: 'Gujarat' },
  rajkot: { lat: 22.3039, lon: 70.8022, state: 'Gujarat' },
  jaipur: { lat: 26.9124, lon: 75.7873, state: 'Rajasthan' },
  jodhpur: { lat: 26.2389, lon: 73.0243, state: 'Rajasthan' },
  udaipur: { lat: 24.5854, lon: 73.7125, state: 'Rajasthan' },
  ludhiana: { lat: 30.9000, lon: 75.8573, state: 'Punjab' },
  amritsar: { lat: 31.6340, lon: 74.8723, state: 'Punjab' },
  lucknow: { lat: 26.8467, lon: 80.9462, state: 'Uttar Pradesh' },
  patna: { lat: 25.5941, lon: 85.1376, state: 'Bihar' },
  kolkata: { lat: 22.5726, lon: 88.3639, state: 'West Bengal' },
  bhopal: { lat: 23.2599, lon: 77.4126, state: 'Madhya Pradesh' },
  delhi: { lat: 28.6139, lon: 77.2090, state: 'Delhi' }
};

export const STATES_CITIES = {
  'Maharashtra': ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad', 'Solapur', 'Amravati', 'Kolhapur'],
  'Karnataka': ['Bangalore', 'Mysore', 'Mangalore', 'Hubli'],
  'Gujarat': ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot'],
  'Rajasthan': ['Jaipur', 'Jodhpur', 'Udaipur'],
  'Punjab': ['Ludhiana', 'Amritsar'],
  'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai'],
  'Telangana': ['Hyderabad'],
  'Andhra Pradesh': ['Visakhapatnam', 'Vijayawada'],
  'Uttar Pradesh': ['Lucknow'],
  'Madhya Pradesh': ['Bhopal'],
  'West Bengal': ['Kolkata'],
  'Bihar': ['Patna'],
  'Delhi': ['Delhi']
};

export async function geocodeCityState(city, state) {
  const normCity = (city || '').trim().toLowerCase();
  if (CITY_COORDS[normCity]) {
    return { lat: CITY_COORDS[normCity].lat, lon: CITY_COORDS[normCity].lon };
  }

  const query = encodeURIComponent(`${city || ''}, ${state || ''}, India`);
  const url = `${OPEN_METEO_GEOCODE}?name=${query}&count=1&language=en&format=json`;
  try {
    const res = await fetch(url, { headers: { Accept: 'application/json' } });
    const data = await res.json();
    if (data && Array.isArray(data.results) && data.results.length > 0) {
      return { lat: data.results[0].latitude, lon: data.results[0].longitude };
    }
  } catch (err) {
    console.warn('Geocoding API failed, falling back:', err);
  }
  return { lat: 21.1458, lon: 79.0882 }; // Nagpur center default
}

export async function fetchWeather(lat, lon) {
  const params = new URLSearchParams({
    latitude: String(lat),
    longitude: String(lon),
    current: 'temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m',
    daily: 'temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,weather_code',
    timezone: 'auto'
  });
  const url = `${OPEN_METEO_WEATHER}?${params.toString()}`;

  try {
    const res = await fetch(url, { headers: { Accept: 'application/json' } });
    if (!res.ok) throw new Error('Weather API HTTP error');
    const data = await res.json();
    const current = data.current || {};
    const daily = data.daily || {};

    return {
      temperature: Math.round(current.temperature_2m ?? 29),
      humidity: Math.round(current.relative_humidity_2m ?? 64),
      rainfall: current.precipitation ?? 1.2,
      windSpeed: Math.round(current.wind_speed_10m ?? 9),
      weatherCode: current.weather_code ?? 0,
      daily: daily
    };
  } catch (err) {
    console.warn('Weather fetch fallback triggered:', err);
    return {
      temperature: 28,
      humidity: 62,
      rainfall: 1.5,
      windSpeed: 8,
      weatherCode: 1,
      daily: {
        time: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        temperature_2m_max: [31, 32, 30, 29, 31, 33, 32],
        temperature_2m_min: [22, 23, 21, 20, 22, 23, 22],
        precipitation_sum: [0.5, 0.0, 4.2, 8.5, 1.2, 0.0, 0.2]
      }
    };
  }
}

export async function fetchSoil(lat, lon) {
  const params = new URLSearchParams({
    lat: String(lat),
    lon: String(lon),
    property: ['phh2o', 'soc'].join(','),
    depths: '0-5cm',
    value: 'mean'
  });
  const url = `${SOILGRIDS}?${params.toString()}`;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);
    const res = await fetch(url, { headers: { Accept: 'application/json' }, signal: controller.signal });
    clearTimeout(timeout);
    const data = await res.json();
    let ph = 6.8;
    let soc = 14;
    if (data && Array.isArray(data.properties)) {
      data.properties.forEach(p => {
        if (p.name === 'phh2o') {
          const val = p.layers?.[0]?.depths?.[0]?.values?.mean;
          if (val) ph = Number((val / 10).toFixed(1)); // SoilGrids pH is scaled by 10
        }
        if (p.name === 'soc') {
          const val = p.layers?.[0]?.depths?.[0]?.values?.mean;
          if (val) soc = Number((val / 10).toFixed(1));
        }
      });
    }
    return { ph, soc };
  } catch (_) {
    return { ph: 6.8, soc: 14 };
  }
}
