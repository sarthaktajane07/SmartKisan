// SatYield AI Prediction Engine

export function predictYield(input) {
  const { crop, area = 1, unit = 'acres', weather = {}, soil = {} } = input;

  const areaHa = unit === 'hectares' ? area : area * 0.404686;
  const temp = weather.temperature ?? 28;
  const humidity = weather.humidity ?? 65;
  const rain = weather.rainfall ?? 2.5;
  const wind = weather.windSpeed ?? 8;
  const ph = soil.ph ?? 6.8;
  const soc = soil.soc ?? 14;

  const baselines = {
    Rice: { tonsPerHa: 3.8, marketPricePerTon: 22000, costPerHa: 35000 },
    Wheat: { tonsPerHa: 3.4, marketPricePerTon: 24000, costPerHa: 30000 },
    Soybean: { tonsPerHa: 2.3, marketPricePerTon: 46000, costPerHa: 26000 },
    Maize: { tonsPerHa: 4.8, marketPricePerTon: 21000, costPerHa: 32000 },
    Cotton: { tonsPerHa: 2.2, marketPricePerTon: 62000, costPerHa: 42000 },
    Sugarcane: { tonsPerHa: 72.0, marketPricePerTon: 3500, costPerHa: 80000 },
    Chickpea: { tonsPerHa: 1.9, marketPricePerTon: 54000, costPerHa: 24000 },
    Mustard: { tonsPerHa: 1.8, marketPricePerTon: 52000, costPerHa: 22000 },
    Groundnut: { tonsPerHa: 2.5, marketPricePerTon: 58000, costPerHa: 34000 }
  };

  const cropMeta = baselines[crop] || { tonsPerHa: 3.0, marketPricePerTon: 30000, costPerHa: 30000 };

  // Heuristic environmental scores [-1 to 1]
  const scoreTemp = 1 - Math.min(Math.abs(26 - temp) / 12, 1);
  const scoreHum = 1 - Math.min(Math.abs(65 - humidity) / 40, 1);
  const scoreRain = 1 - Math.min(Math.abs(4 - rain) / 4, 1);
  const scoreWind = 1 - Math.min(wind / 25, 1);
  const scorePh = 1 - Math.min(Math.abs(6.5 - ph) / 1.5, 1);
  const scoreSoc = Math.min(soc / 18, 1);

  const envScore = 0.22 * scoreTemp + 0.18 * scoreHum + 0.15 * scoreRain + 0.05 * scoreWind + 0.20 * scorePh + 0.20 * scoreSoc;
  const multiplier = Math.max(0.65, Math.min(1.35, 0.75 + envScore * 0.5));

  const yieldPerHa = Number((cropMeta.tonsPerHa * multiplier).toFixed(2));
  const yieldPerAcre = Number((yieldPerHa * 0.404686).toFixed(2));
  const totalYield = Number((yieldPerHa * areaHa).toFixed(2));

  const grossRevenue = Math.round(totalYield * cropMeta.marketPricePerTon);
  const totalCost = Math.round(areaHa * cropMeta.costPerHa);
  const estimatedProfit = Math.max(0, grossRevenue - totalCost);
  const confidence = Math.round(Math.min(96, Math.max(78, 85 + (envScore * 10))));

  const riskLevel = envScore > 0.6 ? 'Low' : envScore > 0.35 ? 'Moderate' : 'High';

  return {
    crop,
    area,
    unit,
    yieldPerHa,
    yieldPerAcre,
    totalYield,
    confidence,
    estimatedProfit,
    grossRevenue,
    riskLevel,
    envScore: Math.round(envScore * 100),
    recommendations: generateRecommendations({ crop, temp, humidity, rain, ph, soc })
  };
}

export function generateRecommendations({ crop, temp, humidity, rain, ph, soc }) {
  const tips = [];

  // Soil pH tips
  if (ph < 6.0) {
    tips.push({
      category: 'Soil Health',
      type: 'warning',
      text: 'Soil is moderately acidic (pH < 6.0). Apply agricultural lime (dolomite) at 200-300 kg/acre prior to sowing.'
    });
  } else if (ph > 7.8) {
    tips.push({
      category: 'Soil Health',
      type: 'warning',
      text: 'Soil is moderately alkaline (pH > 7.8). Apply gypsum or composted organic manure to improve nutrient availability.'
    });
  } else {
    tips.push({
      category: 'Soil Health',
      type: 'success',
      text: `Soil pH (${ph}) is in the optimal sweet spot for ${crop}. Micronutrient availability is excellent.`
    });
  }

  // Irrigation & weather tips
  if (rain < 1.0) {
    tips.push({
      category: 'Irrigation',
      type: 'info',
      text: 'Low ambient moisture detected. Schedule drip or furrow irrigation every 4-6 days to prevent moisture stress.'
    });
  } else if (rain > 15.0) {
    tips.push({
      category: 'Drainage',
      type: 'warning',
      text: 'Heavy rainfall conditions. Ensure field drainage channels are clear to prevent root waterlogging and fungal rots.'
    });
  } else {
    tips.push({
      category: 'Irrigation',
      type: 'success',
      text: 'Adequate soil moisture levels. Maintain standard moisture checks at 10-15 cm soil depth.'
    });
  }

  // Humidity & Pest tips
  if (humidity > 75 && temp > 26) {
    tips.push({
      category: 'Pest & Disease Alert',
      type: 'alert',
      text: 'High humidity combined with warm temperatures increases blast, rust, and aphid incidence. Scout fields weekly and apply preventive bio-fungicides (Trichoderma).'
    });
  } else {
    tips.push({
      category: 'Crop Protection',
      type: 'info',
      text: 'Climate conditions are stable. Use yellow sticky traps and pheromone traps for pest monitoring.'
    });
  }

  // Organic matter / Fertilizer tips
  if (soc < 12) {
    tips.push({
      category: 'Nutrition',
      type: 'info',
      text: 'Organic carbon is low. Top-dress with 2 tons/acre well-rotted FYM (Farm Yard Manure) or vermicompost.'
    });
  } else {
    tips.push({
      category: 'Nutrition',
      type: 'success',
      text: 'Rich organic carbon level. Optimal soil microbiological activity detected.'
    });
  }

  return tips;
}
