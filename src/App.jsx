import React from 'react';
import Navbar from './components/Navbar';
import Sapna from './components/Sapna'; // Renamed component import
import About from './components/About';
import Experience from './components/Experience';

import Contact from './components/Contact';
import Education from './components/Education';
import Achievments from './components/Achievments'

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-900 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        {/* Background with a two-color gradient */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-r from-pink-300 to-purple-300"></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Sapna /> {/* Renamed component usage */}
        <About />
        <Education/>
        <Experience />
        <Achievments />
        <Contact />
      </div>
    </div>
  );
}

export default App;
