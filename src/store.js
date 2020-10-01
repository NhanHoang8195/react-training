import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import staticReducers from './reducers';

const logger = createLogger();
const middleware = [logger];

// Configure the store

  const store = createStore(createReducer(), applyMiddleware(...middleware));
  // Add a dictionary to keep track of the registered async reducers
  store.asyncReducers = {}

  // Create an inject reducer function
  // This function adds the async reducer, and creates a new combined reducer
  store.injectReducer = (key, asyncReducer) => {
    // const shouldPersist = persistConfig.whitelist.includes(key);
    if (staticReducers[key] || (store.asyncReducers[key])) {
      return;
    }
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
  }

  // Return the modified store

function createReducer(asyncReducers) {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers
  });
}

export {
  store,
};
