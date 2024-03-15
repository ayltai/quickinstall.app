import type { Ingredient, } from './Ingredient';

export type Recipe = {
    id           : string,
    creationDate : Date,
    ingredients  : Ingredient[],
};
