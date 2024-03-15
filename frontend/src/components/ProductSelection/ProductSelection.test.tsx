import React from 'react';

import { fireEvent, render, } from '../../utils/test';
import { ProductSelection, } from './ProductSelection';

const PRELOADED_STATE = {
    preference : {
        locale  : 'en',
        product : 'mac/packages',
    },
    recipe     : {
        ingredients : [],
    },
    spell      : {
        tweaks : [],
    },
};

const useDispatchMock = vi.fn();

vi.mock('react-redux', async () => ({
    ...(await vi.importActual('react-redux')),
    useDispatch : () => useDispatchMock,
}));

describe('<ProductSelection />', () => {
    beforeEach(() => useDispatchMock.mockClear());

    it('renders correctly', () => {
        const { getAllByRole, } = render(<ProductSelection />, {
            preloadedState : PRELOADED_STATE,
        });

        expect(getAllByRole('button')).toHaveLength(3);
    });

    it('changes the product on click', () => {
        const handleChange = vi.fn();

        const { getAllByRole, } = render(<ProductSelection onChange={handleChange} />, {
            preloadedState : PRELOADED_STATE,
        });

        fireEvent.click(getAllByRole('button')[2]);

        expect(useDispatchMock).toHaveBeenCalledTimes(1);
        expect(useDispatchMock).toHaveBeenCalledWith({
            type    : 'preference/setProduct',
            payload : 'tweaks',
        });

        expect(handleChange).toHaveBeenCalledTimes(1);
    });
});
