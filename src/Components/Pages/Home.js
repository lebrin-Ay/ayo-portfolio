import React from 'react';
import HeroImg from '..//images/circle-cropped.png';
import WomanCoding from '..//images/woman-coding.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HtmlIcon from '..//images/html5.svg';
import CssIcon from '..//images/css.svg';
import JsIcon from '..//images/javascript.svg';
import ReactIcon from '..//images/reactjs.svg';
import BootstrapIcon from '..//images/bootstrap.svg';
// import SassIcon from '..//images/scss.svg';

function Home() {
  return (
    <main className="heroWrapper" id="home">
      <Container className="homeSection">
        <Row className="rowHero">
          <Col md>
            <section className="greetings">
              <h1>
                Front-End Developer{' '}
                <img src={WomanCoding} alt="Woman Coding" className="womanCoding" />{' '}
              </h1>
              <p>
                Hi, I&apos;m Eboweme Ayo. A passionate Front-end Developer based in Lagos, Nigeria
              </p>
              <a href="Ayo Eboweme -New.pdf" download="Ayo Eboweme Resume">
                <button className="btnResume">Download Resume</button>
              </a>
            </section>
          </Col>
          <Col md>
            <div className="heroImgWrapper">
              <img src={HeroImg} alt="Ayo's image" className="heroImg" />
            </div>
          </Col>
        </Row>
        <Row className="skills">
          <Col sm>
            <h2 className="techStack">
              Tech Stack <span className="divider">|</span>{' '}
            </h2>
          </Col>
          <Col>
            <img src={HtmlIcon} className="logoIcon" title="HTML 5" />
          </Col>
          <Col>
            <img src={CssIcon} className="logoIcon" title="CSS3" />
          </Col>
          <Col>
            <img src={JsIcon} className="logoIcon" title="JavaScript" />
          </Col>
          <Col>
            <img src={ReactIcon} className="logoIcon" title="React JS" />
          </Col>
          <Col>
            <img src={BootstrapIcon} className="logoIcon" title="Bootstrap" />
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Home;
