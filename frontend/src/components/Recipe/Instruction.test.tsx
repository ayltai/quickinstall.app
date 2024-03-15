import React from 'react';

import { render, } from '../../utils/test';
import { RecipeInstruction, } from './Instruction';

describe('<RecipeInstruction />', () => {
    it('renders correctly', () => expect(render(
        <RecipeInstruction
            open={true}
            transactionId='dummy' />
    )).toMatchSnapshot());

    it('renders instructions correctly', () => expect(render(
        <RecipeInstruction
            open={true}
            transactionId='dummy' />,
        {
            recipe : {
                ingredients : [
                    {
                        id     : '1',
                        name   : 'Spotify',
                        source : 'App Store',
                    },
                ],
            },
        }
    )).toMatchSnapshot());
});
