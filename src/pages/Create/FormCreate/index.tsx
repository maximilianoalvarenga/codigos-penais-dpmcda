import CardCode from 'components/CardCode';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonCreate, Container } from './style';
import * as utils from 'services/Auth';
import { setPenalCodes } from 'slices/penalCodes';
import Return from 'components/Return';

const FormCreate: React.FC = () => {
  const {novoCodigoPenal, codigopenal} = useSelector((state: any)=> state.codigopenal);
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const returnHome = () => {
    navigate('/home');
  }

  const verificationFields = useCallback(() => {
    const isValid = utils.verifyFields(novoCodigoPenal);

    if(isValid){
      setDisabled(false);
    }else {
      setDisabled(true);
    }
  }, [novoCodigoPenal]);

  const createCode = useCallback(async() => {
    const getLastId: number = utils.lastId(codigopenal);
    const setCode = await utils.postCode(novoCodigoPenal, getLastId);

  // Remover em Prod
    let temp = codigopenal;
    temp = [...temp, setCode]
    dispatch(setPenalCodes(temp));

  // Fim bloco

    navigate('/home');
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
