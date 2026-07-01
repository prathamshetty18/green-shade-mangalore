# Welcome to your project

# 🌳 GreenShade Mangalore 

> **Cooling our city, one mapped tree at a time.**
> Built for the SOSC Sahyadri Hackathon by Team Scorpio.

[![FastAPI](https://img.shields.io/badge/Backend-FastAPI-009688?logo=fastapi)](https://fastapi.tiangolo.com/)
[![PostGIS](https://img.shields.io/badge/Database-PostGIS-336791?logo=postgresql)](https://postgis.net/)
[![React](https://img.shields.io/badge/Frontend-React-61DAFB?logo=react)](https://reactjs.org/)

## 📖 About the Project
Mangalore is experiencing rapid loss of tree cover due to urban expansion, leading to severe Urban Heat Islands (UHI), worsening air pollution, and heightened flood risks. 

**GreenShade** is a hyper-local, community-driven platform empowering citizens to combat these issues through real-time geospatial mapping and organized action.

### ✨ Key Features
* **📍 Tree Mapping (Geospatial CRUD):** Users log and map specific tree locations using precision GPS, identifying species and health.
* **🌡️ Heat Visualization:** Interactive map layers showing neighborhood heat intensity mapped against canopy density using spatial interpolation.
* **🛡️ Crowdsourced Data:** Community reporting of deforested areas, illegal cutting, and consensus-based validation of existing tree status.
* **📅 Replanting Events:** Coordinate local replanting drives, manage RSVPs via geolocation, and track community impact over time.

---

## 🛠️ Technology Stack
Our platform utilizes a decoupled architecture designed for high concurrency and heavy geospatial querying:

* **Frontend:** React.js / React Native (PWA for mobile accessibility)
* **Backend:** Python + FastAPI
* **Database:** PostgreSQL with PostGIS extension (for spatial indexing and radius queries)
* **Mapping Engine:** Mapbox GL JS / Leaflet
* **Storage:** AWS S3 / Firebase (for user-uploaded photos)
* **External APIs:** OpenWeather API (Heat/Humidity) & ISRO Bhuvan (Satellite NDVI)

---

## 🚀 Future Milestones & Monetization

### Revenue Model (Carbon Credits)
* **Tokenize:** Turn mapped trees into digital carbon credits.
* **Sell:** Companies buy credits to meet CSR/ESG goals.
* **Fund:** Revenue supports local NGOs and platform maintenance.

### Roadmap
* **AI Vision:** Automatically identify tree species and health from user-uploaded photos.
* **B2B Portal:** Launch a dedicated marketplace API for companies to track and buy carbon credits.
* **Govt Sync:** Establish data pipelines with the municipal corporation for automated deforestation alerts and data-driven urban planning.

---

## 👥 Team Scorpio
Developed by students from NMAM Institute of Technology:
* **Prathvik A Shetty** (Lead)
* **Nishmith**
* **Abhijna Laxmi**
* **Pratham Shetty**

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

It is prototype 
