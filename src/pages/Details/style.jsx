import styled from "styled-components";

export const Confirmation = styled.div`
  &[data-z="1"] {
    z-index: 1;
  }

  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: rgba(192,192,192, 0.6);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;

  .card-validation {
    border-radius: 10px;
    width: 300px;
    height: 200px;
    background-color: silver;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    span,
    .buttons {
      width: 95%;
      height: 35%;
      align-items: center;
      display: flex;
    }

    span {
      justify-content: center;
      font-size: 2.5rem;
      font-weight: bold;
    }

    .buttons {
      justify-content: space-evenly;
    }

    button {
      font-size: 2rem;
      font-weight: bold;
      cursor: pointer;
      border-style: none;
      border-radius: 10px;
      height: 70%;
      width: 40%;
    }
  }
`
export const Container = styled.div`
  &[data-z="1"] {
      z-index: 0;
  }

  width: 100vw;
  height: 100vh;
  background-color: #E9E9E7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  z-index: 1;
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
    background-color: rgba(255, 255, 255, 0.6);
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.7);
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
      color: black;
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
