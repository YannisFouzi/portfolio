import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="page-footer">
      <div className="container">
        <ul>
          <li>
            <a 
          href="https://www.linkedin.com/in/yannis-fouzi-b48140aa/"
          className="link-allstyles" 
          target="_blank" 
          rel="noopener noreferrer"
        ><FontAwesomeIcon icon={faLinkedin} size="2x" style={{ marginRight: '8px' }} />
          Linkedin
        </a>
          </li>
          <li>
          <a 
          href="https://github.com/YannisFouzi"
          className="link-allstyles" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub}  size="2x" style={{ marginRight: '8px' }} /> Github
        </a>
           </li>
        </ul>
        <p>
        <strong>Contactez moi : <h2>yfouzi.dev@gmail.com</h2></strong>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
