import React from 'react';
import createFetchMock from 'vitest-fetch-mock';

import { fireEvent, render, waitFor, } from '../utils/test';
import spells from './spells.json';
import { Tweaks, } from './Tweaks';

const fetch = createFetchMock(vi);
fetch.enableMocks();

vi.spyOn(Math, 'random').mockReturnValue(0);

describe('<Tweaks />', () => {
    it('renders correctly', () => {
        expect(render(<Tweaks />)).toMatchSnapshot();
    }, 10000);

    it('searches tweaks', async () => {
        fetch.mockIf(request => request.url.startsWith('https://cdn.contentful.com'), request => {
            if (request.method === 'GET') return {
                status  : 200,
                body    : JSON.stringify(spells),
                headers : {
                    'Content-Type' : 'application/json',
                },
            };

            return {
                status : 501,
            };
        });

        const { getAllByText, getByRole, } = render(<Tweaks />);

        fireEvent.change(getByRole('textbox'), {
            target : {
                value : 'launchpad',
            },
        });

        await waitFor(() => {
            expect(getAllByText(value => value.startsWith('Change')).length).toBeGreaterThan(1);
        }, {
            timeout : 10000,
        });
    }, 10000);
});
