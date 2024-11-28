import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Back, gsap } from "gsap";
import React, { useEffect, useState } from "react";
import ReactGA from "react-ga4"; // Import GA4
import myCV from "../pdf/Yannis fouzi_CV_Decembre2024.pdf";
import "./Header.css";

function Header() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const title = document.querySelector(".title");
    title.innerHTML = title.textContent.replace(/(\S)/g, "<span>$1</span>");

    // Animation : les lettres apparaissent par le bas
    gsap.fromTo(
      ".title span",
      { opacity: 0, bottom: -80 },
      {
        opacity: 1,
        bottom: 0,
        ease: Back.easeOut.config(1.7),
        stagger: 0.05,
        duration: 0.5,
      }
    );
  }, []);

  const handleCVClick = () => {
    ReactGA.event({
      category: "CV",
      action: "Download",
      label: "User clicked to download CV",
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("yfouzi.dev@gmail.com").then(() => {
      ReactGA.event({
        category: "Email",
        action: "Copy",
        label: "User clicked to copy email",
      });

      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1500);
    });
  };

  return (
    <header>
      <div className="container">
        <h1>
          <span className="title">Yannis Fouzi</span>
        </h1>
        <h2>Chef de projet digital</h2>
        <a href={myCV} download className="link-github" onClick={handleCVClick}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
            </svg>
          </span>
          Téléchargez mon CV
        </a>
        <div className="email-container" style={{ marginTop: "20px" }}>
          <a className="link-github" onClick={handleCopy} href="#">
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            {copied ? "Email copié !" : "Copiez mon email"}
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
