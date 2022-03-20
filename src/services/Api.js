const GET_USER = 'https://my-json-server.typicode.com/cidadealta/exercise/usuarios';
const GET_PENAL_CODE = 'https://my-json-server.typicode.com/cidadealta/exercise/codigopenal';
const GET_STATUS_CODE = 'https://my-json-server.typicode.com/cidadealta/exercise/status';

export const getUser = async() => {
  try {
    const data = await fetch(GET_USER);
    const dataJSON = await data.json();
    return dataJSON;
  } catch (error) {
    console.log(error)
  }
}

export const getAllPenalCodes = async() => {
  try {
    const data = await fetch(GET_PENAL_CODE);
    const dataJSON = await data.json();
    return dataJSON;
  } catch (error) {
    console.log(error)
  }
}

export const getAllStatus = async() => {
  try {
    const data = await fetch(GET_STATUS_CODE);
    const dataJSON = await data.json();
    return dataJSON;
  } catch (error) {
    console.log(error)
  }
}

export const postPenalCode = async(param, id) => {
  let {nome, descricao, multa, tempoPrisao, status } = param;
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
    const data = await fetch(GET_STATUS_CODE, {
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

export const deletePenalCode = async(param) => {
  try {
    const data = await fetch(`${GET_PENAL_CODE}/${param}`, {
      method: 'DELETE',
    });
    return data;
  } catch (error) {
    return { mensagem: error }
  }
}

