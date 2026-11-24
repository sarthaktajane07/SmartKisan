import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Lock, Phone, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('ramesh.farmer@smartkisan.in');
  const [password, setPassword] = useState('kisan123');
  const [loginWithOtp, setLoginWithOtp] = useState(false);
  const [phone, setPhone] = useState('9822012345');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email || phone + '@farmer.in', password);
    navigate('/dashboard');
  };

  const handleSendOtp = () => {
    if (!phone) return alert('Please enter phone number');
    setOtpSent(true);
    setOtp('5432');
  };

  const fillDemoFarmer = (name, mail) => {
    setEmail(mail);
    setPassword('kisan123');
  };

  return (
    <div className="max-w-md mx-auto px-4 py-12 space-y-6">
      <div className="text-center space-y-2">
        <div className="w-14 h-14 rounded-3xl bg-gradient-to-tr from-amber-400 to-amber-200 text-emerald-950 mx-auto flex items-center justify-center font-black text-2xl shadow-lg">
          🌾
        </div>
        <h1 className="font-heading text-3xl font-extrabold text-gray-900">
          Farmer Login
        </h1>
        <p className="text-xs text-gray-500">
          Access your farm's telemetry, predictions & machinery bookings
        </p>
      </div>

      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-md space-y-6">
        {/* Toggle Login Method */}
        <div className="grid grid-cols-2 gap-2 bg-gray-100 p-1 rounded-xl text-xs font-bold">
          <button
            type="button"
            onClick={() => setLoginWithOtp(false)}
            className={`py-2 rounded-lg transition ${!loginWithOtp ? 'bg-emerald-700 text-white shadow' : 'text-gray-600'}`}
          >
            Password Login
          </button>
          <button
            type="button"
            onClick={() => setLoginWithOtp(true)}
            className={`py-2 rounded-lg transition ${loginWithOtp ? 'bg-emerald-700 text-white shadow' : 'text-gray-600'}`}
          >
            OTP Login
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!loginWithOtp ? (
            <>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Email or Farmer ID</label>
                <div className="relative">
                  <User size={16} className="absolute left-3.5 top-3 text-gray-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-3.5 py-2.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    placeholder="farmer@smartkisan.in"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <Lock size={16} className="absolute left-3.5 top-3 text-gray-400" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-3.5 py-2.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Mobile Number (Aadhaar Linked)</label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Phone size={16} className="absolute left-3.5 top-3 text-gray-400" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-3.5 py-2.5 text-xs font-semibold"
                      placeholder="9876543210"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleSendOtp}
                    className="bg-emerald-100 hover:bg-emerald-200 text-emerald-800 text-xs font-bold px-3 py-2 rounded-xl"
                  >
                    Send OTP
                  </button>
                </div>
              </div>

              {otpSent && (
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Enter OTP <span className="text-emerald-700 font-normal">(Demo OTP: 5432)</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs font-bold tracking-widest text-center"
                    placeholder="5432"
                  />
                </div>
              )}
            </>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-700 to-teal-800 hover:from-emerald-800 hover:to-teal-900 text-white font-bold py-3 rounded-2xl shadow-md transition flex items-center justify-center gap-2 text-xs"
          >
            <span>Log In to Farm Dashboard</span>
            <ArrowRight size={14} />
          </button>
        </form>

        {/* Demo Fast Login Buttons */}
        <div className="pt-2 border-t border-gray-100 space-y-2">
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block text-center">
            Instant Demo Account Fill:
          </span>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <button
              type="button"
              onClick={() => fillDemoFarmer('Ramesh Patel', 'ramesh.farmer@smartkisan.in')}
              className="p-2 rounded-xl bg-gray-50 border border-gray-200 hover:border-emerald-400 font-semibold text-gray-700 truncate"
            >
              👨‍🌾 Ramesh (Nagpur)
            </button>
            <button
              type="button"
              onClick={() => fillDemoFarmer('Gurpreet Singh', 'gurpreet.punjab@smartkisan.in')}
              className="p-2 rounded-xl bg-gray-50 border border-gray-200 hover:border-emerald-400 font-semibold text-gray-700 truncate"
            >
              🌾 Gurpreet (Punjab)
            </button>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500">
          Don't have a Kisan profile yet?{' '}
          <Link to="/signup" className="text-emerald-700 font-bold hover:underline">
            Register Now (Free)
          </Link>
        </div>
      </div>
    </div>
  );
}
