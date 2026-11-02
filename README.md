# Korede Oyebamiji — AI & Machine Learning Developer Portfolio

Production portfolio website for **Korede Oyebamiji**, Certified Artificial Intelligence and Machine Learning Developer (Robotics and Artificial Intelligence Nigeria — RAIN).

## Featured Projects Documented in This Portfolio

1. **Naija Price AI** — Nigerian Food-Price Intelligence & Retailer Restocking Platform (`XGBoost`, `RandomForestRegressor`, `IsolationForest` + Robust Z-Score anomaly detection, `FastAPI`, `SQLAlchemy`, `React 18`, `Recharts`, `React-Leaflet`).
2. **Financial Fraud Detection (AEGIS Risk Engine)** — Imbalanced payment fraud detection system (`LightGBM` with `scale_pos_weight`, `IsolationForest` hybrid ensemble, `SHAP TreeExplainer`, 19 velocity/geospatial features, `FastAPI`, `Streamlit`, `pytest`).
3. **Face Attendance System** ([`korede90/face-attendance`](https://github.com/korede90/face-attendance)) — Computer vision staff attendance web app using `Python`, `Flask`, `OpenCV` Haar Cascade frontal face detection, and a 5-nearest-neighbor `scikit-learn` `KNeighborsClassifier` trained on flattened `50×50` RGB facial crops.
4. **Flight Price Prediction** ([`korede90/Flight-price-prediction`](https://github.com/korede90/Flight-price-prediction)) — Full-stack airfare estimation prototype combining a `scikit-learn` `LinearRegression` model (`flight_model.pkl`), a `Flask` `/predict` REST API, and a `React + Vite` itinerary form.

## Technology Stack

- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`) with editorial typography (`Instrument Serif`, `Plus Jakarta Sans`, `JetBrains Mono`)
- **Icons:** `lucide-react`
- **Automated Testing:** Vitest + React Testing Library (`jsdom`)

## Local Development

### Prerequisites
- Node.js `v18+` (tested on `v24.19.0`) and `npm`

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Local Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Run Automated Tests
```bash
npm test
```

### 4. Build for Production
```bash
npm run build
```
The optimized static production bundle is emitted to the `dist/` directory.

### 5. Preview the Production Build Locally
```bash
npm run preview
```

## Deployment Instructions

Because this application compiles to a static bundle in `dist/` with zero required runtime environment variables, it can be deployed directly to:
- **Vercel:** Import the repository, select the `Vite` framework preset (`npm run build`, output directory `dist`), and deploy.
- **GitHub Pages / Netlify / Render Static Site:** Build with `npm run build` and publish the `dist/` folder.
