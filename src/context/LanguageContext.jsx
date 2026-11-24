import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    nav: {
      home: 'Home',
      dashboard: 'Dashboard',
      cropPrediction: 'Crop AI',
      soilAnalysis: 'Soil Scanner',
      climate: 'Climate & Weather',
      aiYield: 'AI Yield Predictor',
      guidance: 'Farming Guide',
      rentals: 'Equipment Rental',
      login: 'Login',
      signup: 'Sign Up',
      logout: 'Logout'
    },
    hero: {
      tagline: 'AI for Climate-Dependent Crops & High-Yield Farming',
      headline: 'A New Era in Smart Agricultural Intelligence',
      subhead: 'Harness the power of multi-spectral satellite telemetry, hyper-local meteorological forecasts, and machine learning to minimize risks, boost yields by >15%, and maximize farmer profits.',
      startNow: 'Get Started Free',
      exploreTools: 'Explore AI Tools',
      activeFarmers: '12,400+ Farmers Empowered',
      accuracyStat: '94.8% AI Prediction Accuracy',
      savingsStat: '₹18,500 Avg Profit Increase / Acre'
    },
    common: {
      selectState: 'Select State',
      selectCity: 'Select City',
      currentState: 'State',
      currentCity: 'City',
      temperature: 'Temperature',
      humidity: 'Humidity',
      rainfall: 'Rainfall',
      windSpeed: 'Wind Speed',
      acres: 'Acres',
      hectares: 'Hectares',
      loading: 'Loading live data...',
      calculate: 'Run Prediction',
      bookNow: 'Book Equipment',
      viewDetails: 'View Details',
      search: 'Search...',
      soilType: 'Soil Type',
      season: 'Season'
    }
  },
  hi: {
    nav: {
      home: 'होम',
      dashboard: 'डैशबोर्ड',
      cropPrediction: 'फसल सिफारिश',
      soilAnalysis: 'मिट्टी परीक्षण',
      climate: 'मौसम व जलवायु',
      aiYield: 'AI उपज अनुमान',
      guidance: 'कृषि मार्गदर्शन',
      rentals: 'उपकरण किराया',
      login: 'लॉग इन',
      signup: 'साइन अप',
      logout: 'लॉग आउट'
    },
    hero: {
      tagline: 'जलवायु-आधारित फसलों और उच्च उपज के लिए AI तकनीक',
      headline: 'स्मार्ट कृषि बुद्धिमत्ता का एक नया युग',
      subhead: 'उपग्रह डेटा, सटीक स्थानीय मौसम पूर्वानुमान और एआई का उपयोग करके फसल जोखिम घटाएं, पैदावार 15% से अधिक बढ़ाएं और अधिकतम मुनाफा कमाएं।',
      startNow: 'मुफ्त शुरुआत करें',
      exploreTools: 'AI टूल्स देखें',
      activeFarmers: '12,400+ संतुष्ट किसान',
      accuracyStat: '94.8% AI सटीकता',
      savingsStat: '₹18,500 औसत मुनाफा प्रति एकड़'
    },
    common: {
      selectState: 'राज्य चुनें',
      selectCity: 'शहर चुनें',
      currentState: 'राज्य',
      currentCity: 'शहर',
      temperature: 'तापमान',
      humidity: 'नमी',
      rainfall: 'वर्षा',
      windSpeed: 'हवा की गति',
      acres: 'एकड़',
      hectares: 'हेक्टेयर',
      loading: 'डेटा लोड हो रहा है...',
      calculate: 'अनुमान लगाएं',
      bookNow: 'उपकरण बुक करें',
      viewDetails: 'विवरण देखें',
      search: 'खोजें...',
      soilType: 'मिट्टी का प्रकार',
      season: 'मौसम'
    }
  },
  mr: {
    nav: {
      home: 'मुख्यपृष्ठ',
      dashboard: 'डॅशबोर्ड',
      cropPrediction: 'पीक शिफारस',
      soilAnalysis: 'माती परीक्षण',
      climate: 'हवामान अंदाज',
      aiYield: 'AI उत्पन्न अंदाज',
      guidance: 'शेती मार्गदर्शक',
      rentals: 'यंत्रसामग्री भाडे',
      login: 'लॉगिन',
      signup: 'नोंदणी',
      logout: 'बाहेर पडा'
    },
    hero: {
      tagline: 'हवामानावर आधारित पिके आणि भरघोस उत्पन्नासाठी कृत्रिम बुद्धिमत्ता',
      headline: 'स्मार्ट शेती तंत्रज्ञानाचे नवे पर्व',
      subhead: 'उपग्रह डेटा, स्थानिक हवामान अंदाज आणि अत्याधुनिक AI वापरून पिकातील जोखीम कमी करा, उत्पन्न 15% पेक्षा जास्त वाढवा.',
      startNow: 'मोफत सुरुवात करा',
      exploreTools: 'AI साधने पहा',
      activeFarmers: '१२,४००+ शेतकरी जोडले',
      accuracyStat: '९४.८% अचूकता',
      savingsStat: '₹१८,५०० नफा वाढ प्रति एकर'
    },
    common: {
      selectState: 'राज्य निवडा',
      selectCity: 'शहर निवडा',
      currentState: 'राज्य',
      currentCity: 'शहर',
      temperature: 'तापमान',
      humidity: 'आर्द्रता',
      rainfall: 'पाऊस',
      windSpeed: 'वाऱ्याचा वेग',
      acres: 'एकर',
      hectares: 'हेक्टर',
      loading: 'माहिती लोड होत आहे...',
      calculate: 'अंदाज काढा',
      bookNow: 'उपकरण बुक करा',
      viewDetails: 'तपशील पहा',
      search: 'शोधा...',
      soilType: 'मातीचा प्रकार',
      season: 'हंगाम'
    }
  },
  pa: {
    nav: {
      home: 'ਮੁੱਖ ਪੰਨਾ',
      dashboard: 'ਡੈਸ਼ਬੋਰਡ',
      cropPrediction: 'ਫਸਲ ਸਿਫ਼ਾਰਿਸ਼',
      soilAnalysis: 'ਮਿੱਟੀ ਦੀ ਜਾਂਚ',
      climate: 'ਮੌਸਮ ਜਾਣਕਾਰੀ',
      aiYield: 'AI ਝਾੜ ਅਨੁਮਾਨ',
      guidance: 'ਖੇਤੀ ਗਾਈਡ',
      rentals: 'ਸੰਦ ਕਿਰਾਏ ਤੇ',
      login: 'ਲਾਗਇਨ',
      signup: 'ਸਾਈਨ ਅੱਪ',
      logout: 'ਲਾਗਆਉਟ'
    },
    hero: {
      tagline: 'ਮੌਸਮ ਅਧਾਰਤ ਫਸਲਾਂ ਅਤੇ ਵੱਧ ਝਾੜ ਲਈ ਆਧੁਨਿਕ AI',
      headline: 'ਸਮਾਰਟ ਖੇਤੀਬਾੜੀ ਦਾ ਨਵਾਂ ਦੌਰ',
      subhead: 'ਸੈਟੇਲਾਈਟ ਡੇਟਾ ਅਤੇ ਸਹੀ ਮੌਸਮ ਅਨੁਮਾਨਾਂ ਨਾਲ ਫਸਲੀ ਨੁਕਸਾਨ ਘਟਾਓ ਅਤੇ ਮੁਨਾਫਾ ਵਧਾਓ।',
      startNow: 'ਮੁਫ਼ਤ ਸ਼ੁਰੂ ਕਰੋ',
      exploreTools: 'ਟੂਲ ਦੇਖੋ',
      activeFarmers: '੧੨,੪੦੦+ ਕਿਸਾਨ ਜੁੜੇ',
      accuracyStat: '੯੪.੮% ਸਹੀ ਨਤੀਜੇ',
      savingsStat: '₹੧੮,੫੦੦ ਮੁਨਾਫਾ ਪ੍ਰਤੀ ਏਕੜ'
    },
    common: {
      selectState: 'ਸੂਬਾ ਚੁਣੋ',
      selectCity: 'ਸ਼ਹਿਰ ਚੁਣੋ',
      currentState: 'ਸੂਬਾ',
      currentCity: 'ਸ਼ਹਿਰ',
      temperature: 'ਤਾਪਮਾਨ',
      humidity: 'ਨਮੀ',
      rainfall: 'ਮੀਂਹ',
      windSpeed: 'ਹਵਾ ਦੀ ਗਤੀ',
      acres: 'ਏਕੜ',
      hectares: 'ਹੈਕਟੇਅਰ',
      loading: 'ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...',
      calculate: 'ਅੰਦਾਜ਼ਾ ਲਗਾਓ',
      bookNow: 'ਮਸ਼ੀਨ ਬੁੱਕ ਕਰੋ',
      viewDetails: 'ਵੇਰਵੇ ਦੇਖੋ',
      search: 'ਖੋਜੋ...',
      soilType: 'ਮਿੱਟੀ ਦੀ ਕਿਸਮ',
      season: 'ਮੌਸਮ'
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('satyield_lang') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('satyield_lang', lang);
  }, [lang]);

  const t = (path) => {
    const parts = path.split('.');
    let curr = translations[lang] || translations.en;
    for (const p of parts) {
      if (curr && curr[p] !== undefined) {
        curr = curr[p];
      } else {
        // Fallback to english
        let fallback = translations.en;
        for (const fb of parts) {
          fallback = fallback?.[fb];
        }
        return fallback || path;
      }
    }
    return curr;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
