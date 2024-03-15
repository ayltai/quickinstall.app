import { createTheme, ThemeProvider, } from '@mui/material';
import { configureStore, type Store, } from '@reduxjs/toolkit';
import { render, } from '@testing-library/react';
import React, { type ReactNode, } from 'react';
import { Provider, } from 'react-redux';
import { MemoryRouter, } from 'react-router-dom';

import { appStoreApi, chocolateyApi, contentfulApi, homebrewApi, quickInstallApi, } from '../apis';
import { recipeReducer, preferenceReducer, spellReducer, } from '../states';
import { appTheme, } from '../styles';

export const createStore = (preloadedState? : unknown) => configureStore({
    preloadedState,
    reducer    : {
        recipe                          : recipeReducer,
        preference                      : preferenceReducer,
        spell                           : spellReducer,
        [ appStoreApi.reducerPath  ]    : appStoreApi.reducer,
        [ chocolateyApi.reducerPath ]   : chocolateyApi.reducer,
        [ contentfulApi.reducerPath ]   : contentfulApi.reducer,
        [ homebrewApi.reducerPath  ]    : homebrewApi.reducer,
        [ quickInstallApi.reducerPath ] : quickInstallApi.reducer,
    },
    middleware : getDefaultMiddleware => getDefaultMiddleware().concat(appStoreApi.middleware, chocolateyApi.middleware, contentfulApi.middleware, homebrewApi.middleware, quickInstallApi.middleware),
});

export const defaultStore = createStore();

export type RootState = ReturnType<typeof defaultStore.getState>;

// @ts-ignore
const theme = createTheme(appTheme);

const customRender = (ui : any, {
    preloadedState,
    store = createStore(preloadedState),
    ...rest
} : {
    preloadedState?   : Record<string, any>,
    store?            : Store<RootState>,
    [ rest : string ] : any,
} = {}) => render(ui, {
    wrapper : ({
        children,
    } : {
        children : ReactNode,
    }) => (
        <Provider store={store}>
            <MemoryRouter>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </MemoryRouter>
        </Provider>
    ),
    ...rest,
});

export * from '@testing-library/react';

export { customRender as render, };
