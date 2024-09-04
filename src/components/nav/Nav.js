import React, { useState, useEffect } from 'react';
import BurgerMenu from '../BurgerMenu';
import './Nav.css';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const nav = document.querySelector('nav');
    const navOffsetTop = nav.offsetTop;

    const handleScroll = () => {
      if (window.scrollY >= navOffsetTop - 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    window.scrollTo({
      top: section.offsetTop - 200,
      behavior: 'smooth',
    });
  };

  return (
    <nav className={isSticky ? 'sticky' : ''}>
      <div className="nav-container">
        <BurgerMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
        <ul className={menuOpen ? "nav-links open" : "nav-links"}>
          <li><a href="#competences" onClick={(e) => scrollToSection(e, '#competences')}>Compétences</a></li>
          <li><a href="#projets" onClick={(e) => scrollToSection(e, '#projets')}>Projets web</a></li>
          <li><a href="#musique" onClick={(e) => scrollToSection(e, '#musique')}>Musique</a></li>
          <li><a href="#tournage" onClick={(e) => scrollToSection(e, '#tournage')}>Tournage vidéo</a></li>
          <li><a href="#visual-effects" onClick={(e) => scrollToSection(e, '#visual-effects')}>Effet Visuel</a></li>
          <li><a href="#redacteur" onClick={(e) => scrollToSection(e, '#redacteur')}>Rédacteur</a></li>
          <li><a href="#theatre" onClick={(e) => scrollToSection(e, '#theatre')}>Théâtre</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
