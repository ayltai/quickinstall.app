import React from 'react';

import { fireEvent, render, } from '../../utils/test';
import { DynamicTypedInput, } from './DynamicTypedInput';

describe('<DynamicTypedInput />', () => {
    it('renders boolean typed input correctly', () => expect(render(
        <DynamicTypedInput
            title='Title'
            type='boolean'
            value={true} />
    )).toMatchSnapshot());

    it('renders string typed input correctly', () => expect(render(
        <DynamicTypedInput
            title='Title'
            type='string'
            value='test' />
    )).toMatchSnapshot());

    it('triggers onChange when the boolean input is changed', () => {
        const handleChange = vi.fn();

        const { getByRole, } = render(
            <DynamicTypedInput
                title='Title'
                type='boolean'
                value={true}
                onChange={handleChange} />
        );

        fireEvent.click(getByRole('checkbox'));

        expect(handleChange).toHaveBeenCalled();
        expect(handleChange).toHaveBeenCalledWith(false);
    });

    it('triggers onChange when the string input is changed', () => {
        const handleChange = vi.fn();

        const { getByRole, } = render(
            <DynamicTypedInput
                title='Title'
                type='string'
                value='test'
                onChange={handleChange} />
        );

        fireEvent.change(getByRole('textbox'), {
            target: {
                value: 'Dummy',
            },
        });

        expect(handleChange).toHaveBeenCalled();
        expect(handleChange).toHaveBeenCalledWith('Dummy');
    });
});
