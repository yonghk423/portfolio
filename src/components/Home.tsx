import React from 'react';
import styled from "styled-components";
import { motion } from "framer-motion";
import backgroundImg from "../assets/backgroundImg.jpeg"
import play from "../assets/play.png"; 
import { homeAnimation, homeInfoAnimation } from "../animations";
import Navbar from './Navbar';

const Section = styled.section`
  background-image: url(${backgroundImg});
  background-size: cover;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  z-index: 1;
  .home {
    height: 100%;
    .content {
      height: 100%;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.2rem;
      padding-left: 18rem;
      margin-top: 8rem;
      width: 60%;
      .title {
        h1 {
          font-size: 5rem;
          line-height: 5.3rem;
        }
      }
      .subTitle {
        p {
          width: 100%;
          margin-bottom: 2rem;
        }
      }
    }
  }
  .info {
    position: absolute;
    bottom: -2rem;
    right: 0;
    /* background-color: var(--secondary-color); */
    padding: 4rem;
    background-color: rgba(225, 225, 225, 0.2);
    border-radius: 10px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
    color: black;
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4rem;
      color: white;
      
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .home {
      .content {
        padding-left: 2rem;
        width: 100%;
        margin-bottom: 2rem;
        .title {
          h1 {
            font-size: 4rem;
            line-height: 4rem;
          }
        }
      }
    }
    .info {
      position: initial;
      .grid {
        grid-template-columns: 1fr;
        
      }
    }
  }
`;

const List = styled.strong`
font-size: 20px;
font-weight: bolder;
`;

const Title = styled.p`
  font-size: 30px;
`;

const TitleDetail = styled.p`
  font-size: 20px;
`
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
                  <Title>안녕하세요, 프론트엔드 개발자 김용희입니다.</Title>
                </div>
            <div className="subTitle">
                <TitleDetail>
                왜?라는 질문에 답을 얻는 과정을 지향하는 <br></br>  개발자가 되고자 합니다. 빨리 가기보다는 <br></br> 지치지 않고 멀리 가는 개발자를 꿈꿉니다✨.
                </TitleDetail>
            </div>
            {/* <img src={play} alt="Play Button" /> */}
            </div>    
            </motion.div>
            <motion.div
                className="info"
                variants={homeInfoAnimation}
                transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
                >
            <div className="grid">
                <div className="col">
                    <List>Education</List>
                    <p>코드스테이츠 부트캠프 수료(2021.06 - 2021.11)</p>
                </div>
                <div className="col">
                    <List>Email</List>
                    <p>yonghk423423@gmail.com</p>
                </div>
                <div className="col">
                    <List>Mobile</List>
                    <p>010-4907-5443</p>
                </div>
                <div className="col">
                  <a style={{textDecoration: 'none' , color : 'white'}} href='https://github.com/yonghk423'>
                    <List>Github</List>
                  </a>                    
                    {/* <p>Some Street India,</p>
                    <p>960105 India</p> */}
                </div>
                <div className="col">
                  <a style={{textDecoration: 'none', color : 'white'}} href='https://velog.io/@yonghk423'>
                    <List>Blog</List>
                  </a>
                </div>
                <div className="col">
                    <List>University</List>
                    <p>세종대학교(물리학과, 복수전공(전자공학과))</p>
                </div>
            </div>
            </motion.div>
        </Section>    
    )
}

export default Home