import React from 'react';

import { render, } from '../../utils/test';
import { EmptyState, } from './EmptyState';

describe('<EmptyState />', () => {
    it('renders correctly', () => expect(render(<EmptyState>Content</EmptyState>)).toMatchSnapshot());
});
