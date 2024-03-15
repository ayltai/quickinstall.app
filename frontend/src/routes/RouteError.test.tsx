import React from 'react';

import { render, } from '../utils/test';
import { RouteError, } from './RouteError';

vi.mock('react-router-dom', async () => ({
    ...await vi.importActual('react-router-dom'),
    isRouteErrorResponse : vi.fn(),
    useNavigate          : vi.fn(),
    useRouteError        : vi.fn(),
}));

describe('<RouteError />', () => {
    it('renders correctly', () => expect(render(<RouteError />)).toMatchSnapshot());
});
