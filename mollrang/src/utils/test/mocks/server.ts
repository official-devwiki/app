import {setupServer} from 'msw/node';
import {handlers} from './handler';

export const SERVER = setupServer(...handlers);
