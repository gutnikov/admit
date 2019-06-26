/* global DEBUG */
import {
  applyMiddleware, combineReducers, compose, createStore,
} from 'redux';
import { createBrowserHistory } from 'history';

import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { connectRouter, routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();

const reducers = combineReducers(Object.assign({}, { router: connectRouter(history) }));

const middlewares = [routerMiddleware(history), thunk];

if (DEBUG) {
  middlewares.push(
    createLogger({
      predicate: (getState, action) => action.noLogging !== true,
    }),
  );
}

const store = createStore(reducers, {}, compose(applyMiddleware(...middlewares)));

export default store;
