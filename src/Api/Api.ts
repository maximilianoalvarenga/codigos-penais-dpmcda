import { Code } from "react-app-env";

const USER = 'https://my-json-server.typicode.com/cidadealta/exercise/usuarios';
const PENAL_CODE = 'https://my-json-server.typicode.com/cidadealta/exercise/codigopenal';
const STATUS_CODE = 'https://my-json-server.typicode.com/cidadealta/exercise/status';

export const getUser = async() => {
  try {
    const data = await fetch(USER);
    const dataJSON = await data.json();
    return dataJSON;
  } catch (error) {
    console.log(error)
  }
}

export const getAllPenalCodes = async() => {
  try {
    const data = await fetch(PENAL_CODE);
    const dataJSON = await data.json();
    return dataJSON;
  } catch (error) {
    console.log(error)
  }
}

export const getAllStatus = async() => {
  try {
    const data = await fetch(STATUS_CODE);
    const dataJSON = await data.json();
    return dataJSON;
  } catch (error) {
    console.log(error)
  }
}

export const postPenalCode = async(code: Code, id: number) => {
  let {nome, descricao, multa, tempoPrisao, status } = code;
  const dataCriacao = new Date().toISOString();
  multa = parseFloat(multa);
  tempoPrisao = parseInt(tempoPrisao);

  const body = JSON.stringify({
    id: id + 1,
    dataCriacao,
    nome,
    descricao,
    multa,
    tempoPrisao,
    status
  });

  try {
    const data = await fetch(STATUS_CODE, {
      method: 'POST',
      body,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const dataJSON = await data.json();
    return dataJSON;
  } catch (error) {
    return { message: error }
  }
}

export const putPenalCode = async(code: Code) => {
  let { id, dataCriacao, nome, descricao, multa, tempoPrisao, status } = code;
  multa = parseFloat(multa);
  tempoPrisao = parseInt(tempoPrisao);

  const body = JSON.stringify({
    id,
    dataCriacao,
    nome,
    descricao,
    multa,
    tempoPrisao,
    status
  });

  try {
    const data = await fetch(`${STATUS_CODE}/${id}`, {
      method: 'PUT',
      body,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    /**
     * Remover IF e manter o ELSE em PROD, pois localmente não atualiza o banco
     * sendo assim retorna 404 na API
     */

    if (data.status === 404) {
      return code;
    } else {
      const dataJSON = await data.json();
      return dataJSON;
    }
  } catch (error) {
    return { message: error }
  }
}

export const deletePenalCode = async(id: string) => {
  try {
    const data = await fetch(`${PENAL_CODE}/${id}`, {
      method: 'DELETE',
    });
    return data;
  } catch (error) {
    return { mensagem: error }
  }
}

