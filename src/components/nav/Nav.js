import React, { useState, useEffect, useRef, useCallback } from 'react';
import BurgerMenu from '../BurgerMenu';
import './Nav.css';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef(null);
  const initialNavPositionRef = useRef(null);
  const ticking = useRef(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        if (initialNavPositionRef.current === null) {
          const navRect = navRef.current.getBoundingClientRect();
          initialNavPositionRef.current = navRect.top + window.scrollY;
        }

        const scrollPosition = window.scrollY;
        const shouldBeSticky = scrollPosition > initialNavPositionRef.current;

        if (shouldBeSticky !== isSticky) {
          setIsSticky(shouldBeSticky);
        }

        ticking.current = false;
      });

      ticking.current = true;
    }
  }, [isSticky]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const handleResize = () => {
      initialNavPositionRef.current = null;
      handleScroll();
    };

    window.addEventListener('resize', handleResize);
    
    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [handleScroll]);

  useEffect(() => {
    if (isSticky) {
      document.body.style.paddingTop = `${navRef.current.offsetHeight}px`;
    } else {
      document.body.style.paddingTop = '0';
    }
  }, [isSticky]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    const navHeight = navRef.current.offsetHeight;
    const targetPosition = section.getBoundingClientRect().top + window.pageYOffset - navHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <nav 
      ref={navRef} 
      className={`nav ${isSticky ? 'sticky' : ''}`}
    >
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