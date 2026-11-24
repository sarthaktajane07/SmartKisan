import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Mic, MicOff, Volume2, VolumeX, Sparkles, MessageSquare, User } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const KNOWLEDGE_BASE = {
  rice: {
    keywords: ['rice', 'paddy', 'धान', 'भात', 'चावल'],
    reply: "🌾 **Rice / Paddy Cultivation Insights**:\n• Best grown in flooded/puddled clayey loam fields with temperatures between 21-35°C.\n• Maintain 3-5 cm standing water during tillering and flowering stages.\n• Recommended varieties: Basmati (PB-1121, PB-1509) or high-yielding IR64 / Swarna.\n• Balanced NPK dosage: 100:50:50 kg/ha. Apply nitrogen in 3 split doses."
  },
  wheat: {
    keywords: ['wheat', 'गेहूं', 'गहू', 'कणिक'],
    reply: "🌾 **Wheat (Rabi Crop) Guidelines**:\n• Ideal sowing window: November 1 - November 25 when temperatures drop to 20-22°C.\n• Seed rate: 40-50 kg/acre. Treat seed with Trichoderma or Carboxin before sowing.\n• Critical irrigation stages: Crown Root Initiation (CRI) at 21 days is mandatory.\n• Popular varieties: HD-2967, PBW-343, Sharbati, GW-322."
  },
  cotton: {
    keywords: ['cotton', 'कपास', 'कापूस', 'रूई'],
    reply: "🌿 **Cotton Cultivation Guidelines**:\n• Requires deep black cotton soil (Regur) or fertile loamy soil with pH 7.0-8.2.\n• Row spacing: Maintain 90x60 cm or 120x45 cm for Bt Cotton hybrids.\n• Pest Protection: Install yellow sticky traps & pheromone traps (5/acre) to monitor pink bollworm.\n• Spray 2% DAP or Potassium Nitrate at flowering to prevent square and boll dropping."
  },
  soybean: {
    keywords: ['soybean', 'सोयाबीन'],
    reply: "🫘 **Soybean Optimization Guide**:\n• Prime kharif oilseed crop. Sowing depth: strictly 3-4 cm to prevent seed rot.\n• Inoculate seed with Bradyrhizobium japonicum culture to boost natural nitrogen fixation.\n• Weed management: Apply pre-emergence herbicide within 48 hours of sowing.\n• High-yielding varieties: JS-335, JS-9560, NRC-37."
  },
  sugarcane: {
    keywords: ['sugarcane', 'गन्ना', 'ऊस'],
    reply: "🎋 **Sugarcane Production Tips**:\n• Long duration crop (10-12 months). Plant 2-eye bud setts during Feb-March or Oct-Nov.\n• Seed rate: 25,000-30,000 three-bud setts per hectare.\n• Heavy feeder: Requires 250 kg N, 115 kg P2O5, 115 kg K2O per hectare plus organic manure.\n• Earthing up at 4 months prevents lodging and promotes vigorous tillering."
  },
  soil: {
    keywords: ['soil', 'मिट्टी', 'माती', 'ph', 'npk', 'fertilizer', 'खाद', 'खत'],
    reply: "🌱 **Soil Health & Nutrient Management**:\n• Ideal soil pH for most crops is 6.2 - 7.5. For acidic soils (pH < 6.0), apply agricultural lime. For alkaline soils (pH > 8.0), add gypsum.\n• Organic Carbon should ideally exceed 0.75%. Add 2-3 tons of vermicompost or FYM per acre.\n• Always test soil every 2 years using Government Soil Health Card centers."
  },
  pests: {
    keywords: ['pest', 'insect', 'disease', 'कीड़ा', 'रोग', 'कीटक', 'flea', 'fungus'],
    reply: "🛡️ **Integrated Pest & Disease Management**:\n• Organic first: Spray Neem Seed Kernel Extract (NSKE 5%) or Neem Oil (10,000 ppm) at 3 ml/L at first pest sight.\n• Biological control: Use Trichoderma viride (1 kg/acre) mixed with FYM to combat root rot and wilt.\n• For fungal blights, ensure proper drainage and spray Copper Oxychloride or Mancozeb."
  },
  schemes: {
    keywords: ['scheme', 'government', 'pm kisan', 'yojana', 'योजना', 'सब्सिडी', 'subsidy', 'insurance', 'pmfby'],
    reply: "🏛️ **Top Government Agricultural Schemes**:\n1. **PM-KISAN**: ₹6,000/year direct financial support in 3 equal installments into Aadhaar-linked accounts.\n2. **PMFBY (Crop Insurance)**: Comprehensive cover against natural calamities with only 1.5%-2% farmer premium.\n3. **Soil Health Card Scheme**: Free chemical testing of soil samples every 2 years.\n4. **Kisan Credit Card (KCC)**: Low-interest institutional crop loans at 4% effective interest."
  },
  rentals: {
    keywords: ['rent', 'hire', 'tractor', 'harvester', 'machinery', 'किराया', 'भाडे'],
    reply: "🚜 **SatYield Equipment Rentals Hub**:\n• You can rent tractors (45-50 HP), rotary tillers, seed drills, boom sprayers, and combine harvesters directly on this platform!\n• Click on **'Equipment Rental'** in the navigation bar to browse verified local providers with daily/hourly rates."
  }
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Namaste! 🙏 I am **Kisan Sahayak**, your SatYield AI farming assistant. Ask me anything about crops, soil health, pest remedies, weather preparation, or government schemes!"
    }
  ]);
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [speechEnabled, setSpeechEnabled] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const speakText = (text) => {
    if (!speechEnabled || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const cleanText = text.replace(/[*_#•]/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    utterance.lang = 'en-IN';
    window.speechSynthesis.speak(utterance);
  };

  const handleSend = (textToSend) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMsg = { sender: 'user', text: query };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Generate intelligent response from knowledge base
    const lower = query.toLowerCase();
    let reply = "I understand your farming query. For best results with your specific soil and climatic conditions, you can also use our **Soil Scanner** and **AI Yield Predictor** tabs in the dashboard! Would you like specific guidance on soil preparation, seed variety, or pest management?";

    for (const key of Object.keys(KNOWLEDGE_BASE)) {
      const entry = KNOWLEDGE_BASE[key];
      if (entry.keywords.some(k => lower.includes(k))) {
        reply = entry.reply;
        break;
      }
    }

    setTimeout(() => {
      const botMsg = { sender: 'bot', text: reply };
      setMessages(prev => [...prev, botMsg]);
      speakText(reply);
    }, 400);
  };

  const startVoiceInput = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Voice input is not supported in this browser. Please use Google Chrome or Edge.");
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-IN';
    recognition.interimResults = false;

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onerror = () => setIsListening(false);

    recognition.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      setInput(transcript);
      handleSend(transcript);
    };

    recognition.start();
  };

  const quickPrompts = [
    "🌾 Best crop for Kharif?",
    "🧪 How to improve soil pH?",
    "🛡️ Pest control for cotton",
    "🏛️ PM-KISAN Scheme details",
    "🚜 Rent tractor nearby"
  ];

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-3 bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-800 text-white px-5 py-3.5 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-amber-300 animate-glow group"
          >
            <div className="w-8 h-8 rounded-full bg-amber-400 text-emerald-950 flex items-center justify-center font-bold text-sm shadow">
              🌾
            </div>
            <div className="text-left hidden sm:block">
              <div className="text-xs font-semibold text-amber-200 uppercase tracking-wider">AI Kisan Sahayak</div>
              <div className="text-sm font-bold">Ask Farming Assistant</div>
            </div>
            <span className="sm:hidden text-sm font-bold">AI Help</span>
          </button>
        )}
      </div>

      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[95vw] sm:w-[420px] h-[580px] max-h-[85vh] bg-white rounded-3xl shadow-2xl border border-emerald-900/10 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#1B3B2F] via-[#23523B] to-[#2E4635] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-400 text-emerald-950 flex items-center justify-center text-xl shadow-md font-bold">
                🌾
              </div>
              <div>
                <h3 className="font-bold text-base flex items-center gap-1.5 text-white">
                  Kisan Sahayak AI <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                </h3>
                <p className="text-xs text-amber-200">SatYield Agricultural Assistant</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setSpeechEnabled(!speechEnabled)}
                title={speechEnabled ? "Mute audio response" : "Read responses aloud"}
                className={`p-2 rounded-xl transition ${speechEnabled ? 'bg-amber-400 text-emerald-950' : 'text-emerald-200 hover:bg-emerald-800'}`}
              >
                {speechEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-xl text-emerald-200 hover:bg-emerald-800 transition"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Quick Prompts Bar */}
          <div className="bg-emerald-50 px-3 py-2 border-b border-emerald-100 flex items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="text-[11px] font-semibold text-emerald-800 flex items-center gap-1 flex-shrink-0">
              <Sparkles size={12} className="text-amber-500" /> Suggestions:
            </span>
            {quickPrompts.map((qp, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(qp)}
                className="text-[11px] bg-white border border-emerald-200 text-emerald-900 px-2.5 py-1 rounded-full whitespace-nowrap hover:bg-emerald-100 transition shadow-xs"
              >
                {qp}
              </button>
            ))}
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#FAF9F5]">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-full bg-emerald-700 text-white flex items-center justify-center flex-shrink-0 text-xs shadow-xs">
                    🌾
                  </div>
                )}
                <div
                  className={`max-w-[82%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed whitespace-pre-line shadow-xs ${
                    m.sender === 'user'
                      ? 'bg-emerald-700 text-white rounded-tr-xs'
                      : 'bg-white text-gray-800 border border-gray-200/70 rounded-tl-xs'
                  }`}
                >
                  {m.text}
                </div>
                {m.sender === 'user' && (
                  <div className="w-7 h-7 rounded-full bg-amber-500 text-emerald-950 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                    <User size={14} />
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <div className="p-3 bg-white border-t border-gray-100 flex items-center gap-2">
            <button
              onClick={startVoiceInput}
              title="Speak query"
              className={`p-2.5 rounded-xl transition ${
                isListening
                  ? 'bg-red-500 text-white animate-pulse'
                  : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
              }`}
            >
              {isListening ? <MicOff size={18} /> : <Mic size={18} />}
            </button>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask anything about farming, soil, or seeds..."
              className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim()}
              className="bg-emerald-700 text-white p-2.5 rounded-xl hover:bg-emerald-800 disabled:opacity-40 transition"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
