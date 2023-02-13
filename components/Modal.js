import Image from "next/image";
import React from "react";
import iconExport from "@/public/Icon-Export.svg";
import iconGitHub from "@/public/Icon-GitHub.svg";

const Modal = ({
  title,
  languages,
  img,
  desc,
  source,
  live,
  isOpen,
  setIsOpen,
}) => {
  return (
    <div
      class={"modal-container"}
      id="myModal"
      style={isOpen ? { display: "block" } : { display: "none" }}
    >
      <div class="modal">
        <div class="modal-header">
          <h1>{title}</h1>
          <ion-icon
            name="close"
            class="modal-close-icon"
            onClick={() => setIsOpen(!isOpen)}
          ></ion-icon>
        </div>
        <ul class="modal-languages-list">
          {languages.map((lang, index) => (
            <li key={index}>{lang}</li>
          ))}
        </ul>
        <div class="modal-content">
          <div class="modal-image-mobile">
            <Image src={img} alt="modal image" />
          </div>
          <div class="modal-image-desktop">
            <Image src={img} alt="modal image" />
          </div>
          <p class="title">{desc}</p>
        </div>
        <div class="buttons">
          <a href={live} class="btn-primary" target="_blank" rel="noreferrer">
            See Live
            <span>
              <Image
                src={iconExport}
                alt="live-icon"
                class="icon-right"
                height="18"
              />
            </span>
          </a>
          <a href={source} class="btn-primary" target="_blank" rel="noreferrer">
            See Source
            <span>
              <Image
                src={iconGitHub}
                alt="live-icon"
                class="icon-right"
                height="18"
              />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
