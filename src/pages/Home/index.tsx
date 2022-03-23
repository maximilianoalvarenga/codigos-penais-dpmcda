import Header from '../../components/Header';
import React, { useCallback, useEffect, useState } from 'react';
import { AddCode, Container, Main, NewAdd } from './style';
import TableCodes from 'pages/Home/TableCodes';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setResultSearch } from 'slices/penalCodes';

const Home: React.FC = () => {
  const [showText, setShowText ] = useState(false);
  const [valueSearch, setValueSearch] = useState('');
  const { codigopenal } = useSelector((state: any)=> state.codigopenal);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const mouseChange = () => {
    setShowText(!showText)
  }

  const handleClick = () => {
    navigate('/new');
  }

  const handleChange = useCallback((event: any) => {
    const { value } = event.target;
    setValueSearch(value);
  },[])

  useEffect(() => {
    if(valueSearch !== ''){
      const newArray = codigopenal.filter((code: any) => code.nome.toUpperCase().includes(valueSearch.toUpperCase()));
      if(newArray.length === 0){
        dispatch(setResultSearch(['oi']));
      } else {
        dispatch(setResultSearch(newArray));
      }
    } else {
      dispatch(setResultSearch([]))
    }
  },[codigopenal, dispatch, valueSearch])

  return (
    <Container>
      <Header />
      <Main>
        <div id='title'>
          <span>Códigos Penais</span>
        </div>
        <div id='search-code'>
            <input
              type="text"
              name="search"
              id="search"
              value={valueSearch}
              placeholder='Procurar Código Penal'
              onChange={handleChange}
            />
            <AddCode
              data-teste={showText}
              onMouseEnter={mouseChange}
              onMouseLeave={mouseChange}
              onClick={handleClick}
            >
              <NewAdd data-teste={showText}/>
              { showText && <span>Add</span>}
            </AddCode>
        </div>
        <TableCodes />
      </Main>
    </Container>
  );
}

export default Home;
