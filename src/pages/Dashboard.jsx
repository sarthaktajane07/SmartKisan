import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sprout,
  Cpu,
  Layers,
  CloudSun,
  Tractor,
  Award,
  TrendingUp,
  MapPin,
  Calendar,
  DollarSign,
  ArrowRight,
  Sparkles,
  Droplets,
  Wind,
  Thermometer,
  ShieldAlert
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useLocation } from '../context/LocationContext';
import { getRecommendedCrops } from '../services/cropData';

export default function Dashboard() {
  const { user } = useAuth();
  const { city, state, weather, soil } = useLocation();
  const [activeSeason, setActiveSeason] = useState('kharif');

  const recommendedCrops = getRecommendedCrops(city, activeSeason);

  const stats = [
    { title: 'Crops Analyzed', value: '14', change: '+3 this month', icon: Sprout, color: 'text-emerald-700 bg-emerald-100' },
    { title: 'AI Yield Simulations', value: '28', change: '94% high confidence', icon: Cpu, color: 'text-amber-700 bg-amber-100' },
    { title: 'Potential Savings & Gain', value: '₹54,200', change: 'Optimized inputs', icon: DollarSign, color: 'text-teal-700 bg-teal-100' },
    { title: 'Equipment Bookings', value: '2 Active', change: 'Mahindra 45HP Tractor', icon: Tractor, color: 'text-blue-700 bg-blue-100' }
  ];

  const tools = [
    { name: 'AI Yield Predictor', path: '/ai-yield', desc: 'Simulate crop yield, input cost, and expected profit.', icon: Cpu, badge: 'Smart AI' },
    { name: 'Crop Suggestions', path: '/crop-prediction', desc: 'Discover highest-paying crops for your micro-climate.', icon: Sprout, badge: 'Recommendations' },
    { name: 'Soil Scanner', path: '/soil-analysis', desc: 'Test N-P-K, pH levels, and get custom fertilizer dosages.', icon: Layers, badge: 'ISRIC SoilGrids' },
    { name: 'Weather & Climate', path: '/climate-insights', desc: '7-day precipitation forecasts and spray advisories.', icon: CloudSun, badge: 'Hourly Feeds' },
    { name: 'Rent Farm Equipment', path: '/rentals', desc: 'Rent tractors, harvesters, and tillers from local farmers.', icon: Tractor, badge: 'Save Capital' },
    { name: 'Farming Best Practices', path: '/guidance', desc: '6 phased stages of cultivation + government schemes.', icon: Award, badge: 'PM-KISAN' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-[#1B3B2F] via-[#23523B] to-[#2E4635] text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-amber-400/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-amber-400/30">
            <Sparkles size={13} /> Kisan Dashboard
          </div>
          <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
            Namaste, {user?.name || 'Farmer'}! 🌾
          </h1>
          <p className="text-emerald-100 text-sm max-w-xl">
            Live satellite and micro-climatic readings are active for your farm in <strong>{city}, {state}</strong>.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/city-selection"
            className="flex items-center gap-2 bg-emerald-900/80 hover:bg-emerald-800 text-white text-xs font-semibold px-4 py-2.5 rounded-xl border border-emerald-700 transition"
          >
            <MapPin size={14} className="text-amber-400" />
            <span>Change Location ({city})</span>
          </Link>
          <Link
            to="/ai-yield"
            className="flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-emerald-950 text-xs font-bold px-4 py-2.5 rounded-xl shadow transition"
          >
            <Cpu size={14} />
            <span>New Yield Prediction</span>
          </Link>
        </div>
      </div>

      {/* Top 4 Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div key={idx} className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-500">{s.title}</span>
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${s.color}`}>
                  <Icon size={18} />
                </div>
              </div>
              <div>
                <div className="font-heading text-2xl font-black text-gray-900">{s.value}</div>
                <div className="text-[11px] text-emerald-700 font-medium mt-0.5">{s.change}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Live Conditions Snapshot & Weather Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weather Snapshot */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 border border-gray-200/80 shadow-xs space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center">
                <CloudSun size={22} />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-gray-900">Current Field Conditions</h3>
                <p className="text-xs text-gray-500">Live Telemetry from Open-Meteo & SoilGrids</p>
              </div>
            </div>
            <Link to="/climate-insights" className="text-xs font-bold text-emerald-700 hover:underline">
              7-Day Forecast →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-100 text-center">
              <div className="flex items-center justify-center gap-1 text-emerald-800 text-xs font-semibold mb-1">
                <Thermometer size={14} /> Temp
              </div>
              <div className="font-heading text-2xl font-black text-emerald-950">{weather.temperature}°C</div>
              <div className="text-[11px] text-emerald-700">Optimal Growth</div>
            </div>

            <div className="bg-sky-50/70 p-4 rounded-2xl border border-sky-100 text-center">
              <div className="flex items-center justify-center gap-1 text-sky-800 text-xs font-semibold mb-1">
                <Droplets size={14} /> Humidity
              </div>
              <div className="font-heading text-2xl font-black text-sky-950">{weather.humidity}%</div>
              <div className="text-[11px] text-sky-700">Moderate</div>
            </div>

            <div className="bg-amber-50/70 p-4 rounded-2xl border border-amber-100 text-center">
              <div className="flex items-center justify-center gap-1 text-amber-800 text-xs font-semibold mb-1">
                <Wind size={14} /> Wind
              </div>
              <div className="font-heading text-2xl font-black text-amber-950">{weather.windSpeed} km/h</div>
              <div className="text-[11px] text-amber-700">Safe for Spraying</div>
            </div>

            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 text-center">
              <div className="flex items-center justify-center gap-1 text-stone-700 text-xs font-semibold mb-1">
                <Layers size={14} /> Soil pH
              </div>
              <div className="font-heading text-2xl font-black text-stone-900">{soil.ph}</div>
              <div className="text-[11px] text-stone-600">Neutral Balanced</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white p-4 rounded-2xl flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                <Sparkles size={13} /> Farming Advisory for {city}
              </div>
              <p className="text-xs text-emerald-100">
                Weather conditions are ideal for weed clearance and basal fertilizer application today.
              </p>
            </div>
            <Link
              to="/guidance"
              className="bg-white text-emerald-950 text-xs font-bold px-3 py-1.5 rounded-xl whitespace-nowrap hover:bg-amber-300 transition"
            >
              Read Guide
            </Link>
          </div>
        </div>

        {/* Quick Machinery Widget */}
        <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-xs space-y-4 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                  <Tractor size={18} />
                </div>
                <h3 className="font-heading font-bold text-gray-900">Equipment Rentals</h3>
              </div>
              <span className="text-[10px] bg-green-100 text-green-800 font-bold px-2 py-0.5 rounded-full">
                Nearby Verified
              </span>
            </div>
            <p className="text-xs text-gray-500">
              Need a tractor, rotary tiller or harvester for this week? Book directly from nearby verified owners.
            </p>
          </div>

          <div className="bg-gray-50 p-3 rounded-2xl border border-gray-100 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-gray-800">Mahindra 475 DI (45 HP)</span>
              <span className="font-extrabold text-emerald-700">₹650/hr</span>
            </div>
            <div className="text-[11px] text-gray-500">AgroHire • Available within 12 km</div>
          </div>

          <Link
            to="/rentals"
            className="w-full block text-center bg-gradient-to-r from-emerald-700 to-teal-800 hover:from-emerald-800 hover:to-teal-900 text-white font-bold py-2.5 rounded-xl text-xs transition shadow"
          >
            Browse All 12 Equipments →
          </Link>
        </div>
      </div>

      {/* Recommended Crops Snapshot */}
      <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-heading text-xl font-bold text-gray-900">
              Recommended Crops for {city}
            </h3>
            <p className="text-xs text-gray-500">
              Calculated using historical rainfall, soil suitability, and current mandi rates.
            </p>
          </div>

          {/* Season Switcher */}
          <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-xl self-start">
            {['kharif', 'rabi'].map((s) => (
              <button
                key={s}
                onClick={() => setActiveSeason(s)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold capitalize transition ${
                  activeSeason === s ? 'bg-emerald-700 text-white shadow' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {s} Season
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {recommendedCrops.slice(0, 3).map((crop) => (
            <div
              key={crop.id}
              className="bg-[#FAF9F5] rounded-2xl p-5 border border-emerald-100 hover:border-emerald-300 transition space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{crop.icon}</span>
                  <div>
                    <h4 className="font-heading font-bold text-gray-900 text-base">{crop.name}</h4>
                    <span className="text-[11px] text-gray-500">{crop.type}</span>
                  </div>
                </div>
                <span className="text-xs font-extrabold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                  {crop.profitability} Match
                </span>
              </div>

              <p className="text-xs text-gray-600 line-clamp-2">{crop.description}</p>

              <div className="pt-2 border-t border-gray-200/60 flex items-center justify-between text-xs">
                <div>
                  <span className="text-gray-400 block text-[10px]">Expected Yield</span>
                  <strong className="text-gray-800">{crop.yield}</strong>
                </div>
                <div className="text-right">
                  <span className="text-gray-400 block text-[10px]">Est. Profit / Acre</span>
                  <strong className="text-emerald-700 font-bold">₹{crop.profit.toLocaleString('en-IN')}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <Link
            to="/crop-prediction"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900"
          >
            <span>Open Interactive Crop Recommendation Engine</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Quick Launch Tool Suite */}
      <div className="space-y-4">
        <h3 className="font-heading text-xl font-bold text-gray-900">Smart Agri Tools</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tools.map((t, idx) => {
            const Icon = t.icon;
            return (
              <Link
                key={idx}
                to={t.path}
                className="group bg-white rounded-2xl p-5 border border-gray-200/80 hover:border-emerald-500 hover:shadow-lg transition-all duration-200 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-700 group-hover:text-white transition duration-200">
                  <Icon size={22} />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-heading font-bold text-gray-900 text-sm group-hover:text-emerald-700">
                      {t.name}
                    </h4>
                    <span className="text-[9px] font-bold uppercase tracking-wider bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded">
                      {t.badge}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{t.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
