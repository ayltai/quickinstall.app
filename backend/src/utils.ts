import { ErrorReporting, } from '@google-cloud/error-reporting';

const errors = new ErrorReporting();

export const handleError = (error : any) => {
    if (process.env.NODE_ENV === 'production') {
        errors.report(error);
    } else {
        console.error(error);
    }
};
