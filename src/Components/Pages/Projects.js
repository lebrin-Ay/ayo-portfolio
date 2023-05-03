import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import JadooImg from '..//images/jadoo.png';
import Calculator from '..//images/calculator.png';
import Dashboard from '..//images/dashboard.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

function Projects() {
  return (
    <section className="projectsSection" id="projects">
      <div className="projectContainer">
        <h3 className="projectTitle">Portfolio</h3>
        <p className="projectSubTitle">
          Every project presents a distinctive development challenge.
        </p>

        <div className="projectCard">
          <div className="imgWrapper">
            <img src={Dashboard} alt="website" className="jadooImg" />
          </div>
          <div className="projectDescription">
            <h4 className="projectText">citrone dashboard</h4>
            <p className="projectDetails">
              A learning experience platform for seamlessly accessing learning materials (In-View).
            </p>
            <div className="stack">
              <p>HTML</p>
              <p>CSS</p>
            </div>
            <div className="links">
              <a
                target="_blank"
                href="https://github.com/johnfeyisayo/Citrone-Redesign/tree/ayo_dashboard"
                rel="noreferrer">
                <span className="linkText">Code</span>
                <FontAwesomeIcon icon={faGithub} className="projectIcon" />
              </a>
              <a
                target="_blank"
                href="https://citrone-redesign-git-ayodashboard-johnfeyisayo.vercel.app/dashboard"
                rel="noreferrer">
                <span>Live Demo</span>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="arrowRight" />
              </a>
            </div>
          </div>
        </div>

        <div className="projectCard">
          <div className="imgWrapper">
            <img src={JadooImg} alt="website" className="jadooImg" />
          </div>
          <div className="projectDescription">
            <h4 className="projectText">jadoo travel ✈️</h4>
            <p className="projectDetails">
              A travel website that offers travel services such as booking accommodations and tours.
              The website design is clean and visually appealing, with high-quality images and a
              simple, easy-to-navigate layout.
            </p>
            <div className="stack">
              <p>HTML</p>
              <p>CSS</p>
            </div>
            <div className="links">
              <a
                target="_blank"
                href="https://github.com/lebrin-Ay/Travel-Landing-Page"
                rel="noreferrer">
                <span className="linkText">Code</span>
                <FontAwesomeIcon icon={faGithub} className="projectIcon" />
              </a>
              <a
                target="_blank"
                href="https://eloquent-macaron-f2d361.netlify.app/"
                rel="noreferrer">
                <span>Live Demo</span>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="arrowRight" />
              </a>
            </div>
          </div>
        </div>

        <div className="projectCard">
          <div className="imgWrapper">
            <img src={Calculator} alt="website" className="jadooImg" />
          </div>
          <div className="projectDescription">
            <h4 className="projectText">calculator 🖩</h4>
            <p className="projectDetails">
              A simple calculator that performs mathematical operations such as addition,
              subtraction, multiplication, and division.
            </p>
            <div className="stack">
              <p>HTML</p>
              <p>CSS</p>
              <p>JS</p>
            </div>
            <div className="links">
              <a
                target="_blank"
                href="https://github.com/lebrin-Ay/Simple-Calculator"
                rel="noreferrer">
                <span className="linkText">Code</span>
                <FontAwesomeIcon icon={faGithub} className="projectIcon" />
              </a>
              <a target="_blank" href="https://lebrin-227549.netlify.app/" rel="noreferrer">
                <span>Live Demo</span>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="arrowRight" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
