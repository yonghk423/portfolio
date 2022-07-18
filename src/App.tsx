import React from 'react';
import { motion } from "framer-motion";
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home';
import Services from './components/Services';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <motion.div initial="hidden" animate="show">
      <ScrollToTop/>
      <Home/>
      <Services/>   
      <Blog/>    
      <Footer/>
    </motion.div>
  );
}

export default App;
