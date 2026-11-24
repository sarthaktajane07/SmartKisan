import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Navigation, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { useLocation } from '../context/LocationContext';
import { STATES_CITIES } from '../services/api';

export default function CitySelection() {
  const { state: currentState, city: currentCity, updateLocation, autoDetectLocation, loading } = useLocation();
  const navigate = useNavigate();

  const [selState, setSelState] = useState(currentState || 'Maharashtra');
  const [selCity, setSelCity] = useState(currentCity || 'Nagpur');

  const availableCities = STATES_CITIES[selState] || ['Nagpur', 'Pune', 'Mumbai'];

  const handleSave = async () => {
    await updateLocation(selState, selCity);
    navigate('/dashboard');
  };

  const handleGps = () => {
    autoDetectLocation();
    setTimeout(() => {
      navigate('/dashboard');
    }, 1200);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <div className="bg-gradient-to-r from-[#1B3B2F] via-[#23523B] to-[#2E4635] text-white rounded-3xl p-6 sm:p-10 shadow-xl text-center space-y-3">
        <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-amber-400/30">
          <MapPin size={14} /> Location Intelligence
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
          Pick Your Farming Location
        </h1>
        <p className="text-emerald-100 text-sm max-w-lg mx-auto">
          Weather telemetry, crop calendars, SoilGrids chemical parameters, and equipment rentals are synchronized to your designated district.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-emerald-950 flex items-center justify-center text-xl font-bold">
              📍
            </div>
            <div>
              <span className="text-xs text-gray-400">Current Saved City</span>
              <div className="font-heading font-extrabold text-xl text-gray-900">
                {currentCity}, {currentState}
              </div>
            </div>
          </div>

          <button
            onClick={handleGps}
            disabled={loading}
            className="flex items-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold px-4 py-2.5 rounded-xl text-xs border border-emerald-200 transition"
          >
            <Navigation size={14} />
            <span>{loading ? 'Detecting via GPS...' : 'Auto-Detect via GPS'}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* State selector */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-gray-700">State / Province</label>
            <select
              value={selState}
              onChange={(e) => {
                const s = e.target.value;
                setSelState(s);
                const firstCity = STATES_CITIES[s]?.[0] || '';
                setSelCity(firstCity);
              }}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-600"
            >
              {Object.keys(STATES_CITIES).map((st) => (
                <option key={st} value={st}>{st}</option>
              ))}
            </select>
          </div>

          {/* City selector */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-gray-700">City / District</label>
            <select
              value={selCity}
              onChange={(e) => setSelCity(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-600"
            >
              {availableCities.map((ct) => (
                <option key={ct} value={ct}>{ct}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Quick popular cities shortcuts */}
        <div className="space-y-2 pt-2">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
            Popular Agricultural Centers:
          </span>
          <div className="flex flex-wrap gap-2">
            {[
              { s: 'Maharashtra', c: 'Nagpur' },
              { s: 'Maharashtra', c: 'Pune' },
              { s: 'Punjab', c: 'Ludhiana' },
              { s: 'Karnataka', c: 'Bangalore' },
              { s: 'Gujarat', c: 'Ahmedabad' },
              { s: 'Rajasthan', c: 'Jaipur' }
            ].map((p, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setSelState(p.s);
                  setSelCity(p.c);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition ${
                  selCity === p.c && selState === p.s
                    ? 'bg-emerald-700 text-white border-emerald-700 font-bold'
                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                }`}
              >
                {p.c} ({p.s})
              </button>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100">
          <button
            onClick={handleSave}
            disabled={loading}
            className="w-full bg-gradient-to-r from-emerald-700 to-teal-800 hover:from-emerald-800 hover:to-teal-900 text-white font-bold py-3.5 rounded-2xl shadow-lg transition flex items-center justify-center gap-2 text-sm"
          >
            <span>Confirm & Open Kisan Dashboard</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
