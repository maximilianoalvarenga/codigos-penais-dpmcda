import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  color: white;

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
`;

