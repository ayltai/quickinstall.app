import React from 'react';

import { fireEvent, render, waitFor, } from '../../utils/test';
import { CopyableInput, } from './CopyableInput';

const DUMMY_VALUE = 'This is a test';

const component = (
    <CopyableInput value={DUMMY_VALUE} />
);

const writeText = vi.fn(() => Promise.resolve());

Object.assign(navigator, {
    clipboard : {
        writeText,
    },
});

describe('<CopyableInput />', () => {
    it('renders correctly', () => expect(render(component)).toMatchSnapshot());

    it('copies input value to clipboard', async () => {
        const { getByRole, } = render(component);

        fireEvent.click(getByRole('button'));

        await waitFor(() => {
            expect(writeText).toHaveBeenCalledWith(DUMMY_VALUE);
        });
    });
});
