import React from 'react';
import './Tournage.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';



function Tournage() {
  return (
    <aside id="tournage">
      <div className="container">
        <h2>Tournage</h2>
        <ul className="features">
          <li>
            <span>
              Pour ma musique, je <strong>réalise</strong> et <strong>monte</strong> des tournages et <strong>gère</strong> une équipe lors de ces projets.
            </span>
          </li>
          <li>
            <div className="video-container">
              <iframe 
                src="https://www.youtube.com/embed/-hhUaTf12rg" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
              </iframe>
            </div>
          </li>
        </ul>
        <a 
          href="https://www.youtube.com/@rapture-music/videos" 
          className="link-allstyles" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" style={{ marginRight: '8px' }} /> Ma chaine Youtube
        </a>
      </div>
    </aside>
  );
}

export default Tournage;
