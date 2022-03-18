import React from 'react';
import { connect } from 'react-redux';
import { Container } from './style';


const TableCodes: React.FC = ({penalCode}: any) => {
  const convertToData = (param: string) => {
    return param;
  }

  return (
    <Container>
        <table>
          <thead>
            <tr>
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
                <tr key={ code.id}>
                  <td>{code.nome}</td>
                  <td>{convertToData(code.dataCriacao)}</td>
                  <td>{code.multa}</td>
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
