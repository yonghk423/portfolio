import React from 'react';
import styled from "styled-components";
import { motion } from "framer-motion";
import home from "../assets/home.png"
import play from "../assets/play.png"; 
import { homeAnimation, homeInfoAnimation } from "../animations";
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
            <motion.div
                variants={homeAnimation}
                transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
                className="home"
            >
            <div className="content">
                <div className="title">
                <h1>Digital Crafters</h1>
            </div>
            <div className="subTitle">
                <p>
                The not errors rendering handed he you concepts fate objective
                rare boss a road a he while what before to he is size separated
                room cold hunt by and they my
                </p>
            </div>
            <img src={play} alt="Play Button" />
            </div>    
            </motion.div>
            <motion.div
                className="info"
                variants={homeInfoAnimation}
                transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
                >
            <div className="grid">
                <div className="col">
                    <strong>Agency</strong>
                    <p>Digital Crafters</p>
                </div>
                <div className="col">
                    <strong>Email</strong>
                    <p>kishansheth21@gmail.com</p>
                </div>
                <div className="col">
                    <strong>Mobile</strong>
                    <p>+91 1231231131</p>
                </div>
                <div className="col">
                    <strong>Address</strong>
                    <p>Some Street India,</p>
                    <p>960105 India</p>
                </div>
                <div className="col">
                    <strong>Services</strong>
                    <p>Corporate Identity</p>
                    <p>Full Coding</p>
                </div>
                <div className="col">
                    <strong>Working Hours</strong>
                    <p>Monday to Friday</p>
                    <p>08:00 to 18:00</p>
                </div>
            </div>
            </motion.div>
        </Section>    
    )
}

export default Home