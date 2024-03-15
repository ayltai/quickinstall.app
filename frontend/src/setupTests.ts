import '@testing-library/jest-dom/vitest';

Object.defineProperty(window, 'location', {
    writable : true,
    value    : {
        href : 'http://localhost:5173',
    },
});

Object.defineProperty(window, 'matchMedia', {
    writable : true,
    value    : vi.fn().mockImplementation((query : string) => ({
        matches             : false,
        media               : query,
        onchange            : null,
        addListener         : vi.fn(),
        removeListener      : vi.fn(),
        addEventListener    : vi.fn(),
        removeEventListener : vi.fn(),
        dispatchEvent       : vi.fn(),
    })),
});

vi.mock('i18next', () => ({
    language       : 'en',
    changeLanguage : () => new Promise(() => {
    }),
}));

vi.mock('react-i18next', () => ({
    useTranslation : () => ({
        t : (key : string) => key,
    }),
}));

vi.mock('@sentry/react', () => ({
    init             : () => {
    },
    captureException : () => {
    },
}));
