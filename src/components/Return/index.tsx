import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Voltar } from './style';

const Return: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate(-1)}>
      <Voltar />
    </Container>
  );
}

export default Return;
