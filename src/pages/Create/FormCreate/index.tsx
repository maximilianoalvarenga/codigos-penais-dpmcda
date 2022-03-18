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
      <div className='teste' onClick={returnHome}>Voltar</div>
      <form>
        <span className='title'>Novo Código Penal</span>
        <div className='inputs'>
          <label>
            <span>Nome:</span>
            <input type="text" name="name" id="name" />
          </label>
          <label className=' numbers'>
            <span>Multa:</span>
            <input type="text" name="fine" id="fine" />
          </label>
          <label className='numbers'>
            <span>Tempo de Prisão:</span>
            <input type="text" name="time" id="time" />
          </label>
          <label className='select-input'>
            <span>Status:</span>
            <select>
              <option selected value="active">Ativo</option>
              <option value="inactive">Inativo</option>
            </select>
          </label>
          <textarea>
            Descrição
          </textarea>
        </div>
        <div className='button-send'>
          <button type='button'>Criar</button>
        </div>
      </form>
    </Container>
  );
}

export default FormCreate;
