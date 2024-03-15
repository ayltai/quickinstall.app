import { browserTracingIntegration, ErrorBoundary, init, reactRouterV6BrowserTracingIntegration, replayIntegration, } from '@sentry/react';
import { type FirebaseApp, initializeApp, } from 'firebase/app';
import React, { StrictMode, useEffect, } from 'react';
import ReactDOM from 'react-dom/client';
import { createRoutesFromChildren, matchRoutes, useLocation, useNavigationType, } from 'react-router-dom';
import { Provider, } from 'react-redux';
import { PersistGate, } from 'redux-persist/integration/react';
import '@fontsource/fjalla-one/latin-400.css';
import '@fontsource/rubik/latin-300.css';
import '@fontsource/rubik/latin-400.css';
import '@fontsource/rubik/latin-700.css';

import PackageInfo from '../package.json';
import { App, } from './App';
import { FirebaseContext, } from './contexts';
import { apply, } from './i18n';
import en from './i18n/en.json';
import './index.css';
import { persistor, store, } from './states';
import { handleError, } from './utils';

let app : FirebaseApp | undefined;

if (import.meta.env.PROD) {
    if (import.meta.env.VITE_APP_SENTRY_DSN) {
        init({
            dsn                      : import.meta.env.VITE_APP_SENTRY_DSN,
            environment              : 'production',
            release                  : PackageInfo.version,
            replaysSessionSampleRate : 0.1,
            replaysOnErrorSampleRate : 1,
            tracesSampleRate         : 1,
            integrations             : [
                browserTracingIntegration(),
                reactRouterV6BrowserTracingIntegration({
                    createRoutesFromChildren,
                    matchRoutes,
                    useEffect,
                    useLocation,
                    useNavigationType,
                }),
                replayIntegration({
                    blockAllMedia : false,
                    maskAllText   : false,
                }),
            ],
        });
    }

    if (import.meta.env.VITE_APP_FIREBASE_API_KEY && import.meta.env.VITE_APP_FIREBASE_APP_ID && import.meta.env.VITE_APP_FIREBASE_PROJECT_ID && import.meta.env.VITE_APP_FIREBASE_MEASUREMENT_ID) {
        app = initializeApp({
            apiKey        : import.meta.env.VITE_APP_FIREBASE_API_KEY,
            appId         : import.meta.env.VITE_APP_FIREBASE_APP_ID,
            projectId     : import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
            authDomain    : `${import.meta.env.VITE_APP_FIREBASE_PROJECT_ID}.firebaseapp.com`,
            storageBucket : `${import.meta.env.VITE_APP_FIREBASE_PROJECT_ID}.appspot.com`,
            measurementId : import.meta.env.VITE_APP_FIREBASE_MEASUREMENT_ID,
        });
    }
}

apply({
    language           : navigator.language.substring(0, 2),
    supportedLanguages : [
        'en',
    ],
    fallbackLanguage   : 'en',
    resources          : {
        en : {
            translation : en,
        },
    },
}).then(() => ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ErrorBoundary showDialog>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <FirebaseContext.Provider value={app}>
                        <App />
                    </FirebaseContext.Provider>
                </PersistGate>
            </Provider>
        </ErrorBoundary>
    </StrictMode>
)).catch(handleError);
