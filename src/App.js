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
import NetflixAnimation from './components/NetflixAnimation/NetflixAnimation';
import Skills from './components/skills/Skills';

function App() {
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
      <NetflixAnimation />
      <Footer />
    </>
  );
}

export default App;
