import React, { useState } from 'react';
import {
  Sprout,
  Filter,
  CheckCircle2,
  TrendingUp,
  DollarSign,
  Droplets,
  Calendar,
  Layers,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useLocation } from '../context/LocationContext';
import { getRecommendedCrops } from '../services/cropData';
import { STATES_CITIES } from '../services/api';

export default function CropPrediction() {
  const { city, state } = useLocation();

  const [selectedSeason, setSelectedSeason] = useState('kharif');
  const [selectedCity, setSelectedCity] = useState(city.toLowerCase());
  const [selectedSoil, setSelectedSoil] = useState('all');
  const [nitrogen, setNitrogen] = useState(80);
  const [phosphorus, setPhosphorus] = useState(45);
  const [potassium, setPotassium] = useState(40);
  const [ph, setPh] = useState(6.8);

  const crops = getRecommendedCrops(selectedCity, selectedSeason);

  const filteredCrops = crops.filter(c => {
    if (selectedSoil === 'all') return true;
    return c.suitableSoil.toLowerCase().includes(selectedSoil.toLowerCase());
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#1B3B2F] via-[#23523B] to-[#2E4635] text-white rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-amber-400/30">
            <Sparkles size={14} /> Smart Crop Advisory Engine
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
            Crop Recommendations & Profit Analyzer
          </h1>
          <p className="text-emerald-100 text-sm leading-relaxed">
            Select your agronomic parameters, soil nutrient balance, and cultivation season to discover high-yield, disease-resistant crops tailored for your acreage.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Controls Sidebar */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-gray-200/80 shadow-xs space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <h3 className="font-heading font-bold text-gray-900 text-base flex items-center gap-2">
              <Filter size={18} className="text-emerald-700" /> Filter Criteria
            </h3>
            <span className="text-xs text-gray-400">Custom Sliders</span>
          </div>

          <div className="space-y-4">
            {/* Season */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1.5">Season</label>
              <div className="grid grid-cols-2 gap-2">
                {['kharif', 'rabi'].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSelectedSeason(s)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold capitalize transition border ${
                      selectedSeason === s
                        ? 'bg-emerald-700 text-white border-emerald-700 shadow-sm'
                        : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    {s} (Monsoon/Winter)
                  </button>
                ))}
              </div>
            </div>

            {/* City */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1.5">Region</label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-emerald-600"
              >
                <option value="nagpur">Nagpur (Vidarbha)</option>
                <option value="mumbai">Mumbai (Coastal)</option>
                <option value="pune">Pune (Western Ghats)</option>
              </select>
            </div>

            {/* Soil Type Filter */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1.5">Soil Type</label>
              <select
                value={selectedSoil}
                onChange={(e) => setSelectedSoil(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-600"
              >
                <option value="all">All Soils</option>
                <option value="black">Black Cotton Soil</option>
                <option value="loam">Loamy Soil</option>
                <option value="clay">Clay Soil</option>
                <option value="sandy">Sandy Loam</option>
              </select>
            </div>

            {/* Nutrient Sliders */}
            <div className="pt-2 border-t border-gray-100 space-y-3">
              <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">
                Soil N-P-K Nutrients (kg/ha)
              </span>

              <div>
                <div className="flex justify-between text-xs font-semibold text-gray-700 mb-1">
                  <span>Nitrogen (N)</span>
                  <span className="text-emerald-700 font-bold">{nitrogen} kg/ha</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="180"
                  value={nitrogen}
                  onChange={(e) => setNitrogen(Number(e.target.value))}
                  className="w-full accent-emerald-700"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-gray-700 mb-1">
                  <span>Phosphorus (P)</span>
                  <span className="text-emerald-700 font-bold">{phosphorus} kg/ha</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={phosphorus}
                  onChange={(e) => setPhosphorus(Number(e.target.value))}
                  className="w-full accent-emerald-700"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-gray-700 mb-1">
                  <span>Potassium (K)</span>
                  <span className="text-emerald-700 font-bold">{potassium} kg/ha</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={potassium}
                  onChange={(e) => setPotassium(Number(e.target.value))}
                  className="w-full accent-emerald-700"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-gray-700 mb-1">
                  <span>Soil pH Level</span>
                  <span className="text-emerald-700 font-bold">{ph}</span>
                </div>
                <input
                  type="range"
                  min="5.0"
                  max="9.0"
                  step="0.1"
                  value={ph}
                  onChange={(e) => setPh(Number(e.target.value))}
                  className="w-full accent-emerald-700"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Crops Output Cards */}
        <div className="lg:col-span-8 space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="font-heading font-bold text-gray-900 text-xl">
              Matching Crops ({filteredCrops.length})
            </h3>
            <span className="text-xs text-gray-500">
              Sorted by profitability & climatic suitability
            </span>
          </div>

          <div className="space-y-4">
            {filteredCrops.map((crop) => (
              <div
                key={crop.id}
                className="bg-white rounded-3xl p-6 border border-gray-200/80 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 space-y-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-14 h-14 rounded-2xl bg-amber-50 text-emerald-950 flex items-center justify-center text-3xl shadow-xs border border-amber-200/60">
                      {crop.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-heading font-extrabold text-xl text-gray-900">{crop.name}</h4>
                        <span className="text-[11px] font-bold bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">
                          {crop.type}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Duration: <strong>{crop.growthDuration}</strong> • Water: <strong>{crop.waterReq}</strong>
                      </p>
                    </div>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="text-xs bg-emerald-100 text-emerald-900 font-extrabold px-3 py-1 rounded-full">
                      {crop.profitability} Suitability
                    </span>
                    <div className="text-emerald-700 font-black text-lg mt-1">
                      ₹{crop.profit.toLocaleString('en-IN')}{' '}
                      <span className="text-xs font-normal text-gray-500">net/acre</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {crop.description}
                </p>

                {/* Features & Soil suitability tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-[11px] font-semibold bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full border border-emerald-100">
                    🌱 Soil: {crop.suitableSoil}
                  </span>
                  {crop.features.map((f, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-medium bg-gray-50 text-gray-700 px-3 py-1 rounded-full border border-gray-200/70"
                    >
                      ✓ {f}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="text-gray-500">
                    Est. Yield: <strong className="text-gray-800">{crop.yield}</strong>
                  </span>
                  <a
                    href="/ai-yield"
                    className="font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1"
                  >
                    Simulate Full Economics with AI →
                  </a>
                </div>
              </div>
            ))}

            {filteredCrops.length === 0 && (
              <div className="bg-white rounded-3xl p-12 text-center text-gray-500 space-y-2 border border-gray-200">
                <p className="text-lg font-bold text-gray-700">No matching crops for this filter combination.</p>
                <p className="text-xs">Try selecting 'All Soils' or changing the season tab above.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
