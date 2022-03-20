import styled from "styled-components";
import { LeftArrowAlt } from '@styled-icons/boxicons-regular/LeftArrowAlt';

export const Container = styled.div`
  width: 35px;
  height: 35px;
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 2%;
  left: 2%;
  cursor: pointer;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const Voltar = styled(LeftArrowAlt)`
  width: 90%;
  height: 70%;
  color: black;
`;
