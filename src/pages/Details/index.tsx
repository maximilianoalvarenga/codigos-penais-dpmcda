import CardCode from 'components/CardCode';
import Header from 'components/Header';
import React from 'react';
import { Container, Main } from './style';
import { useNavigate, useParams } from 'react-router-dom';
import * as API from 'services/Api';
import { useDispatch, useSelector } from 'react-redux';
import { setPenalCodes } from 'slices/penalCodes';

const Details: React.FC = () => {
  const { codigopenal } = useSelector((state: any)=> state.codigopenal);
  const { id }= useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const returnHome = () => {
    navigate('/home');
  }
  const goToEdit = () => {
    navigate(`/edit/${id}`);
  }

  const excludeCode = async() => {
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
  }

  return (
    <Container>
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
  );
}

export default Details;
