import { createApi, fetchBaseQuery, } from '@reduxjs/toolkit/query/react';

import { API_ENDPOINT, API_MAX_RETRIES, } from '../constants';
import type { Ingredient, Tweak, } from '../models';

export const quickInstallApi = createApi({
    reducerPath : 'quickInstallApi',
    baseQuery   : fetchBaseQuery({
        baseUrl : import.meta.env.DEV ? `http://${window.location.hostname}:8080` : API_ENDPOINT,
    }),
    endpoints   : build => ({
        addRecipe : build.mutation<string, {
            platform : 'win' | 'mac',
            items    : Ingredient[],
        }>({
            query             : ({ platform, items, }) => ({
                url             : `/${platform}/recipes`,
                method          : 'POST',
                body            : items,
                responseHandler : response => response.text(),
            }),
            extraOptions      : {
                maxRetries : API_MAX_RETRIES,
            },
        }),
        addSpell : build.mutation<string, {
            items : Tweak[],
        }>({
            query             : ({ items, }) => ({
                url             : '/mac/spells',
                method          : 'POST',
                body            : items,
                responseHandler : response => response.text(),
            }),
            extraOptions      : {
                maxRetries : API_MAX_RETRIES,
            },
        }),
    }),
});

export const { useAddRecipeMutation, useAddSpellMutation, } = quickInstallApi;
