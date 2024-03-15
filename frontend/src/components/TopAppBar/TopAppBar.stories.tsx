import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { Meta, StoryObj, } from '@storybook/react';
import React from 'react';

import { DarkModeSwitch, } from '../DarkModeSwitch';
import { ProductSelection, } from '../ProductSelection';
import { ShoppingCart, } from '../ShoppingCart';
import SmallLogo from './SmallLogo.webp';
import { TopAppBar, } from './TopAppBar';

const meta : Meta<typeof TopAppBar> = {
    component : TopAppBar,
    title     : 'Components/Data Presentations/Toolbar',
    argTypes  : {
        logo : {
            description : 'The logo to show at the start of the top app bar',
        },
        title : {
            description : 'The title to show at the start of the top app bar and after the logo',
        },
        actions : {
            description : 'The actions to show at the end of the top app bar',
        },
        children : {
            description : 'The content to show at the middle of the top app bar',
        },
    },
};

export default meta;

type Story = StoryObj<typeof TopAppBar>;

export const Default : Story = {
    args : {
        logo     : (
            <img
                style={{
                    marginRight : 8,
                }}
                src={SmallLogo}
                alt='Logo'
                width={48}
                height={48} />
        ),
        title    : (
            <Typography
                variant='h4'
                fontWeight='bold'>
                QuickInstall.app
            </Typography>
        ),
        actions  : (
            <>
                <DarkModeSwitch />
                <Box padding={1} />
                <ShoppingCart />
            </>
        ),
        children : (
            <ProductSelection
                sx={{
                    marginLeft : -16,
                }} />
        ),
    },
    parameters : {
        layout : 'padded',
    },
};
