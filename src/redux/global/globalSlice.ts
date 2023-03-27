import { createSlice } from '@reduxjs/toolkit';
import { loadState } from 'ultil/helpers/localStorage';

export const globalSlice = createSlice({
  name: 'global',
  initialState: {
    theme: loadState('theme') || 'dark',
    language: loadState('language') || 'EN',
  },
  reducers: {
    changeTheme(state, action) {
      state.theme = action.payload.theme;
    },

    changeLang(state, action) {
      state.language = action.payload.language;
    },
  },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const selectGlobal = (state: any) => state.global;
export const { changeTheme, changeLang } = globalSlice.actions;
export default globalSlice.reducer;

