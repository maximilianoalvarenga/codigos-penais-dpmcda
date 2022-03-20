import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import { Container } from './style';
import { setNewPenalCode } from 'slices/penalCodes';
import { useDispatch } from 'react-redux';

export interface Code {
  id: number
  nome: string
  descricao: string
  multa: number | string
  tempoPrisao: number | string
  status: number
}

const CardCode: React.FC = () => {
  const { codigopenal } = useSelector((state: any)=> state.codigopenal);
  const { id }= useParams();
  const location = useLocation().pathname;
  const dispatch = useDispatch();

  const [ codeInformation, setCodeInformation] = useState<Code>({
    id: 0,
    nome: '',
    descricao: '',
    multa: '',
    tempoPrisao: '',
    status: 1,
  });
  const [isDisabled, setIsDisabled] = useState(true);

  const changeDisabled = useCallback((): void => {
    setIsDisabled(false);
  },[])

  const defineCode = useCallback(():void => {
    let code: any = {};

    for (const iterator of codigopenal) {
      if (iterator.id.toString() === id) {
        code = {
          id: iterator.id,
          nome: iterator.nome,
          descricao: iterator.descricao,
          multa: iterator.multa,
          tempoPrisao: iterator.tempoPrisao,
          status: iterator.status,
        }
      }
    }
    setCodeInformation(code);
  },[id, codigopenal])

  const handleChange = (event: any) => {
    let { name, value} = event.target;

    if(name === 'tempoPrisao'){
      value = value.replace(/[^\d]/g, '');
    }

    if(name === 'multa'){
      value = value.replace(/[^.\d]/g,'');
    }

    if(name === 'status'){
      value = parseInt(value);
    }

    setCodeInformation((old) => ({
      ...old, [name]: value
    }));
  }

  useEffect(() => {
    dispatch(setNewPenalCode(codeInformation))
  },[codeInformation, dispatch])

  useEffect(() => {
    if(location.includes('details')){
      changeDisabled();
      defineCode()
    }
    if (location.includes('edit')) {
      defineCode()
    }
  },[changeDisabled, location, defineCode]);

  return id !== undefined ? (
    <Container>
      <label>
        <span>Nome:</span>
        <input
          type="text"
          name="nome"
          id="name"
          value={codeInformation.nome}
          disabled={!isDisabled}
          onChange={handleChange}
        >
        </input>
      </label>
      <label className=' numbers'>
        <span>Multa:</span>
        <input
          type="number"
          name="multa"
          id="fine"
          step='0.01'
          value={codeInformation.multa}
          disabled={!isDisabled}
          onChange={handleChange}
        />
      </label>
      <label className='numbers'>
        <span>Tempo de Prisão:</span>
          <input
            type="text"
            name="tempoPrisao"
            id="time"
            value={!isDisabled ? `${codeInformation.tempoPrisao} meses` : codeInformation.tempoPrisao}
            disabled={!isDisabled}
            onChange={handleChange}
          />
      </label>
      <label className='select-input'>
        <span>Status:</span>
          {
            !isDisabled ? (
              <select disabled={!isDisabled} defaultValue={codeInformation.status}>
                <option
                  value={codeInformation.status}>{codeInformation.status === 1 ? 'Ativo' : 'Inativo'}
                </option>
              </select>
            ) : (
              <select
                name='status'
                disabled={!isDisabled}
                defaultValue={codeInformation.status}
                onChange={handleChange}
              >
                <option
                  value="1"
                >
                  Ativo
                </option>
                <option
                  value="2"
                >
                  Inativo
                </option>
              </select>
            )
          }
          </label>
          <textarea
            name='descricao'
            disabled={!isDisabled}
            value={codeInformation.descricao}
            onChange={handleChange}
          >
            {codeInformation.descricao}
          </textarea>
      </Container>
  ) : (
    <Container>
      <label>
        <span>Nome:</span>
        <input
          type="text"
          name="nome"
          id="name"
          placeholder='Nome'
          value={codeInformation.nome}
          onChange={handleChange}
        />
      </label>
      <label className=' numbers'>
        <span>Multa:</span>
        <input
          type="number"
          name="multa"
          id="fine"
          step='0.01'
          placeholder='Multa'
          value={codeInformation.multa}
          onChange={handleChange}
        />
      </label>
      <label className='numbers'>
        <span>Tempo de Prisão:</span>
        <input
          type="number"
          name="tempoPrisao"
          id="time"
          placeholder='Tempo de Prisão'
          value={codeInformation.tempoPrisao }
          onChange={handleChange}
        />
      </label>
      <label className='select-input'>
        <span>Status:</span>
        <select
          name='status'
          value={codeInformation.status.toString()}
          onChange={handleChange}
        >
          <option value="1">Ativo</option>
          <option value="2">Inativo</option>
        </select>
      </label>
      <textarea
        name='descricao'
        placeholder='Descrição do Código Penal'
        value={codeInformation.descricao}
        onChange={handleChange}
      >
        {codeInformation.descricao}
      </textarea>
  </Container>
  );
}

export default CardCode;
