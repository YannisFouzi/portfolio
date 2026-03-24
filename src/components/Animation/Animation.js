import React from "react";
import "./Animation.css";
import mercilille from "../../img/merci-lille.png";
import gameRoom from "../../img/gameroom.png";
import Logo3D from "../Logo3D/Logo3D";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EffetsVideo from "../../video/Animation_Logo_Merci_Lille.mp4";

function Animation() {
  const experiences = [
    {
      title: "Organisateur d'événements - Merci Lille",
      description:
        "Co-fondateur de l'association Merci Lille, j'organise des événements musicaux (soirées, concerts). Je gère le site web, la communication, les visuels, le DJing et le VJing avec Resolume.",
      image: mercilille,
      link: "https://mercilille.com/",
    },
    {
      title: "Animateur de jeux & quizz",
      description:
        "J'anime des sessions de jeux interactifs de plusieurs heures. Je crée mes propres jeux web (Qui veut gagner des millions, Blind Test, Game Room) avec des téléphones comme télécommandes. Je développe les scripts, les sites web et confectionne le contenu de A à Z.",
      image: gameRoom,
      projets: [
        { name: "Game Room", link: "https://gameroom.fouzi-dev.fr/" },
        { name: "QVGDM", link: "https://qvgdm-two.vercel.app/" },
        { name: "Blind Test", link: "https://blind-test-brown.vercel.app/" },
      ],
    },
    {
      title: "Barman (3 jours)",
      description:
        "Quelques jours en service bar dans un environnement festif. J'ai adoré le contact client et l'ambiance conviviale.",
      fullWidth: true,
    },
  ];

  return (
    <aside id="animation">
      <div className="container">
        <h2>Animation & Événementiel</h2>
        <p className="section-intro">
          Passionné par l'événementiel, je combine mes compétences techniques et
          créatives pour créer des expériences mémorables.
        </p>

        <div className="experiences-grid">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`experience-card ${exp.fullWidth ? "full-width" : ""}`}
            >
              <h3>{exp.title}</h3>
              {exp.image && (
                <div className="experience-image-container">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="experience-image"
                  />
                </div>
              )}
              <p>{exp.description}</p>

              {exp.projets && (
                <div className="projets-links">
                  <strong>Projets associés :</strong>
                  <div className="projets-buttons">
                    {exp.projets.map((projet, i) => (
                      <a
                        key={i}
                        href={projet.link}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="link-allstyles animation-btn"
                      >
                        {projet.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {exp.link && (
                <a
                  href={exp.link}
                  className="link-allstyles"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  Voir le site
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="logo3d-section">
          <h4>Logo 3D Merci Lille</h4>
          <p className="subsection-text">
            Logo créé sur <strong>Blender</strong> — <em>Cliquez et faites glisser pour manipuler</em>
          </p>
          <Logo3D modelPath="/Merci_Lille_Animation_3D_WHITE.glb" height="350px" />
        </div>

        <div className="videos-section">
          <h4>Réalisations VJing</h4>
          <div className="videos-grid">
            <div className="videos-column-left">
              <div className="video-placeholder landscape">
                <video muted loop autoPlay playsInline>
                  <source src="/resolume1.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="video-placeholder landscape">
                <video muted loop autoPlay playsInline>
                  <source src="/resolume2.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="videos-column-right">
              <div className="video-placeholder portrait">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  onTimeUpdate={(e) => {
                    if (e.target.currentTime >= 8) {
                      e.target.currentTime = 0;
                    }
                  }}
                >
                  <source src="/rapture_fouzi_1746654367_highlight17899233126132495.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>

        <div className="effets-section">
          <h4>Effets Visuels</h4>
          <p className="subsection-text">
            Je <strong>confectionne</strong> des effets visuels sur <strong>After Effects</strong> pour mon association de musique.
          </p>
          <video
            src={EffetsVideo}
            className="effets-video"
            autoPlay
            loop
            muted
            playsInline
          />
          <a
            href="https://mercilille.com/"
            className="link-allstyles animation-btn"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <FontAwesomeIcon icon={faPeopleGroup} style={{ marginRight: "8px" }} />
            Mon association
          </a>
        </div>
      </div>
    </aside>
  );
}

export default Animation;
