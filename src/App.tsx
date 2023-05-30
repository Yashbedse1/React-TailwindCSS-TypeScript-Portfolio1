import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Contact from './components/Contact';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
     <Navbar />
     <Routes>
      <Route path='/' element={<Hero/>} />
      <Route path='/education' element={<Education/>} />
      <Route path='/experience' element={<Experience/>} />
      <Route path='/skills' element={<Skills/>} />
      <Route path='/contact' element={<Contact/>} />  
     </Routes>
     <Footer />
    
    </div>
  );
}

export default App;
