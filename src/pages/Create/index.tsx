import Header from 'components/Header';
import React from 'react';
import FormCreate from './FormCreate';
import { Container, Main } from './style';

const Create: React.FC = () => {
  return (
    <Container>
      <Header />
      <Main>
        <FormCreate />
      </Main>
    </Container>
  );
}

export default Create;
