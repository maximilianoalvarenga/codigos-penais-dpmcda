import { configureStore } from '@reduxjs/toolkit'
import penalCodes from 'slices/penalCodes';

export default configureStore({
  reducer: {
    codigopenal: penalCodes
  }
});
