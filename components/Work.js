import Image from "next/image";
import { useState } from "react";
import profile from "@/public/Cardimage.png";
import Modal from "./Modal";

const Work = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mainCardDetails = {
    title: "Degree Tracking System",
    desc: "Degree tracking system will allow the students to track their degree and check the status of their application of degree. This will facilitate both the students and the university administration. In past the process of applying and receiving the degree was manual. That takes lot of time and many students have to come to university again and again to check the status of their degree but this system will allow the students to check their degree status by sitting at home.",
    languages: ["MongoDB", "NodeJS", "ExpressJS", "ReactJS"],
    live: "https://fuudtvs.netlify.app/",
    source: "https://github.com/aamirkhan2478/fuudtvs.git",
  };

  const { title, desc, languages, live, source } = mainCardDetails;
  // Get all data from languages array in side mainCardDetails object
  const languagesArr = languages.map((language, index) => (
    <li key={index}>{language}</li>
  ));
  console.log(isOpen);
  return (
    <>
      <Modal
        title={title}
        desc={desc}
        languages={languages}
        img={profile}
        live={live}
        source={source}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <section id="work" className="work-section">
        <div className="grid-items" id="grid">
          <h1 className="work-main-heading">My Recent Works</h1>
          <hr className="divider" />
          <div className="main-card" id="main">
            <Image src={profile} className="post-image" alt="project-image" />
            <div className="main-card-content">
              <h4 className="work-title-post">{title}</h4>
              <p className="work-supporting-text">{desc.slice(0, 100)} ...</p>
              <ul className="languages-list">{languagesArr}</ul>
              <div className="btn-left">
                <button
                  className="btn-primary btn"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  See Project
                </button>
              </div>
            </div>
          </div>
          <div class="card-desktop" id="card-image-${id}">
            <Image src={profile} alt="card image" />
            <div class="card-info">
              <h1 class="card-heading">{title}</h1>
              <p class="card-text">{desc.slice(0, 100)} ...</p>
              <ul class="card-languages-list">{languagesArr}</ul>
              <button class="btn-block btn-primary btn-hidden">
                See Project
              </button>
            </div>
          </div>
          <div class="card-desktop" id="card-image-${id}">
            <Image src={profile} alt="card image" />
            <div class="card-info">
              <h1 class="card-heading">{title}</h1>
              <p class="card-text">{desc.slice(0, 100)} ...</p>
              <ul class="card-languages-list">{languagesArr}</ul>
              <button class="btn-block btn-primary btn-hidden">
                See Project
              </button>
            </div>
          </div>
          <div class="card-desktop" id="card-image-${id}">
            <Image src={profile} alt="card image" />
            <div class="card-info">
              <h1 class="card-heading">{title}</h1>
              <p class="card-text">{desc.slice(0, 100)} ...</p>
              <ul class="card-languages-list">{languagesArr}</ul>
              <button class="btn-block btn-primary btn-hidden">
                See Project
              </button>
            </div>
          </div>
          <div class="card-desktop" id="card-image-${id}">
            <Image src={profile} alt="card image" />
            <div class="card-info">
              <h1 class="card-heading">{title}</h1>
              <p class="card-text">{desc.slice(0, 100)} ...</p>
              <ul class="card-languages-list">{languagesArr}</ul>
              <button class="btn-block btn-primary btn-hidden">
                See Project
              </button>
            </div>
          </div>
          <div class="card">
            <Image src={profile} alt="card image" />
            <div class="card-info">
              <h1 class="card-heading">{title}</h1>
              <p class="card-text">{desc.slice(0, 100)} ...</p>
              <ul class="card-languages-list">{languagesArr}</ul>
              <button class="btn-block btn-primary btn">See Project</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
