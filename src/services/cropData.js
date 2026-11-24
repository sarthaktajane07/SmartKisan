export const CROP_DATABASE = {
  mumbai: {
    kharif: [
      {
        id: 'mum-k-1',
        name: 'Rice (Paddy)',
        type: 'Cereal',
        icon: '🌾',
        yield: '3.2 tons/acre',
        profitability: '85%',
        profit: 45000,
        maxProfit: 60000,
        cost: 22000,
        waterReq: 'High',
        growthDuration: '110-130 days',
        suitableSoil: 'Clay / Loamy',
        description: "High-yielding rice variety suitable for Maharashtra's coastal belt with good water availability.",
        features: ['High yield potential', 'Stable market demand', 'Tolerant to high humidity', 'Resistant to mild salinity'],
        npk: { n: 100, p: 50, k: 50 }
      },
      {
        id: 'mum-k-2',
        name: 'Cotton',
        type: 'Cash Crop',
        icon: '🌿',
        yield: '2.8 bales/acre',
        profitability: '78%',
        profit: 52000,
        maxProfit: 70000,
        cost: 28000,
        waterReq: 'Medium',
        growthDuration: '150-180 days',
        suitableSoil: 'Black Cotton / Loam',
        description: 'Premium fiber crop with high export and domestic mill demand.',
        features: ['High fiber quality', 'Good drought resilience', 'Attractive market price', 'Intercropping friendly'],
        npk: { n: 80, p: 40, k: 40 }
      },
      {
        id: 'mum-k-3',
        name: 'Sugarcane',
        type: 'Cash Crop',
        icon: '🎋',
        yield: '65 tons/acre',
        profitability: '92%',
        profit: 68000,
        maxProfit: 80000,
        cost: 38000,
        waterReq: 'High',
        growthDuration: '300-360 days',
        suitableSoil: 'Deep Loam / Clay',
        description: 'High-sugar content cash crop with guaranteed factory procurement.',
        features: ['High biomass', 'Long growing season', 'FRP assured prices', 'Ratoon crop savings'],
        npk: { n: 150, p: 60, k: 60 }
      }
    ],
    rabi: [
      {
        id: 'mum-r-1',
        name: 'Wheat',
        type: 'Cereal',
        icon: '🌾',
        yield: '2.5 tons/acre',
        profitability: '74%',
        profit: 32000,
        maxProfit: 45000,
        cost: 18000,
        waterReq: 'Medium',
        growthDuration: '110-120 days',
        suitableSoil: 'Loamy / Clay',
        description: 'Sturdy winter grain with solid MSP support and high household utility.',
        features: ['Good milling quality', 'Rust resistant', 'Low pest incidence in winter', 'MSP guaranteed'],
        npk: { n: 120, p: 60, k: 40 }
      },
      {
        id: 'mum-r-2',
        name: 'Chickpea (Gram)',
        type: 'Pulse',
        icon: '🫘',
        yield: '1.8 tons/acre',
        profitability: '88%',
        profit: 38000,
        maxProfit: 50000,
        cost: 16000,
        waterReq: 'Low',
        growthDuration: '90-105 days',
        suitableSoil: 'Sandy Loam / Black Soil',
        description: 'Nitrogen-fixing pulse requiring minimal irrigation and producing rich protein yield.',
        features: ['Atmospheric nitrogen fixation', 'High market rate', 'Drought tolerant', 'Low fertilizer input'],
        npk: { n: 20, p: 50, k: 20 }
      }
    ]
  },
  nagpur: {
    kharif: [
      {
        id: 'nag-k-1',
        name: 'Soybean',
        type: 'Oilseed',
        icon: '🫘',
        yield: '2.2 tons/acre',
        profitability: '95%',
        profit: 48000,
        maxProfit: 62000,
        cost: 20000,
        waterReq: 'Medium',
        growthDuration: '90-100 days',
        suitableSoil: 'Black Soil / Fertile Loam',
        description: 'Prime cash crop of Vidarbha region with heavy oil mill and export demand.',
        features: ['Quick harvest cycle', 'Improves soil health', 'Excellent liquidity', 'Suited for Nagpur black soil'],
        npk: { n: 30, p: 60, k: 40 }
      },
      {
        id: 'nag-k-2',
        name: 'Cotton (Bt)',
        type: 'Cash Crop',
        icon: '🌿',
        yield: '3.1 bales/acre',
        profitability: '82%',
        profit: 55000,
        maxProfit: 75000,
        cost: 29000,
        waterReq: 'Medium',
        growthDuration: '150-170 days',
        suitableSoil: 'Deep Black Cotton Soil',
        description: 'High boll retention variety tailored for Vidarbha warm conditions.',
        features: ['Bollworm resistance', 'High ginning outturn', 'High yield potential', 'Good export demand'],
        npk: { n: 90, p: 45, k: 45 }
      },
      {
        id: 'nag-k-3',
        name: 'Maize',
        type: 'Cereal / Fodder',
        icon: '🌽',
        yield: '3.8 tons/acre',
        profitability: '86%',
        profit: 42000,
        maxProfit: 58000,
        cost: 19000,
        waterReq: 'Medium',
        growthDuration: '85-100 days',
        suitableSoil: 'Well-drained Loam',
        description: 'Versatile cereal for food, feed, and starch industries.',
        features: ['High photosynthesis efficiency', 'Short duration', 'Dual purpose fodder & grain', 'Strong buyer network'],
        npk: { n: 120, p: 60, k: 50 }
      }
    ],
    rabi: [
      {
        id: 'nag-r-1',
        name: 'Wheat (Sharbati)',
        type: 'Cereal',
        icon: '🌾',
        yield: '2.4 tons/acre',
        profitability: '78%',
        profit: 36000,
        maxProfit: 48000,
        cost: 18000,
        waterReq: 'Medium',
        growthDuration: '115 days',
        suitableSoil: 'Black Soil / Loam',
        description: 'Golden Sharbati wheat command premium price in central Indian markets.',
        features: ['High protein & lustre', 'Good chapati quality', 'Premium market rates', 'Low disease incidence'],
        npk: { n: 100, p: 50, k: 40 }
      },
      {
        id: 'nag-r-2',
        name: 'Mustard',
        type: 'Oilseed',
        icon: '🌼',
        yield: '1.7 tons/acre',
        profitability: '89%',
        profit: 41000,
        maxProfit: 55000,
        cost: 15000,
        waterReq: 'Low',
        growthDuration: '100-110 days',
        suitableSoil: 'Loam to Sandy Loam',
        description: 'High oil percentage brassica crop requiring only 2-3 light irrigations.',
        features: ['Low water requirement', 'High oil content', 'Cold weather tolerant', 'Honeybee pollinator boost'],
        npk: { n: 80, p: 40, k: 30 }
      }
    ]
  },
  pune: {
    kharif: [
      {
        id: 'pun-k-1',
        name: 'Sugarcane',
        type: 'Cash Crop',
        icon: '🎋',
        yield: '70 tons/acre',
        profitability: '94%',
        profit: 74000,
        maxProfit: 90000,
        cost: 40000,
        waterReq: 'High',
        growthDuration: '320 days',
        suitableSoil: 'Black / Loamy',
        description: 'Thriving in Pune-Western Maharashtra sugarcane cooperative hub.',
        features: ['High recovery rate', 'Proximity to mills', 'Assured revenue', 'Intercropping options'],
        npk: { n: 160, p: 60, k: 60 }
      },
      {
        id: 'pun-k-2',
        name: 'Soybean',
        type: 'Oilseed',
        icon: '🫘',
        yield: '2.1 tons/acre',
        profitability: '88%',
        profit: 44000,
        maxProfit: 58000,
        cost: 21000,
        waterReq: 'Medium',
        growthDuration: '95 days',
        suitableSoil: 'Medium Loam',
        description: 'Standard kharif staple crop for western Maharashtra plains.',
        features: ['Safe return', 'Short duration', 'Improves soil organic nitrogen'],
        npk: { n: 30, p: 60, k: 40 }
      }
    ],
    rabi: [
      {
        id: 'pun-r-1',
        name: 'Onion (Rabi)',
        type: 'Horticulture',
        icon: '🧅',
        yield: '12 tons/acre',
        profitability: '96%',
        profit: 85000,
        maxProfit: 120000,
        cost: 45000,
        waterReq: 'Medium',
        growthDuration: '120-140 days',
        suitableSoil: 'Friable Sandy Loam',
        description: 'Famous Lasalgaon/Pune rabi onion with exceptional storage longevity.',
        features: ['High market elasticity', 'Export quality', 'Excellent shelf life in chawl storage'],
        npk: { n: 100, p: 50, k: 80 }
      },
      {
        id: 'pun-r-2',
        name: 'Wheat',
        type: 'Cereal',
        icon: '🌾',
        yield: '2.6 tons/acre',
        profitability: '76%',
        profit: 34000,
        maxProfit: 46000,
        cost: 18000,
        waterReq: 'Medium',
        growthDuration: '110 days',
        suitableSoil: 'Loamy',
        description: 'Reliable winter grain following kharif soybean.',
        features: ['Low risk', 'Consistent production', 'Low maintenance'],
        npk: { n: 120, p: 60, k: 40 }
      }
    ]
  }
};

export function getRecommendedCrops(city = 'nagpur', season = 'kharif') {
  const normCity = (city || 'nagpur').toLowerCase();
  const cityData = CROP_DATABASE[normCity] || CROP_DATABASE['nagpur'];
  return cityData[season] || cityData['kharif'] || [];
}
