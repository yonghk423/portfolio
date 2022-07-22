import React, { useState } from "react";
import styled from "styled-components";
// import logo from "../assets/logo.png"
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { navAnimation } from "../animations";
import { useScroll } from "./useScroll";

const Nav = styled(motion.nav)<{ state : number, ref: any, animate: any}>`
  display: flex;
  justify-content: space-between;
  margin: 0 12rem;
  padding-top: 2rem;
  color: white;
  .brand__container {
    margin: 0 2rem;
    .brand {
    }
    .toggle {
      display: none;
    }
  }
  .links {
    ul {
      .active {
        a {
          border-bottom: 0.2rem solid var(--secondary-color);
        }
      }
      list-style: none;
      display: flex;
      gap: 3rem;
      li {
        a {
          color: white;
          text-decoration: none;
          font-weight: bold;
          font-size: 1.1rem;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0;
    position: relative;
    .brand__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .brand {
      }
      .toggle {
        padding-right: 1rem;
        display: block;
        z-index: 1;
      }
    }
    .show {
      opacity: 1 !important;
      visibility: visible !important;
    }

    .links {
      position: absolute;
      overflow-x: hidden;
      top: 0;
      right: 0;
      width: ${({ state }) => (state ? "60%" : "0%")};
      height: 100vh;
      background-color: #ff4343;
      opacity: 0;
      visibility: hidden;
      transition: 0.4s ease-in-out;
      ul {
        flex-direction: column;
        text-align: center;
        height: 100%;
        justify-content: center;
      }
    }
  }
`;

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [element, controls] = useScroll();
    // const html:HTMLHtmlElement | null = document.querySelector("html");
    return (
    <Nav
      state={isNavOpen ? 1 : 0}
      variants={navAnimation}
      transition={{ delay: 0.1 }}
      ref={element}
      animate={controls}
    >
      <div className="brand__container">
        {/* <a href="#" className="brand">
          <img src={logo} alt="Logo" />
        </a> */}
        <div className="toggle">
          {isNavOpen ? (
            <MdClose onClick={() => setIsNavOpen(false)} />
          ) : (
            <GiHamburgerMenu
              onClick={(e) => {
                e.stopPropagation();
                setIsNavOpen(true);
              }}
            />
          )}
        </div>
      </div>
      <div className={`links ${isNavOpen ? "show" : ""}`}>
        <ul>
          <li className="active">
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Skills</a>
          </li>
          {/* <li>
            <a href="#portfolio">Portfolio</a>
          </li> */}
          <li>
            <a href="#blog">Project</a>
          </li>
          {/* <li>
            <a href="#skills">Skills</a>
          </li> */}
          {/* <li>
            <a href="#contact">Contact</a>
          </li> */}
        </ul>
      </div>
    </Nav>
    )
}
export default Navbar;