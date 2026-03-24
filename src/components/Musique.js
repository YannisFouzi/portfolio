import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import MaMusique from "../img/musique.jpg";
import "./Musique.css";

function Musique() {
  return (
    <aside id="musique">
      <div className="container">
        <h2>Musique</h2>
        <div className="musique-content">
          <div className="musique-image">
            <img
              src={MaMusique}
              alt="Musique"
            />
          </div>
          <div className="musique-details">
            <p>
              Je <strong>compose</strong> de la musique et des mix depuis
              plusieurs années.
            </p>
            <div className="soundcloud-players">
              <iframe
                width="100%"
                height="166"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1227272914&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
                title="SoundCloud Player - Forgive You"
              ></iframe>
              <iframe
                width="100%"
                height="166"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/rapture_fouzi/synapson-supersonnerie-rapture&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
                title="SoundCloud Player - Supersonnerie"
              ></iframe>
            </div>
            <a
              href="https://soundcloud.com/rapture_fouzi/tracks"
              className="link-allstyles"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <FontAwesomeIcon
                icon={faMusic}
                size="2x"
                style={{ marginRight: "8px" }}
              />{" "}
              Mes autres musiques
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Musique;
