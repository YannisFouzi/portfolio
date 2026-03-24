import {
  faCss3Alt,
  faGithub,
  faHtml5,
  faPhp,
  faReact,
  faSquareJs,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import annonceo from "../../img/annonceo.png";
import cloudinary from "../../img/cloudinary.jpg";
import jeu from "../../img/devineLeJeu.png";
import express from "../../img/express.png";
import firebase from "../../img/firebase.png";
import framerMotion from "../../img/framerMotion.svg";
import gameRoom from "../../img/gameroom.png";
import googleAnalytics from "../../img/google_analytics.webp";
import blindtest from "../../img/blindtest.png";
import partykit from "../../img/partykit.jfif";
import cloudflare from "../../img/cloudflare-color.png";
import steamActu1 from "../../img/steam-actu_1.png";
import steamActu2 from "../../img/steam-actu_2.png";
import steamLogo from "../../img/Steam_icon_logo.svg.png";
import notifee from "../../img/notifee-logo.webp";
import i18next from "../../img/i18next.png";
import kekave from "../../img/kekave.png";
import mercilille from "../../img/merci-lille.png";
import mongo from "../../img/mongo.webp";
import mysql from "../../img/mysql.png";
import next from "../../img/nextjs-icon.svg";
import node from "../../img/Node.png";
import nx from "../../img/nx.png";
import parimis from "../../img/parimis.png";
import pokemon from "../../img/pokelille.png";
import qvgdm from "../../img/QVGDM.png";
import railway from "../../img/railway.webp";
import rawg from "../../img/rawg.jpeg";
import render from "../../img/render.png";
import sabaccKessel from "../../img/sabacc-kessel2.png";
import tafraout from "../../img/tafraout.png";
import tagManager from "../../img/tag_manager.png";
import tailwindcssIcon from "../../img/tailwindcss-icon.svg";
import twitch from "../../img/twitch.png";
import twitchLogo from "../../img/twitch_logo.png";
import typescript from "../../img/Typescript.png";
import uptimerobot from "../../img/uptimerobot.svg";
import vite from "../../img/Vite_icon.png";
import woocommerce from "../../img/woocommerce.svg";
import youtube from "../../img/Youtube_logo.png";
import "./Projets.css";

const buildTechnologyColumns = (technologies) => {
  const apiTechs = [
    ...(technologies.API || []),
    ...(technologies.backend || []),
  ];
  let apiLabel = "API";

  if (technologies.API?.length && technologies.backend?.length) {
    apiLabel = "API / Back-end";
  } else if (technologies.backend?.length) {
    apiLabel = "Back-end";
  }

  const columns = [
    { key: "frontend", label: "Frontend", items: technologies.frontend || [] },
    { key: "api", label: apiLabel, items: apiTechs },
    { key: "autres", label: "Autres", items: technologies.autres || [] },
  ];

  return columns.filter((column) => column.items.length > 0);
};

function Projets() {
  const projets = [
    {
      title: "Steam Actu (2026)",
      link: "#",
      images: [steamActu1, steamActu2],
      description:
        "Application mobile qui permet aux joueurs Steam de suivre l'actualité de leurs jeux. Connexion au compte Steam, récupération de la bibliothèque et alertes push pour les news des jeux suivis.",
      technologies: {
        frontend: [
          { icon: faReact, name: "React Native" },
          { icon: typescript, name: "TypeScript" },
          { icon: i18next, name: "i18next" },
          { icon: notifee, name: "Notifee" },
        ],
        backend: [
          { icon: node, name: "Node.js" },
          { icon: express, name: "Express" },
          { icon: mongo, name: "MongoDB" },
          { icon: firebase, name: "Firebase" },
        ],
        API: [
          { icon: steamLogo, name: "Steam API" },
        ],
      },
    },
    {
      title: "Blind test Pop Culture (2025/2026)",
      link: "https://blind-test-brown.vercel.app/",
      image: blindtest,
      description:
        "Un blind test interfactif sur des oeuvres de Pop Culture via l'api Youtube",
      technologies: {
        frontend: [
          { icon: faReact, name: "React" },
          { icon: typescript, name: "TypeScript" },
          { icon: tailwindcssIcon, name: "Tailwind CSS" },
          { icon: next, name: "Next.js" },
          { icon: framerMotion, name: "Framer Motion" },
        ],
        backend: [
          { icon: firebase, name: "Firebase" },
          { icon: partykit, name: "PartyKit" },
          { icon: cloudflare, name: "Cloudflare" },
        ],
        API: [{ icon: youtube, name: "Youtube" }],
      },
    },
    {
      title: "Devine le jeu vidéo (2025)",
      link: "https://1jour1jeu.vercel.app/",
      image: jeu,
      description:
        "Jeu de devinettes où les joueurs doivent deviner un jeu vidéo mystère en utilisant des indices progressifs qui se révèlent à chaque tentative",
      technologies: {
        frontend: [
          { icon: faReact, name: "React" },
          { icon: faCss3Alt, name: "CSS" },
        ],
        API: [{ icon: rawg, name: "RAWG" }],
      },
    },
    {
      title: "Animation Cartes Pokémon (2025)",
      link: "https://pokelille.vercel.app/",
      image: pokemon,
      description:
        'Simulation d\'ouverture de boosters de cartes Pokémon personnalisées avec effets holographiques pour mon asso "Merci Lille"',
      technologies: {
        frontend: [
          { icon: faReact, name: "React" },
          { icon: typescript, name: "TypeScript" },
          { icon: tailwindcssIcon, name: "Tailwind CSS" },
          { icon: vite, name: "Vite" },
        ],
      },
    },
    {
      title: "Game Room (2025)",
      link: "https://gameroom.fouzi-dev.fr/",
      image: gameRoom,
      description:
        "Jeu web multijoueurs qui permet de créer des salles de jeu privées pour jouer à plusieurs mini-jeux interactifs (Millionnaire, Undercover, Roue de la Fortune, Rat de Star) entre amis via QR code avec les téléphones comme télécomande",
      technologies: {
        frontend: [
          { icon: faReact, name: "React" },
          { icon: typescript, name: "TypeScript" },
          { icon: tailwindcssIcon, name: "Tailwind CSS" },
          { icon: framerMotion, name: "Framer Motion" },
        ],
        backend: [{ icon: firebase, name: "Firebase" }],
      },
    },
    {
      title: "Qui veut gagner des millions ? (2024)",
      link: "https://qvgdm-two.vercel.app/",
      image: qvgdm,
      description:
        'Reproduction du célèbre jeu télévisé "Qui veut gagner des millions ?" avec un système de gains progressifs, des jokers et un timer avec les téléphones comme télécomande',
      technologies: {
        frontend: [
          { icon: faReact, name: "React" },
          { icon: faCss3Alt, name: "CSS" },
        ],
        backend: [
          { icon: railway, name: "Railway" },
          { icon: node, name: "Node.js" },
        ],
      },
    },
    {
      title: "Portfolio Merci Lille (2024)",
      link: "https://mercilille.com/",
      image: mercilille,
      description:
        "Le portfolio de mon assocation d'organistion d'événements de musique \"Merci Lille\", avec un backend pour ajouter et modifier les événements/photos",
      technologies: {
        frontend: [
          { icon: faReact, name: "React" },
          { icon: typescript, name: "TypeScript" },
          { icon: tailwindcssIcon, name: "Tailwind CSS" },
          { icon: vite, name: "Vite" },
        ],
        backend: [
          { icon: node, name: "Node.js" },
          { icon: typescript, name: "TypeScript" },
          { icon: express, name: "Express" },
          { icon: mongo, name: "MongoDB" },
          { icon: render, name: "Render" },
          { icon: uptimerobot, name: "Uptime Robot" },
        ],
        autres: [
          { icon: cloudinary, name: "Cloudinary" },
          { icon: googleAnalytics, name: "Google Analytics" },
          { icon: tagManager, name: "Tag Manager" },
        ],
      },
    },
    {
      title: "Planning Twitch (2024)",
      link: "https://twitch-planning-sandy.vercel.app/",
      image: twitch,
      description:
        'Une application permettant aux utilisateurs d\'avoir un planning des lives "Twitch" de leur streamer préféré (Projet en cours de développement)',
      technologies: {
        frontend: [
          { icon: faReact, name: "React" },
          { icon: faCss3Alt, name: "CSS" },
        ],
        API: [{ icon: twitchLogo, name: "Twitch" }],
      },
    },
    {
      title: "Sabacc de Kessel (2024)",
      link: "https://sabacc-kessel-v2-sandy.vercel.app/",
      image: sabaccKessel,
      description:
        'Un jeu de carte tiré de l\'univers "Star Wars" (Projet en cours de développement)',
      technologies: {
        frontend: [
          { icon: faReact, name: "React" },
          { icon: tailwindcssIcon, name: "Tailwind CSS" },
        ],
      },
    },
    {
      title: "NX Project (2022)",
      link: "https://nx.fouzi-dev.fr/",
      image: nx,
      description:
        'La homepage créée lors de mon alternance chez "NX Creative"',
      technologies: {
        frontend: [
          { icon: faReact, name: "React" },
          { icon: faCss3Alt, name: "CSS" },
        ],
      },
    },
    {
      title: "Kekave Shop (2021)",
      link: "https://kekaveshop.fouzi-dev.fr/",
      image: kekave,
      description:
        "Un site e-commerce de démonstration de produits pop culture",
      technologies: {
        frontend: [
          { icon: faWordpress, name: "WordPress" },
          { icon: woocommerce, name: "Woocommerce" },
        ],
      },
    },
    {
      title: "Annonceo (2020)",
      link: "https://annonceophp.fouzi-dev.fr/",
      image: annonceo,
      description:
        "Un site de démonstration de petites annonces pour la vente entre particuliers",
      technologies: {
        frontend: [
          { icon: faPhp, name: "PHP" },
          { icon: faCss3Alt, name: "CSS" },
        ],

        backend: [{ icon: mysql, name: "MySQL" }],
      },
    },
    {
      title: "Parimis (2020)",
      link: "https://parimis.fouzi-dev.fr/",
      image: parimis,
      description: "Un site de démonstration d'un hôtel de luxe",
      technologies: {
        frontend: [
          { icon: faHtml5, name: "HTML5" },
          { icon: faCss3Alt, name: "CSS" },
          { icon: faSquareJs, name: "JavaScript" },
        ],
      },
    },
    {
      title: "Tafraout (2020)",
      link: "https://tafraout.fouzi-dev.fr/",
      image: tafraout,
      description:
        "Mon premier vrai site effectué lors de mon stage en BTS pour un restaurant",
      technologies: {
        frontend: [
          { icon: faHtml5, name: "HTML5" },
          { icon: faCss3Alt, name: "CSS" },
          { icon: faSquareJs, name: "JavaScript" },
        ],
      },
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const projetsToShow = showAll ? projets : projets.slice(0, 8);

  return (
    <aside id="projets">
      <div className="container">
        <div className="section-header">
          <h2>Projets Web</h2>
          <a
            href="https://github.com/YannisFouzi"
            className="link-allstyles header-btn"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <FontAwesomeIcon icon={faGithub} style={{ marginRight: "8px" }} />
            Github
          </a>
        </div>
        <div className="projects-grid">
          {projetsToShow.map((projet, index) => (
            <div key={index} className="project-card">
              <h3>{projet.title}</h3>
              <div className={`project-image-container ${projet.images ? 'multiple-images' : ''}`}>
                {projet.images ? (
                  projet.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`Screenshot ${i + 1} du projet ${projet.title}`}
                      className="project-image"
                    />
                  ))
                ) : (
                  <img
                    src={projet.image}
                    alt={`Screenshot du projet ${projet.title}`}
                    className="project-image"
                  />
                )}
              </div>
              <div className="project-content">
                <div className="project-description">
                  <p>{projet.description}</p>
                </div>
                <div className="project-technologies">
                  <p><strong>Technologies</strong></p>
                  <div className="technologies-container">
                    {buildTechnologyColumns(projet.technologies).map((column) => (
                      <div key={column.key} className="tech-category">
                        <h4>{column.label}</h4>
                        <div className="technologies-icons">
                          {column.items.map((tech, i) => (
                            <div key={i} className="tech-item">
                              {typeof tech.icon === "string" ? (
                                <img
                                  src={tech.icon}
                                  alt={tech.name}
                                  className="tech-icon"
                                />
                              ) : (
                                <FontAwesomeIcon
                                  icon={tech.icon}
                                  className="tech-fa-icon"
                                />
                              )}
                              <span className="tech-name">{tech.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {projet.link && projet.link !== "#" ? (
                <a
                  href={projet.link}
                  className="link-allstyles"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  Accéder au projet
                </a>
              ) : (
                <span className="dev-badge">En développement</span>
              )}
            </div>
          ))}
        </div>
        {!showAll && projets.length > 8 && (
          <button 
            className="link-allstyles voir-plus-btn"
            onClick={() => setShowAll(true)}
          >
            Voir plus ({projets.length - 8} projets)
          </button>
        )}
      </div>
    </aside>
  );
}

export default Projets;
