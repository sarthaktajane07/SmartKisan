import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sprout,
  Cpu,
  Tractor,
  Layers,
  CloudSun,
  Award,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  BarChart3,
  UserCheck,
  ShieldCheck,
  MapPin,
  Lock
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useLocation } from '../context/LocationContext';
import { useAuth } from '../context/AuthContext';

export default function Home() {
  const { t } = useLanguage();
  const { city, state, weather } = useLocation();
  const { isAuthenticated, user } = useAuth();

  const features = [
    {
      title: 'AI Yield Predictor',
      desc: 'Predict harvest yield (tons/acre) and revenue months before cutting using heuristic models, soil nutrients, and micro-climate.',
      icon: Cpu,
      link: '/ai-yield',
      color: 'from-emerald-500 to-teal-700',
      badge: '94% Accuracy'
    },
    {
      title: 'Crop Recommendation',
      desc: 'Intelligent crop matching algorithms based on soil N-P-K levels, regional climate patterns, and current market demand.',
      icon: Sprout,
      link: '/crop-prediction',
      color: 'from-amber-500 to-orange-600',
      badge: 'Season Match'
    },
    {
      title: 'Soil Health Scanner',
      desc: 'Analyze pH, Nitrogen, Phosphorus, Potassium, and organic carbon with instant actionable fertilizer recommendations.',
      icon: Layers,
      link: '/soil-analysis',
      color: 'from-stone-600 to-stone-800',
      badge: 'SoilGrids'
    },
    {
      title: 'Hyper-Local Climate',
      desc: 'Real-time 7-day meteorological forecasts, rainfall warnings, frost alerts, and pest outbreak prediction based on humidity.',
      icon: CloudSun,
      link: '/climate-insights',
      color: 'from-sky-500 to-blue-700',
      badge: 'Open-Meteo'
    },
    {
      title: 'Farm Equipment Rentals',
      desc: 'Why purchase expensive machinery? Rent verified tractors, rotary tillers, seeders, and harvesters from local nearby farmers.',
      icon: Tractor,
      link: '/rentals',
      color: 'from-green-600 to-emerald-800',
      badge: 'Save 65%'
    },
    {
      title: 'Step-by-Step Farming Guide',
      desc: 'From seed bed preparation to harvesting, with direct access to PM-KISAN, PMFBY crop insurance, and subsidy schemes.',
      icon: Award,
      link: '/guidance',
      color: 'from-purple-600 to-indigo-800',
      badge: 'Govt Schemes'
    }
  ];

  const stats = [
    { value: '12,400+', label: 'Active Farmers' },
    { value: '94.8%', label: 'Prediction Accuracy' },
    { value: '₹18,500', label: 'Avg Extra Profit / Acre' },
    { value: '25+', label: 'Supported Crops' }
  ];

  const howItWorksSteps = [
    {
      step: '01',
      title: 'Register as a Farmer',
      desc: 'Create your free account in 30 seconds with mobile number or email. Access is 100% free for Indian farmers.'
    },
    {
      step: '02',
      title: 'Set Your Farm Location',
      desc: 'Select your state and district or enable GPS. SatYield fetches live satellite telemetry and regional soil grids.'
    },
    {
      step: '03',
      title: 'Access Farmer Dashboard',
      desc: 'View your real-time 7-day weather telemetry, soil health ratings, active crop cycle, and quick advisories.'
    },
    {
      step: '04',
      title: 'Run AI Prediction & Tools',
      desc: 'Calculate yields, simulate chemical fertilizer dosages, get crop recommendations, and rent farm machinery.'
    }
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1B3B2F] via-[#23523B] to-[#142B22] text-white pt-16 pb-28 px-4 sm:px-6 lg:px-8 rounded-b-[40px] shadow-2xl">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FBC02D_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headlines */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-emerald-800/80 border border-amber-400/40 px-3.5 py-1.5 rounded-full text-xs font-semibold text-amber-300 shadow-sm backdrop-blur-xs">
                <Sparkles size={14} className="text-amber-400" />
                <span>Next-Gen Agricultural Intelligence Platform</span>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Empowering Farmers with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-emerald-300">
                  Satellite AI & Live Insights
                </span>
              </h1>

              <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-2xl">
                Mitigate climate volatility, predict harvest yield accurately months ahead, optimize soil fertilizers, and rent verified farm machinery on-demand.
              </p>

              {/* Dynamic CTAs based on Auth state */}
              {isAuthenticated ? (
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    to="/dashboard"
                    className="flex items-center gap-2.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-emerald-950 font-bold px-7 py-3.5 rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition text-sm sm:text-base"
                  >
                    <span>Open Farmer Dashboard</span>
                    <ArrowRight size={18} />
                  </Link>

                  <Link
                    to="/ai-yield"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-6 py-3.5 rounded-2xl backdrop-blur-xs transition text-sm sm:text-base"
                  >
                    <Cpu size={18} />
                    <span>AI Yield Predictor</span>
                  </Link>
                </div>
              ) : (
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    to="/signup"
                    className="flex items-center gap-2.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-emerald-950 font-bold px-7 py-3.5 rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition text-sm sm:text-base"
                  >
                    <UserCheck size={18} />
                    <span>Register as a Farmer</span>
                    <ArrowRight size={18} />
                  </Link>

                  <Link
                    to="/login"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-6 py-3.5 rounded-2xl backdrop-blur-xs transition text-sm sm:text-base"
                  >
                    <Lock size={18} />
                    <span>Farmer Login</span>
                  </Link>
                </div>
              )}

              {/* Farmer Trust Proof */}
              <div className="pt-6 border-t border-emerald-800/60 flex items-center gap-6 text-xs text-emerald-200">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={16} className="text-amber-400" />
                  <span>Free for all Indian Farmers</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={16} className="text-amber-400" />
                  <span>Real-time Satellite Telemetry</span>
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Hero Right Card */}
            <div className="lg:col-span-5">
              {isAuthenticated ? (
                /* Logged-in Farmer Live Quick Preview */
                <div className="bg-emerald-900/60 backdrop-blur-md border border-emerald-700/60 rounded-3xl p-6 shadow-2xl space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-emerald-800">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center font-bold text-lg">
                        👨‍🌾
                      </div>
                      <div>
                        <div className="text-xs text-emerald-300">Logged in Farmer</div>
                        <div className="text-base font-bold text-white">{user?.name || 'Farmer'}</div>
                      </div>
                    </div>
                    <Link
                      to="/city-selection"
                      className="text-xs font-semibold text-amber-300 hover:underline flex items-center gap-1"
                    >
                      <MapPin size={12} />
                      <span>{city}</span>
                    </Link>
                  </div>

                  {/* Weather Pill */}
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="bg-emerald-950/50 p-3 rounded-2xl border border-emerald-800">
                      <div className="text-xs text-emerald-300">Temp</div>
                      <div className="text-lg font-extrabold text-amber-300">{weather?.temperature ?? 29}°C</div>
                    </div>
                    <div className="bg-emerald-950/50 p-3 rounded-2xl border border-emerald-800">
                      <div className="text-xs text-emerald-300">Humidity</div>
                      <div className="text-lg font-extrabold text-white">{weather?.humidity ?? 64}%</div>
                    </div>
                    <div className="bg-emerald-950/50 p-3 rounded-2xl border border-emerald-800">
                      <div className="text-xs text-emerald-300">Precipitation</div>
                      <div className="text-lg font-extrabold text-white">{weather?.rainfall ?? 0} mm</div>
                    </div>
                  </div>

                  {/* AI Instant Recommendation Preview */}
                  <div className="bg-gradient-to-r from-emerald-800/80 to-teal-900/80 p-4 rounded-2xl border border-emerald-700/80 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                        <Sparkles size={14} /> AI Recommendation
                      </span>
                      <span className="text-[10px] bg-emerald-700 px-2 py-0.5 rounded-full text-emerald-200">
                        High Confidence
                      </span>
                    </div>
                    <p className="text-xs text-emerald-100 leading-relaxed">
                      Optimal sowing conditions for <strong>Soybean & Cotton</strong> in {city} region. Projected profitability is <strong>88-95%</strong>.
                    </p>
                  </div>

                  <Link
                    to="/dashboard"
                    className="block text-center w-full bg-emerald-800 hover:bg-emerald-700 text-white font-semibold py-2.5 rounded-xl text-xs transition"
                  >
                    Open Full Dashboard →
                  </Link>
                </div>
              ) : (
                /* Guest "Get started in 3 steps" Card */
                <div className="bg-emerald-900/70 backdrop-blur-md border border-emerald-700/60 rounded-3xl p-6 sm:p-7 shadow-2xl space-y-6">
                  <div className="flex items-center justify-between pb-3 border-b border-emerald-800/80">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-amber-400 text-emerald-950 flex items-center justify-center font-black text-sm">
                        ✨
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white">Get Started in 3 Steps</h3>
                        <p className="text-[11px] text-emerald-300">Quick onboarding for farmers</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded-full border border-amber-400/30">
                      100% Free
                    </span>
                  </div>

                  <div className="space-y-4 text-xs">
                    <div className="flex items-start gap-3 bg-emerald-950/50 p-3 rounded-2xl border border-emerald-800/80">
                      <div className="w-6 h-6 rounded-lg bg-amber-400/20 text-amber-300 font-extrabold flex items-center justify-center shrink-0">
                        1
                      </div>
                      <div>
                        <strong className="text-white block">Create Free Account</strong>
                        <span className="text-emerald-200/80 text-[11px]">
                          Quick sign up with your name & state or instant OTP login.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-emerald-950/50 p-3 rounded-2xl border border-emerald-800/80">
                      <div className="w-6 h-6 rounded-lg bg-amber-400/20 text-amber-300 font-extrabold flex items-center justify-center shrink-0">
                        2
                      </div>
                      <div>
                        <strong className="text-white block">Detect Soil & Climate</strong>
                        <span className="text-emerald-200/80 text-[11px]">
                          Automated satellite telemetry syncs your local N-P-K & forecasts.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-emerald-950/50 p-3 rounded-2xl border border-emerald-800/80">
                      <div className="w-6 h-6 rounded-lg bg-amber-400/20 text-amber-300 font-extrabold flex items-center justify-center shrink-0">
                        3
                      </div>
                      <div>
                        <strong className="text-white block">Maximize Crop Profit</strong>
                        <span className="text-emerald-200/80 text-[11px]">
                          Unlock AI Yield predictions, fertilizer dosing, and machinery rental.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <Link
                      to="/signup"
                      className="text-center bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-emerald-950 font-bold py-2.5 rounded-xl text-xs transition shadow"
                    >
                      Sign Up Now
                    </Link>
                    <Link
                      to="/login"
                      className="text-center bg-emerald-800 hover:bg-emerald-700 text-white font-semibold py-2.5 rounded-xl text-xs transition"
                    >
                      Farmer Login
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, idx) => (
            <div key={idx} className="space-y-1">
              <div className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1B3B2F] tracking-tight">
                {s.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 scroll-mt-28">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3.5 py-1 rounded-full border border-amber-300">
            How SatYield Works
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1B3B2F]">
            Simple, Sequential & Farmer-Friendly
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Get accurate agronomic decisions in 4 easy steps without complicated technical setups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {howItWorksSteps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              <div>
                <span className="font-heading text-4xl font-extrabold text-amber-500/80 block mb-2">
                  {item.step}
                </span>
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="pt-2 border-t border-gray-100 flex items-center text-xs text-emerald-700 font-semibold gap-1">
                <CheckCircle2 size={14} className="text-emerald-600" />
                <span>Verified Step</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Grid Section */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 scroll-mt-28">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
            Complete Farming Suite
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1B3B2F]">
            Everything You Need from Sowing to Harvest
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Powered by high-resolution satellite imagery, heuristic regression models, and public agri-datasets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, idx) => {
            const Icon = f.icon;
            // If logged in: go directly to tool. If guest: send to /login with state.from
            const destination = isAuthenticated ? f.link : '/login';
            const linkState = isAuthenticated ? undefined : { from: f.link };

            return (
              <Link
                key={idx}
                to={destination}
                state={linkState}
                className="group bg-white rounded-3xl p-7 border border-gray-200/80 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${f.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300`}>
                      <Icon size={26} />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                      {f.badge}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition">
                    {f.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {f.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-emerald-700 group-hover:text-emerald-900">
                  <span>{isAuthenticated ? 'Open Tool' : 'Login to Use'}</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Satellite Telemetry Showcase Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#1B3B2F] to-[#2E4635] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-400/20 px-3 py-1 rounded-full border border-amber-400/30">
                Earth Observation AI
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                Harnessing Satellite Imagery & Micro-Meteorology
              </h2>
              <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
                By synthesizing live multi-band vegetation indices (NDVI/EVI), soil organic carbon depth surveys, and real-time precipitation radars, SatYield predicts yield variance months in advance.
              </p>
              <div className="pt-2">
                <Link
                  to={isAuthenticated ? '/ai-yield' : '/login'}
                  state={!isAuthenticated ? { from: '/ai-yield' } : undefined}
                  className="inline-flex items-center gap-2 bg-amber-400 text-emerald-950 font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-amber-300 transition text-sm"
                >
                  <Cpu size={16} /> Predict Your Farm Yield
                </Link>
              </div>
            </div>

            <div className="bg-emerald-950/70 p-6 rounded-2xl border border-emerald-700/80 space-y-4">
              <h4 className="font-bold text-white text-sm flex items-center gap-2">
                <BarChart3 size={18} className="text-amber-400" /> Multi-Source Data Fusion
              </h4>
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between bg-emerald-900/60 p-2.5 rounded-xl border border-emerald-800">
                  <span>Open-Meteo Weather API</span>
                  <span className="text-emerald-300 font-bold">Hourly Live Feeds</span>
                </div>
                <div className="flex items-center justify-between bg-emerald-900/60 p-2.5 rounded-xl border border-emerald-800">
                  <span>SoilGrids by ISRIC Global</span>
                  <span className="text-emerald-300 font-bold">0-5cm pH & SOC</span>
                </div>
                <div className="flex items-center justify-between bg-emerald-900/60 p-2.5 rounded-xl border border-emerald-800">
                  <span>SatYield Crop Heuristics</span>
                  <span className="text-emerald-300 font-bold">Validated Algorithms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
