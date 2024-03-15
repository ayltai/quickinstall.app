import { CheckCircle, DeleteForever, } from '@mui/icons-material';
import React from 'react';

import { fireEvent, render, } from '../../utils/test';
import { ToggleButton, } from './ToggleButton';

describe('<ToggleButton />', () => {
    it('renders default style correctly', () => expect(render(
        <ToggleButton
            icon={<CheckCircle />}
            selectedIcon={<CheckCircle />}
            deselectIcon={<DeleteForever />}
            text='Select'
            selectedText='Selected'
            deselectText='Remove' />
    )).toMatchSnapshot());

    it('renders selected style correctly', () => expect(render(
        <ToggleButton
            selected
            icon={<CheckCircle />}
            selectedIcon={<CheckCircle />}
            deselectIcon={<DeleteForever />}
            text='Select'
            selectedText='Selected'
            deselectText='Remove' />
    )).toMatchSnapshot());

    it('triggers onChange when clicked', () => {
        const handleChange = vi.fn();

        const { getByRole, } = render(
            <ToggleButton
                icon={<CheckCircle />}
                selectedIcon={<CheckCircle />}
                deselectIcon={<DeleteForever />}
                text='Select'
                selectedText='Selected'
                deselectText='Remove'
                onChange={handleChange} />
        );

        fireEvent.click(getByRole('checkbox'));

        expect(handleChange).toBeCalledTimes(1);
        expect(handleChange).toBeCalledWith(true);
    });
});
