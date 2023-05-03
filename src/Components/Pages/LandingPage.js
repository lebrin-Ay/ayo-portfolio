import React from 'react';
import NavBar from '../NavBar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from '../Footer';
// import '../index.css';

function LandingPage() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default LandingPage;
