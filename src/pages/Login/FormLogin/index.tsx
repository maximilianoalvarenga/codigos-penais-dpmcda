import React, { useEffect, useState } from 'react';
import { setPenalCodes, setStatus } from 'slices/penalCodes';
import { useNavigate } from 'react-router-dom';
import { Container } from './style';
import * as UTILS from 'services/Utils';
import * as API from 'Api/ApiUtils';
import { useDispatch } from 'react-redux';
import { Credentials } from 'react-app-env';
import { ErrorUser, UserSucess } from 'services/Notify';

const FormLogin: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [valueInput, setValueInput] = useState<Credentials>({
    user: '',
    password:'',
  });

  const [ textLabel, setTextLabel ] = useState<Credentials>({
    user: 'Usuario',
    password: 'Senha',
  });

  const [disableBtn, setDisableBtn] = useState(true);

  const inputChange = (event: any) =>{
    const { name, value } = event.target;
    setValueInput((old) => ({
      ...old, [name]: value
    }))
  }

  useEffect(() => {
    const { user, password } = valueInput;
    if (user !== '') {
      setTextLabel((old) => ({
        ...old, user: 'Usuario'
      }))
    } else {
      setTextLabel((old) => ({
        ...old, user: ''
      }))
    }

    if (password !== '') {
      setTextLabel((old) => ({
        ...old, password: 'Senha'
      }))
    } else {
      setTextLabel((old) => ({
        ...old, password: ''
      }))
    }

    if (password !== ''  && user !== '') {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }

  },[valueInput]);

  const handleSubmit = async() => {
    const dataUser = await UTILS.verifyUser(valueInput);

    if(dataUser) {
      const allCodes = await API.getPenalCodes();
      const allStatus = await API.getStatus();
      dispatch(setPenalCodes(allCodes));
      dispatch(setStatus(allStatus));
      UserSucess();

      setTimeout(() => {
        navigate('/home');
      }, 3000);
    } else {
      ErrorUser();
    }
  }

  return (
    <Container>
      <span id='title-form'>Faça seu login</span>

      <div id='section-auth'>
          <label>
            <span className='label-input'>{textLabel.user}</span>
            <input
              type='text'
              name='user'
              placeholder='Usuario'
              value={ valueInput.user }
              onChange={ inputChange}
            />
          </label>
          <label>
            <span className='label-input'>{textLabel.password}</span>
            <input
              type='password'
              name='password'
              placeholder='Senha'
              value={ valueInput.password }
              onChange={ inputChange }
            />
          </label>
      </div>

      <button
        id='btn-login'
        className='sucess'
        type="button"
        disabled={ disableBtn }
        onClick={ handleSubmit }
      >
        Entrar
      </button>
    </Container>
  );
}

export default FormLogin;
