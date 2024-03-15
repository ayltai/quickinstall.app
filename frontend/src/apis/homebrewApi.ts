import { createApi, fetchBaseQuery, } from '@reduxjs/toolkit/query/react';

import { API_MAX_RETRIES, } from '../constants';
import type { HomebrewFormula, Ingredient, } from '../models';

const transform = (formula : HomebrewFormula) : Omit<Ingredient, 'source'> => ({
    id          : formula.token ? formula.token : Array.isArray(formula.name) ? formula.name[0] : formula.name || '',
    name        : formula.full_name ? formula.full_name : Array.isArray(formula.name) ? formula.name[0] : formula.name || formula.token || '',
    description : formula.desc,
    infoUrl     : formula.homepage,
});

export const homebrewApi = createApi({
    reducerPath : 'homebrewApi',
    baseQuery   : fetchBaseQuery({
        baseUrl : 'https://formulae.brew.sh',
    }),
    endpoints   : build => ({
        formula   : build.query<Ingredient[], void>({
            query             : () => '/api/formula.json',
            transformResponse : (response : HomebrewFormula[]) : Ingredient[] => (response || []).map(formula => ({
                ...transform(formula),
                author : 'Homebrew',
                source : 'Homebrew',
            })),
            extraOptions      : {
                maxRetries : API_MAX_RETRIES,
            },
        }),
        cask      : build.query<Ingredient[], void>({
            query             : () => '/api/cask.json',
            transformResponse : (response : HomebrewFormula[]) : Ingredient[] => (response || []).map(formula => ({
                ...transform(formula),
                author : 'Homebrew (Cask)',
                source : 'Homebrew (Cask)',
            })),
            extraOptions      : {
                maxRetries : API_MAX_RETRIES,
            },
        }),
    }),
});

export const { useCaskQuery, useFormulaQuery, } = homebrewApi;
