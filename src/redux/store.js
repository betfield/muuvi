import { createStore, applyMiddleware, compose } from 'redux';
import { autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
/*
BREAKING CHANGE
[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.
[redux-logger v3] Change 
[redux-logger v3] import createLogger from 'redux-logger'
[redux-logger v3] to
[redux-logger v3] import { createLogger } from 'redux-logger'
*/
import { createLogger } from 'redux-logger';
import reducers from './reducers';

const middlewares = [
  thunk,
  createLogger(),
  promiseMiddleware()
];

const enhancers = compose(
  autoRehydrate({ log: true }),
  applyMiddleware(...middlewares)
);

const store = createStore(reducers, undefined, enhancers);

export default store;
