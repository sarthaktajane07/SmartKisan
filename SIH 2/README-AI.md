SatYield AI Yield Prediction (Client Demo)

This adds a lightweight, client-side AI demo that predicts crop yields and provides actionable recommendations using live weather and soil metrics.

Files:
- services.js: Fetches coordinates (Open-Meteo Geocoding), weather (Open-Meteo), and soil metrics (SoilGrids) with graceful fallbacks.
- ai-engine.js: Feature engineering and a heuristic regression-like model to estimate yield (tons/ha) and generate irrigation/fertilization/pest tips.
- ai-yield.html: UI to select location, crop, and area; runs prediction and shows tips. Themed to match the site.

Usage:
1. Open ai-yield.html in a browser (served via a local server recommended to avoid CORS issues).
2. Choose State/City/Crop/Area and click Predict Yield.

Notes:
- The model is a simple heuristic for demo purposes. Replace with a trained model (e.g., TensorFlow.js or API) for production.
- APIs used are public and may rate-limit. The app includes fallbacks so the demo remains functional.
- Integrate navigation by linking to ai-yield.html from dashboard.html or menus.

Internationalization:
- Page includes i18n.js hook; add data-i18n attributes to labels to translate.

Security:
- Keys are not required for these public endpoints. For paid APIs, proxy calls through a backend.


