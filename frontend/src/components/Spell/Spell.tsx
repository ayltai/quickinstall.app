import React, { useCallback, useEffect, useState, } from 'react';

import { useAddSpellMutation, } from '../../apis';
import { useAppDispatch, useAppSelector, } from '../../hooks';
import type { Tweak, } from '../../models';
import { removeTweak, updateTweak, } from '../../states';
import { handleError, } from '../../utils';
import { TweakDetailsView, } from '../DetailsView';
import { ShoppingCartDetail, } from '../ShoppingCartDetail';
import { SpellInstruction, } from './Instruction';

/**
 * A spell contains a list of selected tweaks.
 */
export const Spell = () => {
    const [ openInstruction, setOpenInstruction, ] = useState(false);
    const [ selected,        setSelected,        ] = useState<Tweak | undefined>();
    const [ spellId,         setSpellId,         ] = useState<string>();

    const { tweaks, } : { tweaks : Tweak[], } = useAppSelector(state => state.spell);

    const [ addSpell, { data, error, reset, }, ] = useAddSpellMutation();

    const dispatch = useAppDispatch();

    const handleSelect = (item : Tweak) => setSelected(item);

    const handleDelete = (item : Tweak) => dispatch(removeTweak(item));

    const handleNext = () => {
        setOpenInstruction(true);

        addSpell({
            items : tweaks,
        }).catch(handleError);
    };

    const handleChange = useCallback((parameter : string, value? : boolean | number | string) => {
        if (selected && value) {
            const tweak = {
                ...selected,
            };

            tweak.values[selected.parameters.indexOf(parameter)] = value;

            dispatch(updateTweak(tweak));
        }
    }, [ dispatch, selected, ]);

    const handleCloseInstruction = () => {
        setOpenInstruction(false);

        reset();
    };

    useEffect(() => {
        if (data) setSpellId(data);
    }, [ data, ]);

    useEffect(() => {
        if (error) handleError(error);
    }, [ error, ]);

    return (
        <ShoppingCartDetail
            items={tweaks}
            detailsView={
                <TweakDetailsView
                    description={selected?.description}
                    infoUrl={selected?.infoUrl}
                    source={selected?.author ?? ''}
                    parameters={selected?.parameters ?? []}
                    types={selected?.types ?? []}
                    values={selected?.values ?? []}
                    onChange={handleChange} />
            }
            instruction={spellId ? (
                <SpellInstruction
                    open={openInstruction}
                    transactionId={spellId}
                    onClose={handleCloseInstruction} />
            ) : undefined}
            instructionShown={openInstruction}
            onSelect={handleSelect}
            onDelete={handleDelete}
            onNext={handleNext} />
    );
};
