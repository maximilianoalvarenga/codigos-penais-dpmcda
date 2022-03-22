import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from './style';
import { useNavigate } from 'react-router-dom';
import * as UTIL from 'services/Utils';

const TableCodes: React.FC = () => {
  const { codigopenal, resultSearch } = useSelector((state: any)=> state.codigopenal);

  const navigate = useNavigate();
  const convertToData = (param: string): string => {
    const newData = UTIL.convertData(param);
    return newData;
  }

  const redirectToDetails = (param: number): void => {
    navigate(`/details/${param}`);
  }

  return (resultSearch.length > 0 && typeof resultSearch[0] === 'string')  ?
    (
      <div>Nada Encontrado</div>
    ) : (resultSearch.length > 0 && typeof resultSearch[0] !== 'string') ? (
      <Container>
        <table>
          <thead>
            <tr id='header-row'>
              <th>Nome</th>
              <th>Data</th>
              <th>Multa</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              resultSearch.map((code: {
                id: number
                nome: string
                multa: string
                status: number
                dataCriacao: string
              }) => (
                <tr key={ code.id} className='code-information' onClick={() => redirectToDetails(code.id)}>
                  <td>{code.nome}</td>
                  <td>{convertToData(code.dataCriacao)}</td>
                  <td>{`R$ ${code.multa.toString().replace('.',',')}`}</td>
                  <td>{code.status === 1 ? 'Ativo' : 'Inativo'}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </Container>
    ) : (
      <Container>
        <table>
          <thead>
            <tr id='header-row'>
              <th>Nome</th>
              <th>Data</th>
              <th>Multa</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              codigopenal.map((code: {
                id: number
                nome: string
                multa: string
                status: number
                dataCriacao: string
              }) => (
                <tr key={ code.id} className='code-information' onClick={() => redirectToDetails(code.id)}>
                  <td>{code.nome}</td>
                  <td>{convertToData(code.dataCriacao)}</td>
                  <td>{`R$ ${code.multa.toString().replace('.',',')}`}</td>
                  <td>{code.status === 1 ? 'Ativo' : 'Inativo'}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </Container>
    )
}
export default TableCodes;
