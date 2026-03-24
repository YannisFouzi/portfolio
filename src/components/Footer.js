import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Footer() {
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
            Contactez-moi : <h2>contact@fouzi-dev.fr</h2>
          </strong>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
