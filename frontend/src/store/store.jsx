import {createStore, combineReducers, applyMiddleware} from 'redux';

import { ioReducers } from '../reducers/ioReducers.jsx';

import logger from 'redux-logger';

import promiseMiddlware from 'redux-promise-middleware';

const middleware = applyMiddleware(promiseMiddlware(), logger());

//Комбинем редюсеры
const reducers = combineReducers({
  ioContainer: ioReducers
});

const store = createStore(reducers, middleware);

export default store;