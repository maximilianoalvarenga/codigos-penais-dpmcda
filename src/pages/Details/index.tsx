import CardCode from 'components/CardCode';
import Header from 'components/Header';
import React from 'react';
import { Container, Main } from './style';

const Details: React.FC = () => {
  return (
    <Container>
      <Header />
      <Main>
        <div className='new-content'>
          <span className='title'>Detalhes Código Penal</span>
          <div className='content'>
            <CardCode />
          </div>
          <div className='buttons'>
            <button type='button'>Alterar</button>
            <button type='button'>Excluir</button>
          </div>
        </div>
      </Main>
    </Container>
  );
}

export default Details;
