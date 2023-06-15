import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Contact from './components/Contact';


function App() {
  return (
    <div>
     <Navbar />
      <Hero/>
      <Education/>
      <Experience/>
      <Skills/>
      <Contact/> 
     <Footer />
    </div>
  );
}

export default App;
