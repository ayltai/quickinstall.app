import { createApi, fetchBaseQuery, } from '@reduxjs/toolkit/query/react';

import { API_ENDPOINT, API_MAX_RETRIES, } from '../constants';
import type { ChocoPackage, Ingredient, } from '../models';

const transform = (item : ChocoPackage) : Ingredient => ({
    id          : item.Id,
    name        : item.Title,
    description : item.Summary,
    infoUrl     : item.ProjectUrl,
    imageUrl    : item.IconUrl,
    author      : item.Authors,
    source      : 'Chocolatey',
});

export const chocolateyApi = createApi({
    reducerPath : 'chocolateyApi',
    baseQuery   : fetchBaseQuery({
        baseUrl : import.meta.env.DEV ? `http://${window.location.hostname}:8080` : API_ENDPOINT,
    }),
    endpoints   : build => ({
        searchChoco : build.query<Ingredient[], string>({
            query             : keyword => `/choco/search?q=${keyword}`,
            transformResponse : (response : ChocoPackage[]) => response.map(transform),
            extraOptions      : {
                maxRetries : API_MAX_RETRIES,
            },
        }),
    }),
});

export const { useSearchChocoQuery, } = chocolateyApi;
