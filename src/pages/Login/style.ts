import styled from "styled-components";
import logoDpm from './assets/dpmcda.png';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  height: 85%;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: blue;
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
