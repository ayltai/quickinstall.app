import { createSlice, PayloadAction, } from '@reduxjs/toolkit';
import i18next from 'i18next';

import { handleError, } from '../utils';

type PreferenceState = {
    locale    : string,
    product   : 'win/packages' | 'mac/packages' | 'tweaks',
    themeMode : 'light' | 'dark',
};

const initialState : PreferenceState = {
    locale    : i18next.language || 'en',
    product   : navigator.userAgent.includes('Windows') ? 'win/packages' : 'mac/packages',
    themeMode : 'light',
};

export const preferenceSlice = createSlice({
    initialState,
    name   : 'preference',
    reducers : {
        setLocale    : (state, action : PayloadAction<string>) => {
            state.locale = action.payload;

            i18next.changeLanguage(action.payload).catch(handleError);
        },
        setProduct   : (state, action : PayloadAction<'win/packages' | 'mac/packages' | 'tweaks'>) => ({
            ...state,
            product : action.payload,
        }),
        setThemeMode : (state, action : PayloadAction<'light' | 'dark'>) => ({
            ...state,
            themeMode : action.payload,
        }),
    },
});

export const { setLocale, setProduct, setThemeMode, } = preferenceSlice.actions;

export const preferenceReducer = preferenceSlice.reducer;
