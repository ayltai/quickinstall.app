import { ListItemText, } from '@mui/material';
import React from 'react';

import { fireEvent, render, } from '../../utils/test';
import { ListView, } from './ListView';

describe('<ListView />', () => {
    it('renders correctly', () => expect(render(
        <ListView>
            <ListItemText
                key='1'
                primary='Item 1'
                secondary='Item 1 description' />
            <ListItemText
                key='2'
                primary='Item 2'
                secondary='Item 2 description' />
            <ListItemText
                key='3'
                primary='Item 3'
                secondary='Item 3 description' />
        </ListView>
    )).toMatchSnapshot());

    it('triggers onClick when a list item is clicked', () => {
        const handleClick = vi.fn();

        const { getAllByRole, } = render(
            <ListView onClick={handleClick}>
                <ListItemText
                    key='1'
                    primary='Item 1'
                    secondary='Item 1 description' />
                <ListItemText
                    key='2'
                    primary='Item 2'
                    secondary='Item 2 description' />
                <ListItemText
                    key='3'
                    primary='Item 3'
                    secondary='Item 3 description' />
            </ListView>
        );

        fireEvent.click(getAllByRole('button')[0]);

        expect(handleClick).toHaveBeenCalledTimes(1);
        expect(handleClick).toHaveBeenCalledWith('1');
    });

    it('triggers onDelete when a delete button is clicked', () => {
        const handleDelete = vi.fn();

        const { getAllByTestId, } = render(
            <ListView onDelete={handleDelete}>
                <ListItemText
                    key='1'
                    primary='Item 1'
                    secondary='Item 1 description' />
                <ListItemText
                    key='2'
                    primary='Item 2'
                    secondary='Item 2 description' />
                <ListItemText
                    key='3'
                    primary='Item 3'
                    secondary='Item 3 description' />
            </ListView>
        );

        fireEvent.click(getAllByTestId('delete-button')[0]);

        expect(handleDelete).toHaveBeenCalledTimes(1);
        expect(handleDelete).toHaveBeenCalledWith('1');
    });
});
