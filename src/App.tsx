import React from 'react';
import { motion } from "framer-motion";
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <motion.div initial="hidden" animate="show">
      <ScrollToTop/>
      <Home/>
      <Skills/>   
      <Portfolio/>    
      <Footer/>
    </motion.div>
  );
}

export default App;
