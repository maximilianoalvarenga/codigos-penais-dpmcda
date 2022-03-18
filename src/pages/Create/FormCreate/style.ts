import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height:95%;
  position: relative;
  box-shadow: 0px 0px 15px rgba(255, 204, 1, 0.7);
  border-radius: 10px;

  .teste {
    width: 50px;
    height: 20px;
    background-color: green;
    position: absolute;
    top: 2%;
    left: 2%;
    cursor: pointer;
  }

  form {
    border-radius: 10px;
    width: 100%;
    height: 100%;
    background: rgba( 1, 1, 1, 0.1 );
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: white;

    .title {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 10%;
      font-size: 2.5rem;
      font-weight: bold;
      color:white;
    }

    .inputs{
      width: 90%;
      height: 75%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }

    label {
      height: 14%;
      width: 40%;
      display: flex;
      flex-direction: column;

      span {
        display: flex;
        height: 40%;
        font-size: 2rem;
        font-weight: bold;
        color: #FFCC01;
      }
    }

    input,
    textarea,
    select {
      border-style: none none solid none;
      border-color: #FFCC01;
      background-color: #151091;
      color: white;
      font-size: 1.8rem;
      font-weight: bold;
      padding-left: 5px;
    }

    input {
      height: 60%;
      width: 100%;
    }

    .numbers {
      display: flex;
      flex-wrap: wrap;
      width: 25%;

      input{
        width: 100%;
        text-align: center;
      }
    }

    .select-input{
      display: flex;
      flex-wrap: wrap;
      width: 25%;

      select {
        text-align: center;
        height: 60%;
      }
    }

    textarea {
      padding: 10px 20px;
      height: 40%;
      width: 95%;
      border-bottom: 2px solid #FFCC01;
    }

    .button-send {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 10%;

      button {
        width: 150px;
        height: 70%;
        font-size: 2rem;
        font-weight: bold;
        border-radius: 10px;
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
