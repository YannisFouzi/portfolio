import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faGithub, faWordpress } from '@fortawesome/free-brands-svg-icons'; 
import vegasProIcon from '../../img/vegas-pro.png';
import vercelIcone from '../../img/vercel_icone.png';
import notionLogo from '../../img/Notion-logo.png';
import canvaLogo from '../../img/canva-icon.webp';
import photoshopLogo from '../../img/Photoshop_icon.png';
import afterLogo from '../../img/Adobe_After_icon.png';
import VMware_vSphere_Client from '../../img/VMware_vSphere_Client.png';
import trello from '../../img/trello.svg';
import html_css from '../../img/html_css.png';
import './Skills.css';

function Skills() {
  return (
    <aside id="competences">
      <div className="container">
        <h2>Compétences</h2>
        <div className="skills-columns">
          {/* Development Skills */}
          <div className="skills-column">
            <h3>Développement & infrastructure</h3>
            <ul className="skills-list two-column">
              <li>
              <FontAwesomeIcon icon={faReact} size="3x" style={{color: "#58C4DC",}} />
                <span>React</span>
              </li>
              <li>
              <img src={vercelIcone} alt="vercelIcone" className="custom-icon" />
                <span>Vercel</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faGithub} size="3x" />
                <span>GitHub</span>
              </li>
              <li>
              <FontAwesomeIcon icon={faWordpress} style={{color: "#20759B",}} size="3x" />
                <span>WordPress (+ WooCommerce)</span>
              </li>
              <li>
              <img src={html_css} alt="vercelIcone" className="custom-icon" />
                <span>HTML & CSS</span>
              </li>
              <li>
              <img src={VMware_vSphere_Client} alt="vercelIcone" className="custom-icon" />
                <span>vSphere (Virtualisation de serveur physique)</span>
              </li>
            </ul>
          </div>

          {/* Creative Skills */}
          <div className="skills-column">
          <h3>Créativité &<br />Productivité</h3>
            <ul className="skills-list two-column">
              <li>
              <img src={notionLogo} alt="notionIcone" className="custom-icon" />
                <span>Notion</span>
              </li>
              <li>
              <img src={trello} alt="trelloIcone" className="custom-icon" />
                <span>Trello</span>
              </li>
              <li>
              <img src={canvaLogo} alt="canvaIcone" className="custom-icon" />
                <span>Canva</span>
              </li>
              <li>
              <img src={vegasProIcon} alt="vegasproIcone" className="custom-icon" />
                <span>Vegas Pro (Montage video)</span>
              </li>
              <li>
              <img src={photoshopLogo} alt="photoshopIcone" className="custom-icon" />
                <span>Photoshop</span>
              </li>
              <li>
              <img src={afterLogo} alt="aftereffectsIcone" className="custom-icon" />
                <span>After Effects</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Skills;
