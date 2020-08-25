import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger/src';
import homeReducer from './containers/home/reducer';
import aboutReducer from './containers/about/reducer';
import userReducer from './containers/user/reducer';

const rootReducers = combineReducers({
  homeReducer,
  aboutReducer,
  userReducer,
});
const logger = createLogger();
const middleware = [logger];

const store = createStore(rootReducers, applyMiddleware(...middleware));

export default store;