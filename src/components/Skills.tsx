import React from 'react';
import styled from "styled-components";
import { motion } from "framer-motion";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import play from "../assets/play.png";
import { useScroll } from "./useScroll";
import { servicesAnimations } from "../animations";
import Title from './Title';

const Section = styled.section<{ref:any}>`
  min-height: 40vh;
  .services {
    display: grid;
    /* grid-template-columns: repeat(3, 1fr); */
    align-items: center;
    height: 100%;
    margin: 0 14rem;
    margin-top: 10rem;
    padding : 50px;
    row-gap : 20px;
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .services {
      margin: 2rem 0;
      grid-template-columns: 1fr;
      gap: 2rem;
      padding: 0 2rem;
    }
  }
`;

const Skills = () => {
    const [ element, controls ]:any = useScroll();
    const data = [
        {
            type: "Front-end",
            text: "JavaScript, HTML, CSS, TypeScript, React.js, Next.js Redux.js Redux-Thunk SWR webpack, styled-components",
            image: service1,
        },
        {
            type: "Back-end",
            text: "Node.js, Prisma",
            image: service2,
        },
        {
            type: "Deployment & database",
            text: "S3, Vercel, Heroku & planetscale",
            image: service3,
        },
        ]
    return (
        <Section id="services" ref={element}>
        {/* <Title value="skills" /> */}
        <div className="services">
        {data.map((service, index) => {
          return (
            <motion.div
              className="services__service"
              key={service.type}
              variants={servicesAnimations}
              animate={controls}
              transition={{
                delay: 0.03,
                type: "tween",
                duration: 0.8,
              }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="services__service__image">
                {/* <img src={service.image} alt="service" /> */}
              </div>
              <div className="services__service__title">
                {/* <span>0{index + 1}</span> */}
                <h2>{service.type}</h2>
              </div>
              <p className="services__service__description">{service.text}</p>
              {/* <img src={play} alt="Play" /> */}
            </motion.div>
          );
        })}
      </div>
    </Section>
    )
}
export default Skills;