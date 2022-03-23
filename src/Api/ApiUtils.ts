import * as API from 'Api/Api';
import { Code } from 'react-app-env';

export const getPenalCodes = async() => {
  const response = await API.getAllPenalCodes();
  return response;
}

export const getStatus = async() => {
  const response = await API.getAllPenalCodes();
  return response;
}

export const postCode = async(code: Code, id: number) => {
  let response = await API.postPenalCode(code, id);
  /**
   *  Remover em PROD, pois a criação do campo dataCriacao será realizado
   *  no backend, para não ter interferencia do Timezone do usuário
   */
    const dataCriacao = new Date().toISOString();
    response = {...response, dataCriacao}
    //Fim Bloco de remoção

  return response;
}

export const updateCode = async(code: Code) => {
  const response = await API.putPenalCode(code);
  return response;
}
