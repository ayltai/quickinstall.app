import i18next, { Resource, } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next, } from 'react-i18next';

import { handleError, } from '../utils';

export const apply = ({
    language,
    supportedLanguages,
    fallbackLanguage,
    resources,
} : {
    language           : string,
    supportedLanguages : string[],
    fallbackLanguage   : string,
    resources          : Resource,
}) => i18next.use(initReactI18next)
    .use(Backend)
    .use(LanguageDetector)
    .init({
        backend           : {
            loadPath : `https://cdn.contentful.com/spaces/${import.meta.env.VITE_APP_CONTENTFUL_SPACE_ID}/environments/${import.meta.env.PROD ? 'master' : 'development'}/entries/4OzGT8vY6rlAL9k04154XT?locale=${language}&access_token=${import.meta.env.VITE_APP_CONTENTFUL_API_KEY}`,
            parse    : (data : string) => (JSON.parse(data) as { fields : Record<string, string>, }).fields.json,
        },
        supportedLngs     : supportedLanguages,
        lng               : language,
        fallbackLng       : fallbackLanguage,
        nsSeparator       : false,
        keySeparator      : false,
        compatibilityJSON : 'v3',
        interpolation     : {
            escapeValue : false,
        },
        resources,
    })
    .catch(handleError);
