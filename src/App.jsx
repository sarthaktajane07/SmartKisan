import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import { ProtectedRoute, GuestRoute, ScrollManager } from './components/RouteGuards';

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
import { AuthProvider, useAuth } from './context/AuthContext';

function AuthenticatedChatbot() {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return null;
  return <Chatbot />;
}

export default function App() {
  return (
    <LanguageProvider>
      <LocationProvider>
        <AuthProvider>
          <Router>
            <ScrollManager />
            <div className="flex flex-col min-h-screen bg-[#FAF7EE] text-gray-800">
              <Navbar />
              <main className="flex-1">
                <Routes>
                  {/* Public Landing */}
                  <Route path="/" element={<Home />} />

                  {/* Guest Only Routes */}
                  <Route
                    path="/login"
                    element={
                      <GuestRoute>
                        <Login />
                      </GuestRoute>
                    }
                  />
                  <Route
                    path="/signup"
                    element={
                      <GuestRoute>
                        <Signup />
                      </GuestRoute>
                    }
                  />

                  {/* Protected Farmer Routes */}
                  <Route
                    path="/dashboard"
                    element={
                      <ProtectedRoute>
                        <Dashboard />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/ai-yield"
                    element={
                      <ProtectedRoute>
                        <AiYield />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/crop-prediction"
                    element={
                      <ProtectedRoute>
                        <CropPrediction />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/soil-analysis"
                    element={
                      <ProtectedRoute>
                        <SoilAnalysis />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/climate-insights"
                    element={
                      <ProtectedRoute>
                        <ClimateInsights />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/guidance"
                    element={
                      <ProtectedRoute>
                        <Guidance />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/rentals"
                    element={
                      <ProtectedRoute>
                        <Rentals />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/city-selection"
                    element={
                      <ProtectedRoute>
                        <CitySelection />
                      </ProtectedRoute>
                    }
                  />

                  {/* Fallback */}
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </main>
              <Footer />
              {/* Floating AI Kisan Assistant: visible only when logged in */}
              <AuthenticatedChatbot />
            </div>
          </Router>
        </AuthProvider>
      </LocationProvider>
    </LanguageProvider>
  );
}
