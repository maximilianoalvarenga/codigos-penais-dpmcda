const GET_USER = 'https://my-json-server.typicode.com/cidadealta/exercise/usuarios';
const GET_STATUS = 'https://my-json-server.typicode.com/cidadealta/exercise/status';

export const getUser = async() => {
  try {
    const data = await fetch(GET_USER);
    const dataJSON = await data.json();
    return dataJSON;
  } catch (error) {
    console.log(error)
  }
}
