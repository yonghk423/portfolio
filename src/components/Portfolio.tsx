import React from 'react';
import styled from "styled-components";
// import Title from "./Title";
// import placeholder from "../assets/placeholder.png";
import play from "../assets/play.png";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { blogsAnimations } from "../animations";
import market from "../assets/market.jpeg"
import keepmemory from "../assets/keepmemory.jpeg"
import naramal from "../assets/naramal.jpeg"

const Section = styled.section<{ref:any}>`
  min-height: 100vh;
  position: relative;
  margin: 2rem 0;
  .decoration {
    /* position: absolute;
    height: 20rem;
    width: 70vw;
    border: 0.5rem solid var(--secondary-color);
    left: 15%;
    top: -2rem; */
  }
  .blogs {
    /* display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    margin: 5rem 20rem; */
    padding: 0 2rem;
    grid-template-columns: 1fr;
    margin: 0 1rem;
    .blog {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .image {
        height: 22rem;
        background-color: #a686f0af;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .title {
        h3 {
          color: var(--secondary-color);
          font-size: 2rem;
        }
      }
      .type {
        color: var(--primary-color);
        font-weight: bolder;
        text-transform: uppercase;
        background-color: rgba(225, 225, 225, 0.2);
        border-radius: 10px;
        box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
        padding: 5px;
      }
      .description {
        height: 6rem;
        color: var(--primary-color);
        background-color: rgba(225, 225, 225, 0.2);
        border-radius: 10px;
        box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
        padding: 5px;
      }
      .descriptionbaechu {
        height: 7rem;
        color: var(--primary-color);
        background-color: rgba(225, 225, 225, 0.2);
        border-radius: 10px;
        box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
        padding: 5px;
      }
      .more {
        display: flex;
        align-items: center;
        gap: 1rem;
        cursor: pointer;
        span {
          letter-spacing: 0.1rem;
          text-transform: uppercase;
          color: var(--primary-color);
        }
      }
    }
  }  
`;

const Img = styled.img`
  justify-content: center;
  align-items: center;
  margin: 100px;
  box-shadow: 10px 15px 25px 0 rgba(0,0,0,.5);
  border-radius: 5px;
`;

const Detail = styled.p`
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  padding: 5px;
`

const Portfolio = () => {
    const [element, controls]:any = useScroll();
    
    return (
    <Section id="blog" ref={element}>
      {/* <Title value="Blog" /> */}
      {/* <div className="decoration"></div> */}
      <div className="blogs">   
            <motion.div
              className="blog"
              variants={blogsAnimations}
              animate={controls}
              transition={{
                delay: 0.03,
                type: "tween",
                duration: 0.8,
              }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              {/* <div className="image"> */}
                <Img src={market} alt="Placeholder" />
              {/* </div> */}
              <div className="title">
                <h3>배추마켓 온라인 마켓 서비스 웹사이트</h3>
              </div>
              <span className="type">2021.5.25(1인 개인 프로젝트)</span>
              <a style={{textDecoration: 'none'}} href='https://github.com/yonghk423/next.js-market'>
                <div className="type">GitHub</div>
              </a>
              <a style={{textDecoration: 'none'}} href='https://next-js-market.vercel.app/Login'>
                <div className="type">URL</div>  
              </a>
              {/* <div className="descriptionbaechu"> */}
                <Detail>프론트엔드 개발자로서 api 요청을 통한 <strong>데이터 관리</strong>를 할 수 있는 능력을 향상 시키고자 하였습니다. <br></br> <strong> 풀스텍 기반의 웹사이트를 완성한다는 도전 </strong> 은 쉽지 않았으나 <strong>Next.js 에서 제공하는 API Routes</strong> 와 비테스(Vitess) 기반의 MySQL 호환 <strong>서버리스</strong> 데이터베이스 플랫폼인 planetscale을 사용하여 까다로운 서버 관리 파트를 최소화 시킴으로서 <strong>api 와 연동</strong>하는 웹사이트를 개발 할 수 있었습니다. 또한 <strong>data fetching 라이브러리</strong>인 <strong>SWR</strong>을 사용하여 데이터 캐싱의 장점을 직접 경험 할수 있었습니다. <strong>프론트엔드와 백엔드의 큰 흐름을 경험</strong>하게 된 큰 경험이었으며 현재도 성능 최적화와 리팩터링를 하며 역량을 키우고 있습니다. </Detail>
              {/* </div> */}
              <div className="type">주요 기능 <br></br> 상품 업로드 및 Q&A 소통 기능 </div>
              {/* <div className="type">상품 업로드 및 Q&A 소통 기능</div> */}              
              <div className="type">Frontend <br></br> TypeScript, Next.js, React Hooks API, SWR, styled-components </div>
              {/* <div>TypeScript, Next.js, React Hooks API, SWR, styled-components,</div> */}
              <div className="type">Backend <br></br> Next.js, Prisma, Nodemailer, iron-session </div>
              {/* <div>Next.js, Prisma, Nodemailer, iron-session</div> */}
              <div className="type">database <br></br> planetscale </div>
              {/* <div>planetscale</div> */}
              <div className="type">Deployment <br></br> Vercel </div>
              {/* <div>Vercel</div> */}
              <div className="more">
                <img src={play} alt="play" />
                <a style={{textDecoration: 'none'}} href='https://velog.io/@yonghk423?tag=baechu-market'>
                  <span className="type">자세히 보기</span>  
                </a>            
              </div>

              {/* <div className="image"> */}
                <Img src={keepmemory} alt="Placeholder" />
              {/* </div> */}
              <div className="title">
                <h3>추억을 담다 웹사이트</h3>
              </div>
              <span className="type">2021.12.01(1인 개인 프로젝트)</span>
              <a style={{textDecoration: 'none'}} href='https://github.com/yonghk423/keep-memories'>
                <div className="type">GitHub</div>
              </a>
              <a style={{textDecoration: 'none'}} href='https://market-list-eight.vercel.app'>
                <div className="type">URL</div>  
              </a>
              {/* <div className="description"> */}
                <Detail>개인프로젝트를 통해 <strong>React</strong> 에 대한 기존에 알고 있던 <strong>지식을 활용</strong> 하고 <strong>기능을 구현함</strong>으로써 <strong>개발 숙련도의 향상</strong>과 <strong>상태 관리의 중요성</strong> 을 다시 깊게 이해하기 위해서 시작 하였습니다. 또한 카페마다 감성을 담은 사진을 찍는것을 좋아하다보니 이것을 컨셉으로 해서 웹사이트를 만들면 좋을 것 같다는 생각으로 웹사이트를 개발하게 되었습니다.
                </Detail>
              {/* </div> */}
              <div className="type">주요 기능 <br></br> 사진 업로드 및 글 작성 기능, 즐겨찾기 추가 기능 </div>
              {/* <div className="type">사진 업로드 및 글 작성 기능, 즐겨찾기 추가 기능</div> */}              
              <div className="type">Frontend <br></br> TypeScript, React.js, React Hooks API, Redux.js, <br></br> Redux-Thunk, Axios, Sass(SCSS)</div>
              {/* <div className="type">TypeScript, React.js, React Hooks API, Redux.js, <br></br> Redux-Thunk, Axios, Sass(SCSS)</div> */}
              <div className="type">Backend <br></br> Node.js, Express.js </div>
              <div className="type">Deployment <br></br> Vercel, Heroku </div>
              {/* <div className="type">Vercel, Heroku</div> */}
              <div className="more">
                <img src={play} alt="play" />
                <a style={{textDecoration: 'none'}} href='https://velog.io/@yonghk423?tag=%EA%B0%9C%EC%9D%B8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8'>
                  <span className="type">자세히 보기</span>  
                </a>            
              </div>

              {/* <div className="image"> */}
                <Img src={naramal} alt="Placeholder" />
              {/* </div> */}
              <div className="title">
                <h3>나랏말싸미 웹사이트</h3>
              </div>
              <span className="type">2021.11 - 2021.12(4인/4주)</span>
              <a style={{textDecoration: 'none'}} href='https://github.com/codestates/TheKing-sLetters'>
                <div className="type">GitHub</div>
              </a>
              <a style={{textDecoration: 'none'}} href='https://thekingsletters.ml'>
                <div className="type">URL</div>  
              </a>
              {/* <div className="description"> */}
                <Detail><strong>협업에서 중요한 소통과 맡은 역할에 대한 책임감</strong>을 느끼는 소중한 기회이자 경험이었습니다. 나랏말싸미는 우리말을 재밌게 배워 바르게 쓸 수 있도록 관련된 퀴즈를 제공하는 사이트입니다. 직접 퀴즈를 만들수 있으며 흥미를 유발하고 퀴즈를 풀고 맞춤에 따라 마일리지를 얻어 활용할 수 있는 즐거움을 배로 증가 시킬 것 입니다.
                </Detail>
              {/* </div> */}
              <div className="type">주요 기능 <br></br> 퀴즈 만들기, 퀴즈 맞추기, 마일리지를 이용한 상품구매 </div>
              {/* <div className="type">퀴즈 만들기, 퀴즈 맞추기, 마일리지를 이용한 상품구매</div>               */}
              <div className="type">Frontend <br></br> JavaScript, React.js, React Hooks API, Axios <br></br> React Router, Styled-Components </div>
              {/* <div>JavaScript, React.js, React Hooks API, Axios <br></br> React Router, Styled-Components</div>               */}
              <div className="more">
                <img src={play} alt="play" />
                <a style={{textDecoration: 'none'}} href='https://velog.io/@yonghk423?tag=4%EC%A3%BC-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8'>
                  <span className="type">자세히 보기</span>  
                </a>            
              </div>
            </motion.div>    
      </div>
    </Section>
    )
}
export default Portfolio;