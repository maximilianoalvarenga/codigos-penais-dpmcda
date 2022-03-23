import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

export const ErrorUser = () => {
  toast.error('Usuário e/ou senha Inválidos', {
    position: toast.POSITION.TOP_RIGHT,
    theme: 'colored',
  });
}

export const UserSucess = () => {
  toast.success('Bem-Vindo!!', {
    position: toast.POSITION.TOP_RIGHT,
    theme: 'colored',
    autoClose: 2000
  });
}

export const CodeAddSucess = () =>{
  toast.success('Código Penal Adicionado!', {
    position: toast.POSITION.BOTTOM_RIGHT,
    theme: 'colored',
    autoClose: 2000
  });
}

export const ExclusionSucess = () =>{
  toast.success('Código Penal Excluido com Sucesso!', {
    position: toast.POSITION.BOTTOM_RIGHT,
    theme: 'colored',
    autoClose: 2000
  });
}

export const ChangeSucess = () =>{
  toast.success('Código Penal Alterado com Sucesso!', {
    position: toast.POSITION.BOTTOM_RIGHT,
    theme: 'colored',
    autoClose: 2000
  });
}
