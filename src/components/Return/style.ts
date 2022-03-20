import styled from "styled-components";
import { ArrowLeft } from '@styled-icons/bootstrap/ArrowLeft';

export const Container = styled.div`
  width: 50px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.6);
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 2%;
  left: 2%;
  cursor: pointer;
  border-radius: 15px;
`;


export const Voltar = styled(ArrowLeft)`
  width: 100%;
  height: 100%;
  color: black;
`;
