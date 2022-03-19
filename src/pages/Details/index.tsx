import CardCode from 'components/CardCode';
import Header from 'components/Header';
import React from 'react';
import { Container, Main } from './style';
import { useNavigate } from 'react-router-dom';

const Details: React.FC = () => {
  const navigate = useNavigate();

  const returnHome = () => {
    navigate('/home');
  }
  return (
    <Container>
      <Header />
      <Main>
        <div className='new-content'>
          <div className='teste' onClick={returnHome}>Voltar</div>
          <span className='title'>Detalhes Código Penal</span>
          <div className='content'>
            <CardCode />
          </div>
          <div className='buttons'>
            <button type='button' className='attention'>Alterar</button>
            <button type='button' className='warning'>Excluir</button>
          </div>
        </div>
      </Main>
    </Container>
  );
}

export default Details;
