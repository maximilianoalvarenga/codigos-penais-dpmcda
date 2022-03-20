import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'codes',
  initialState: {
    codigopenal: [],
    status: [],
    novoCodigoPenal: {}
  },
  reducers: {
    setPenalCodes(state, { payload }){
      return { ...state, codigopenal: payload }
    },
    setStatus(state, { payload }){
      return { ...state, status: payload }
    },
    setNewPenalCode(state, { payload}){
      return { ...state, novoCodigoPenal: {...state.novoCodigoPenal, ...payload} }
    },
    clearNewPenalCode(state){
      return { ...state, novoCodigoPenal: {
        id: 0,
        nome: '',
        descricao: '',
        multa: '',
        tempoPrisao: '',
        status: 1,
      }}
    }
  }
})

export const {
  setPenalCodes,
  setStatus,
  setNewPenalCode,
  clearNewPenalCode,
} = slice.actions;

export const getPenalCodes = ((state: { codigopenal: []; }) => state.codigopenal);
export const getStatus = ((state: { status: []; }) => state.status);
export const getNewPenalCode = ((state: { novoCodigoPenal: {}; }) => state.novoCodigoPenal)
export default slice.reducer;
