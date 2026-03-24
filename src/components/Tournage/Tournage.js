import React from "react";
import "./Tournage.css";

import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Tournage() {
  return (
    <aside id="tournage">
      <div className="container">
        <h2>Tournage</h2>
        <p className="tournage-intro">
          Pour ma musique, je <strong>réalise</strong>,{" "}
          <strong>monte</strong> des tournages et <strong>gère</strong> une
          équipe lors de ces projets
        </p>
        <div className="videos-row">
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/Eh2lKlefjns"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/-hhUaTf12rg"
              title="YouTube video player 2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <a
          href="https://www.youtube.com/@rapture_fouzi/videos"
          className="link-allstyles tournage-btn"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <FontAwesomeIcon
            icon={faYoutube}
            style={{ marginRight: "8px" }}
          />{" "}
          Ma chaine Youtube
        </a>
      </div>
    </aside>
  );
}

export default Tournage;
