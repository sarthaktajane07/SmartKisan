// Lightweight client-side AI engine for yield prediction and recommendations
// Exposes window.SYAI with two functions: predictYield and getRecommendations

(function () {
    // Feature engineering: normalize inputs to reasonable scales
    function engineerFeatures(input) {
        const { crop, area, unit, weather, soil } = input;
        const areaHa = unit === 'hectares' ? area : area * 0.404686; // acres -> hectares
        const temp = weather.temperature; // C
        const humidity = weather.humidity; // %
        const rain = weather.rainfall; // mm (current/hour-ish proxy)
        const wind = weather.windSpeed; // km/h
        const ph = soil.ph; // pH
        const soc = soil.soc; // g/kg

        // Crop baseline yields (tons/ha) for demo. Extend as needed.
        const baseline = {
            Rice: 3.5,
            Wheat: 3.0,
            Soybean: 2.2,
            Maize: 4.5,
            Cotton: 2.0,
            Sugarcane: 70.0 // tons/ha for cane
        };

        const base = baseline[crop] ?? 3.0;

        return { areaHa, temp, humidity, rain, wind, ph, soc, base };
    }

    // Simple regression-like function combining features
    function model(features) {
        const { base, temp, humidity, rain, wind, ph, soc } = features;
        // Ideal ranges (rough heuristics). Scores in [-1, +1].
        const scoreTemp = 1 - Math.min(Math.abs(26 - temp) / 12, 1); // best ~26C
        const scoreHum = 1 - Math.min(Math.abs(65 - humidity) / 40, 1); // best ~65%
        const scoreRain = 1 - Math.min(Math.abs(4 - rain) / 4, 1); // light precip proxy
        const scoreWind = 1 - Math.min(wind / 25, 1); // lower is better
        const scorePh = 1 - Math.min(Math.abs(6.5 - ph) / 1.5, 1); // best ~6.5
        const scoreSoc = Math.min(soc / 18, 1); // richer organic carbon better up to ~18 g/kg

        // Weighted combination
        const env = 0.22 * scoreTemp + 0.18 * scoreHum + 0.15 * scoreRain + 0.05 * scoreWind + 0.2 * scorePh + 0.2 * scoreSoc;
        const multiplier = 0.7 + env * 0.6; // 0.7..1.3
        return base * multiplier; // tons/ha
    }

    function predictYield(input) {
        const f = engineerFeatures(input);
        const tonsPerHa = model(f);
        const totalTons = tonsPerHa * Math.max(f.areaHa, 0);
        // Basic confidence from feature proximity
        const confidence = Math.round((tonsPerHa / (f.base * 1.3)) * 100);
        return { tonsPerHa: round2(tonsPerHa), totalTons: round2(totalTons), confidence: Math.max(40, Math.min(95, confidence)) };
    }

    function getRecommendations(input) {
        const { crop, weather, soil } = input;
        const tips = [];
        // Irrigation
        if (weather.rainfall < 2) tips.push('Irrigate lightly in the evening to maintain soil moisture.');
        else tips.push('Delay irrigation while rainfall persists to avoid waterlogging.');
        // Fertilization based on pH and SOC
        if (soil.ph < 6.2) tips.push('Apply lime to raise soil pH towards 6.5 for better nutrient uptake.');
        if (soil.ph > 7.2) tips.push('Incorporate elemental sulfur or organic matter to lower pH slightly.');
        if (soil.soc < 10) tips.push('Add 5–10 tons/ha of compost or FYM to increase organic carbon.');
        else tips.push('Maintain organic matter with crop residues and green manures.');
        // Pest/Disease risk heuristic via humidity
        if (weather.humidity > 75) tips.push('High humidity: scout for fungal diseases; prefer preventive bio-fungicides.');
        // Crop-specific
        if (/rice/i.test(crop)) tips.push('Keep field puddled during establishment; ensure proper drainage after tillering.');
        if (/wheat/i.test(crop)) tips.push('Top-dress nitrogen at crown-root initiation and before flowering.');
        if (/soy/i.test(crop)) tips.push('Use inoculated seed; avoid waterlogging during early growth.');
        if (/maize/i.test(crop)) tips.push('Ensure adequate Zn; maintain uniform plant population for optimal cobs.');
        if (/cotton/i.test(crop)) tips.push('Monitor bollworm; maintain 45–60 cm intra-row spacing for airflow.');
        if (/sugarcane/i.test(crop)) tips.push('Furrow irrigation preferred; maintain trash mulching to conserve moisture.');

        return tips;
    }

    function round2(x) { return Math.round(x * 100) / 100; }

    window.SYAI = {
        predictYield,
        getRecommendations
    };
})();


