import React from "react";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-flex">
        <div className="about-content">
          <h1 className="about-heading">About me</h1>
          <p className="about-description">
            Hello I&apos;m a Web developer! I can help you build a product , feature
            or website Look through some of my work and experience! If you like
            what you see and have a project you need coded, don&apos;t hesitate to
            contact me.
          </p>
          <div className="btn-left" id="btn-id">
            <a
              href="https://docs.google.com/document/d/1zvEf50SNzfS8f5M1-spD68IDhyzXA1XR3O19nY3LpU8/edit?usp=sharing"
              target="_blank"
              className="btn-primary"
              rel="noreferrer"
            >
              Get My Resume
            </a>
          </div>
        </div>
        <div className="image-container">
          <div className="about-image" />
        </div>
      </div>
      <hr />
      <ul className="about-list">
        <li className="language-list">
          Languages
          <ul>
            <li className="list-style-none">Javascript</li>
            <li className="list-style-none">Ruby</li>
            <li className="list-style-none">Html</li>
            <li className="list-style-none">Css</li>
          </ul>
        </li>
        <li className="frameworks-list">
          Frameworks
          <ul>
            <li className="list-style-none">Bootstrap</li>
            <li className="list-style-none">Ruby on Rails</li>
            <li className="list-style-none">React Js</li>
            <li className="list-style-none">Node Js</li>
            <li className="list-style-none">Express Js</li>
            <li className="list-style-none">Material UI</li>
            <li className="list-style-none">Tailwind CSS</li>
          </ul>
        </li>
        <li className="skills-list">
          Skills
          <ul>
            <li className="list-style-none">Codekit</li>
            <li className="list-style-none">Github</li>
            <li className="list-style-none">Codepen</li>
            <li className="list-style-none">Terminal</li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default About;
