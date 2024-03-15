import React from 'react';

import { fireEvent, render, } from '../../utils/test';
import { DarkModeSwitch, } from './DarkModeSwitch';

const useDispatchMock = vi.fn();

vi.mock('react-redux', async () => ({
    ...(await vi.importActual('react-redux')),
    useDispatch : () => useDispatchMock,
}));

describe('<DarkModeSwitch />', () => {
    beforeEach(() => useDispatchMock.mockClear());

    it('renders correctly', () => expect(render(<DarkModeSwitch />)).toMatchSnapshot());

    it('toggles dark mode', () => {
        const { getByRole, } = render(<DarkModeSwitch />, {
            preference : {
                themeMode : 'light',
            },
        });

        fireEvent.click(getByRole('button'));

        expect(useDispatchMock).toHaveBeenCalledTimes(1);
        expect(useDispatchMock).toHaveBeenCalledWith({
            type    : 'preference/setThemeMode',
            payload : 'dark',
        });
    });
});
