export const gradientPalette : Record<'light' | 'dark', string[][]> = {
    light : [
        [
            '#bce49a',
            '#9abce4',
            '#a383ee',
            '#cc87c6',
            '#f58399',
            '#edbf91',
            '#91edbf',
        ],
        [
            '#e2c063',
            '#8be470',
            '#5dc4bb',
            '#858fea',
            '#e06bdd',
            '#dde06b',
            '#6bdde0',
            '#e06e6b',
        ],
        [
            '#a6a1e7',
            '#dc9fce',
            '#ebc3b5',
            '#dce7a4',
            '#a6eabc',
        ],
    ],
    dark  : [
        [
            '#85387f',
            '#8f474d',
            '#89622a',
            '#61852a',
            '#358d54',
            '#2b7b83',
        ],
        [
            '#40a587',
            '#657a9d',
            '#7545af',
            '#8039a4',
            '#935a7c',
            '#ab7146',
        ],
        [
            '#256f84',
            '#5e567c',
            '#7a3774',
            '#833b67',
            '#7d624f',
            '#718223',
        ],
    ],
};

export const appTheme = {
    palette    : {
        primary    : {
            main         : '#8bc34a',
            light        : '#9ccc65',
            dark         : '#7cb342',
            contrastText : '#ffffff',
        },
        secondary  : {
            main         : '#fb8c00',
            light        : '#ff9800',
            dark         : '#f57c00',
            contrastText : '#ffffff',
        },
    },
    components : {
        MuiCard        : {
            styleOverrides : {
                root : {
                    borderRadius : '1rem',
                },
            },
        },
        MuiCardActions : {
            styleOverrides : {
                root : {
                    padding : 16,
                },
            },
        },
        MuiDialog      : {
            styleOverrides : {
                paper : {
                    borderRadius : '1rem',
                },
            },
        },
    },
    typography : {
        fontFamily : 'Rubik',
        h1         : {
            fontFamily : 'Fjalla One',
        },
        h2         : {
            fontFamily : 'Fjalla One',
        },
        h3         : {
            fontFamily : 'Fjalla One',
        },
        h4         : {
            fontFamily : 'Fjalla One',
        },
        h5         : {
            fontFamily : 'Rubik',
        },
        h6         : {
            fontFamily : 'Rubik',
        },
        body1      : {
            fontFamily : 'Rubik',
        },
        body2      : {
            fontFamily : 'Rubik',
        },
        subtitle1  : {
            fontFamily : 'Rubik',
        },
        subtitle2  : {
            fontFamily : 'Rubik',
        },
        button     : {
            fontFamily : 'Rubik',
        },
        caption    : {
            fontFamily : 'Fjalla One',
        },
        overline   : {
            fontFamily : 'Rubik',
        },
    },
};
