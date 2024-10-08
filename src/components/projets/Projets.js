import React from 'react';
import "./Projets.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faSquareJs, faPhp, faCss3Alt, faWordpress } from '@fortawesome/free-brands-svg-icons';
import sabaccKessel from '../../img/sabacc-kessel.png';
import kekave from '../../img/kekave.png';
import nx from '../../img/nx.png';
import parimis from '../../img/parimis.png';
import annonceo from '../../img/annonceo.png';
import vercelIcone from '../../img/vercel_icone.png';
import woocommerce from '../../img/woocommerce.svg';
import tafraout from '../../img/tafraout.png';

function Projets() {
  const projets = [
    {
      title: 'Sabacc de Kessel (2024)',
      link: 'https://sabacc.fouzi-dev.fr/',
      image: sabaccKessel,
      description: 'Un jeu de carte tiré de l\'univers Star Wars (Projet en cours de développement) ',
      technologies: [faReact, faCss3Alt, vercelIcone],
    },
    {
      title: 'NX Project (2022)',
      link: 'https://nx.fouzi-dev.fr/',
      image: nx,
      description: 'La homepage créée lors de mon alternance chez NX Creative',
      technologies: [faReact, faCss3Alt],
    },
    {
      title: 'Kekave Shop (2021)',
      link: 'https://kekaveshop.fouzi-dev.fr/',
      image: kekave, 
      description: 'Un site e-commerce de démonstration de produits pop culture',
      technologies: [faWordpress, woocommerce],
    },
    {
      title: 'Annonceo (2020)',
      link: 'https://annonceophp.fouzi-dev.fr/',
      image: annonceo,
      description: 'Un site de démonstration de petites annonces pour la vente entre particuliers',
      technologies: [faPhp, faCss3Alt],
    },
    {
      title: 'Parimis (2020)',
      link: 'https://parimis.fouzi-dev.fr/',
      image: parimis,
      description: 'Un site de démonstration d\'un hôtel de luxe',
      technologies: [faHtml5, faCss3Alt, faSquareJs],
    },
    {
      title: 'Tafraout (2018)',
      link: 'https://tafraout.fouzi-dev.fr/',
      image: tafraout,
      description: 'Mon premier vrai site effectué lors de mon stage en BTS pour un restaurant',
      technologies: [faHtml5, faCss3Alt, faSquareJs],
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
              <img src={projet.image} alt={`Screenshot du projet ${projet.title}`} className="project-image" />
              <p dangerouslySetInnerHTML={{ __html: projet.description }}></p>
              <p><strong>Technologie(s)</strong></p>
              <div className="technologies-icons">
                {projet.technologies.map((tech, i) => (
                  typeof tech === 'string' ? (
                    <img key={i} src={tech} alt="Technology logo" className="tech-icon" />
                  ) : (
                    <FontAwesomeIcon key={i} icon={tech} size="2x" style={{ margin: '0 10px' }} />
                  )
                ))}
              </div>
              <a href={projet.link} className="link-allstyles" target="_blank" rel="noopener noreferrer">Accéder au projet</a>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default Projets;
