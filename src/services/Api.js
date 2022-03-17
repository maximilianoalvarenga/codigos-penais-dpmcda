const endpoint = 'https://my-json-server.typicode.com/cidadealta/exercise';

export const getUser = async() => {
  try {
    const data = await fetch(endpoint+'/usuarios');
    const dataJSON = await data.json();
    return dataJSON;
  } catch (error) {
    console.log(error)
  }
}
