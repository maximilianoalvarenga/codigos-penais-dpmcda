import CardCode from 'components/CardCode';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonCreate, Container } from './style';
import * as UTILS from 'services/Utils';
import * as API from 'Api/ApiUtils';
import { setPenalCodes } from 'slices/penalCodes';
import Return from 'components/Return';
import { CodeAddSucess } from 'services/Notify';

const FormCreate: React.FC = () => {
  const {novoCodigoPenal, codigopenal} = useSelector((state: any)=> state.codigopenal);
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const verificationFields = useCallback(() => {
    const isValid = UTILS.verifyFields(novoCodigoPenal);

    if(isValid){
      setDisabled(false);
    }else {
      setDisabled(true);
    }
  }, [novoCodigoPenal]);

  const createCode = useCallback(async() => {
    const getLastId: number = UTILS.lastId(codigopenal);
    const setCode = await API.postCode(novoCodigoPenal, getLastId);

  // Remover em Prod
    let temp = codigopenal;
    temp = [...temp, setCode]
    dispatch(setPenalCodes(temp));

  // Fim bloco
  CodeAddSucess();
  setTimeout(() => {
    navigate('/home');
  }, 3100);

  },[codigopenal, dispatch, navigate, novoCodigoPenal]);

  useEffect(() => {
    verificationFields();
  },[verificationFields])

  return (
    <Container>
      <div className='new-content'>
        <Return />
        <div className='title'>Novo Código Penal</div>
        <div className='content'>
          <CardCode />
        </div>
        <div className='buttons'>
          <ButtonCreate
            type='button'
            data-disabled={disabled}
            disabled={disabled}
            className='sucess'
            onClick={createCode}
          >
            Criar
          </ButtonCreate>
        </div>
      </div>
    </Container>
  );
}

export default FormCreate;
