export const HOMEBREW_REFRESH_INTERVAL : number = 1000 * 60 * 60 * 24 * 7;
export const TWEAKS_REFRESH_INTERVAL   : number = 1000 * 60 * 60 * 24 * 7;
export const PAGES_REFRESH_INTERVAL    : number = 1000 * 60 * 60 * 24 * 7;
export const MIN_SEARCH_LENGTH         : number = 2;
export const API_ENDPOINT              : string = 'https://europe-west2-quickinstallapp.cloudfunctions.net/api';

export const API_MAX_RETRIES  : number = 3;
export const SEARCH_FUZZINESS : number = 0.2;

export const RECIPE_COMMANDS : (number | string)[] = [
    `$ /bin/bash -c "$(curl -fsSL '${API_ENDPOINT}/mac/recipes/GXcE_gYLmnKDJbHpfxEZx/install')"`,
    2000,
    `$ /bin/bash -c "$(curl -fsSL '${API_ENDPOINT}/`,
    750,
    `$ /bin/bash -c "$(curl -fsSL '${API_ENDPOINT}/win/recipes/A2aLCDKKkC_7qnaciCzKJ/install')"`,
    2000,
    `$ /bin/bash -c "$(curl -fsSL '${API_ENDPOINT}/`,
    750,
    `$ /bin/bash -c "$(curl -fsSL '${API_ENDPOINT}/mac/recipes/aZLCiXg8e8WkfBjrqdTyC/install')"`,
    2000,
    `$ /bin/bash -c "$(curl -fsSL '${API_ENDPOINT}/`,
    750,
    `$ /bin/bash -c "$(curl -fsSL '${API_ENDPOINT}/win/recipes/gMHAV-ww_jazkwgyptqZY/install')"`,
    2000,
    `$ /bin/bash -c "$(curl -fsSL '${API_ENDPOINT}/`,
    750,
];

export const SPELL_COMMANDS : (number | string)[] = [
    `$ /bin/bash -c "$(curl -fsSL '${API_ENDPOINT}/mac/spells/Qi-xGQ8CFa4VpABxk-44y/install')"`,
    2000,
    `$ /bin/bash -c "$(curl -fsSL '${API_ENDPOINT}/mac/spells/`,
    750,
    `$ /bin/bash -c "$(curl -fsSL '${API_ENDPOINT}/mac/spells/78R-pM-Z2B_CgfPabth2J/install')"`,
    2000,
    `$ /bin/bash -c "$(curl -fsSL '${API_ENDPOINT}/mac/spells/`,
    750,
    `$ /bin/bash -c "$(curl -fsSL '${API_ENDPOINT}/mac/spells/WZpJ9q7rhKZHhNWBHXXgL/install')"`,
    2000,
    `$ /bin/bash -c "$(curl -fsSL '${API_ENDPOINT}/mac/spells/`,
    750,
    `$ /bin/bash -c "$(curl -fsSL '${API_ENDPOINT}/mac/spells/BC4Na_CKRE2x3iEpKqhmq/install')"`,
    2000,
    `$ /bin/bash -c "$(curl -fsSL '${API_ENDPOINT}/mac/spells/`,
    750,
];

export const INGREDIENT_CATEGORIES = [
    'Essentials',
    'Development',
    'Utilities',
];

export const TWEAK_CATEGORIES = [
    'Appearance',
    'Finder',
    'File management',
    'Multimedia',
    'Preferences',
    'Keyboard',
    'Security',
    'Operating System',
];

export const PAGE_PATHS : Record<string, string> = {
    'about'      : '63gOEykAJI6Sp5ZYYC9NO2',
    'terms'      : '7rGcIumbIVDuu0KZqVauvH',
    'privacy'    : 'kirxbfcCbtRcCaGlxLZFE',
    'disclaimer' : '5JIZ4p8HrhBkuF5NI5F0dH',
};
