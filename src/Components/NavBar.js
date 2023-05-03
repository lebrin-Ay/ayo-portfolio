import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../index.css';
import Logo from './images/Logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function NavBar() {
  return (
    <div>
      <Navbar className="navBar" expand="md" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} className="logoImg" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto navToggle" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav">
              <Nav.Link href="#home" className="navLink">
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="navLink">
                About
              </Nav.Link>
              <Nav.Link href="#projects" className="navLink">
                Projects
              </Nav.Link>
              <Nav.Link href="#contact" className="navContact">
                Contact
              </Nav.Link>
              <Nav.Link className="socialLink">
                <a
                  href="https://linkedin.com/in/eboweme-ayo"
                  target="_blank"
                  rel="noreferrer"
                  className="social">
                  <FontAwesomeIcon icon={faLinkedin} className="socialIcon" />
                </a>
              </Nav.Link>
              <Nav.Link href="https://github.com/lebrin-Ay" className="socialLinkGit">
                <a href="https://github.com/lebrin-Ay" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="socialIcon" />
                </a>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
