export const SOIL_DATABASE = {
  clay: {
    id: 'clay',
    name: 'Clay Soil (काळी चिकण माती)',
    description: 'Heavy, dense soil with very high water retention capacity. Excellent for water-intensive crops like Rice and Sugarcane, but needs good drainage to avoid aeration issues.',
    color: '#5D4037',
    properties: {
      ph: '6.5 - 7.5',
      nutrients: 'High',
      drainage: 'Slow / Poor',
      texture: 'Very Fine (<0.002 mm)',
      organicMatter: 'Moderate to High'
    },
    crops: [
      { name: 'Rice (Paddy)', icon: '🌾', suitability: '96%', tips: 'Ideal for puddling and submergence.' },
      { name: 'Wheat', icon: '🌾', suitability: '90%', tips: 'Ensure land is well leveled.' },
      { name: 'Sugarcane', icon: '🎋', suitability: '88%', tips: 'Deep rooting requires adequate aeration.' },
      { name: 'Cotton', icon: '🌿', suitability: '85%', tips: 'Avoid waterlogging during flowering.' }
    ],
    managementTips: [
      'Incorporate organic compost or vermicompost to improve soil structure and porosity.',
      'Avoid cultivating when excessively wet to prevent soil compaction and clod formation.',
      'Provide ridge and furrow drainage to prevent root rot during peak monsoons.'
    ]
  },
  sandy: {
    id: 'sandy',
    name: 'Sandy Soil (वाळूमय माती)',
    description: 'Light, coarse-grained soil that warms up quickly in the sun. Excellent drainage and root penetration, but requires frequent light watering and organic supplements due to rapid leaching.',
    color: '#D7CCC8',
    properties: {
      ph: '6.0 - 7.0',
      nutrients: 'Low',
      drainage: 'Rapid / Excellent',
      texture: 'Coarse (0.05 - 2 mm)',
      organicMatter: 'Low'
    },
    crops: [
      { name: 'Groundnut (Peanut)', icon: '🥜', suitability: '95%', tips: 'Loose texture facilitates peg penetration and pod formation.' },
      { name: 'Sunflower', icon: '🌻', suitability: '92%', tips: 'Deep taproot extracts subsoil moisture.' },
      { name: 'Maize', icon: '🌽', suitability: '88%', tips: 'Requires split doses of nitrogen.' },
      { name: 'Watermelon / Melons', icon: '🍉', suitability: '94%', tips: 'Loves warm sandy loams.' }
    ],
    managementTips: [
      'Apply Farm Yard Manure (FYM) or green manure (Dhaincha) to enhance water retention.',
      'Use drip irrigation or fertigation to minimize fertilizer leaching into deep groundwater.',
      'Mulch soil surfaces with crop residues to conserve topsoil moisture.'
    ]
  },
  loamy: {
    id: 'loamy',
    name: 'Loamy Soil (गाळाची उत्तम माती)',
    description: 'The agricultural gold standard! An optimum blend of sand, silt, and clay. Provides ideal aeration, moisture retention, and high nutrient availability for almost all crops.',
    color: '#8D6E63',
    properties: {
      ph: '6.0 - 7.5',
      nutrients: 'High',
      drainage: 'Balanced / Good',
      texture: 'Medium',
      organicMatter: 'High'
    },
    crops: [
      { name: 'Tomato', icon: '🍅', suitability: '98%', tips: 'High yield with balanced N-P-K.' },
      { name: 'Soybean', icon: '🫘', suitability: '96%', tips: 'Excellent nodulation and pod fill.' },
      { name: 'Cotton', icon: '🌿', suitability: '94%', tips: 'Balanced vegetative and boll growth.' },
      { name: 'Wheat', icon: '🌾', suitability: '95%', tips: 'Uniform germination and tillering.' }
    ],
    managementTips: [
      'Maintain regular crop rotation (legume-cereal cycles) to preserve natural fertility.',
      'Conduct annual soil testing to replenish specific micronutrients (Zinc, Boron).',
      'Minimal tillage helps preserve earthworm activity and soil microbial biomes.'
    ]
  },
  black: {
    id: 'black',
    name: 'Black Cotton Soil (रेगुर / काळी माती)',
    description: 'Rich in montmorillonite clay minerals, lime, iron, magnesium, and alumina. Highly moisture-retentive, swells when wet, and develops deep shrinkage cracks when dry which naturally aerates subsoil.',
    color: '#3E2723',
    properties: {
      ph: '7.2 - 8.5',
      nutrients: 'Very High',
      drainage: 'Moderate to Slow',
      texture: 'Clayey / Plastic',
      organicMatter: 'Moderate'
    },
    crops: [
      { name: 'Cotton', icon: '🌿', suitability: '98%', tips: 'The premier soil for Indian cotton!' },
      { name: 'Soybean', icon: '🫘', suitability: '95%', tips: 'Exceptional Kharif yields.' },
      { name: 'Sorghum (Jowar)', icon: '🌾', suitability: '92%', tips: 'Drought-tolerant staple.' },
      { name: 'Pigeonpea (Tur)', icon: '🌱', suitability: '90%', tips: 'Deep roots utilize subsoil moisture.' }
    ],
    managementTips: [
      'Prepare broad bed and furrows (BBF) to prevent surface water stagnation.',
      'Add single super phosphate (SSP) or gypsum if soil pH crosses 8.2.',
      'Sow immediately after first soaking monsoon showers to ensure ideal germination.'
    ]
  },
  silty: {
    id: 'silty',
    name: 'Silty Soil (बारीक गाळ)',
    description: 'Silky smooth, nutrient-dense soil found typically across river valleys and floodplains. Holds moisture better than sandy soil while remaining easy to cultivate.',
    color: '#A1887F',
    properties: {
      ph: '6.5 - 7.5',
      nutrients: 'High',
      drainage: 'Moderate',
      texture: 'Medium-fine',
      organicMatter: 'High'
    },
    crops: [
      { name: 'Wheat', icon: '🌾', suitability: '95%', tips: 'High tillering and grain weight.' },
      { name: 'Barley', icon: '🌾', suitability: '92%', tips: 'Tolerates cooler winter periods.' },
      { name: 'Mustard', icon: '🌼', suitability: '94%', tips: 'Fast early root establishment.' },
      { name: 'Vegetables', icon: '🥬', suitability: '91%', tips: 'Great for leafy greens and tubers.' }
    ],
    managementTips: [
      'Incorporate coarse organic material to avoid surface crusting after rains.',
      'Avoid heavy machinery on damp ground to prevent compaction.',
      'Mulch between rows to retain surface friability.'
    ]
  }
};
