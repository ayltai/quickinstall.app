import * as admin from 'firebase-admin';
import { Collection, getRepository, initialize, } from 'fireorm';
import { nanoid, } from 'nanoid';

import { handleError, } from './utils';

admin.initializeApp({
    credential : admin.credential.applicationDefault(),
});

initialize(admin.firestore());

type Ingredient = {
    id     : string,
    source : 'Chocolatey' | 'Homebrew' | 'Homebrew (Cask)' | 'App Store',
};

@Collection()
class Recipe {
    id           : string       = nanoid();
    creationDate : Date         = new Date();
    ingredients  : Ingredient[] = [];
}

type Tweak = {
    id           : string,
    name         : string,
    description? : string,
    imageUrl?    : string,
    infoUrl?     : string,
    author?      : string,
    parameters   : string[],
    types        : ('boolean' | 'number' | 'string')[],
    values       : (boolean | number | string)[],
    impact?      : 'Dock' | 'Finder' | 'SystemUIServer',
    privileged?  : boolean,
    sipInvolved? : boolean,
    category?    : string,
};

@Collection()
export class Spell {
    id           : string       = nanoid();
    creationDate : Date         = new Date();
    tweaks       : Tweak[]      = [];
}

const recipeRepository = getRepository(Recipe);

export const createRecipe = async (ingredients : Ingredient[]) => {
    const recipe = new Recipe();
    recipe.ingredients = ingredients.map(ingredient => ({
        ...ingredient,
        id : ingredient.id.substring(ingredient.id.indexOf('/') + 1),
    }));

    const recipeDocument = await recipeRepository.create(recipe);
    return recipeDocument.id;
};

export const getRecipe = async (recipeId : string) => {
    try {
        return await recipeRepository.findById(recipeId);
    } catch (error) {
        handleError(error);

        return Promise.resolve();
    }
};

const spellRepository = getRepository(Spell);

export const createSpell = async (tweaks : Tweak[]) => {
    const spell = new Spell();
    spell.tweaks = tweaks;

    const spellDocument = await spellRepository.create(spell);
    return spellDocument.id;
};

export const getSpell = async (spellId : string) => {
    try {
        return await spellRepository.findById(spellId);
    } catch (error) {
        handleError(error);

        return Promise.resolve();
    }
};
