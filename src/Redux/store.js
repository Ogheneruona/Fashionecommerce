import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
//logger is a type of middleWare

import rootReducer from './root-reducer';

const middlewares = [logger];
/*if we want to add anything to the middleware, we can just add it to 
the array value that we have above*/ 

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
