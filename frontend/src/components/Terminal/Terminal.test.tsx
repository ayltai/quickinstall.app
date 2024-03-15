import React from 'react';

import { render, } from '../../utils/test';
import { Terminal, } from './Terminal';

describe('<Terminal />', () => {
    it('renders correctly', () => expect(render(
        <Terminal commands={[
            'dummy',
            1000,
        ]} />
    )).toMatchSnapshot());
}, 10000);
