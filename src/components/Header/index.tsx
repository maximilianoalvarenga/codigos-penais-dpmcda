import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from './style';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  }

  return (
    <Container>
      <div className='logo-header cda' />
      <div className='title-header'>
        <span>Departamento de Policia Militar - Cidade Alta</span>
      </div>
      <div className='logo-header dbm' onClick={ handleClick }/>
    </Container>
  );
}

export default Header;
