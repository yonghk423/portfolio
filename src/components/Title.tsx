import React from 'react';
import styled from "styled-components";

const Div = styled.div`
  position: relative;
  h1 {
    position: absolute;
    transform: translateX(20%) translateY(-3vw); 
    /* rotate(-90deg); */
    font-size: 3rem;
    text-transform: uppercase;
    color: #712079;
    font-weight: 100;
    @media screen and (min-width: 280px) and (max-width: 1080px) {
      display: none;
    }
  }
`;
interface ITitle {
  value : string
}

const Title = ( { value }: ITitle ) => {
  console.log(value);
    return (
        <Div className="sideTitle">
            <h1>{value}</h1>
        </Div>
        )
}

export default Title;