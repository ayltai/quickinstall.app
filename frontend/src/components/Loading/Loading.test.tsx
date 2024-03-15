import React from 'react';

import { render, } from '../../utils/test';
import { Loading, } from './Loading';

describe('<Loading />', () => {
    it('renders correctly', () => expect(render(<Loading />)).toMatchSnapshot());
});
