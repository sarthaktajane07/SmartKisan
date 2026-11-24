import React, { useState } from 'react';
import {
  Layers,
  FlaskConical,
  CheckCircle2,
  AlertTriangle,
  Upload,
  ArrowRight,
  Sparkles,
  Droplets,
  Sprout
} from 'lucide-react';
import { useLocation } from '../context/LocationContext';
import { SOIL_DATABASE } from '../services/soilData';

export default function SoilAnalysis() {
  const { soil: liveSoil, city } = useLocation();

  const [activeSoilId, setActiveSoilId] = useState('black');
  const [phInput, setPhInput] = useState(liveSoil.ph || 6.8);
  const [organicCarbon, setOrganicCarbon] = useState(liveSoil.soc || 14);
  const [nitrogenStatus, setNitrogenStatus] = useState('Medium');
  const [phosphorusStatus, setPhosphorusStatus] = useState('High');
  const [potassiumStatus, setPotassiumStatus] = useState('High');
  const [analyzed, setAnalyzed] = useState(true);

  const selectedSoil = SOIL_DATABASE[activeSoilId] || SOIL_DATABASE.black;

  const handleRunAnalysis = () => {
    setAnalyzed(false);
    setTimeout(() => {
      setAnalyzed(true);
    }, 300);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#1B3B2F] via-[#23523B] to-[#2E4635] text-white rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-amber-400/30">
            <FlaskConical size={14} /> ISRIC SoilGrids Integration
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
            Precision Soil Scanner & Health Analysis
          </h1>
          <p className="text-emerald-100 text-sm leading-relaxed">
            Assess soil structural porosity, nutrient saturation (N-P-K), pH balance, and organic carbon density. Receive customized organic amendment recommendations.
          </p>
        </div>
      </div>

      {/* Soil Type Selection Tabs */}
      <div className="space-y-3">
        <h3 className="font-heading font-bold text-gray-900 text-base">Select Soil Classification</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {Object.keys(SOIL_DATABASE).map((key) => {
            const s = SOIL_DATABASE[key];
            const active = activeSoilId === key;
            return (
              <button
                key={key}
                onClick={() => setActiveSoilId(key)}
                className={`p-4 rounded-2xl text-left border transition-all duration-200 ${
                  active
                    ? 'bg-emerald-800 text-white border-emerald-800 shadow-md scale-102'
                    : 'bg-white text-gray-800 border-gray-200/80 hover:border-emerald-300 hover:bg-emerald-50/40'
                }`}
              >
                <div className="text-xl mb-1">🌱</div>
                <div className="font-heading font-bold text-sm truncate">{s.name.split('(')[0]}</div>
                <div className={`text-[10px] mt-0.5 truncate ${active ? 'text-amber-200' : 'text-gray-400'}`}>
                  pH: {s.properties.ph}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Card: Soil Detail Breakdown */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-xs space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-gray-100">
            <div>
              <span className="text-xs text-gray-400">Classified Profile</span>
              <h2 className="font-heading text-2xl font-black text-gray-900">{selectedSoil.name}</h2>
            </div>
            <span className="text-xs bg-emerald-100 text-emerald-900 font-extrabold px-3 py-1 rounded-full">
              {selectedSoil.properties.nutrients} Fertility
            </span>
          </div>

          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            {selectedSoil.description}
          </p>

          {/* Key Properties Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-[#FAF9F5] p-3 rounded-2xl border border-gray-200/60 text-center">
              <span className="text-[10px] text-gray-500 uppercase font-bold block">Typical pH</span>
              <span className="font-heading font-black text-base text-gray-900">{selectedSoil.properties.ph}</span>
            </div>
            <div className="bg-[#FAF9F5] p-3 rounded-2xl border border-gray-200/60 text-center">
              <span className="text-[10px] text-gray-500 uppercase font-bold block">Drainage</span>
              <span className="font-heading font-black text-base text-gray-900">{selectedSoil.properties.drainage}</span>
            </div>
            <div className="bg-[#FAF9F5] p-3 rounded-2xl border border-gray-200/60 text-center">
              <span className="text-[10px] text-gray-500 uppercase font-bold block">Texture</span>
              <span className="font-heading font-black text-base text-gray-900">{selectedSoil.properties.texture}</span>
            </div>
            <div className="bg-[#FAF9F5] p-3 rounded-2xl border border-gray-200/60 text-center">
              <span className="text-[10px] text-gray-500 uppercase font-bold block">Organic Matter</span>
              <span className="font-heading font-black text-base text-gray-900">{selectedSoil.properties.organicMatter}</span>
            </div>
          </div>

          {/* Most Compatible Crops */}
          <div className="space-y-3 pt-2">
            <h4 className="font-heading font-bold text-gray-900 text-sm">
              Highly Compatible Crops for this Soil:
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {selectedSoil.crops.map((c, i) => (
                <div key={i} className="bg-emerald-50/60 p-3 rounded-2xl border border-emerald-100 text-center space-y-1">
                  <div className="text-2xl">{c.icon}</div>
                  <div className="font-bold text-xs text-gray-900">{c.name}</div>
                  <div className="text-[10px] text-emerald-800 font-extrabold">{c.suitability} Fit</div>
                </div>
              ))}
            </div>
          </div>

          {/* Soil Management & Organic Tips */}
          <div className="space-y-3 pt-2">
            <h4 className="font-heading font-bold text-gray-900 text-sm flex items-center gap-1.5">
              <Sparkles size={16} className="text-amber-500" /> Soil Health Improvement Guidelines
            </h4>
            <div className="space-y-2">
              {selectedSoil.managementTips.map((tip, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-700 bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <CheckCircle2 size={15} className="text-emerald-700 flex-shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Form: Interactive Lab Test Simulator */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-gray-200/80 shadow-xs space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <h3 className="font-heading font-bold text-gray-900 text-base flex items-center gap-2">
              <FlaskConical size={18} className="text-amber-500" /> Test Report Simulator
            </h3>
            <span className="text-xs text-gray-400">Field Sample</span>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs font-semibold text-gray-700 mb-1">
                <span>Soil pH Value</span>
                <span className="text-emerald-700 font-bold">{phInput}</span>
              </div>
              <input
                type="range"
                min="4.5"
                max="9.0"
                step="0.1"
                value={phInput}
                onChange={(e) => setPhInput(Number(e.target.value))}
                className="w-full accent-emerald-700"
              />
              <div className="flex justify-between text-[10px] text-gray-400">
                <span>Acidic (&lt;6.0)</span>
                <span>Optimal (6.5-7.5)</span>
                <span>Alkaline (&gt;8.0)</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold text-gray-700 mb-1">
                <span>Organic Carbon (SOC)</span>
                <span className="text-emerald-700 font-bold">{organicCarbon} g/kg</span>
              </div>
              <input
                type="range"
                min="5"
                max="25"
                value={organicCarbon}
                onChange={(e) => setOrganicCarbon(Number(e.target.value))}
                className="w-full accent-emerald-700"
              />
            </div>

            <div className="grid grid-cols-3 gap-2 pt-2">
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1">Nitrogen (N)</label>
                <select
                  value={nitrogenStatus}
                  onChange={(e) => setNitrogenStatus(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-2 py-1.5 text-xs font-semibold"
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1">Phosphorus (P)</label>
                <select
                  value={phosphorusStatus}
                  onChange={(e) => setPhosphorusStatus(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-2 py-1.5 text-xs font-semibold"
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1">Potassium (K)</label>
                <select
                  value={potassiumStatus}
                  onChange={(e) => setPotassiumStatus(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-2 py-1.5 text-xs font-semibold"
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>
            </div>

            {/* Instant Fertilizer Prescription */}
            <div className="bg-[#FAF9F5] p-4 rounded-2xl border border-emerald-100 space-y-2 mt-4">
              <span className="text-xs font-bold text-emerald-950 uppercase tracking-wider block">
                Prescribed Fertilizer Dose:
              </span>
              <ul className="text-xs text-gray-700 space-y-1.5 list-disc pl-4">
                <li>
                  {nitrogenStatus === 'Low' ? 'Apply Urea 65 kg/acre in 2 splits.' : 'Standard basal Nitrogen sufficient.'}
                </li>
                <li>
                  {phosphorusStatus === 'Low' ? 'Apply SSP (Single Super Phosphate) 100 kg/acre.' : 'DAP at 35 kg/acre recommended.'}
                </li>
                <li>
                  {potassiumStatus === 'Low' ? 'Apply MOP (Muriate of Potash) 25 kg/acre for root strength.' : 'Maintain current potassium reserve.'}
                </li>
                <li>
                  {phInput < 6.2 ? 'Add 250 kg agricultural dolomite lime to raise pH.' : phInput > 7.8 ? 'Add 150 kg gypsum or sulfur to reduce alkalinity.' : 'pH balance is pristine!'}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
