import { createSlice, PayloadAction, } from '@reduxjs/toolkit';

import type { Tweak, } from '../models';

export interface SpellState {
    tweaks : Tweak[],
};

const initialState : SpellState = {
    tweaks : [],
};

export const spellSlice = createSlice({
    initialState,
    name     : 'spell',
    reducers : {
        addTweak    : (state, action : PayloadAction<Tweak>) => ({
            ...state,
            tweaks : [
                ...state.tweaks,
                action.payload,
            ].sort((a, b) => a.name.localeCompare(b.name)),
        }),
        removeTweak : (state, action : PayloadAction<Tweak>) => ({
            ...state,
            tweaks : state.tweaks.filter(tweak => tweak.id !== action.payload.id),
        }),
        resetTweaks : () => initialState,
        setTweaks   : (state, action : PayloadAction<Tweak[]>) => ({
            ...state,
            tweaks : action.payload,
        }),
        updateTweak : (state, action : PayloadAction<Tweak>) => ({
            ...state,
            tweaks : state.tweaks.filter(tweak => tweak.id !== action.payload.id).concat(action.payload).sort((a, b) => a.name.localeCompare(b.name)),
        }),
    },
});

export const { addTweak, removeTweak, resetTweaks, setTweaks, updateTweak, } = spellSlice.actions;

export const spellReducer = spellSlice.reducer;
