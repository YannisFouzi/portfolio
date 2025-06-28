import React from "react";
import ReactDOM from "react-dom/client";
import ReactGA from "react-ga4"; // Utiliser react-ga4 pour GA4
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// Initialiser GA4 avec votre identifiant de mesure (sécurisé via variable d'environnement)
const gaTrackingId = process.env.REACT_APP_GA_TRACKING_ID || "G-Z8QS08ZWBQ";
ReactGA.initialize(gaTrackingId);
ReactGA.send("pageview");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
