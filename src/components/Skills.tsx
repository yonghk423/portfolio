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
  /* background-color: #e1bee7; */
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

const SkillTitle = styled.h2`
padding: 10px;
`

const SkillsBox = styled.div`
  /* width:700px; */
  background-color: rgba(225, 225, 225, 0.2);
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  padding: 10px;  
`;

const P = styled.p`
color: #9c64a6;
font-weight: bolder;
font-size: 20px;
padding: 10px;
`;

const Skills = () => {
    const [ element, controls ]:any = useScroll();    
    return (
        <Section id="services" ref={element}>
        <Title value="skills" />
        <div className="services">      
            <motion.div
              className="services__service"
              variants={servicesAnimations}
              animate={controls}
              transition={{
                delay: 0.03,
                type: "tween",
                duration: 0.8,
              }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <SkillsBox>          
                <SkillTitle>Front-end</SkillTitle>
                <P>
                JavaScript, HTML, CSS, TypeScript, React.js, Next.js <br></br> 
                Redux.js, Redux-Thunk, SWR, webpack, styled-components
                </P>
                <SkillTitle>Back-end</SkillTitle>
                <P>
                Node.js, Prisma
                </P>
                <SkillTitle>Deployment & database</SkillTitle>
                <P>
                S3, Vercel, Heroku & planetscale
                </P>
              </SkillsBox>  
            </motion.div>      
      </div>
    </Section>
    )
}
export default Skills;