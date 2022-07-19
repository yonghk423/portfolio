import React from 'react';
import styled from "styled-components";

const Div = styled.div`
  position: relative;
  h1 {
    position: absolute;
    transform: translateX(-42%) translateY(12vw) rotate(-90deg);
    font-size: 5rem;
    text-transform: uppercase;
    color: black;
    font-weight: 100;
    @media screen and (min-width: 280px) and (max-width: 1080px) {
      display: none;
    }
  }
`;

const Title = ({ value }:any) => {
    return (
        <Div className="sideTitle">
            <h1>{value}</h1>
        </Div>
        )
}

export default Title;