# 🌾 SatYield / SmartKisan (React Edition)

> **Next-Gen Agricultural Intelligence Platform built with React, Vite, Tailwind CSS, Lucide Icons, and React Router.**
> Converted from the original SIH prototype to a modern, responsive Single-Page Application (SPA).

---

## 🌟 Key Features

1. **🌾 AI Yield Predictor (`/ai-yield`)**
   - Integrates live meteorological telemetry (**Open-Meteo**) & soil organic density (**SoilGrids**).
   - Heuristic regression engine estimating harvest tonnage (tons/ha & tons/acre), gross revenue, and farmer net profit.
   - Actionable agronomic advisories on irrigation, fertilizer dosing, and pest management.

2. **🌱 Intelligent Crop Recommendation (`/crop-prediction`)**
   - Personalized crop suggestions based on location, season (Kharif, Rabi), and soil type.
   - Interactive N-P-K nutrient and soil pH sliders with real-time match percentage and expected profit.

3. **🧪 Precision Soil Scanner (`/soil-analysis`)**
   - Deep dive into Clay, Sandy, Loamy, Silty, and Black Cotton soils.
   - Interactive chemical simulator for N-P-K nutrient status and custom fertilizer prescriptions.

4. **🌦️ Hyper-Local Climate Insights (`/climate-insights`)**
   - 7-day meteorological forecast cards.
   - Foliar pesticide spray windows based on wind velocity & rain probability.

5. **🚜 Farm Machinery Rentals Marketplace (`/rentals`)**
   - Verified tractors (45-50 HP), rotary tillers, seeders, boom sprayers, and combine harvesters.
   - Filter by location & category; interactive booking modal with hourly/daily pricing calculator.

6. **📋 6-Stage Farming Guide & Schemes (`/guidance`)**
   - Step-by-step scientific guide: Soil prep → Seed selection → Sowing → Irrigation → Nutrition → Pest control.
   - Direct access and eligibility criteria for **PM-KISAN**, **PMFBY**, **Soil Health Card**, **KCC**, and **PM-KUSUM**.

7. **🤖 Kisan Sahayak AI Assistant (Floating Chatbot)**
   - Always-accessible agricultural assistant with agricultural knowledge base.
   - Voice speech input (SpeechRecognition) and audio read-aloud responses (SpeechSynthesis).
   - Instant quick prompt suggestions.

8. **🌐 Multi-Language Support**
   - Support for **English**, **Hindi (हिन्दी)**, **Marathi (मराठी)**, and **Punjabi (ਪੰਜਾਬੀ)**.

---

## 🚀 Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```

Visit `http://localhost:3000` (or the port shown in terminal).

To create a production build:
```bash
npm run build
```
The compiled, optimized static files are generated in the `dist/` directory.

---

## 🌐 How to Host This Project (Choose Any Option)

### Option 1: Vercel (Recommended — Free & 1-Minute Setup)

**Via Vercel Web Dashboard:**
1. Push your code to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New Project"** and import your GitHub repo.
4. Framework Preset: **Vite** (auto-detected).
5. Click **"Deploy"**. Done!

**Via Vercel CLI (No GitHub required):**
```bash
npm install -g vercel
vercel
```
*(The repository already includes `vercel.json` configured for SPA routing)*

---

### Option 2: Netlify (Drag-and-Drop or CLI)

**Method A: Drag-and-Drop (Instant 30-Second Hosting)**
1. Run `npm run build` in your terminal.
2. Open [app.netlify.com/drop](https://app.netlify.com/drop) in your browser.
3. Drag and drop the generated `dist/` folder into the drop zone.
4. Your website is live immediately with a free `.netlify.app` URL!

**Method B: Netlify CLI**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```
*(The repository already includes `netlify.toml` and `public/_redirects` to handle client-side routing)*

---

### Option 3: GitHub Pages

1. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Deploy directly:
   ```bash
   npm run deploy:gh
   ```
*(A fallback `404.html` is included in `public/` so refreshed sub-routes work on GitHub Pages)*

---

### Option 4: Docker / VPS / Render / Railway

The repository includes a ready-to-use production `Dockerfile` and `nginx.conf`:

```bash
# Build Docker image
docker build -t satyield-smartkisan .

# Run on port 80
docker run -p 80:80 satyield-smartkisan
```
Or connect your GitHub repo to **Render** or **Railway** and select "Docker" or "Static Site" (Publish directory: `dist`).

---

## 📁 Project Directory Structure

```
├── dist/                  # Production-ready compiled bundle
├── public/                # Static public assets (equipment photos, icons, redirects)
│   ├── assets/            # Equipment images (one.png, two.png, etc.)
│   ├── _redirects         # SPA redirect for Netlify
│   └── 404.html           # SPA fallback for GitHub Pages
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Navbar.jsx     # Navigation, language switch, location pill, user profile
│   │   ├── Footer.jsx     # Brand footer, helpline, government portals
│   │   └── Chatbot.jsx    # Floating AI Kisan Sahayak with voice & audio
│   ├── context/           # React Context Providers
│   │   ├── AuthContext.jsx       # User auth & profile persistence
│   │   ├── LanguageContext.jsx   # Multi-language dictionary (EN, HI, MR, PA)
│   │   └── LocationContext.jsx   # Geocoding, live weather & soil cache
│   ├── pages/             # All application views
│   │   ├── Home.jsx              # Landing page
│   │   ├── Dashboard.jsx         # Farmer dashboard with widgets
│   │   ├── AiYield.jsx           # AI Yield & profit prediction tool
│   │   ├── CropPrediction.jsx    # Crop recommendation engine
│   │   ├── SoilAnalysis.jsx      # Soil scanner & NPK fertilizer prescription
│   │   ├── ClimateInsights.jsx   # Weather forecast & spray window
│   │   ├── Guidance.jsx          # 6-stage farming guide & govt schemes
│   │   ├── Rentals.jsx           # Equipment rental marketplace & booking modal
│   │   ├── CitySelection.jsx     # State/City selection & GPS auto-detect
│   │   ├── Login.jsx             # Password/OTP login
│   │   └── Signup.jsx            # Farmer registration
│   ├── services/          # Data & AI algorithms
│   │   ├── aiEngine.js           # Yield prediction heuristic regression
│   │   ├── api.js                # Open-Meteo & SoilGrids fetchers
│   │   ├── cropData.js           # Comprehensive crop recommendations dataset
│   │   ├── soilData.js           # Soil types and management tips
│   │   └── rentalsData.js        # Machinery listings and specifications
│   ├── App.jsx            # Main app router
│   ├── main.jsx           # Entry point
│   └── index.css          # Tailwind CSS styling
├── Dockerfile             # Multi-stage production container
├── nginx.conf             # Nginx server configuration
├── vercel.json            # Vercel deployment configuration
├── netlify.toml           # Netlify build configuration
├── vite.config.js         # Vite configuration
└── package.json           # Project manifest & scripts
```
