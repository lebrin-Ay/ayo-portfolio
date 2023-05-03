import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './Components/Pages/LandingPage';
import About from './Components/Pages/About';
import Projects from './Components/Pages/Projects';
import Contact from './Components/Pages/Contact';
import Home from './Components/Pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="projects" element={<Projects />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
