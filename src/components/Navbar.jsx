import React, { useState } from 'react';
import { Link, useLocation as useRouterLocation, useNavigate } from 'react-router-dom';
import { MapPin, Globe, User, LogOut, Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useLocation } from '../context/LocationContext';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const { city, state } = useLocation();
  const { user, logout, isAuthenticated } = useAuth();
  const routerLocation = useRouterLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setMobileMenuOpen(false);
    navigate('/');
  };

  // Logged-in full application menu
  const authNavLinks = [
    { name: t('nav.dashboard'), path: '/dashboard' },
    { name: t('nav.aiYield'), path: '/ai-yield', badge: 'AI' },
    { name: t('nav.cropPrediction'), path: '/crop-prediction' },
    { name: t('nav.soilAnalysis'), path: '/soil-analysis' },
    { name: t('nav.climate'), path: '/climate-insights' },
    { name: t('nav.guidance'), path: '/guidance' },
    { name: t('nav.rentals'), path: '/rentals', highlight: true }
  ];

  // Logged-out public menu
  const guestNavLinks = [
    { name: t('nav.home') || 'Home', path: '/' },
    { name: 'Features', path: '/#features' },
    { name: 'How it Works', path: '/#how-it-works' }
  ];

  const languages = [
    { code: 'en', label: 'English (EN)' },
    { code: 'hi', label: 'हिन्दी (Hindi)' },
    { code: 'mr', label: 'मराठी (Marathi)' },
    { code: 'pa', label: 'ਪੰਜਾਬੀ (Punjabi)' }
  ];

  const logoTarget = isAuthenticated ? '/dashboard' : '/';

  return (
    <header className="sticky top-0 z-40 bg-[#1B3B2F]/95 backdrop-blur-md text-white border-b border-emerald-800/40 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to={logoTarget} className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-200 text-emerald-950 flex items-center justify-center font-black text-2xl shadow-md group-hover:scale-105 transition">
              🌾
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-extrabold text-2xl tracking-tight text-white group-hover:text-amber-300 transition">
                  SatYield
                </span>
                <span className="bg-amber-400/20 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-400/40">
                  SMART KISAN
                </span>
              </div>
              <p className="text-[11px] text-emerald-300/80 -mt-0.5 hidden sm:block">AI for Climate-Dependent Crops</p>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {isAuthenticated ? (
              authNavLinks.map((item) => {
                const active = routerLocation.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative px-3 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-1.5 ${
                      active
                        ? 'bg-emerald-800 text-amber-300 shadow-inner'
                        : 'text-emerald-100 hover:text-white hover:bg-emerald-800/50'
                    } ${item.highlight ? 'border border-amber-400/40 text-amber-300' : ''}`}
                  >
                    {item.name}
                    {item.badge && (
                      <span className="bg-amber-400 text-emerald-950 text-[10px] font-extrabold px-1.5 py-0.2 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })
            ) : (
              guestNavLinks.map((item) => {
                const active = routerLocation.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                      active
                        ? 'bg-emerald-800 text-amber-300 shadow-inner'
                        : 'text-emerald-100 hover:text-white hover:bg-emerald-800/50'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })
            )}
          </nav>

          {/* Right Controls: Location + Language + User */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Active Location Pill: ONLY when logged in */}
            {isAuthenticated && (
              <Link
                to="/city-selection"
                className="flex items-center gap-1.5 bg-emerald-900/80 hover:bg-emerald-800 border border-emerald-700/60 px-3 py-1.5 rounded-xl text-xs font-medium text-emerald-200 hover:text-white transition shadow-sm"
                title="Click to change location"
              >
                <MapPin size={14} className="text-amber-400" />
                <span>{city}, {state}</span>
              </Link>
            )}

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 bg-emerald-900/80 hover:bg-emerald-800 border border-emerald-700/60 px-2.5 py-1.5 rounded-xl text-xs font-medium text-emerald-200 transition"
              >
                <Globe size={14} className="text-emerald-300" />
                <span className="uppercase font-bold">{lang}</span>
                <ChevronDown size={12} />
              </button>
              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-[#1B3B2F] border border-emerald-700 rounded-2xl shadow-xl py-1 z-50 overflow-hidden">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-xs flex items-center justify-between hover:bg-emerald-800 transition ${
                        lang === l.code ? 'text-amber-300 font-bold bg-emerald-800/70' : 'text-emerald-100'
                      }`}
                    >
                      {l.label}
                      {lang === l.code && <span className="text-amber-300">✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Auth Button / Profile */}
            {isAuthenticated ? (
              <div className="flex items-center gap-2">
                <Link
                  to="/dashboard"
                  className="flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 text-emerald-950 font-bold px-3.5 py-1.5 rounded-xl text-xs shadow-sm hover:scale-105 transition"
                >
                  <User size={14} />
                  <span className="truncate max-w-[110px]">{user?.name || 'Farmer'}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  title="Sign Out"
                  className="p-1.5 text-emerald-300 hover:text-red-300 rounded-lg transition"
                >
                  <LogOut size={16} />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  to="/login"
                  className="text-xs font-semibold text-emerald-100 hover:text-white px-3 py-1.5"
                >
                  {t('nav.login') || 'Login'}
                </Link>
                <Link
                  to="/signup"
                  className="bg-gradient-to-r from-amber-400 to-amber-500 text-emerald-950 text-xs font-bold px-3.5 py-1.5 rounded-xl shadow-md hover:scale-105 transition"
                >
                  {t('nav.signup') || 'Sign Up'}
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            {isAuthenticated && (
              <Link
                to="/city-selection"
                className="flex items-center gap-1 bg-emerald-900 border border-emerald-700 px-2 py-1 rounded-lg text-xs text-emerald-200"
              >
                <MapPin size={12} className="text-amber-400" />
                <span>{city}</span>
              </Link>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-emerald-200 hover:text-white hover:bg-emerald-800 transition"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1B3B2F] border-b border-emerald-800 px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top-4">
          <div className="grid grid-cols-2 gap-2 pt-2 pb-3 border-b border-emerald-800/60">
            {isAuthenticated ? (
              authNavLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`p-2.5 rounded-xl text-xs font-semibold flex items-center justify-between ${
                    routerLocation.pathname === item.path
                      ? 'bg-emerald-800 text-amber-300'
                      : 'text-emerald-100 bg-emerald-900/40 hover:bg-emerald-800'
                  }`}
                >
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="bg-amber-400 text-emerald-950 text-[9px] font-bold px-1.5 py-0.2 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              ))
            ) : (
              guestNavLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`p-2.5 rounded-xl text-xs font-semibold flex items-center justify-between ${
                    routerLocation.pathname === item.path
                      ? 'bg-emerald-800 text-amber-300'
                      : 'text-emerald-100 bg-emerald-900/40 hover:bg-emerald-800'
                  }`}
                >
                  <span>{item.name}</span>
                </Link>
              ))
            )}
          </div>

          {/* Mobile Languages */}
          <div className="py-2">
            <p className="text-[11px] text-emerald-300 font-bold mb-2">Select Language:</p>
            <div className="flex flex-wrap gap-2">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    setLang(l.code);
                  }}
                  className={`px-3 py-1 rounded-lg text-xs font-medium border ${
                    lang === l.code
                      ? 'bg-amber-400 text-emerald-950 border-amber-400 font-bold'
                      : 'border-emerald-700 text-emerald-200 bg-emerald-900/50'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Auth */}
          <div className="pt-2 flex items-center justify-between">
            {isAuthenticated ? (
              <div className="flex items-center justify-between w-full">
                <span className="text-xs text-emerald-200">
                  Logged in as: <strong className="text-white">{user?.name || 'Farmer'}</strong>
                </span>
                <button
                  onClick={handleLogout}
                  className="text-xs text-red-300 hover:text-red-200 font-semibold"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2 w-full">
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 text-center py-2 text-xs font-bold text-white border border-emerald-600 rounded-xl"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 text-center py-2 text-xs font-bold text-emerald-950 bg-amber-400 rounded-xl"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
