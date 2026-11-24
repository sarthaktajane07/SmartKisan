import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchWeather, fetchSoil, geocodeCityState } from '../services/api';

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [state, setState] = useState(() => localStorage.getItem('satyield_state') || 'Maharashtra');
  const [city, setCity] = useState(() => localStorage.getItem('satyield_city') || 'Nagpur');
  const [coords, setCoords] = useState({ lat: 21.1458, lon: 79.0882 });
  const [weather, setWeather] = useState({
    temperature: 29,
    humidity: 64,
    rainfall: 1.2,
    windSpeed: 9,
    weatherCode: 0,
    daily: {
      time: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      temperature_2m_max: [31, 32, 30, 29, 31, 33, 32],
      temperature_2m_min: [22, 23, 21, 20, 22, 23, 22],
      precipitation_sum: [0.5, 0.0, 4.2, 8.5, 1.2, 0.0, 0.2]
    }
  });
  const [soil, setSoil] = useState({ ph: 6.8, soc: 14 });
  const [loading, setLoading] = useState(false);

  const updateLocation = async (newState, newCity) => {
    setState(newState);
    setCity(newCity);
    localStorage.setItem('satyield_state', newState);
    localStorage.setItem('satyield_city', newCity);

    setLoading(true);
    try {
      const c = await geocodeCityState(newCity, newState);
      setCoords(c);
      const [w, s] = await Promise.all([
        fetchWeather(c.lat, c.lon),
        fetchSoil(c.lat, c.lon)
      ]);
      setWeather(w);
      setSoil(s);
    } catch (err) {
      console.error('Failed to load location data:', err);
    } finally {
      setLoading(false);
    }
  };

  const autoDetectLocation = () => {
    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;
          setCoords({ lat, lon });
          const [w, s] = await Promise.all([
            fetchWeather(lat, lon),
            fetchSoil(lat, lon)
          ]);
          setWeather(w);
          setSoil(s);
          setLoading(false);
        },
        (err) => {
          console.warn('Geolocation denied or unavailable:', err);
          setLoading(false);
        }
      );
    }
  };

  useEffect(() => {
    updateLocation(state, city);
  }, []);

  return (
    <LocationContext.Provider
      value={{
        state,
        city,
        coords,
        weather,
        soil,
        loading,
        updateLocation,
        autoDetectLocation
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => useContext(LocationContext);
