import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container } from './style';

const CardCode: React.FC = ({penalCode}: any) => {
  const { id }= useParams();
  console.log(id);

  return id !== undefined ? (
    penalCode.map((code: {
      id: number
      nome: string
      descricao: string
      multa: number
      tempoPrisao: number
      status: number
    }) => code.id.toString() === id && (
      <Container>
          <label>
            <span>Nome:</span>
            <input type="text" name="name" id="name" value={code.nome} disabled/>
          </label>
          <label className=' numbers'>
            <span>Multa:</span>
            <input type="text" name="fine" id="fine" value={`$ ${code.multa}`} disabled/>
          </label>
          <label className='numbers'>
            <span>Tempo de Prisão:</span>
            <input type="text" name="time" id="time" value={`${code.tempoPrisao} meses`} disabled/>
          </label>
          <label className='select-input'>
            <span>Status:</span>
            <select disabled>
              <option selected value={code.status}>{code.status === 1 ? 'Ativo' : 'Inativo'}</option>
              <option value="inactive">Inativo</option>
            </select>
          </label>
          <textarea disabled>
            {code.descricao}
          </textarea>
      </Container>
    ))
  ) : (
    <Container>
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
  </Container>
  );
}

export default connect( state => ({
  penalCode: state
}))(CardCode);
