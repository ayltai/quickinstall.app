import React from 'react';

import { render, } from '../../utils/test';
import { Footer, } from './Footer';

describe('<Footer />', () => {
    it('renders correctly', () => expect(render(<Footer />)).toMatchSnapshot());
});
