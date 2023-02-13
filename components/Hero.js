import { useEffect } from "react";
import Typewriter from "typewriter-effect/dist/core";

const Hero = () => {
  useEffect(() => {
    new Typewriter(".typing", {
      strings: [
        "Web Developer",
        "MERN Stack Developer",
        "Full Stack Developer",
        "Front-end Developer",
        "React Native Developer",
      ],
      autoStart: true,
      loop: true,
      delay: 40,
    });
  });

  return (
    <section id="hero" className="hero-section">
      <div className="intro-portion">
        <h1 className="main-heading">Hey There. I&apos;m Aamir</h1>
        <h3 className="supporting-text">
          I&apos;m a <span className="typing"></span>
        </h3>
        <p className="description-text">
          I can help you build a product , feature or website Look through some
          of my work and experience! If you like what you see and have a project
          you need coded, don&apos;t hesitate to contact me.
        </p>
      </div>
      <a href="#contact" className="btn-primary" rel="noopener">
        Contact Me <i className="fa fa-envelope" />
      </a>
      <ul className="social-media-icons">
        <li>
          <a
            href="https://github.com/aamirkhan2478"
            target="_blank"
            rel="noreferrer"
          >
            <div className="hero-github-icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/aamir-kh/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="hero-linkedin-icon" />
          </a>
        </li>
        <li>
          <a
            href="https://angel.co/u/aamirkhan2478"
            target="_blank"
            rel="noreferrer"
          >
            <div className="hero-angel-list-icon" />
          </a>
        </li>
      </ul>
      <div className="profile-pic" />
      <div className="main-image" />
    </section>
  );
};

export default Hero;
