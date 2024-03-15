import React from 'react';

import { render, } from '../../utils/test';
import { TweakDetailsView, } from './TweakDetailsView';

describe('<TweakDetailsView />', () => {
    it('renders correctly', () => expect(render(
        <TweakDetailsView
            description='Description'
            infoUrl='https://example.com'
            source='Homebrew'
            parameters={[
                'Width',
                'Height',
                'Disabled',
                'Colour',
            ]}
            types={[
                'number',
                'number',
                'boolean',
                'string',
            ]}
            values={[
                100,
                200,
                false,
                'red',
            ]} />
    )).toMatchSnapshot());
});
