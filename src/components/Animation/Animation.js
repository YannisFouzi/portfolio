import React from "react";
import "./Animation.css";
import mercilille from "../../img/merci-lille.png";
import gameRoom from "../../img/gameroom.png";
import Logo3D from "../Logo3D/Logo3D";

function Animation() {
  const experiences = [
    {
      title: "Organisateur d'événements - Merci Lille",
      description:
        "Co-fondateur de l'association Merci Lille, j'organise des événements musicaux (soirées, concerts). Je gère la communication, les visuels, et l'aspect technique : VJing avec Resolume, création de mappings vidéo et de logos 3D avec Blender.",
      image: mercilille,
      link: "https://mercilille.com/",
      tags: ["Resolume", "Blender", "Communication", "Organisation"],
    },
    {
      title: "Animateur de jeux & quizz",
      description:
        "J'anime des sessions de jeux interactifs de plusieurs heures. Je crée mes propres jeux web (Qui veut gagner des millions, Blind Test, Game Room) avec des téléphones comme télécommandes. Je développe les scripts, les sites web et confectionne le contenu de A à Z.",
      image: gameRoom,
      tags: ["Animation", "Développement Web", "Création de contenu"],
      projets: [
        { name: "Game Room", link: "https://gameroom.fouzi-dev.fr/" },
        { name: "QVGDM", link: "https://qvgdm-two.vercel.app/" },
        { name: "Blind Test", link: "https://blind-test-brown.vercel.app/" },
      ],
    },
    {
      title: "Barman (2-3 jours)",
      description:
        "Quelques jours en service bar dans un environnement festif. J'ai adoré le contact client et l'ambiance conviviale.",
      tags: ["Service client", "Travail d'équipe"],
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
              className={`experience-card ${exp.highlight ? "highlight" : ""}`}
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

              <div className="tags-container">
                {exp.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

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
                        className="projet-link"
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
          <h3>Création 3D - Logo Merci Lille</h3>
          <p>Logo créé sur Blender, manipulable à la souris</p>
          <Logo3D modelPath="/Merci_Lille_Animation_3D_WHITE.glb" height="350px" />
        </div>

        <div className="videos-section">
          <h3>Mes réalisations vidéo</h3>
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
      </div>
    </aside>
  );
}

export default Animation;
