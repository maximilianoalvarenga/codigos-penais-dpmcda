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
  const response = await API.postPenalCode(code, id);
  return response;
}

export const updateCode = async(code: Code) => {
  const response = await API.putPenalCode(code);
  return response;
}
