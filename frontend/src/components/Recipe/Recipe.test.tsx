import React from 'react';

import { render, } from '../../utils/test';
import { Recipe, } from './Recipe';

describe('<Recipe />', () => {
    it('renders correctly', () => expect(render(
        <Recipe />,
        {
            recipe : {
                ingredients : [
                    {
                        id          : '1',
                        name        : 'spotify',
                        description : 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
                        author      : 'Homebrew',
                        source      : 'Homebrew',
                    },
                    {
                        id          : '2',
                        name        : 'Spotify Player',
                        description : 'Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.',
                        author      : 'Homebrew',
                        source      : 'Homebrew (Cask)',
                    },
                ],
            },
        }
    )).toMatchSnapshot());
});
