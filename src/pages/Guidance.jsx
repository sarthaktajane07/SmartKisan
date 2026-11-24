import React, { useState } from 'react';
import {
  Award,
  Sprout,
  Droplets,
  ShieldAlert,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  Calendar,
  Layers,
  HelpCircle
} from 'lucide-react';

const CROP_STAGES = [
  {
    step: 1,
    title: 'Soil Preparation',
    icon: '🌱',
    subtitle: 'Deep Ploughing, Clod Crushing & Basal Nutrition',
    details: [
      'Perform primary deep summer ploughing with disc or mouldboard plough to expose resting weed seeds and pupae to intense sunlight.',
      'Incorporate 4-5 tons of well-rotted FYM (Farm Yard Manure) or 2 tons of vermicompost per acre 15 days before sowing.',
      'Broadcast basal fertilizer (DAP + MOP + Zinc Sulfate) and use rotavator to create a fine, friable seedbed.',
      'Prepare drainage ridges and furrows to avert waterlogging during monsoon downpours.'
    ]
  },
  {
    step: 2,
    title: 'Certified Seed Selection',
    icon: '🌰',
    subtitle: 'High Germination (>85%) & Disease Resistance',
    details: [
      'Purchase certified or foundation seeds from authorized Krishi Vigyan Kendra (KVK) or National Seeds Corporation (NSC).',
      'Conduct a floatation test in mild salt water to weed out hollow, damaged, or infected seeds.',
      'Perform mandatory seed treatment (FIR principle: Fungicide → Insecticide → Rhizobium/Trichoderma).',
      'Maintain recommended seed rate strictly to avoid plant overcrowding.'
    ]
  },
  {
    step: 3,
    title: 'Scientific Sowing',
    icon: '🌾',
    subtitle: 'Optimal Row Spacing & Sowing Depth',
    details: [
      'Sow seeds at optimal depth (3-5 cm for cereals and pulses; surface placement for fine seeds).',
      'Maintain inter-row spacing (e.g. 45x10 cm for soybean, 90x60 cm for Bt cotton) using tractor-drawn seed drills.',
      'Ensure adequate soil moisture is present in the top 10 cm layer at the time of sowing for uniform germination.'
    ]
  },
  {
    step: 4,
    title: 'Precision Water Management',
    icon: '💧',
    subtitle: 'Critical Stages & Drip Irrigation',
    details: [
      'Prioritize irrigation at critical growth stages: Crown Root Initiation (CRI) in wheat, flowering in soybean, and boll formation in cotton.',
      'Adopt micro-irrigation (Drip or Micro-Sprinkler) under PMKSY to save up to 45% water and improve nutrient uptake.',
      'Avoid flood irrigation during midday sun to minimize evaporation loss and thermal shock to roots.'
    ]
  },
  {
    step: 5,
    title: 'Nutrient & Foliar Feeding',
    icon: '🌿',
    subtitle: 'Split Nitrogen Doses & Micronutrient Sprays',
    details: [
      'Apply nitrogen in 2-3 split applications (at sowing, active tillering/branching, and pre-flowering).',
      'Never apply nitrogen fertilizer during cloudy or rain-forecast days to avoid leaching.',
      'Spray 1% 19:19:19 water-soluble NPK + 0.2% Boron at flowering to drastically boost flower retention and pod setting.'
    ]
  },
  {
    step: 6,
    title: 'Integrated Pest & Disease Control',
    icon: '🛡️',
    subtitle: 'IPM, Bio-Pesticides & Economic Threshold (ETL)',
    details: [
      'Install 5 pheromone traps per acre and yellow sticky sheets (10/acre) to monitor pest populations.',
      'Spray organic Neem Oil (10,000 ppm at 3ml/L) as first line of defense upon initial pest sighting.',
      'Apply systemic bio-fungicides (Trichoderma viride or Pseudomonas fluorescens) for soil-borne wilts.',
      'Spray chemical pesticides only when insect counts exceed official Economic Threshold Level (ETL).'
    ]
  }
];

const GOVT_SCHEMES = [
  {
    name: 'PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)',
    beneficiary: 'All Landholding Farmer Families',
    benefit: '₹6,000 per year directly transferred to bank account in 3 equal four-monthly installments.',
    portal: 'https://pmkisan.gov.in',
    status: 'Active'
  },
  {
    name: 'PMFBY (Pradhan Mantri Fasal Bima Yojana)',
    beneficiary: 'Farmers growing notified crops',
    benefit: 'Comprehensive crop loss cover against non-preventable natural risks at minimal 1.5% - 2% premium.',
    portal: 'https://pmfby.gov.in',
    status: 'Enrollment Open'
  },
  {
    name: 'Soil Health Card Scheme (SHC)',
    beneficiary: 'All Agricultural Landholders',
    benefit: 'Free physical & chemical soil analysis every 2 years including 12 key nutrient parameters and customized doses.',
    portal: 'https://soilhealth.dac.gov.in',
    status: 'Active'
  },
  {
    name: 'Kisan Credit Card (KCC) Scheme',
    beneficiary: 'Individual/joint farmers, tenant cultivators',
    benefit: 'Subsidized institutional credit up to ₹3,00,000 at effective 4% interest per annum on timely repayment.',
    portal: 'https://myscheme.gov.in/schemes/kcc',
    status: 'Instant Bank Sanction'
  },
  {
    name: 'PM-KUSUM (Solar Agricultural Pumps)',
    beneficiary: 'Individual farmers, cooperatives, panchayats',
    benefit: 'Up to 60% government subsidy to install standalone off-grid solar water pumps for reliable irrigation.',
    portal: 'https://pmkusum.mnre.gov.in',
    status: 'State Subsidy Open'
  }
];

export default function Guidance() {
  const [activeStep, setActiveStep] = useState(1);

  const step = CROP_STAGES.find((s) => s.step === activeStep) || CROP_STAGES[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#1B3B2F] via-[#23523B] to-[#2E4635] text-white rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-amber-400/30">
            <Award size={14} /> ICAR & KVK Approved Guidelines
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
            Comprehensive Farming Guidance & Government Schemes
          </h1>
          <p className="text-emerald-100 text-sm leading-relaxed">
            Follow the 6 proven stages of scientific crop husbandry, maximize grain quality, and access government subsidies and direct benefit transfers.
          </p>
        </div>
      </div>

      {/* 6-Stage Interactive Roadmap */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-heading text-2xl font-bold text-gray-900">
            6 Phased Stages of Scientific Farming
          </h2>
          <span className="text-xs text-gray-500 hidden sm:inline">
            Click any stage to view actionable protocols
          </span>
        </div>

        {/* Stage Selector Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {CROP_STAGES.map((s) => {
            const active = activeStep === s.step;
            return (
              <button
                key={s.step}
                onClick={() => setActiveStep(s.step)}
                className={`p-3.5 rounded-2xl text-left border transition-all duration-200 ${
                  active
                    ? 'bg-emerald-800 text-white border-emerald-800 shadow-md scale-102'
                    : 'bg-white text-gray-800 border-gray-200/80 hover:border-emerald-300 hover:bg-emerald-50/30'
                }`}
              >
                <div className="text-2xl mb-1.5">{s.icon}</div>
                <div className="text-[10px] uppercase font-bold text-amber-400">Step {s.step}</div>
                <div className="font-heading font-bold text-xs truncate">{s.title}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-xs space-y-6 animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{step.icon}</span>
              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                  Phase {step.step} Protocol
                </span>
                <h3 className="font-heading text-2xl font-black text-gray-900">{step.title}</h3>
              </div>
            </div>
            <p className="text-xs text-gray-500 font-medium">{step.subtitle}</p>
          </div>

          <div className="space-y-3">
            {step.details.map((detail, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-2xl bg-[#FAF9F5] border border-gray-200/70"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
                  {detail}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-2 flex items-center justify-between">
            <button
              onClick={() => setActiveStep(prev => Math.max(1, prev - 1))}
              disabled={activeStep === 1}
              className="text-xs font-bold text-emerald-800 disabled:opacity-30 hover:underline"
            >
              ← Previous Phase
            </button>
            <button
              onClick={() => setActiveStep(prev => Math.min(6, prev + 1))}
              disabled={activeStep === 6}
              className="text-xs font-bold text-emerald-800 disabled:opacity-30 hover:underline"
            >
              Next Phase →
            </button>
          </div>
        </div>
      </div>

      {/* Government Agricultural Schemes Catalog */}
      <div className="space-y-6 pt-4">
        <div>
          <h2 className="font-heading text-2xl font-bold text-gray-900">
            Official Government Farmer Schemes & Financial Aid
          </h2>
          <p className="text-xs text-gray-500">
            Direct DBT transfers, crop insurance subsidies, and institutional credit support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {GOVT_SCHEMES.map((scheme, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-xs hover:border-emerald-300 hover:shadow-lg transition space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 px-2.5 py-0.5 rounded-full">
                    {scheme.status}
                  </span>
                  <span className="text-xs text-gray-400">Govt. of India</span>
                </div>
                <h3 className="font-heading font-bold text-base text-gray-900">{scheme.name}</h3>
                <p className="text-xs text-emerald-800 font-semibold">For: {scheme.beneficiary}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{scheme.benefit}</p>
              </div>

              <div className="pt-3 border-t border-gray-100">
                <a
                  href={scheme.portal}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900"
                >
                  <span>Apply on Official Portal</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
