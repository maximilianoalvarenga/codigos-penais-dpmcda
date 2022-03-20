import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased !important;
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: blue #FFCC01;
  }

  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    background: #FFCC01;
  }

  *::-webkit-scrollbar-thumb {
    background-color: black;
    border-radius: 20px;
    border: 3px solid #FFCC01;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }
  .sucess {
    background-color: green;
  }
`
