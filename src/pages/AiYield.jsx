import React, { useState, useEffect } from 'react';
import {
  Cpu,
  Sparkles,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  Layers,
  Thermometer,
  Droplets,
  Wind,
  DollarSign,
  ArrowRight,
  Info
} from 'lucide-react';
import { useLocation } from '../context/LocationContext';
import { predictYield } from '../services/aiEngine';
import { STATES_CITIES } from '../services/api';

const CROPS = [
  'Rice',
  'Wheat',
  'Soybean',
  'Maize',
  'Cotton',
  'Sugarcane',
  'Chickpea',
  'Mustard',
  'Groundnut'
];

export default function AiYield() {
  const { city: defaultCity, state: defaultState, weather, soil } = useLocation();

  const [selectedState, setSelectedState] = useState(defaultState || 'Maharashtra');
  const [selectedCity, setSelectedCity] = useState(defaultCity || 'Nagpur');
  const [selectedCrop, setSelectedCrop] = useState('Soybean');
  const [area, setArea] = useState(3.0);
  const [unit, setUnit] = useState('acres');
  const [isPredicting, setIsPredicting] = useState(false);
  const [results, setResults] = useState(null);

  // Run initial prediction once mounted
  useEffect(() => {
    handlePredict();
  }, []);

  const handlePredict = () => {
    setIsPredicting(true);
    setTimeout(() => {
      const res = predictYield({
        crop: selectedCrop,
        area: Number(area) || 1,
        unit,
        weather,
        soil
      });
      setResults(res);
      setIsPredicting(false);
    }, 400);
  };

  const citiesForState = STATES_CITIES[selectedState] || ['Nagpur', 'Pune', 'Mumbai'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#1B3B2F] via-[#23523B] to-[#2E4635] text-white rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-amber-400/30">
            <Cpu size={14} /> SatYield Heuristic Engine v2.0
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
            AI Crop Yield & Profit Predictor
          </h1>
          <p className="text-emerald-100 text-sm leading-relaxed">
            Combines satellite environmental indicators, SoilGrids organic metrics, and Open-Meteo micro-forecasts to accurately estimate harvest tonnage, input costs, and net farmer profitability.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Form: Parameters */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-gray-200/80 shadow-xs space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <h3 className="font-heading font-bold text-gray-900 text-lg flex items-center gap-2">
              <Sparkles size={18} className="text-amber-500" /> Farm Parameters
            </h3>
            <span className="text-xs text-gray-400">Step 1 of 2</span>
          </div>

          <div className="space-y-4">
            {/* State & City */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">State</label>
                <select
                  value={selectedState}
                  onChange={(e) => {
                    const st = e.target.value;
                    setSelectedState(st);
                    const defaultC = STATES_CITIES[st]?.[0] || '';
                    setSelectedCity(defaultC);
                  }}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-600"
                >
                  {Object.keys(STATES_CITIES).map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">City</label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-600"
                >
                  {citiesForState.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Crop Selector */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1.5">Select Crop</label>
              <select
                value={selectedCrop}
                onChange={(e) => setSelectedCrop(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-emerald-600"
              >
                {CROPS.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Area & Unit */}
            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-2">
                <label className="block text-xs font-bold text-gray-700 mb-1.5">Cultivated Land Area</label>
                <input
                  type="number"
                  min="0.25"
                  step="0.25"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  placeholder="e.g. 2.5"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">Unit</label>
                <select
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-600"
                >
                  <option value="acres">Acres</option>
                  <option value="hectares">Hectares</option>
                </select>
              </div>
            </div>
          </div>

          {/* Active Environmental Metrics Readout */}
          <div className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-100 space-y-2">
            <span className="text-[11px] font-bold text-emerald-900 uppercase tracking-wider block">
              Auto-Loaded Environmental Feeds:
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs text-emerald-950 font-medium">
              <div className="flex items-center gap-1.5">
                <Thermometer size={14} className="text-emerald-700" />
                <span>Temp: <strong>{weather.temperature}°C</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <Droplets size={14} className="text-sky-700" />
                <span>Humidity: <strong>{weather.humidity}%</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <Layers size={14} className="text-stone-700" />
                <span>Soil pH: <strong>{soil.ph}</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <Wind size={14} className="text-amber-700" />
                <span>Rainfall: <strong>{weather.rainfall} mm</strong></span>
              </div>
            </div>
          </div>

          <button
            onClick={handlePredict}
            disabled={isPredicting}
            className="w-full bg-gradient-to-r from-emerald-700 to-teal-800 hover:from-emerald-800 hover:to-teal-900 text-white font-bold py-3.5 rounded-2xl shadow-lg transition flex items-center justify-center gap-2"
          >
            <Cpu size={18} />
            <span>{isPredicting ? 'Calculating Yield Metrics...' : 'Calculate AI Yield & Profit'}</span>
          </button>
        </div>

        {/* Right Column: AI Output Dashboard */}
        <div className="lg:col-span-7 space-y-6">
          {results && (
            <>
              {/* Summary Scorecard */}
              <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-xs space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <div>
                    <span className="text-xs text-gray-400">Prediction Results for</span>
                    <h2 className="font-heading text-2xl font-black text-gray-900">
                      {results.crop} ({results.area} {results.unit})
                    </h2>
                  </div>
                  <div className="text-right">
                    <span className="text-xs bg-emerald-100 text-emerald-900 font-extrabold px-3 py-1 rounded-full">
                      {results.confidence}% Confidence
                    </span>
                    <span className="block text-[11px] text-gray-400 mt-1">
                      Risk: <strong className="text-emerald-700">{results.riskLevel}</strong>
                    </span>
                  </div>
                </div>

                {/* 3 Metric Highlighters */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-[#FAF9F5] p-4 rounded-2xl border border-emerald-100">
                    <span className="text-xs text-gray-500 block">Total Expected Harvest</span>
                    <div className="font-heading text-2xl font-black text-emerald-900 mt-1">
                      {results.totalYield} <span className="text-sm font-semibold">Tons</span>
                    </div>
                    <span className="text-[11px] text-gray-500">
                      ~{results.yieldPerAcre} tons/acre
                    </span>
                  </div>

                  <div className="bg-[#FAF9F5] p-4 rounded-2xl border border-emerald-100">
                    <span className="text-xs text-gray-500 block">Est. Gross Revenue</span>
                    <div className="font-heading text-2xl font-black text-gray-900 mt-1">
                      ₹{results.grossRevenue.toLocaleString('en-IN')}
                    </div>
                    <span className="text-[11px] text-gray-500">Based on mandi MSP</span>
                  </div>

                  <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-200">
                    <span className="text-xs text-emerald-800 font-bold block">Est. Net Profit</span>
                    <div className="font-heading text-2xl font-black text-emerald-800 mt-1">
                      ₹{results.estimatedProfit.toLocaleString('en-IN')}
                    </div>
                    <span className="text-[11px] text-emerald-700">After operational input cost</span>
                  </div>
                </div>
              </div>

              {/* Actionable Recommendations List */}
              <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-xs space-y-4">
                <h3 className="font-heading text-lg font-bold text-gray-900 flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-emerald-600" /> Actionable Agronomic Recommendations
                </h3>

                <div className="space-y-3">
                  {results.recommendations.map((tip, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-2xl border flex items-start gap-3 ${
                        tip.type === 'alert'
                          ? 'bg-red-50/70 border-red-200 text-red-950'
                          : tip.type === 'warning'
                          ? 'bg-amber-50/70 border-amber-200 text-amber-950'
                          : tip.type === 'success'
                          ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                          : 'bg-blue-50/70 border-blue-200 text-blue-950'
                      }`}
                    >
                      <div className="w-2 h-2 rounded-full bg-current mt-1.5 flex-shrink-0" />
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider opacity-80 mb-0.5">
                          {tip.category}
                        </div>
                        <p className="text-xs sm:text-sm leading-relaxed">{tip.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
