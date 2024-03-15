import React from 'react';

import { fireEvent, render, waitFor, } from '../../utils/test';
import { SearchInput, } from './SearchInput';

describe('<SearchInput />', () => {
    it('renders correctly', () => expect(render(<SearchInput />)).toMatchSnapshot());

    it('triggers onSearch when the input is changed', async () => {
        const handleSearch = vi.fn();

        const { getByRole, } = render(<SearchInput onSearch={handleSearch} />);

        expect(handleSearch).toHaveBeenCalledTimes(1);

        fireEvent.change(getByRole('textbox'), {
            target : {
                value : 'test',
            },
        });

        await waitFor(() => {
            expect(handleSearch).toHaveBeenCalledTimes(2);
            expect(handleSearch).toHaveBeenCalledWith('test');
        });
    });
});
