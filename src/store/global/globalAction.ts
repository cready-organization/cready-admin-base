import { store } from '../';
import { saveState } from 'utils/helpers/localStorage';
import { changeLang, changeTheme } from './globalSlice';
export const changeThemeAction = (val: string) => {
  return (dispatch: typeof store.dispatch) => {
    dispatch(changeTheme({ theme: val }));
    saveState('theme', val);
  };
};

export const changeLangAction = (val: string) => {
  return (dispatch: typeof store.dispatch) => {
    dispatch(changeLang({ language: val }));
    saveState('language', val);
  };
};
