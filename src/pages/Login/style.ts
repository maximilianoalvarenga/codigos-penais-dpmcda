import styled from "styled-components";
import logoDpm from 'assets/dpmcda.png';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgb(193,160,50);
  background: radial-gradient(circle, rgba(193,160,50,1) 0%, rgba(0,0,0,1) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 2;
`;

export const Content = styled.div`
  height: 85%;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  //
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.7);
  //
  border-radius: 5%;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    max-width: 860px;
    width: 50%;
    background-color: red;
  }

  @media screen and (max-width: 767px) {
    width: 80%;
    background-color: yellow;
  }
`;

export const Logo = styled.div`
  width: 100%;
  height: 40%;
  background-origin: border-box;
  background-size: contain;
  background-image: url(${logoDpm});
  background-repeat: no-repeat;
  background-position: center;
`;
