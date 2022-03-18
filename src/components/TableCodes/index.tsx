import React from 'react';
import { connect } from 'react-redux';
import { Container } from './style';


const TableCodes: React.FC = ({penalCode}: any) => {
  const convertToData = (param: string) => {
    const convertion = new Date(param)
      .toISOString()
      .replace('-', '/')
      .split('T')[0]
      .replace('-', '/');

      const newData = new Date(convertion).toLocaleDateString('pt-br')
    return newData;
  }

  return (
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
              penalCode.map((code: {
                id: number
                nome: string
                multa: string
                status: number
                dataCriacao: string
              }) => (
                <tr key={ code.id} className='code-information'>
                  <td>{code.nome}</td>
                  <td>{convertToData(code.dataCriacao)}</td>
                  <td>{`$ ${code.multa}`}</td>
                  <td>{code.status === 1 ? 'Ativo' : 'Inativo'}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
    </Container>
  );
}

export default connect( state => ({
  penalCode: state
}))(TableCodes);
