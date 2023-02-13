import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <hr />
      <ul className="footer-social-icons">
        <li>
          <a
            href="https://github.com/aamirkhan2478"
            target="_blank"
            rel="noreferrer"
          >
            <div className="github-icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/aamir-kh/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="linkedin-icon" />
          </a>
        </li>
        <li>
          <a
            href="https://angel.co/u/aamirkhan2478"
            target="_blank"
            rel="noreferrer"
          >
            <div className="angel-list-icon" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
