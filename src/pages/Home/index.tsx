import Header from '../../components/Header';
import React, { useState } from 'react';
import { AddCode, Container, Main, NewAdd } from './style';
import TableCodes from 'components/TableCodes';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const [showText, setShowText ] = useState(false);
  const navigate = useNavigate();
  const mouseChange = () => {
    setShowText(!showText)
  }

  const handleClick = () => {
    navigate('/new');
  }

  return (
    <Container>
      <Header />
      <Main>
        <div id='title'>
          <span>Códigos Penais</span>
        </div>
        <div id='search-code'>
            <input
              type="text"
              name="search"
              id="search"
              placeholder='Procurar Código Penal'
            />
            <AddCode
              data-teste={showText}
              onMouseEnter={mouseChange}
              onMouseLeave={mouseChange}
              onClick={handleClick}
            >
              <NewAdd data-teste={showText}/>
              { showText && <span>Add</span>}
            </AddCode>
        </div>
        <TableCodes />
      </Main>
    </Container>
  );
}

export default Home;
