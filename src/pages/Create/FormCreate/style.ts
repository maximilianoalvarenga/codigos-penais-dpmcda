import styled from "styled-components";

export const ButtonCreate = styled.button`
  &[data-disabled="true"] {
    cursor: default;
  }

  cursor: pointer;
`;
export const Container = styled.div`

  width: 80%;
  height:95%;
  position: relative;
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  display: flex;
  justify-content: center;

  .new-content {
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

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
        border-style: none;
        font-size: 2rem;
        font-weight: bold;
        width: 150px;
        height: 80%;
        border-radius: 15px;
      }
    }
  }


  @media screen and (max-width: 767px)  {
    form {
      .numbers {
        width: 45%;
      }
    }
  }
`;
