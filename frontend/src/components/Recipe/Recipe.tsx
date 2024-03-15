import React, { useEffect, useState, } from 'react';

import { useAddRecipeMutation, } from '../../apis';
import { useAppDispatch, useAppSelector, } from '../../hooks';
import type { Ingredient, } from '../../models';
import { removeIngredient, } from '../../states';
import { handleError, } from '../../utils';
import { DetailsView, } from '../DetailsView';
import { ShoppingCartDetail, } from '../ShoppingCartDetail';
import { RecipeInstruction, } from './Instruction';

/**
 * A recipe contains a list of selected ingredients.
 */
export const Recipe = () => {
    const [ openInstruction, setOpenInstruction, ] = useState(false);
    const [ selected,        setSelected,        ] = useState<Ingredient | undefined>();
    const [ recipeId,        setRecipeId,        ] = useState<string>();

    const { product, } : { product : 'win/packages' | 'mac/packages' | 'tweaks', } = useAppSelector(state => state.preference);

    const { ingredients, } : { ingredients : Ingredient[], } = useAppSelector(state => state.recipe);

    const [ addRecipe, { data, error, reset, }, ] = useAddRecipeMutation();

    const dispatch = useAppDispatch();

    const handleSelect = (item : Ingredient) => setSelected(item);

    const handleDelete = (item : Ingredient) => dispatch(removeIngredient(item));

    const handleNext = () => {
        setOpenInstruction(true);

        addRecipe({
            platform : product.split('/')[0] as 'win' | 'mac',
            items    : ingredients.filter((ingredient : Ingredient) => product === 'win/packages' ? ingredient.source === 'Chocolatey' : ingredient.source === 'Homebrew' || ingredient.source === 'Homebrew (Cask)' || ingredient.source === 'App Store'),
        }).catch(handleError);
    };

    const handleCloseInstruction = () => {
        setOpenInstruction(false);

        reset();
    };

    useEffect(() => {
        if (data) setRecipeId(data);
    }, [ data, ]);

    useEffect(() => {
        if (error) handleError(error);
    }, [ error, ]);

    return (
        <ShoppingCartDetail
            items={ingredients.filter((ingredient : Ingredient) => product === 'win/packages' ? ingredient.source === 'Chocolatey' : ingredient.source === 'Homebrew' || ingredient.source === 'Homebrew (Cask)' || ingredient.source === 'App Store')}
            detailsView={
                <DetailsView
                    color={product === 'win/packages' ? 'info' : 'primary'}
                    description={selected?.description}
                    infoUrl={selected?.infoUrl}
                    source={selected?.source ?? ''} />
            }
            instruction={recipeId ? (
                <RecipeInstruction
                    open={openInstruction}
                    color={product === 'win/packages' ? 'info' : 'primary'}
                    transactionId={recipeId}
                    onClose={handleCloseInstruction} />
            ) : undefined}
            instructionShown={openInstruction}
            onSelect={handleSelect}
            onDelete={handleDelete}
            onNext={handleNext} />
    );
};
