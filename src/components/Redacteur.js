import { faCalendarDays, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import AgendaHandsUp from "../img/AgendaHandsUp.png";
import redacteurImage from "../img/redacteur.png";

function Redacteur() {
  return (
    <aside id="redacteur">
      <div className="container">
        <h2>Rédacteur</h2>

        <ul className="features">
          <li>
            <span>
              Depuis 2019, en tant que bénévole, j'<strong>écris</strong> des
              articles pour un média de musique et j'<strong>interviewe</strong>{" "}
              des artistes
            </span>
          </li>
          <ul className="features-list">
            <li>Presque 100 articles à mon actif !</li>
          </ul>
          <img
            src={redacteurImage}
            alt="Rédacteur"
            style={{
              display: "block",
              margin: "0 auto",
              width: "800px",
              height: "auto",
              border: "2px solid #ddd",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          />
        </ul>
        <a
          href="https://handsupelectro.fr"
          className="link-allstyles"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <FontAwesomeIcon
            icon={faNewspaper}
            size="2x"
            style={{ marginRight: "8px" }}
          />
          Le site de mon média
        </a>
        <ul className="features">
          <li>
            <span>
              Toujours avec mon média, j'ai réalisé un projet d'agenda avec
              toutes les sorties musicales et événements (concerts/festivals)
              sur <strong>Notion,</strong> accompagné d'un mockup confectionné
              sur <strong>Canva</strong>.
            </span>
          </li>
          <img
            src={AgendaHandsUp}
            alt="AgendaHandsUp"
            style={{
              display: "block",
              margin: "0 auto",
              width: "500px",
              height: "auto",
              border: "2px solid #ddd",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          />
        </ul>
        <a
          href="https://www.notion.so/handsupelectrofr/23504f7036e547d6bc13904bebc783c8?v=a3103c266ad246b3a8c9d307c551be92"
          className="link-allstyles"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <FontAwesomeIcon
            icon={faCalendarDays}
            size="2x"
            style={{ marginRight: "8px" }}
          />{" "}
          Le site de l'agenda Notion
        </a>
      </div>
    </aside>
  );
}

export default Redacteur;
