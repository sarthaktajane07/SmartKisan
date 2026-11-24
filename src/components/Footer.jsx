import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Phone, Mail, MapPin, ExternalLink, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#142B22] text-gray-300 pt-16 pb-10 border-t border-emerald-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-emerald-900">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-400 text-emerald-950 flex items-center justify-center font-black text-xl shadow-md">
                🌾
              </div>
              <span className="font-heading font-extrabold text-2xl text-white">SatYield</span>
            </div>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Empowering farmers with multi-spectral satellite telemetry, AI yield analytics, precision soil testing, and on-demand machinery rentals. Reducing uncertainties across India's agricultural ecosystem.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-900/60 text-emerald-300 border border-emerald-700/50">
                <ShieldCheck size={14} className="text-amber-400" /> SIH Finalist Prototype
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/30">
                100% Free for Indian Farmers
              </span>
            </div>
          </div>

          {/* Quick AI Modules */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">AI Tools</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/ai-yield" className="hover:text-amber-400 transition">AI Yield Predictor</Link></li>
              <li><Link to="/crop-prediction" className="hover:text-amber-400 transition">Crop Recommendations</Link></li>
              <li><Link to="/soil-analysis" className="hover:text-amber-400 transition">Soil Health Scanner</Link></li>
              <li><Link to="/climate-insights" className="hover:text-amber-400 transition">Climate & Weather</Link></li>
              <li><Link to="/rentals" className="hover:text-amber-400 transition">Equipment Rentals</Link></li>
            </ul>
          </div>

          {/* Government Portals & Schemes */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Farmer Portals</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="https://pmkisan.gov.in" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-amber-400 transition">
                  PM-KISAN Portal <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="https://pmfby.gov.in" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-amber-400 transition">
                  PM Fasal Bima (PMFBY) <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="https://soilhealth.dac.gov.in" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-amber-400 transition">
                  Soil Health Card <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="https://enam.gov.in" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-amber-400 transition">
                  e-NAM Mandi Prices <ExternalLink size={12} />
                </a>
              </li>
              <li><Link to="/guidance" className="hover:text-amber-400 transition">Cultivation Guides</Link></li>
            </ul>
          </div>

          {/* Helpline & Support */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Support & Helpline</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Toll-Free Kisan Call Center</div>
                  <div className="text-amber-300 font-bold">1800-180-1551</div>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-amber-400 flex-shrink-0" />
                <span>support@smartkisan.in</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin size={16} className="text-amber-400 flex-shrink-0" />
                <span>Nagpur, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} SatYield / SmartKisan. Designed for Smart India Hackathon.</p>
          <p className="flex items-center gap-1 text-gray-400">
            Dedicated with <Heart size={14} className="text-red-500 fill-red-500" /> to the Annadata (Farmers) of India.
          </p>
        </div>
      </div>
    </footer>
  );
}
