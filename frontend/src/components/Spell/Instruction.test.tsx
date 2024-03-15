import React from 'react';

import { render, } from '../../utils/test';
import { SpellInstruction, } from './Instruction';

describe('<Instruction />', () => {
    it('renders correctly', () => expect(render(
        <SpellInstruction
            open={true}
            transactionId='dummy' />
    )).toMatchSnapshot());

    it('renders instructions correctly', () => expect(render(
        <SpellInstruction
            open={true}
            transactionId='dummy' />,
        {
            spell : {
                tweaks : [
                    {
                        id         : '1',
                        name       : 'Magic',
                        parameters : [
                            'Disable',
                        ],
                        types      : [
                            'boolean',
                        ],
                        values     : [
                            true,
                        ],
                    },
                ],
            },
        }
    )).toMatchSnapshot());
});
