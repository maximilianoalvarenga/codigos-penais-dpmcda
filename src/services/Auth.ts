import { useSelector } from 'react-redux';
import * as API from './Api';

interface Credentials {
  user: string;
  password: string;
}

interface Code {
  id: number
  nome: string
  descricao: string
  multa: number | string
  tempoPrisao: number | string
  status: number
}

export const lastId = (param: any) => {
  const ids = [];

  for (const iterator of param) {
    ids.push(iterator.id);
  }

  ids.sort();

  return ids.pop();
}

export const getPenalCodes = async() => {
  const response = await API.getAllPenalCodes();
  return response;
}

export const getStatus = async() => {
  const response = await API.getAllPenalCodes();
  return response;
}

export const postCode = async(param: any, id: any) => {
  const response = await API.postPenalCode(param, id);
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
