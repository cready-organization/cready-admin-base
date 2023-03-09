import { configureStore } from '@reduxjs/toolkit';
import globalSlice from 'redux/global/globalSlice';

export const store = configureStore({
  reducer: {
    global: globalSlice,
  },
});

