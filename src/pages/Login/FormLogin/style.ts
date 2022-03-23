import styled from "styled-components";

export const Container = styled.form`
  width: 90%;
  height: 40%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  #title-form {
    width: 100%;
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
  }

  #section-auth {
    width: 95%;
    height: 55%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    label {
      display: flex;
      flex-direction: column;
      height: 40%;

      .label-input {
        font-size: 1.5rem;
        font-weight: bold;
        height: 35%;
      }
    }

    input[type='text'],
    input[type='password'] {
      background-color: rgba(255, 255, 255, 0);
      border-style: none none solid none;
      height: 60%;
      font-size: 1.8rem;
    }
  }

  #btn-login {
    height: 15%;
    width: 50%;
    font-size: 1.6rem;
    font-weight: bold;
    border-radius: 15px;
    border-style: none;
  }
`;
