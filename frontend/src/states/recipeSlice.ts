import { createSlice, PayloadAction, } from '@reduxjs/toolkit';

import type { Ingredient, } from '../models';

export type RecipeState = {
    ingredients : Ingredient[],
};

const initialState : RecipeState = {
    ingredients : [],
};

const recipeSlice = createSlice({
    initialState,
    name     : 'recipe',
    reducers : {
        addIngredient    : (state, action : PayloadAction<Ingredient>) => ({
            ...state,
            ingredients : [
                ...state.ingredients,
                action.payload,
            ].sort((a, b) => a.name.localeCompare(b.name)),
        }),
        removeIngredient : (state, action : PayloadAction<Ingredient>) => ({
            ...state,
            ingredients : state.ingredients.filter(ingredient => ingredient.id !== action.payload.id || ingredient.source !== action.payload.source),
        }),
        setIngredients   : (state, action : PayloadAction<Ingredient[]>) => ({
            ...state,
            ingredients : action.payload,
        }),
        resetIngredients : () => initialState,
    },
});

export const { addIngredient, removeIngredient, resetIngredients, setIngredients, } = recipeSlice.actions;

export const recipeReducer = recipeSlice.reducer;
