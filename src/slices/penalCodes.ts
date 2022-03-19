import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'codes',
  initialState: {
    codigopenal: [],
    status: []
  },
  reducers: {
    setPenalCodes(state, { payload }){
      return { ...state, codigopenal: payload}
    },
    setStatus(state, { payload }){
      return { ...state, status: payload}
    }
  }
})

export const { setPenalCodes, setStatus } = slice.actions;
export const getPenalCodes = (state: { codigopenal: []; }) => state.codigopenal;
export const getStatus = (state: { status: []; }) => state.status;
export default slice.reducer;
