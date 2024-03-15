import { combineReducers, configureStore, } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE, } from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

import { appStoreApi, chocolateyApi, contentfulApi, homebrewApi, quickInstallApi, } from '../apis';
import { recipeReducer, } from './recipeSlice';
import { preferenceReducer, } from './preferenceSlice';
import { spellReducer, } from './spellSlice';

const createNoopStorage = () => ({
    getItem    : () => Promise.resolve(null),
    setItem    : (_key : string, value : any) => Promise.resolve(value),
    removeItem : () => Promise.resolve(),
});

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

const makeStore = () => configureStore({
    reducer    : persistReducer({
        storage,
        key       : 'root',
        blacklist : [
            appStoreApi.reducerPath,
            chocolateyApi.reducerPath,
            contentfulApi.reducerPath,
            homebrewApi.reducerPath,
            quickInstallApi.reducerPath,
        ],
    }, combineReducers({
        recipe                          : recipeReducer,
        preference                      : preferenceReducer,
        spell                           : spellReducer,
        [ appStoreApi.reducerPath  ]    : appStoreApi.reducer,
        [ chocolateyApi.reducerPath ]   : chocolateyApi.reducer,
        [ contentfulApi.reducerPath ]   : contentfulApi.reducer,
        [ quickInstallApi.reducerPath ] : quickInstallApi.reducer,
        [ homebrewApi.reducerPath  ]    : homebrewApi.reducer,
    })),
    middleware : getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck : {
            ignoredActions : [
                FLUSH,
                PAUSE,
                PERSIST,
                PURGE,
                REGISTER,
                REHYDRATE,
            ],
        },
    }).concat(appStoreApi.middleware, chocolateyApi.middleware, contentfulApi.middleware, homebrewApi.middleware, quickInstallApi.middleware),
    devTools   : import.meta.env.DEV,
});

export const store     = makeStore();
export const persistor = persistStore(store);

export type AppState    = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { preferenceReducer, setLocale, setProduct, setThemeMode, } from './preferenceSlice';
export { addIngredient, recipeReducer, removeIngredient, resetIngredients, setIngredients, } from './recipeSlice';
export { addTweak, removeTweak, resetTweaks, setTweaks, spellReducer, updateTweak, } from './spellSlice';
