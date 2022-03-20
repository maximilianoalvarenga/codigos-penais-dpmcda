import CardCode from 'components/CardCode';
import Header from 'components/Header';
import React, { useCallback, useState } from 'react';
import { Confirmation, Container, Main } from './style';
import { useNavigate, useParams } from 'react-router-dom';
import * as API from 'services/Api';
import { useDispatch, useSelector } from 'react-redux';
import { setPenalCodes } from 'slices/penalCodes';

const Details: React.FC = () => {
  const { codigopenal } = useSelector((state: any)=> state.codigopenal);
  const [ zIndex, setZIndex] = useState('0');
  const { id }= useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const returnHome = () => {
    navigate('/home');
  }
  const goToEdit = () => {
    navigate(`/edit/${id}`);
  }

  const confirmExclude = useCallback(async() => {
    const excluded: any = await API.deletePenalCode(id);

      if(excluded.status !== 404) {
        /** Caso alterasse no Banco de dados
         *
         * const allCodes = await UTILS.getPenalCodes();
         * dispatch(setPenalCodes(allCodes));
         */

      // Remover em Prod
        const newArray = codigopenal.filter((code: any) => code.id.toString() !== id);
        dispatch(setPenalCodes(newArray))
      // Fim bloco remoção

        navigate('/home');
      } else {
        /**
         * Remover bloco Else em Prod, pois localmente não é atualizado o banco de
         * dados, logo a api retornará 404
         */

        for (const iterator of codigopenal) {
          if(iterator.id === parseInt(id!)) {
            const newArray = codigopenal.filter((code: any) => code.id.toString() !== id);
            dispatch(setPenalCodes(newArray));

            navigate('/home');
          }
        }
      }
  },[codigopenal, dispatch, id, navigate]);

  const returnDetails = useCallback(() => {
    setZIndex('0');
    navigate(`/details/${id}`);
  },[id, navigate]);

  const excludeCode = () => {
    setZIndex('1');
  }

  return (
    <>
    <Confirmation data-z={zIndex}>
      <div className='card-validation'>
        <span>Deseja Excluir ?</span>
        <div className='buttons'>
          <button className='sucess' onClick={confirmExclude}>Sim</button>
          <button className='warning' onClick={returnDetails}>Não</button>
        </div>
      </div>
    </Confirmation>
    <Container data-z={zIndex}>
      <Header />
      <Main>
        <div className='new-content'>
          <div className='teste' onClick={returnHome}>Voltar</div>
          <span className='title'>Detalhes Código Penal</span>
          <div className='content'>
            <CardCode />
          </div>
          <div className='buttons'>
            <button
              type='button'
              className='attention'
              onClick={goToEdit}
            >
              Alterar
            </button>
            <button
              type='button'
              className='warning'
              onClick={excludeCode}
            >
              Excluir
            </button>
          </div>
        </div>
      </Main>
    </Container>
    </>
  );
}

export default Details;
