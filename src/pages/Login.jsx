import React, { useState } from 'react';
import { Link, useNavigate, useLocation as useRouterLocation } from 'react-router-dom';
import { User, Lock, Phone, ArrowRight, AlertCircle, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useLocation } from '../context/LocationContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginWithOtp, setLoginWithOtp] = useState(false);
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const { login, loginWithPhone, demoUsers, demoOtp } = useAuth();
  const { updateLocation } = useLocation();
  const navigate = useNavigate();
  const routerLocation = useRouterLocation();

  // If user arrived via protected route redirect, use that destination; else default to /dashboard
  const redirectTarget = routerLocation.state?.from || '/dashboard';

  const handlePasswordLogin = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!email || !password) {
      setErrorMsg('Please enter both email and password.');
      return;
    }

    const res = login(email, password);
    if (!res.ok) {
      setErrorMsg(res.error || 'Login failed. Please check your credentials.');
      return;
    }

    // Sync farm location with user profile if available
    if (res.user?.state && res.user?.city) {
      updateLocation(res.user.state, res.user.city);
    }

    navigate(redirectTarget, { replace: true });
  };

  const handleSendOtp = () => {
    setErrorMsg('');
    const cleanPhone = phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }
    setOtpSent(true);
    setOtp(demoOtp || '5432');
  };

  const handleOtpLogin = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!otpSent) {
      setErrorMsg('Please click "Send OTP" first to generate verification code.');
      return;
    }

    const res = loginWithPhone(phone, otp);
    if (!res.ok) {
      setErrorMsg(res.error || 'Failed to verify OTP.');
      return;
    }

    if (res.user?.state && res.user?.city) {
      updateLocation(res.user.state, res.user.city);
    }

    navigate(redirectTarget, { replace: true });
  };

  const fillDemoFarmer = (farmerEmail, farmerPass = 'kisan123') => {
    setErrorMsg('');
    setLoginWithOtp(false);
    setEmail(farmerEmail);
    setPassword(farmerPass);
  };

  return (
    <div className="max-w-md mx-auto px-4 py-12 space-y-6">
      {/* Back to Home link */}
      <div>
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition"
        >
          <ArrowLeft size={14} />
          <span>Back to Home</span>
        </Link>
      </div>

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
            onClick={() => {
              setLoginWithOtp(false);
              setErrorMsg('');
            }}
            className={`py-2 rounded-lg transition ${!loginWithOtp ? 'bg-emerald-700 text-white shadow' : 'text-gray-600'}`}
          >
            Password Login
          </button>
          <button
            type="button"
            onClick={() => {
              setLoginWithOtp(true);
              setErrorMsg('');
            }}
            className={`py-2 rounded-lg transition ${loginWithOtp ? 'bg-emerald-700 text-white shadow' : 'text-gray-600'}`}
          >
            OTP Login
          </button>
        </div>

        {/* Inline Error Box */}
        {errorMsg && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-3.5 flex items-start gap-2.5 text-xs text-red-700 animate-in fade-in">
            <AlertCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
            <div className="font-medium leading-relaxed">{errorMsg}</div>
          </div>
        )}

        {/* Password Login Form */}
        {!loginWithOtp ? (
          <form onSubmit={handlePasswordLogin} className="space-y-4">
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
                  placeholder="ramesh.farmer@smartkisan.in"
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

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-700 to-teal-800 hover:from-emerald-800 hover:to-teal-900 text-white font-bold py-3 rounded-2xl shadow-md transition flex items-center justify-center gap-2 text-xs"
            >
              <span>Log In to Farm Dashboard</span>
              <ArrowRight size={14} />
            </button>
          </form>
        ) : (
          /* OTP Login Form */
          <form onSubmit={handleOtpLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Mobile Number (10 digits)</label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Phone size={16} className="absolute left-3.5 top-3 text-gray-400" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-3.5 py-2.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    placeholder="9822012345"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleSendOtp}
                  className="bg-emerald-100 hover:bg-emerald-200 text-emerald-800 text-xs font-bold px-3.5 py-2.5 rounded-xl transition shrink-0"
                >
                  Send OTP
                </button>
              </div>
            </div>

            {otpSent && (
              <div className="space-y-1">
                <label className="block text-xs font-bold text-gray-700">
                  Enter 4-Digit OTP <span className="text-emerald-700 font-normal">(Demo OTP: <strong>5432</strong>)</span>
                </label>
                <input
                  type="text"
                  required
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs font-bold tracking-widest text-center focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  placeholder="5432"
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-700 to-teal-800 hover:from-emerald-800 hover:to-teal-900 text-white font-bold py-3 rounded-2xl shadow-md transition flex items-center justify-center gap-2 text-xs"
            >
              <span>Verify OTP & Access</span>
              <ArrowRight size={14} />
            </button>
          </form>
        )}

        {/* Demo Fast Login Buttons */}
        <div className="pt-2 border-t border-gray-100 space-y-2">
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block text-center">
            One-Click Demo Farmer Fill:
          </span>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <button
              type="button"
              onClick={() => fillDemoFarmer('ramesh.farmer@smartkisan.in', 'kisan123')}
              className="p-2.5 rounded-xl bg-gray-50 border border-gray-200 hover:border-emerald-500 hover:bg-emerald-50/50 font-semibold text-gray-700 text-left transition"
            >
              <div className="font-bold text-gray-900">👨‍🌾 Ramesh Patel</div>
              <div className="text-[10px] text-gray-500">Nagpur, Maharashtra</div>
            </button>
            <button
              type="button"
              onClick={() => fillDemoFarmer('gurpreet.punjab@smartkisan.in', 'kisan123')}
              className="p-2.5 rounded-xl bg-gray-50 border border-gray-200 hover:border-emerald-500 hover:bg-emerald-50/50 font-semibold text-gray-700 text-left transition"
            >
              <div className="font-bold text-gray-900">🌾 Gurpreet Singh</div>
              <div className="text-[10px] text-gray-500">Ludhiana, Punjab</div>
            </button>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 pt-1">
          Don't have a Kisan profile yet?{' '}
          <Link to="/signup" className="text-emerald-700 font-bold hover:underline">
            Register Now (Free)
          </Link>
        </div>
      </div>
    </div>
  );
}
