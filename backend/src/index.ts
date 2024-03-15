import { http, } from '@google-cloud/functions-framework';

import app from './app';

http('api', app);
