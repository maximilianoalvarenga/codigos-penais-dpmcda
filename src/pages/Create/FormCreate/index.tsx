import CardCode from 'components/CardCode';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from './style';

const FormCreate: React.FC = () => {
  const navigate = useNavigate();

  const returnHome = () => {
    navigate('/home');
  }
  return (
    <Container>
      <div className='new-content'>
        <div className='teste' onClick={returnHome}>Voltar</div>
        <div className='title'>Novo Código Penal</div>
        <div className='content'>
          <CardCode />
        </div>
        <div className='buttons'>
          <button type='button' className='sucess'>Criar</button>
        </div>
      </div>
    </Container>
  );
}

export default FormCreate;
