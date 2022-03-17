import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from './style';
import * as Auth from 'services/Auth';

const FormLogin: React.FC = () => {
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

      <input
        id='btn-login'
        type="button"
        value="Entrar"
        disabled={ disableBtn }
        onClick={ handleSubmit }
      />
    </Container>
  );
}

export default FormLogin;
