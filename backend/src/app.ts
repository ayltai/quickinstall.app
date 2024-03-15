import SwaggerParser from '@apidevtools/swagger-parser';
import { ErrorReporting, } from '@google-cloud/error-reporting';
import cors from 'cors';
import express from 'express';
import { connector, } from 'swagger-routes-express';
import swaggerUi from 'swagger-ui-express';

import { createRecipeApi, createSpellApi, getHealthApi, getRecipeScriptApi, getSpellScriptApi, searchChoco, } from './apis';
import { handleError, } from './utils';

const app = express().disable('x-powered-by');

if (process.env.NODE_ENV === 'production') {
    const errors = new ErrorReporting();

    app.use(errors.express);
}

app.use(cors({
    origin         : process.env.NODE_ENV === 'production' ? 'https://quickinstall.app' : '*',
    methods        : [
        'GET',
        'POST',
        'PUT',
        'DELETE',
        'OPTIONS',
        'HEAD',
    ],
    allowedHeaders : [
        'Content-Type',
        'Content-Length',
        'Accept',
        'Origin',
    ],
}));

new SwaggerParser()
    .validate('./docs/openapi.yaml')
    .then(async definition => {
        const connect = connector({
            createRecipeApi,
            createSpellApi,
            getHealthApi,
            getRecipeScriptApi,
            getSpellScriptApi,
            searchChoco,
        }, definition);

        app.use('/docs', swaggerUi.serve, swaggerUi.setup(definition));

        connect(app);
    })
    .catch(handleError);

export default app;
