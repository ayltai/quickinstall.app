import { Request, Response, } from '@google-cloud/functions-framework';
import { StatusCodes, } from 'http-status-codes';

import { createRecipeApi, createSpellApi, getRecipeScriptApi, getSpellScriptApi, } from './apis';

const TIMEOUT : number = 30000;

describe('spell', () => {
    it('returns status code 400 if body is missing', async () => {
        const request = {
            method : 'POST',
        } as unknown as Request;

        let statusCode : number | undefined;

        const response = {
            status : (code : number) => {
                statusCode = code;

                return response;
            },
            send   : () => response,
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            set    : (_key : string, _value : string) => response,
        } as Response;

        await createSpellApi(request, response);

        expect(statusCode).toBe(StatusCodes.BAD_REQUEST);
    });

    it('returns status code 201 if spell is created', async () => {
        const request = {
            method : 'POST',
            body   : [],
        } as unknown as Request;

        let statusCode : number | undefined;
        let result     : string | Record<any, any> | undefined;

        const response = {
            status : (code : number) => {
                statusCode = code;

                return response;
            },
            send   : (value : string | Record<any, any>) => {
                result = value;

                return response;
            },
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            set    : (_key : string, _value : string) => response,
        } as Response;

        await createSpellApi(request, response);

        expect(statusCode).toBe(StatusCodes.CREATED);
        expect(result).not.toBeUndefined();

        request.method = 'GET';

        request.params = {
            id : result! as string,
        };

        await getSpellScriptApi(request, response);

        expect(statusCode).toBe(StatusCodes.OK);
        expect(result).not.toBeUndefined();
    }, TIMEOUT);
});

describe('recipe', () => {
    it('returns status code 400 if body is missing', async () => {
        const request = {
            method : 'POST',
        } as unknown as Request;

        let statusCode : number | undefined;

        const response = {
            status : (code : number) => {
                statusCode = code;

                return response;
            },
            send   : () => response,
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            set    : (_key : string, _value : string) => response,
        } as Response;

        await createRecipeApi(request, response);

        expect(statusCode).toBe(StatusCodes.BAD_REQUEST);
    });

    it('returns status code 201 if recipe is created', async () => {
        const request = {
            method : 'POST',
            body   : [],
        } as unknown as Request;

        let statusCode : number | undefined;
        let result     : string | Record<any, any> | undefined;

        const response = {
            status : (code : number) => {
                statusCode = code;

                return response;
            },
            send   : (value : string | Record<any, any>) => {
                result = value;

                return response;
            },
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            set    : (_key : string, _value : string) => response,
        } as Response;

        await createRecipeApi(request, response);

        expect(statusCode).toBe(StatusCodes.CREATED);
        expect(result).not.toBeUndefined();
        expect(result!.length).toBeGreaterThan(0);

        request.method = 'GET';

        request.params = {
            id : result! as string,
        };

        await getRecipeScriptApi(request, response);

        expect(statusCode).toBe(StatusCodes.OK);
        expect(result).not.toBeUndefined();
    }, TIMEOUT);
});
