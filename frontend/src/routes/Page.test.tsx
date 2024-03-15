import React from 'react';
import createFetchMock from 'vitest-fetch-mock';

import { render, waitFor, } from '../utils/test';
import disclaimer from './disclaimer.json';
import { Page, } from './Page';

const fetch = createFetchMock(vi);
fetch.enableMocks();

vi.mock('react-router-dom', async () => ({
    ...await vi.importActual('react-router-dom'),
    useParams : () => ({
        page : 'about',
    }),
}));

describe('<Page />', () => {
    it('renders correctly', async () => {
        fetch.mockIf(request => request.url.startsWith('https://cdn.contentful.com'), request => {
            if (request.method === 'GET') return {
                status  : 200,
                body    : JSON.stringify(disclaimer),
                headers : {
                    'Content-Type' : 'application/json',
                },
            };

            return {
                status : 501,
            };
        });

        await waitFor(() => expect(render(<Page />)).toMatchSnapshot());
    });
});
