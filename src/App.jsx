import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Project'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout';

const App = () => {
  return (
    <Router>
    <Navbar/>
    <Hero/>
    <Layout>
   <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </Layout>
    </Router>
  )
}

export default App;
