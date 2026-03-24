import React, { useState, useEffect } from "react";
import { faServer, faHardDrive, faCode, faCloud, faFilm } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Serveur.css";

import nas0 from "../../img/nas/0.png";
import nas1 from "../../img/nas/1.png";
import nas2 from "../../img/nas/2.png";
import nas4 from "../../img/nas/4.png";

function Serveur() {
  const images = [nas0, nas1, nas2, nas4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <aside id="serveur">
      <div className="container">
        <h2>Serveur Maison</h2>
        
        <div className="serveur-content">
          <div className="serveur-slideshow">
            <img 
              src={images[currentIndex]} 
              alt={`NAS slide ${currentIndex + 1}`}
              className="slideshow-image"
            />
            <div className="slideshow-dots">
              {images.map((_, index) => (
                <span 
                  key={index} 
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>

          <div className="serveur-details">
            <p>
              Serveur NAS <strong>conçu et assemblé</strong> sur-mesure pour héberger un cloud privé et un serveur média.
            </p>

            <div className="serveur-specs">
              <div className="spec-category">
                <h4><FontAwesomeIcon icon={faHardDrive} /> Hardware</h4>
                <ul>
                  <li>Intel Core Ultra 5 225</li>
                  <li>Asus PRIME Z890M-PLUS</li>
                  <li>16 Go DDR5</li>
                  <li>2× HDD 10 To (miroir)</li>
                  <li>2× NVMe 500 Go</li>
                  <li>Fractal Design Node 804</li>
                </ul>
              </div>

              <div className="spec-category">
                <h4><FontAwesomeIcon icon={faCode} /> Software</h4>
                <ul>
                  <li>TrueNAS Community</li>
                  <li>Nextcloud • Plex</li>
                  <li>Prowlarr • Nginx</li>
                  <li>Tailscale • DuckDNS</li>
                  <li>rclone • Kometa</li>
                  <li>Netdata • Speedtest</li>
                </ul>
              </div>
            </div>

            <div className="serveur-results">
              <div className="result-item">
                <FontAwesomeIcon icon={faFilm} />
                <span><strong>Serveur média</strong> — Films et séries accessibles partout</span>
              </div>
              <div className="result-item">
                <FontAwesomeIcon icon={faCloud} />
                <span><strong>Cloud privé</strong> — Fichiers synchronisés et sécurisés</span>
              </div>
              <div className="result-item">
                <FontAwesomeIcon icon={faServer} />
                <span><strong>Infrastructure maîtrisée</strong> — Scripts d'automatisation personnalisés</span>
              </div>
            </div>
          </div>
        </div>

        <a
          href="https://github.com/YannisFouzi/plex_debrid"
          className="link-allstyles serveur-btn"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <FontAwesomeIcon icon={faGithub} style={{ marginRight: "8px" }} />
          Mon script d'automatisation Plex
        </a>
      </div>
    </aside>
  );
}

export default Serveur;
