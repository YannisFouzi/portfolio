import React from 'react';
import MaMusique from '../img/musique.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

function Musique() {
  return (
    <aside id="musique">
      <div className="container">
        <h2>Musique</h2>
        <ul className="features">
          <li>
            <span>
       
              Je <strong>compose</strong> de la musique et des mix depuis plusieurs années
            </span>
          </li>
          <li>
          <img 
          src={MaMusique} 
          alt="Musique" 
          style={{
            display: 'block',
            margin: '0 auto',
            width: '400px', 
            height: 'auto',
            border: '2px solid #ddd', 
            borderRadius: '8px', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
          }} 
        />
        </li>
          <div>
      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1227272914&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        title="SoundCloud Player"
      ></iframe>
      <div
        style={{
          fontSize: '10px',
          color: '#cccccc',
          lineBreak: 'anywhere',
          wordBreak: 'normal',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          fontFamily:
            'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',
          fontWeight: 100,
        }}
      >
        <a
          href="https://soundcloud.com/rapture_do_music"
          title="Rapture"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#cccccc', textDecoration: 'none' }}
        >
          Rapture
        </a>{' '}
        ·{' '}
        <a
          href="https://soundcloud.com/rapture_do_music/forgive-you-cloud-rap-by-rapture-v2"
          title="Forgive You (Cloud Rap By Rapture)"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#cccccc', textDecoration: 'none' }}
        >
          Forgive You (Cloud Rap By Rapture)
        </a>
      </div>
    </div>
        </ul>
        <a 
          href="https://soundcloud.com/rapture_do_music/tracks"
          className="link-allstyles" 
          target="_blank" 
          rel="noopener noreferrer"
        >
        <FontAwesomeIcon icon={faMusic} size="2x" style={{ marginRight: '8px' }} />  Mes autres musiques 
        </a>
      </div>
    </aside>
  );
}

export default Musique;
