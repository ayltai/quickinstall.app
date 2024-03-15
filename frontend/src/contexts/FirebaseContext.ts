import { FirebaseApp, } from 'firebase/app';
import { createContext, } from 'react';

export const FirebaseContext = createContext<FirebaseApp | undefined>(undefined);
