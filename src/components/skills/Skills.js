import {
  faGithub,
  faReact,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import afterLogo from "../../img/Adobe_After_icon.png";
import premierePro from "../../img/Adobe_Premiere.png";
import canvaLogo from "../../img/canva-icon.webp";
import nextLogo from "../../img/nextjs-icon.svg";
import notionLogo from "../../img/Notion-logo.png";
import photoshopLogo from "../../img/Photoshop_icon.png";
import trello from "../../img/trello.svg";
import vercelIcone from "../../img/vercel_icone.png";
import VMware_vSphere_Client from "../../img/VMware_vSphere_Client.png";
import resolumeLogo from "../../img/arena7icon.svg";
import rekordboxLogo from "../../img/rekordbox.jpg";
import flStudioLogo from "../../img/FL_Studio_2024.webp";
import obsLogo from "../../img/OBS_Studio_logo.png";
import blenderLogo from "../../img/Blender_logo_no_text.svg.png";
import "./Skills.css";

function Skills() {
  return (
    <aside id="competences">
      <div className="container">
        <h2>Compétences</h2>
        <div className="skills-columns">
          {/* Development Skills */}
          <div className="skills-column">
            <h3>Développement & Infrastructure</h3>
            <ul className="skills-list two-column">
              <li>
                <FontAwesomeIcon
                  icon={faReact}
                  size="3x"
                  style={{ color: "#58C4DC" }}
                />
                <span>React / React Native</span>
              </li>
              <li>
                <img
                  src={vercelIcone}
                  alt="vercelIcone"
                  className="custom-icon"
                />
                <span>Vercel</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faGithub} size="3x" />
                <span>GitHub</span>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faWordpress}
                  style={{ color: "#20759B" }}
                  size="3x"
                />
                <span>WordPress + WooCommerce</span>
              </li>
              <li>
                <img src={nextLogo} alt="Next.js" className="custom-icon" />
                <span>Next.js</span>
              </li>
              <li>
                <img
                  src={VMware_vSphere_Client}
                  alt="vSphere"
                  className="custom-icon"
                />
                <span>vSphere (Virtualisation)</span>
              </li>
            </ul>
          </div>

          {/* Tech Son & Événementiel */}
          <div className="skills-column">
            <h3>Tech Son & Événementiel</h3>
            <ul className="skills-list two-column">
              <li>
                <img
                  src={resolumeLogo}
                  alt="Resolume"
                  className="custom-icon"
                />
                <span>Resolume (VJing)</span>
              </li>
              <li>
                <img
                  src={rekordboxLogo}
                  alt="Rekordbox"
                  className="custom-icon"
                />
                <span>Rekordbox (DJing)</span>
              </li>
              <li>
                <img
                  src={flStudioLogo}
                  alt="FL Studio"
                  className="custom-icon"
                />
                <span>FL Studio (MAO)</span>
              </li>
              <li>
                <img
                  src={obsLogo}
                  alt="OBS"
                  className="custom-icon"
                />
                <span>OBS (Captation)</span>
              </li>
              <li>
                <img
                  src={blenderLogo}
                  alt="Blender"
                  className="custom-icon"
                />
                <span>Blender (3D)</span>
              </li>
            </ul>
          </div>

          {/* Creative Skills */}
          <div className="skills-column">
            <h3>Créativité & Productivité</h3>
            <ul className="skills-list two-column">
              <li>
                <img
                  src={notionLogo}
                  alt="notionIcone"
                  className="custom-icon"
                />
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
                <img
                  src={premierePro}
                  alt="premiereProIcone"
                  className="custom-icon"
                />
                <span>Premiere Pro</span>
              </li>
              <li>
                <img
                  src={photoshopLogo}
                  alt="photoshopIcone"
                  className="custom-icon"
                />
                <span>Photoshop</span>
              </li>
              <li>
                <img
                  src={afterLogo}
                  alt="aftereffectsIcone"
                  className="custom-icon"
                />
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
