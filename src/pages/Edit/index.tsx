import CardCode from 'components/CardCode';
import Header from 'components/Header';
import Return from 'components/Return';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import * as UTILS from 'services/Utils';
import * as API from 'Api/ApiUtils';
import { setPenalCodes } from 'slices/penalCodes';
import { Container, Main } from './style';

const Edit: React.FC = () => {
  const { codigopenal, novoCodigoPenal } = useSelector((state: any)=> state.codigopenal);
  const [isDisabled, setIsDisabled ] = useState(true);
  const [ updateCode, setUpdateCode ] = useState<any>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id }= useParams();

  const verifyChanges = useCallback(() => {
    let code: any = {};
    let dataCriacao: any = '';

    for (const iterator of codigopenal) {
      if(iterator.id.toString() === id){
        code = {...iterator}
        dataCriacao = iterator.dataCriacao;
      }
    }

    const isChanged = UTILS.compareFields(code, novoCodigoPenal);

    if(isChanged !== false){
      setUpdateCode({...novoCodigoPenal, dataCriacao});
      setIsDisabled(false);
    } else {
      setUpdateCode({});
      setIsDisabled(true);
    }

  },[codigopenal, id, novoCodigoPenal]);

  const alterCode = useCallback(async() => {
    let putCode = await API.updateCode(updateCode);

    // Remover em Prod, pois será atualizado o store quando aplicado o update
      const aux = {...putCode, id: parseInt(id!)};
      let temp: any = []
      for (let iterator of codigopenal) {
        if(iterator.id === parseInt(aux.id)) {
          temp = [ ...temp, aux];
        } else {
          temp = [...temp, iterator];
        }
      }

      dispatch(setPenalCodes(temp));
    // Fim do Bloco

    /** Adicionar em Prod, pois realizará a atualização do store com base
     *  no retorno da atualização do banco.
     *
     * const updateStore = await utils.getPenalCodes();
     * dispatch(setPenalCodes(updateStore));
     */

    navigate(-1);
  },[codigopenal, dispatch, id, navigate, updateCode])

  useEffect(() => {
    verifyChanges()
  },[verifyChanges]);

  return (
    <Container>
      <Header />
      <Main>
        <div className='new-content'>
          <Return />
          <span className='title'>Detalhes Código Penal</span>
          <div className='content'>
            <CardCode />
          </div>
          <div className='buttons'>
            <button
              type='button'
              className='attention'
              disabled={isDisabled}
              onClick={alterCode}
            >
              Salvar
            </button>
          </div>
        </div>
      </Main>
    </Container>
  );
}

export default Edit;
