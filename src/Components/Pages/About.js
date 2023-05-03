import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AboutMe from '..//images/about-me-medium.png';

function About() {
  return (
    <section className="aboutSection" id="about">
      <Container>
        <Row>
          <Col md>
            <article className="aboutImg">
              <img src={AboutMe} alt="" className="aboutPic" />
            </article>
          </Col>
          <Col md>
            <article className="aboutMeWrapper">
              <h1 className="aboutText">about me</h1>
              <p className="aboutDescription">
                As a Junior Front-End Developer, I am proficient in HTML, CSS, JavaScript, React,
                and Bootstrap. I am constantly improving my skills and learning new programming
                languages to enhance my abilities. I specialize in designing visually appealing
                interfaces that are built on clean and optimized code, ensuring seamless navigation
                for users. I also excel in collaborating with cross-functional teams to produce
                exceptional web applications.
              </p>
            </article>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
