import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next, } from 'react-i18next';

// @ts-ignore
import en from '../src/i18n/en.json';

i18next.use(initReactI18next)
    .use(LanguageDetector)
    .init({
        supportedLngs     : [
            'en',
        ],
        lng               : 'en',
        fallbackLng       : 'en',
        nsSeparator       : false,
        keySeparator      : false,
        compatibilityJSON : 'v3',
        interpolation     : {
            escapeValue : false,
        },
        resources         : {
            en : {
                translation : en,
            },
        },
    });

export default i18next;
