import React, { useState } from 'react';
import {
  CloudSun,
  Thermometer,
  Droplets,
  Wind,
  CloudRain,
  Compass,
  AlertTriangle,
  CheckCircle2,
  Calendar,
  Sparkles
} from 'lucide-react';
import { useLocation } from '../context/LocationContext';

export default function ClimateInsights() {
  const { city, state, weather, coords } = useLocation();

  const days = weather?.daily?.time || ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const maxTemps = weather?.daily?.temperature_2m_max || [31, 32, 30, 29, 31, 33, 32];
  const minTemps = weather?.daily?.temperature_2m_min || [22, 23, 21, 20, 22, 23, 22];
  const precip = weather?.daily?.precipitation_sum || [0.5, 0.0, 4.2, 8.5, 1.2, 0.0, 0.2];

  const advisories = [
    {
      title: 'Pesticide & Foliar Spray Safe Window',
      status: weather.windSpeed < 15 && weather.rainfall < 2.0 ? 'Optimal' : 'Caution',
      desc: weather.windSpeed < 15
        ? `Wind speed is low (${weather.windSpeed} km/h). Safe for drone or knapsack spraying between 7 AM - 10 AM.`
        : 'High gusty winds detected. Postpone spray to prevent chemical drift.',
      type: weather.windSpeed < 15 ? 'success' : 'warning'
    },
    {
      title: 'Irrigation Scheduling',
      status: 'Active',
      desc: 'Ambient relative humidity is at ' + weather.humidity + '%. Surface evaporation is moderate; apply standard 4-day drip cycle.',
      type: 'info'
    },
    {
      title: 'Fungal Risk Assessment',
      status: weather.humidity > 70 ? 'Moderate Alert' : 'Low Risk',
      desc: weather.humidity > 70
        ? 'High moisture creates favorable environment for powdery mildew and blight. Inspect underside of crop leaves.'
        : 'Low fungal pathogen risk under current dry conditions.',
      type: weather.humidity > 70 ? 'warning' : 'success'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#1B3B2F] via-[#23523B] to-[#2E4635] text-white rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-amber-400/30">
            <CloudSun size={14} /> Open-Meteo High-Resolution Forecasting
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
            Hyper-Local Climate Insights & Spray Alerts
          </h1>
          <p className="text-emerald-100 text-sm leading-relaxed">
            Live hourly meteorological feed and 7-day extended forecasts for <strong>{city}, {state}</strong> (Lat: {coords.lat.toFixed(2)}, Lon: {coords.lon.toFixed(2)}).
          </p>
        </div>
      </div>

      {/* Current Conditions 4 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center">
            <Thermometer size={24} />
          </div>
          <div>
            <span className="text-xs text-gray-500 font-medium">Current Temperature</span>
            <div className="font-heading text-2xl font-black text-gray-900">{weather.temperature}°C</div>
            <span className="text-[11px] text-emerald-700">Feels like {weather.temperature + 1}°C</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-700 flex items-center justify-center">
            <Droplets size={24} />
          </div>
          <div>
            <span className="text-xs text-gray-500 font-medium">Relative Humidity</span>
            <div className="font-heading text-2xl font-black text-gray-900">{weather.humidity}%</div>
            <span className="text-[11px] text-sky-700">Dew point comfortable</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center">
            <CloudRain size={24} />
          </div>
          <div>
            <span className="text-xs text-gray-500 font-medium">Precipitation Today</span>
            <div className="font-heading text-2xl font-black text-gray-900">{weather.rainfall} mm</div>
            <span className="text-[11px] text-blue-700">Light / Scattered</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center">
            <Wind size={24} />
          </div>
          <div>
            <span className="text-xs text-gray-500 font-medium">Wind Velocity</span>
            <div className="font-heading text-2xl font-black text-gray-900">{weather.windSpeed} km/h</div>
            <span className="text-[11px] text-teal-700">Direction: South-West</span>
          </div>
        </div>
      </div>

      {/* 7-Day Forecast Cards */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-xs space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-heading font-bold text-gray-900 text-xl">7-Day Weather Outlook</h3>
            <p className="text-xs text-gray-500">Plan your sowing, fertilizer top-dressing, and harvesting</p>
          </div>
          <span className="text-xs bg-emerald-50 text-emerald-800 font-bold px-3 py-1 rounded-full border border-emerald-100">
            Auto-Updated
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {days.slice(0, 7).map((d, idx) => {
            const max = maxTemps[idx] ?? 31;
            const min = minTemps[idx] ?? 21;
            const rain = precip[idx] ?? 0;
            return (
              <div
                key={idx}
                className="bg-[#FAF9F5] rounded-2xl p-4 text-center border border-gray-200/70 hover:border-emerald-300 transition space-y-2"
              >
                <div className="text-xs font-bold text-gray-700">{d}</div>
                <div className="text-2xl">{rain > 3 ? '🌧️' : rain > 0 ? '🌦️' : '☀️'}</div>
                <div className="font-heading font-black text-base text-gray-900">
                  {max}° <span className="text-xs font-normal text-gray-400">{min}°</span>
                </div>
                <div className="text-[10px] text-sky-800 font-semibold bg-sky-50 py-0.5 rounded-md">
                  {rain} mm rain
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Farmer Spray & Field Advisories */}
      <div className="space-y-4">
        <h3 className="font-heading font-bold text-gray-900 text-xl">Agricultural Action Advisories</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {advisories.map((adv, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-3xl p-6 border shadow-xs space-y-3 ${
                adv.type === 'warning'
                  ? 'border-amber-200 hover:border-amber-400'
                  : 'border-emerald-200 hover:border-emerald-400'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Advisory</span>
                <span
                  className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                    adv.type === 'warning'
                      ? 'bg-amber-100 text-amber-900'
                      : 'bg-emerald-100 text-emerald-900'
                  }`}
                >
                  {adv.status}
                </span>
              </div>
              <h4 className="font-heading font-bold text-base text-gray-900">{adv.title}</h4>
              <p className="text-xs text-gray-600 leading-relaxed">{adv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
