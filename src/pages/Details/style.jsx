import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #202020;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;

`;

export const Main = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  position: relative;

  .new-content {
    width: 80%;
    height: 95%;
    background-color: #333533;
    box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.7);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    position: relative;
    .teste {
      width: 50px;
      height: 20px;
      background-color: green;
      position: absolute;
      top: 2%;
      left: 2%;
      cursor: pointer;
    }

    .title,
    .content,
    .buttons {
      width: 90%;
      display: flex;
    }


    .title {
      justify-content: center;
      align-items: center;
      height: 10%;
      font-size: 3rem;
      font-weight: bold;
      color: white;
    }

    .content {
      height: 80%;
    }

    .buttons {
      align-items: center;
      justify-content: space-evenly;
      height: 12%;

      button {
        cursor: pointer;
        font-size: 2rem;
        font-weight: bold;
        width: 150px;
        height: 80%;
        border-radius: 15px;
        border-style: none;
      }
    }
  }
  .warning {
    background-color: red;
  }

  .warning:hover {
    background-color: #FF0000;
  }
  .attention {
    background-color: yellow;
  }
`;
