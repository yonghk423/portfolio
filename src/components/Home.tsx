import React from 'react';
import styled from "styled-components";
import { motion } from "framer-motion";
import home from "../assets/home.png"
import play from "../assets/play.png"; 
// import { homeAnimation, homeInfoAnimation } from "animations";
import Navbar from './Navbar';

const Section = styled.section`
  background-image: url(${home});
  background-size: cover;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
`;

const Home = () => {
    return (
        <Section>
            <Navbar/>
        </Section>
        
    )
}

export default Home