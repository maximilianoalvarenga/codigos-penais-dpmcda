import styled from "styled-components";
import { Add } from '@styled-icons/fluentui-system-filled/Add';

export const Container = styled.div`
  width: 100vw;
  height: auto;
  min-height: 100vh;
  background-color: #202020;
  display: flex;
  flex-direction: column;
  position: absolute;
`;

export const NewAdd = styled(Add)`
  &[data-teste="true"] {
    width: 25px;
    height: 25px;
  }

  width: 100%;
  height: 100%;
  color: #202020;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  #title,
  #search-code {
    margin-top: 20px;
    height: 40px;
    width: 85%;
  }

  #title {
    color: white;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  #search-code {
    width: 81%;
    display: flex;
    justify-content: flex-end;
    position: relative;

    input {
      height: 80%;
      width: 20%;
      border-radius: 10px;
      padding-left: 15px;
    }
  }

`;

export const AddCode = styled.div`
  &[data-teste="true"] {
    width: 100px;
    height: 36px;

    span {
      font-size: 2rem;
      font-weight: bold;
      padding-left: 5px;
    }
  }

  color: #202020;
  transition: all 0.7s;

  background-color: #FFD100;
  width: 36px;
  height: 35px;
  position: absolute;
  left: 0.2%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
