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
