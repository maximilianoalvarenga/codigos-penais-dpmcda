import React, { useEffect, useState } from 'react';
import { setPenalCodes, setStatus } from 'slices/penalCodes';
import { useNavigate } from 'react-router-dom';
import { Container } from './style';
import * as Auth from 'services/Auth';
import { useDispatch } from 'react-redux';

const FormLogin: React.FC = () => {
  const dispatch = useDispatch();
  interface valuesForm {
    user: string,
    password: string,
  }

  const navigate = useNavigate();

  const [valueInput, setValueInput] = useState<valuesForm>({
    user: '',
    password:'',
  })
  const [ textLabel, setTextLabel ] = useState<valuesForm>({
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
    const dataUser = await Auth.verifyUser(valueInput);

    if(dataUser) {
      const allCodes = await Auth.getPenalCodes();
      const allStatus = await Auth.getStatus();
      dispatch(setPenalCodes(allCodes));
      dispatch(setStatus(allStatus))

      navigate('/home');
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
