import type { Item, } from './Item';

export type Ingredient = Item & {
    source : 'Chocolatey' | 'Homebrew' | 'Homebrew (Cask)' | 'App Store',
};
