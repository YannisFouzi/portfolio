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

function Projets() {
  const projets = [
    {
      title: 'Sabacc de Kessel',
      link: 'https://sabacc.fouzi-dev.fr/',
      image: sabaccKessel,
      description: 'Un jeu en ligne inspiré du célèbre jeu de carte Sabacc de Star Wars',
      technologies: [faReact, faCss3Alt, vercelIcone],
    },
    {
      title: 'Kekave Shop',
      link: 'https://kekaveshop.fouzi-dev.fr/',
      image: kekave, 
      description: 'Un site e-commerce de démonstration de produits pop culture',
      technologies: [faWordpress, woocommerce],
    },
    {
      title: 'NX Project',
      link: 'https://fouzi-dev.fr/NX/',
      image: nx,
      description: 'Homepage de mon ancienne entreprise',
      technologies: [faReact, faCss3Alt],
    },
    {
      title: 'Parimis',
      link: 'https://fouzi-dev.fr/Parimis/',
      image: parimis,
      description: 'Un site démonstration d\'un hotel de luxe',
      technologies: [faHtml5, faCss3Alt, faSquareJs],
    },
    {
      title: 'Annonceo',
      link: 'https://fouzi-dev.fr/annonceoPHP/',
      image: annonceo,
      description: 'Un site démonstration de petites annonces pour la vente entre particuliers',
      technologies: [faPhp, faCss3Alt],
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
              <p>{projet.description}</p>
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
