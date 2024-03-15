import React from 'react';

import { fireEvent, render, } from '../../utils/test';
import { DialogView, } from './DialogView';

describe('<DialogView />', () => {
    it('renders correctly', () => expect(render(
        <DialogView
            open
            title='Title'>
            Content
        </DialogView>
    )).toMatchSnapshot());

    it('triggers onClose when the close button is clicked', () => {
        const handleClose = vi.fn();

        const { getAllByRole, } = render(
            <DialogView
                open
                title='Title'
                onClose={handleClose}>
                Content
            </DialogView>
        );

        fireEvent.click(getAllByRole('button')[0]);

        expect(handleClose).toBeCalledTimes(1);
    });
});
