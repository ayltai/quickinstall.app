import React from 'react';

import { fireEvent, render, } from '../../utils/test';
import { SelectableCardView, } from './SelectableCardView';

const TITLE       : string = 'Headline';
const SUBTITLE    : string = 'Subheader';
const DESCRIPTION : string = 'Explain more about the topic shown in the headline and subheader through supporting text.';

describe('<SelectableCardView />', () => {
    it('triggers onChange when the card is selected', () => {
        const handleChange = vi.fn();

        const { getByRole, } = render(
            <SelectableCardView
                title={TITLE}
                subtitle={SUBTITLE}
                description={DESCRIPTION}
                onChange={handleChange} />
        );

        fireEvent.click(getByRole('checkbox'));

        expect(handleChange).toHaveBeenCalledTimes(1);
        expect(handleChange).toHaveBeenCalledWith(true);
    });
});
