import styled from "styled-components";

export const Container = styled.div`
  width: 85%;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: transparent;
  margin-top: 10px;

  table {
    background-color: white;
    width: 95%;
    border-collapse: collapse;
  }

  thead{
    border-top: 2px solid black;
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  tr {
    background-color:  white;
    font-weight: bold;
    color: black;
    height: 50px;
    border: 0.3rem solid black;
    text-align: left;
    border-style: none none solid none;
  }

  tr:hover {
    background-color: #FFEE32;

    color: #4B45DE;
  }

  td {
    cursor: pointer;
    padding-left: 10px;
    font-size: 1.8rem;
    width: 25%;
  }

  th {
    background-color: #D6D6D6;
    color: black;
    padding-left: 5px;
  }
`;
