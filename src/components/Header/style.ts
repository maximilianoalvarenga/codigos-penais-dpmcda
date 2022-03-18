import styled from "styled-components";
import logoDpm from 'assets/dpmcda.png';
import logoCda from 'assets/cda2.jpg';

export const Container = styled.div`
  width: 100vw;
  height: 110px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1.5px solid #FFD700;
  border-style: none none solid none;

  .logo-header {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: transparent;
    background-origin: border-box;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  .title-header {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 3rem;
    font-weight: bold;
    width: 50%;
    height: 90%;
    color: #FFD700;
  }

  .cda {
    width: 90px;
    height: 90px;
    background-image: url(${logoCda});
  }

  .dbm {
    background-image: url(${logoDpm});
  }
`;