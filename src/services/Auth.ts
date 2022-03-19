import * as API from './Api';

interface Credentials {
  user: string;
  password: string;
}

export const getPenalCodes = async() => {
  const response = await API.getAllPenalCodes();
  return response;
}

export const getStatus = async() => {
  const response = await API.getAllPenalCodes();
  return response;
}

export const verifyUser = async(credentials: Credentials) =>{
  const { user, password } = credentials;
  const response = await API.getUser();
  let isValid: boolean = false;

  for (const users of response) {
    if(users.nome === user && users.senha === password){
      localStorage.setItem('user', JSON.stringify(users.nome))
      isValid = true;
    }
  }

  return isValid;
}

