import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import AiYield from './pages/AiYield';
import CropPrediction from './pages/CropPrediction';
import SoilAnalysis from './pages/SoilAnalysis';
import ClimateInsights from './pages/ClimateInsights';
import Guidance from './pages/Guidance';
import Rentals from './pages/Rentals';
import CitySelection from './pages/CitySelection';
import Login from './pages/Login';
import Signup from './pages/Signup';

import { LanguageProvider } from './context/LanguageContext';
import { LocationProvider } from './context/LocationContext';
import { AuthProvider } from './context/AuthContext';

export default function App() {
  return (
    <LanguageProvider>
      <LocationProvider>
        <AuthProvider>
          <Router>
            <div className="flex flex-col min-h-screen bg-[#FAF7EE] text-gray-800">
              <Navbar />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/ai-yield" element={<AiYield />} />
                  <Route path="/crop-prediction" element={<CropPrediction />} />
                  <Route path="/soil-analysis" element={<SoilAnalysis />} />
                  <Route path="/climate-insights" element={<ClimateInsights />} />
                  <Route path="/guidance" element={<Guidance />} />
                  <Route path="/rentals" element={<Rentals />} />
                  <Route path="/city-selection" element={<CitySelection />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  {/* Fallback */}
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </main>
              <Footer />
              {/* Floating AI Kisan Assistant */}
              <Chatbot />
            </div>
          </Router>
        </AuthProvider>
      </LocationProvider>
    </LanguageProvider>
  );
}
