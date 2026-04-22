import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Project';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Terminal from './components/Terminal';

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* HOME */}
        <Route path="/" element={<Hero />} />

        {/* OTHER PAGES */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terminal" element={<Terminal />} />
      </Routes>
    </Router>
  );
};

export default App;