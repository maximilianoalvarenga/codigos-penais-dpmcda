import * as teste from './Api';

interface Credentials {
  user: string;
  password: string;
}


export const verifyUser = async(credentials: Credentials) =>{
  const { user, password } = credentials;
  const response = await teste.getUser();
  let isValid: boolean = false;

  for (const users of response) {
    if(users.nome === user && users.senha === password){
      isValid = true;
    }
  }

  return isValid;
}
