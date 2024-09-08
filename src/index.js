import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactGA from 'react-ga4';  // Utiliser react-ga4 pour GA4

// Initialiser GA4 avec votre identifiant de mesure
ReactGA.initialize('G-Z8QS08ZWBQ');  // Remplacez par votre propre identifiant de mesure GA4
ReactGA.send("pageview");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
