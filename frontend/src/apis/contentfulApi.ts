import { createApi, fetchBaseQuery, } from '@reduxjs/toolkit/query/react';
import { Entry, EntryFieldTypes, } from 'contentful';

import { API_MAX_RETRIES, } from '../constants';
import type { Ingredient, Tweak, } from '../models';

type IngredientSkeleton = {
    contentTypeId : 'ingredient',
    fields        : {
        id          : EntryFieldTypes.Symbol,
        name        : EntryFieldTypes.Symbol,
        description : EntryFieldTypes.Text,
        category    : EntryFieldTypes.Symbol,
        imageUrl    : EntryFieldTypes.Symbol,
        infoUrl     : EntryFieldTypes.Symbol,
        author      : EntryFieldTypes.Symbol,
        source      : EntryFieldTypes.Symbol,
    },
};

type TweakSkeleton = {
    contentTypeId : 'tweak',
    fields        : {
        id          : EntryFieldTypes.Symbol,
        name        : EntryFieldTypes.Symbol,
        description : EntryFieldTypes.Text,
        category    : EntryFieldTypes.Symbol,
        imageUrl    : EntryFieldTypes.Symbol,
        infoUrl     : EntryFieldTypes.Symbol,
        author      : EntryFieldTypes.Symbol,
        impact      : EntryFieldTypes.Symbol,
        privileged  : EntryFieldTypes.Boolean,
        sipInvolved : EntryFieldTypes.Boolean,
        parameters  : EntryFieldTypes.Array<EntryFieldTypes.Symbol>,
        types       : EntryFieldTypes.Array<EntryFieldTypes.Symbol>,
        values      : EntryFieldTypes.Array<EntryFieldTypes.Symbol>,
    },
};

type PageSkeleton = {
    contentTypeId : 'page',
    fields        : {
        name    : EntryFieldTypes.Symbol,
        content : EntryFieldTypes.Text,
    },
};

const transformIngredient = (entry : Entry<IngredientSkeleton>) : Ingredient => ({
    id          : entry.fields.id as string,
    name        : entry.fields.name as string,
    description : entry.fields.description as string | undefined,
    category    : entry.fields.category as string,
    imageUrl    : entry.fields.imageUrl as string | undefined,
    infoUrl     : entry.fields.infoUrl as string | undefined,
    author      : entry.fields.author as string,
    source      : entry.fields.source as 'Chocolatey' | 'Homebrew' | 'Homebrew (Cask)' | 'App Store',
});

const transformTweak = (entry : Entry<TweakSkeleton>) : Tweak => ({
    id          : entry.fields.id as string,
    name        : entry.fields.name as string,
    description : entry.fields.description as string | undefined,
    category    : entry.fields.category as string,
    imageUrl    : entry.fields.imageUrl as string | undefined,
    infoUrl     : entry.fields.infoUrl as string | undefined,
    author      : entry.fields.author as string,
    impact      : entry.fields.impact as 'Dock' | 'Finder' | 'SystemUIServer' | undefined,
    privileged  : entry.fields.privileged as boolean,
    sipInvolved : entry.fields.sipInvolved as boolean,
    parameters  : entry.fields.parameters  as string[],
    types       : entry.fields.types as ('boolean' | 'number' | 'string')[],
    values      : (entry.fields.values as string[]).map((value, index) => {
        const type = (entry.fields.types as string[])[index];

        if (type === 'boolean') return value === 'true';
        if (type === 'number') return Number(value);

        return value;
    }),
});

const transformPage = (entry : Entry<PageSkeleton>) : string[] => [
    entry.fields.name as string,
    entry.fields.content as string,
];

export const contentfulApi = createApi({
    reducerPath : 'contentfulApi',
    baseQuery   : fetchBaseQuery({
        baseUrl : 'https://cdn.contentful.com',
    }),
    endpoints   : build => ({
        ingredients : build.query<Ingredient[], void>({
            query             : () => `/spaces/${import.meta.env.VITE_APP_CONTENTFUL_SPACE_ID}/environments/${import.meta.env.PROD ? 'master' : 'development'}/entries?content_type=ingredient&access_token=${import.meta.env.VITE_APP_CONTENTFUL_API_KEY}`,
            transformResponse : (response : {
                items : Entry<IngredientSkeleton>[],
            }) => response.items.map(transformIngredient).reverse(),
            extraOptions      : {
                maxRetries : API_MAX_RETRIES,
            },
        }),
        tweaks      : build.query<Tweak[], void>({
            query             : () => `/spaces/${import.meta.env.VITE_APP_CONTENTFUL_SPACE_ID}/environments/${import.meta.env.PROD ? 'master' : 'development'}/entries?content_type=tweak&access_token=${import.meta.env.VITE_APP_CONTENTFUL_API_KEY}`,
            transformResponse : (response : {
                items : Entry<TweakSkeleton>[],
            }) => response.items.map(transformTweak).reverse(),
            extraOptions      : {
                maxRetries : API_MAX_RETRIES,
            },
        }),
        page        : build.query<string[], string>({
            query             : entryId => `/spaces/${import.meta.env.VITE_APP_CONTENTFUL_SPACE_ID}/environments/${import.meta.env.PROD ? 'master' : 'development'}/entries/${entryId}?access_token=${import.meta.env.VITE_APP_CONTENTFUL_API_KEY}`,
            transformResponse : (response : Entry<PageSkeleton>) => transformPage(response),
            extraOptions      : {
                maxRetries : API_MAX_RETRIES,
            },
        }),
    }),
});

export const { useIngredientsQuery, usePageQuery, useTweaksQuery, } = contentfulApi;
