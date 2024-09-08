import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Assurez-vous d'importer uniquement ce qui est nécessaire
import './index.css';
import Header from './components/Header/Header';
import Nav from './components/nav/Nav';
import Projets from './components/projets/Projets';
import Musique from './components/Musique';
import Tournage from './components/Tournage/Tournage';
import VisualEffects from './components/VisualEffects';
import Redacteur from './components/Redacteur';
import Theatre from './components/Theatre';
import Footer from './components/Footer';
import Skills from './components/skills/Skills';
import ReactGA from 'react-ga';

// Initialiser Google Analytics avec votre Tracking ID
const TRACKING_ID = 'G-Z8QS08ZWBQ';
ReactGA.initialize(TRACKING_ID);

// Hook pour suivre les changements de page
function usePageViews() {
  let location = useLocation();
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search); // Suivi de la page actuelle
  }, [location]);
}

function App() {
  usePageViews(); // Appel du hook pour suivre les pages visitées

  return (
    <>
      <Header />
      <Nav />
      <Skills />
      <Projets />
      <Musique />
      <Tournage />
      <VisualEffects />
      <Redacteur />
      <Theatre />
      <Footer />
    </>
  );
}

export default App;
