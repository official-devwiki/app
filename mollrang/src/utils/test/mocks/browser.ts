import {setupWorker} from 'msw';
import {handlers} from './handler';
import {setupServer} from 'msw/node';

export const WORKER = setupServer(...handlers);
