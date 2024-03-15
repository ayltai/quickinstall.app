import { createApi, fetchBaseQuery, } from '@reduxjs/toolkit/query/react';

import type { AppStoreSearchResults, Ingredient, } from '../models';
import { API_MAX_RETRIES, } from '../constants';

export const appStoreApi = createApi({
    reducerPath : 'appStoreApi',
    baseQuery   : fetchBaseQuery({
        baseUrl : 'https://search-itunes.vercel.app',
    }),
    endpoints   : build => ({
        search : build.query<Ingredient[], string>({
            query             : keyword => `/?media=software&entity=macSoftware&term=${keyword}`,
            transformResponse : (response : AppStoreSearchResults) => (response?.results || []).map(result => ({
                id          : String(result.trackId),
                name        : String(result.trackName),
                description : result.description,
                imageUrl    : result.artworkUrl100 || result.artworkUrl512 || result.artworkUrl60,
                infoUrl     : result.trackViewUrl,
                author      : result.artistName,
                source      : 'App Store',
            })),
            extraOptions      : {
                maxRetries : API_MAX_RETRIES,
            },
        }),
    }),
});

export const { useSearchQuery, } = appStoreApi;
