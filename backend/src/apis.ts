import { promises, } from 'fs';
import path from 'path';
import { Request, Response, } from '@google-cloud/functions-framework';
import axios from 'axios';
import { render, } from 'ejs';
import { StatusCodes, } from 'http-status-codes';

import { createRecipe, createSpell, getRecipe, getSpell, } from './models';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getHealthApi = (request : Request, response : Response) => response.set('Content-Type', 'text/plain').status(StatusCodes.OK).send('UP');

export const searchChoco = async (request : Request, response : Response) => {
    const { q, } = request.query;

    if (q) {
        const res = await axios.get(`https://community.chocolatey.org/api/v2/Search()?$filter=IsLatestVersion&$skip=0&$top=50&searchTerm='${q}'&targetFramework=''&includePrerelease=false`);

        if (res.status === 200) {
            response.set('content-type', 'application/json').status(StatusCodes.OK).send(res.data.d.results);
        } else {
            response.status(res.status).send(res.statusText);
        }
    } else {
        response.status(StatusCodes.BAD_REQUEST).send();
    }
};

export const createRecipeApi = async (request : Request, response : Response) => {
    if (request.body) {
        response.set('Content-Type', 'text/plain').status(StatusCodes.CREATED).send(await createRecipe(request.body));
    } else {
        response.status(StatusCodes.BAD_REQUEST).send();
    }
};

export const getRecipeScriptApi = async (request : Request, response : Response) => {
    const { platform, id, } : { platform? : 'win' | 'mac', id? : string, } = request.params;

    if (id) {
        const recipe = await getRecipe(id);
        if (recipe) {
            const template = (await promises.readFile(path.join(process.cwd(), platform === 'win' ? 'data/recipe.bat.ejs' : 'data/recipe.sh.ejs'))).toString();

            const script = render(template, {
                ingredients : recipe.ingredients,
            });

            response.set('Content-Type', 'text/plain').status(StatusCodes.OK).send(script);
        } else {
            response.status(StatusCodes.NOT_FOUND).send();
        }
    } else {
        response.status(StatusCodes.BAD_REQUEST).send();
    }
};

export const createSpellApi = async (request : Request, response : Response) => {
    if (request.body) {
        response.set('Content-Type', 'text/plain').status(StatusCodes.CREATED).send(await createSpell(request.body));
    } else {
        response.status(StatusCodes.BAD_REQUEST).send();
    }
};

export const getSpellScriptApi = async (request : Request, response : Response) => {
    const { id, } : { id? : string, } = request.params;

    if (id) {
        const spell = await getSpell(id);
        if (spell) {
            const template = (await promises.readFile(path.join(process.cwd(), 'data/spell.sh.ejs'))).toString();

            const script = render(template, {
                tweaks : spell.tweaks,
            });

            response.set('Content-Type', 'text/plain').status(StatusCodes.OK).send(script);
        } else {
            response.status(StatusCodes.NOT_FOUND).send();
        }
    } else {
        response.status(StatusCodes.BAD_REQUEST).send();
    }
};
