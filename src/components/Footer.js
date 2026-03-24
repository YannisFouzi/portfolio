import { faGithub, faLinkedin, faReact } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="page-footer">
      <div className="container">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/yannis-fouzi-b48140aa/"
              className="link-allstyles footer-btn"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ marginRight: "8px" }}
              />
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://github.com/YannisFouzi"
              className="link-allstyles footer-btn"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <FontAwesomeIcon
                icon={faGithub}
                style={{ marginRight: "8px" }}
              />
              Github
            </a>
          </li>
        </ul>
        <p>
          <strong>
            Contactez-moi : <span className="email-highlight">contact@fouzi-dev.fr</span>
          </strong>
        </p>
        
        <div className="footer-bottom">
          <p>
            Conçu et développé avec <FontAwesomeIcon icon={faHeart} className="heart-icon" /> par <strong>Yannis Fouzi</strong> en <FontAwesomeIcon icon={faReact} className="react-icon" /> React
          </p>
          <p className="copyright">© {currentYear} Yannis Fouzi. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
