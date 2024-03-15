import useMediaQuery from '@mui/material/useMediaQuery';
import { type TypedUseSelectorHook, useDispatch, useSelector, } from 'react-redux';

import type { AppDispatch, AppState, } from '../states';

export const useAppDispatch : () => AppDispatch = useDispatch;

export const useAppSelector : TypedUseSelectorHook<AppState> = useSelector;

export const useDesktopMode = () => useMediaQuery('(min-width: 900px)');
