import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Video from "../video/Animation_Logo_Merci_Lille.mp4";

function VisualEffects() {
  return (
    <aside id="visual-effects">
      <div className="container">
        <h2>Effets Visuels</h2>
        <ul className="features">
          <li>
            <span>
              Je <strong>confectionne</strong> des effets visuels sur{" "}
              <strong>After Effects</strong> pour mon assocation de musique ou
              pour moi même.
            </span>
          </li>
          <li>
            <video
              src={Video}
              width="400"
              style={{
                maxWidth: "100%",
                height: "auto",
                display: "block",
                margin: "0 auto",
              }}
              autoPlay
              loop
              muted
            >
              Your browser does not support the video tag.
            </video>
          </li>
        </ul>
        <a
          href="https://mercilille.com/"
          className="link-allstyles"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <FontAwesomeIcon
            icon={faPeopleGroup}
            size="2x"
            style={{ marginRight: "8px" }}
          />{" "}
          Mon assocation
        </a>
      </div>
    </aside>
  );
}

export default VisualEffects;
