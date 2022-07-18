import React from 'react';
import styled from "styled-components";
import Title from "./Title";
import placeholder from "../assets/placeholder.png";
import play from "../assets/play.png";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { blogsAnimations } from "../animations";

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
      }
      .description {
        height: 10rem;
        color: var(--primary-color);
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
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem 0;
    .decoration {
      display: none;
    }
    .blogs {
      padding: 0 2rem;
      grid-template-columns: 1fr;
      margin: 0 1rem;
    }
  }
`;

const Portfolio = () => {
    const [element, controls]:any = useScroll();
    const blogsData = [
    {
      title: "Summer trip to mountains",
      type: "Adeventure",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores deleniti rem delectus optio harum omnis veniam adipisci ducimus deserunt repudiandae?",
    },
    {
      title: "Flowers purple from sky",
      type: "Personal",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam debitis consectetur ex tempora voluptatum deleniti, officiis dicta eos illo adipisci!",
    },
    {
      title: "Rock conert main stage",
      type: "Music",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea est repudiandae nesciunt mollitia ad molestias dignissimos praesentium fugit reiciendis quis?",
    },
  ];
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
              <div className="image">
                <img src={placeholder} alt="Placeholder" />
              </div>
              <div className="title">
                <h3>배추마켓 온라인 마켓 서비스 웹사이트</h3>
              </div>
              <span className="type">2021.5.25(1인 개인 프로젝트)</span>
              <div className="description">
                <p>프론트엔드 개발자로서 api 요청을 통한 <strong>데이터 관리</strong>를 할 수 있는 능력을 향상 시키고자 하였습니다. <br></br> <strong> 풀스텍 기반의 웹사이트를 완성한다는 도전 </strong> 은 쉽지 않았으나 <strong>Next.js 에서 제공하는 API Routes</strong> 와 비테스(Vitess) 기반의 MySQL 호환 <strong>서버리스</strong> 데이터베이스 플랫폼인 planetscale을 사용하여 까다로운 서버 관리 파트를 최소화 시킴으로서 <strong>api 와 연동</strong>하는 웹사이트를 개발 할 수 있었습니다. 또한 <strong>data fetching 라이브러리</strong>인 <strong>SWR</strong>을 사용하여 데이터 캐싱의 장점을 직접 경험 할수 있었습니다. <strong>프론트엔드와 백엔드의 큰 흐름을 경험</strong>하게 된 큰 경험이었으며 현재도 성능 최적화와 리팩터링를 하며 역량을 키우고 있습니다. </p>
              </div>
              <div>주요 기능</div>
              <div>상품 업로드 및 Q&A 소통 기능</div>
              <a href='https://github.com/yonghk423/next.js-market'>
                <div>GitHub</div>
              </a>
              <a href='https://next-js-market.vercel.app/Login'>
                <div>URL</div>  
              </a>
              <div>Frontend</div>
              <div>TypeScript, Next.js, React Hooks API, SWR, styled-components,</div>
              <div>Backend</div>
              <div>Next.js, Prisma, Nodemailer, iron-session</div>
              <div>database</div>
              <div>planetscale</div>
              <div>Deployment</div>
              <div>Vercel</div>
              <div className="more">
                <img src={play} alt="play" />
                <a href='https://velog.io/@yonghk423?tag=baechu-market'>
                  <span>자세히 보기</span>  
                </a>            
              </div>

              <div className="image">
                <img src={placeholder} alt="Placeholder" />
              </div>
              <div className="title">
                <h3>배추마켓 온라인 마켓 서비스 웹사이트</h3>
              </div>
              <span className="type">2021.5.25(1인 개인 프로젝트)</span>
              <div className="description">
                <p>프론트엔드 개발자로서 api 요청을 통한 <strong>데이터 관리</strong>를 할 수 있는 능력을 향상 시키고자 하였습니다. <br></br> <strong> 풀스텍 기반의 웹사이트를 완성한다는 도전 </strong> 은 쉽지 않았으나 <strong>Next.js 에서 제공하는 API Routes</strong> 와 비테스(Vitess) 기반의 MySQL 호환 <strong>서버리스</strong> 데이터베이스 플랫폼인 planetscale을 사용하여 까다로운 서버 관리 파트를 최소화 시킴으로서 <strong>api 와 연동</strong>하는 웹사이트를 개발 할 수 있었습니다. 또한 <strong>data fetching 라이브러리</strong>인 <strong>SWR</strong>을 사용하여 데이터 캐싱의 장점을 직접 경험 할수 있었습니다. <strong>프론트엔드와 백엔드의 큰 흐름을 경험</strong>하게 된 큰 경험이었으며 현재도 성능 최적화와 리팩터링를 하며 역량을 키우고 있습니다. </p>
              </div>
              <div>주요 기능</div>
              <div>상품 업로드 및 Q&A 소통 기능</div>
              <a href='https://github.com/yonghk423/next.js-market'>
                <div>GitHub</div>
              </a>
              <a href='https://next-js-market.vercel.app/Login'>
                <div>URL</div>  
              </a>
              <div>Frontend</div>
              <div>TypeScript, Next.js, React Hooks API, SWR, styled-components,</div>
              <div>Backend</div>
              <div>Next.js, Prisma, Nodemailer, iron-session</div>
              <div>database</div>
              <div>planetscale</div>
              <div>Deployment</div>
              <div>Vercel</div>
              <div className="more">
                <img src={play} alt="play" />
                <a href='https://velog.io/@yonghk423?tag=baechu-market'>
                  <span>자세히 보기</span>  
                </a>            
              </div>

              <div className="image">
                <img src={placeholder} alt="Placeholder" />
              </div>
              <div className="title">
                <h3>배추마켓 온라인 마켓 서비스 웹사이트</h3>
              </div>
              <span className="type">2021.5.25(1인 개인 프로젝트)</span>
              <div className="description">
                <p>프론트엔드 개발자로서 api 요청을 통한 <strong>데이터 관리</strong>를 할 수 있는 능력을 향상 시키고자 하였습니다. <br></br> <strong> 풀스텍 기반의 웹사이트를 완성한다는 도전 </strong> 은 쉽지 않았으나 <strong>Next.js 에서 제공하는 API Routes</strong> 와 비테스(Vitess) 기반의 MySQL 호환 <strong>서버리스</strong> 데이터베이스 플랫폼인 planetscale을 사용하여 까다로운 서버 관리 파트를 최소화 시킴으로서 <strong>api 와 연동</strong>하는 웹사이트를 개발 할 수 있었습니다. 또한 <strong>data fetching 라이브러리</strong>인 <strong>SWR</strong>을 사용하여 데이터 캐싱의 장점을 직접 경험 할수 있었습니다. <strong>프론트엔드와 백엔드의 큰 흐름을 경험</strong>하게 된 큰 경험이었으며 현재도 성능 최적화와 리팩터링를 하며 역량을 키우고 있습니다. </p>
              </div>
              <div>주요 기능</div>
              <div>상품 업로드 및 Q&A 소통 기능</div>
              <a href='https://github.com/yonghk423/next.js-market'>
                <div>GitHub</div>
              </a>
              <a href='https://next-js-market.vercel.app/Login'>
                <div>URL</div>  
              </a>
              <div>Frontend</div>
              <div>TypeScript, Next.js, React Hooks API, SWR, styled-components,</div>
              <div>Backend</div>
              <div>Next.js, Prisma, Nodemailer, iron-session</div>
              <div>database</div>
              <div>planetscale</div>
              <div>Deployment</div>
              <div>Vercel</div>
              <div className="more">
                <img src={play} alt="play" />
                <a href='https://velog.io/@yonghk423?tag=baechu-market'>
                  <span>자세히 보기</span>  
                </a>            
              </div>
            </motion.div>    
      </div>
    </Section>
    )
}
export default Portfolio;