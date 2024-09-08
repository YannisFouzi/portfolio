import React from 'react';
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
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4'; // Import GA4

function usePageViews() {
  const location = useLocation();
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);
}

function App() {
  usePageViews();
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
