import {
  faCss3Alt,
  faHtml5,
  faPhp,
  faReact,
  faSquareJs,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import annonceo from "../../img/annonceo.png";
import cloudinary from "../../img/cloudinary.jpg";
import googleAnalytics from "../../img/google_analytics.webp";
import kekave from "../../img/kekave.png";
import mercilille from "../../img/merci-lille.png";
import mongo from "../../img/mongo.webp";
import nx from "../../img/nx.png";
import parimis from "../../img/parimis.png";
import render from "../../img/render.png";
import sabaccKessel from "../../img/sabacc-kessel.png";
import tafraout from "../../img/tafraout.png";
import tagManager from "../../img/tag_manager.png";
import tailwindcssIcon from "../../img/tailwindcss-icon.svg";
import twitch from "../../img/twitch.png";
import typescript from "../../img/Typescript.png";
import uptimerobot from "../../img/uptimerobot.svg";
import vercelIcone from "../../img/vercel_icone.png";
import woocommerce from "../../img/woocommerce.svg";
import "./Projets.css";

function Projets() {
  const projets = [
    {
      title: "Portfolio Merci Lille (2024)",
      link: "https://mercilille.com/",
      image: mercilille,
      description:
        "Le portfolio de mon assocation Merci Lille, avec un backend sur Render pour ajouter et modifier les événements/photos",
      technologies: {
        frontend: [
          { icon: faReact, name: "React" },
          { icon: typescript, name: "TypeScript" },
          { icon: tailwindcssIcon, name: "Tailwind CSS" },
        ],
        backend: [
          { icon: mongo, name: "MongoDB" },
          { icon: render, name: "Render" },
          { icon: uptimerobot, name: "Uptime Robot" },
        ],
        autres: [
          { icon: vercelIcone, name: "Vercel" },
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
        "Une application permettant aux utilisateurs d'avoir un planning des lives Twitch de leur streamer préféré (Projet en cours de développement)",
      technologies: {
        frontend: [
          { icon: faReact, name: "React" },
          { icon: faCss3Alt, name: "CSS" },
        ],
        autres: [{ icon: vercelIcone, name: "Vercel" }],
      },
    },
    {
      title: "Sabacc de Kessel (2024)",
      link: "https://sabacc-kessel-v2-sandy.vercel.app/",
      image: sabaccKessel,
      description:
        "Un jeu de carte tiré de l'univers Star Wars (Projet en cours de développement)",
      technologies: {
        frontend: [
          { icon: faReact, name: "React" },
          { icon: faCss3Alt, name: "CSS" },
          { icon: tailwindcssIcon, name: "Tailwind CSS" },
        ],
        autres: [{ icon: vercelIcone, name: "Vercel" }],
      },
    },
    {
      title: "NX Project (2022)",
      link: "https://nx.fouzi-dev.fr/",
      image: nx,
      description: "La homepage créée lors de mon alternance chez NX Creative",
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
      title: "Tafraout (2018)",
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

  return (
    <aside id="projets">
      <div className="container">
        <h2>Projets Web</h2>
        <div className="projects-grid">
          {projets.map((projet, index) => (
            <div key={index} className="project-card">
              <h3>{projet.title}</h3>
              <div className="project-image-container">
                <img
                  src={projet.image}
                  alt={`Screenshot du projet ${projet.title}`}
                  className="project-image"
                />
              </div>
              <p>{projet.description}</p>
              <p>
                <strong>Technologies</strong>
              </p>
              <div className="technologies-container">
                {Object.entries(projet.technologies).map(
                  ([category, techs]) =>
                    techs.length > 0 && (
                      <div key={category} className="tech-category">
                        <h4>
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                        </h4>
                        <div className="technologies-icons">
                          {techs.map((tech, i) => (
                            <div key={i} className="tech-item">
                              {typeof tech.icon === "string" ? (
                                <img
                                  src={tech.icon}
                                  alt={tech.name}
                                  className="tech-icon"
                                />
                              ) : (
                                <FontAwesomeIcon icon={tech.icon} size="2x" />
                              )}
                              <span className="tech-name">{tech.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                )}
              </div>
              <a
                href={projet.link}
                className="link-allstyles"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Accéder au projet
              </a>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default Projets;
