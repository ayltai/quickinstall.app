import React from 'react';

import { render, } from '../../utils/test';
import { DetailsView, } from './DetailsView';

describe('<DetailsView />', () => {
    it('renders correctly', () => expect(render(
        <DetailsView
            description='Description'
            infoUrl='https://example.com'
            source='Homebrew' />
    )).toMatchSnapshot());
});
