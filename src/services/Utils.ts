import * as API from 'Api/Api';
import { Code, Credentials } from 'react-app-env';

//Funcção temporária, já que o id seria autoincrementado no backend
export const lastId = (param: any) => {
  const ids = [];

  for (const iterator of param) {
    ids.push(iterator.id);
  }

  ids.sort();

  return ids.pop();
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

export const verifyFields = (param: Code) => {
  const {nome, descricao, multa, tempoPrisao, status } = param;
  let isValid = false;

  if(
    nome !== '' &&
    descricao !== '' &&
    multa !== '' &&
    tempoPrisao !== ''
    && status !== 0
  ){
    isValid = true
  }
  return isValid;
}

export const compareFields = (code: Code, newCode: Code) =>{
  let isChange = false;
  if(code.id === newCode.id){
    if(
      code.nome !== newCode.nome ||
      code.descricao !== newCode.descricao ||
      code.multa !== newCode.multa ||
      code.tempoPrisao !== newCode.tempoPrisao ||
      code.status !== newCode.status
      ){
      isChange = true;
    }
  }

  return isChange;
}
