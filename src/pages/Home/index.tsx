import Header from '../../components/Header';
import React from 'react';
import { Container, Main } from './style';
import TableCodes from 'components/TableCodes';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Main>
        <TableCodes />
      </Main>
    </Container>
  );
}

export default Home;
