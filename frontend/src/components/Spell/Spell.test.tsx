import React from 'react';

import { render, } from '../../utils/test';
import { Spell, } from './Spell';

describe('<Spell />', () => {
    it('renders correctly', () => expect(render(
        <Spell />,
        {
            spell : {
                tweaks : [
                    {
                        id          : '1',
                        name        : 'magic.1',
                        description : 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
                        author      : 'QuickInstall.app',
                        parameters  : [
                            'Disable',
                        ],
                        types       : [
                            'boolean',
                        ],
                        values      : [
                            'true',
                        ],
                    },
                    {
                        id          : '2',
                        name        : 'magic.2',
                        description : 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
                        author      : 'QuickInstall.app',
                        parameters  : [
                            'Name',
                            'Width',
                            'Height',
                        ],
                        types       : [
                            'string',
                            'number',
                            'number',
                        ],
                        values      : [
                            'Magic',
                            1920,
                            1024,
                        ],
                    },
                ],
            },
        }
    )).toMatchSnapshot());
});
