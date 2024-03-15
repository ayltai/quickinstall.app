import React from 'react';
import createFetchMock from 'vitest-fetch-mock';

import { fireEvent, render, waitFor, } from '../utils/test';
import ingredients from './ingredients.json';
import { Packages, } from './Packages';

const fetch = createFetchMock(vi);
fetch.enableMocks();

vi.spyOn(Math, 'random').mockReturnValue(0);

describe('<Packages />', () => {
    it('renders correctly', () => {
        expect(render(<Packages />)).toMatchSnapshot();
    }, 10000);

    it('searches packages', async () => {
        fetch.mockIf(request => request.url.startsWith('https://cdn.contentful.com'), request => {
            if (request.method === 'GET') return {
                status  : 200,
                body    : JSON.stringify(ingredients),
                headers : {
                    'Content-Type' : 'application/json',
                },
            };

            return {
                status : 501,
            };
        });

        const { getAllByText, getByRole, } = render(<Packages />);

        fireEvent.change(getByRole('textbox'), {
            target : {
                value : 'spotify',
            },
        });

        await waitFor(() => {
            expect(getAllByText(value => value.startsWith('spotify') || value.startsWith('Spotify')).length).toBeGreaterThan(1);
        }, {
            timeout : 10000,
        });
    }, 10000);
});
