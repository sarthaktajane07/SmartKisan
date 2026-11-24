import React, { useState } from 'react';
import {
  Tractor,
  MapPin,
  Search,
  Star,
  Phone,
  Clock,
  Calendar,
  Filter,
  CheckCircle2,
  X,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { useLocation } from '../context/LocationContext';
import { RENTALS_DATABASE } from '../services/rentalsData';
import { STATES_CITIES } from '../services/api';

export default function Rentals() {
  const { city: defaultCity, state: defaultState } = useLocation();

  const [selectedState, setSelectedState] = useState(defaultState || 'Maharashtra');
  const [selectedCity, setSelectedCity] = useState(defaultCity || 'Pune');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Booking Modal State
  const [bookingModalItem, setBookingModalItem] = useState(null);
  const [farmerName, setFarmerName] = useState('Ramesh Patel');
  const [farmerPhone, setFarmerPhone] = useState('98220 12345');
  const [bookingDate, setBookingDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [bookingHours, setBookingHours] = useState('4');
  const [bookingNotes, setBookingNotes] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const categories = ['All', 'Tractor', 'Harvester', 'Tillage', 'Seeder', 'Sprayer', 'Baler', 'Weeder', 'Irrigation'];

  const filteredListings = RENTALS_DATABASE.filter(item => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesQuery = !searchQuery || item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.vendor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    if (!farmerName || !farmerPhone || !bookingDate || !bookingHours) {
      alert('Please fill all required booking fields');
      return;
    }

    const newBooking = {
      id: 'BK-' + Date.now(),
      equipment: bookingModalItem.name,
      vendor: bookingModalItem.vendor,
      farmerName,
      farmerPhone,
      bookingDate,
      bookingHours,
      bookingNotes,
      totalEstimate: bookingModalItem.rateHr * Number(bookingHours),
      createdAt: new Date().toISOString()
    };

    const existing = JSON.parse(localStorage.getItem('satyield_bookings') || '[]');
    existing.push(newBooking);
    localStorage.setItem('satyield_bookings', JSON.stringify(existing));

    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setBookingModalItem(null);
    }, 1800);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#1B3B2F] via-[#23523B] to-[#2E4635] text-white rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-amber-400/30">
            <Tractor size={14} /> SatYield Kisan Machinery Hub
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
            Rent Farm Equipment Near You
          </h1>
          <p className="text-emerald-100 text-sm leading-relaxed">
            Why invest heavy capital when you can rent? Verified tractors, rotary tillers, seeders, and harvesters from trusted local farmer cooperatives. Real equipment, real savings!
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-xs space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="relative">
            <Search size={18} className="absolute left-3.5 top-3 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tractors, harvesters, vendors..."
              className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-3.5 py-2.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>

          <div>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-600"
            >
              {Object.keys(STATES_CITIES).map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-600"
            >
              {(STATES_CITIES[selectedState] || ['All Cities']).map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition border ${
                selectedCategory === cat
                  ? 'bg-emerald-700 text-white border-emerald-700 shadow-sm'
                  : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Equipment Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredListings.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl border border-gray-200/80 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col justify-between"
          >
            <div>
              {/* Image Container with Badges */}
              <div className="relative h-48 bg-gradient-to-tr from-emerald-900 to-emerald-700 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  onError={(e) => {
                    // Fallback to cute svg icon if asset not loaded
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute top-3 left-3 bg-[#1B3B2F]/90 backdrop-blur-xs text-amber-300 text-[10px] font-bold px-2.5 py-1 rounded-full border border-amber-400/30">
                  {item.category}
                </div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-gray-900 text-xs font-extrabold px-2 py-0.5 rounded-full flex items-center gap-1 shadow">
                  <Star size={12} className="text-amber-500 fill-amber-500" />
                  <span>{item.rating}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-heading font-extrabold text-lg text-gray-900">{item.name}</h3>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-1">
                    <MapPin size={13} className="text-emerald-700" />
                    <span>{item.city}, {item.state}</span>
                  </div>
                </div>

                <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                {/* Specs tags */}
                <div className="flex flex-wrap gap-1.5">
                  {item.specs.slice(0, 3).map((sp, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-medium bg-gray-50 text-gray-600 px-2 py-0.5 rounded-md border border-gray-100"
                    >
                      {sp}
                    </span>
                  ))}
                </div>

                {/* Vendor details */}
                <div className="bg-[#FAF9F5] p-2.5 rounded-xl border border-gray-100 text-xs text-gray-700 flex items-center justify-between">
                  <span className="font-semibold truncate">{item.vendor}</span>
                  <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">
                    Verified Owner
                  </span>
                </div>
              </div>
            </div>

            {/* Price & Book Button */}
            <div className="p-6 pt-0 border-t border-gray-100 mt-2 flex items-center justify-between">
              <div>
                <div className="text-[10px] text-gray-400 uppercase font-bold">Rental Rate</div>
                <div className="font-heading font-black text-lg text-emerald-800">
                  ₹{item.rateHr}<span className="text-xs font-normal text-gray-500">/hr</span> • ₹{item.rateDay}<span className="text-xs font-normal text-gray-500">/day</span>
                </div>
              </div>

              <button
                onClick={() => setBookingModalItem(item)}
                className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-emerald-950 font-bold px-4 py-2 rounded-xl text-xs shadow hover:scale-105 transition"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Modal */}
      {bookingModalItem && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-gray-100 space-y-5 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div>
                <span className="text-xs text-emerald-700 font-bold uppercase tracking-wider">
                  Equipment Booking Request
                </span>
                <h3 className="font-heading font-black text-xl text-gray-900">
                  {bookingModalItem.name}
                </h3>
              </div>
              <button
                onClick={() => setBookingModalItem(null)}
                className="p-1 rounded-lg text-gray-400 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>

            {bookingSuccess ? (
              <div className="p-6 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center text-3xl">
                  ✓
                </div>
                <h4 className="font-heading font-extrabold text-xl text-emerald-900">
                  Booking Request Confirmed!
                </h4>
                <p className="text-xs text-gray-600">
                  {bookingModalItem.vendor} has been notified. They will call you at {farmerPhone} shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleConfirmBooking} className="space-y-4">
                <div className="bg-[#FAF9F5] p-3 rounded-2xl border border-gray-100 text-xs space-y-1">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Provider:</span>
                    <strong className="text-gray-900">{bookingModalItem.vendor}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Hourly Rate:</span>
                    <strong className="text-emerald-800">₹{bookingModalItem.rateHr} / hour</strong>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={farmerName}
                      onChange={(e) => setFarmerName(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-semibold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={farmerPhone}
                      onChange={(e) => setFarmerPhone(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-semibold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Booking Date</label>
                    <input
                      type="date"
                      required
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-semibold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Hours Required</label>
                    <input
                      type="number"
                      min="1"
                      max="48"
                      required
                      value={bookingHours}
                      onChange={(e) => setBookingHours(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-semibold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Special Requirements / Field Location</label>
                  <textarea
                    rows="2"
                    value={bookingNotes}
                    onChange={(e) => setBookingNotes(e.target.value)}
                    placeholder="e.g. Acreage location, ploughing attachments required"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between text-xs">
                  <span className="text-gray-500">Estimated Total:</span>
                  <span className="font-heading font-black text-lg text-emerald-800">
                    ₹{(bookingModalItem.rateHr * Number(bookingHours || 1)).toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="pt-3 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setBookingModalItem(null)}
                    className="flex-1 py-2.5 rounded-xl border border-gray-200 text-xs font-bold text-gray-600 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-emerald-700 to-teal-800 hover:from-emerald-800 hover:to-teal-900 text-white text-xs font-bold shadow"
                  >
                    Confirm Booking
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
