import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// Define the Reducers that will always be present in the application
const staticReducers = {};

const logger = createLogger();
const middleware = [logger];
const persistConfig = {
  key: 'root',
  storage,

}
const persistedReducer = persistReducer(persistConfig, staticReducers);
// Configure the store
export const store = (function configureStore() {
  const store = createStore(createReducer(), applyMiddleware(...middleware))

  // Add a dictionary to keep track of the registered async reducers
  store.asyncReducers = {}

  // Create an inject reducer function
  // This function adds the async reducer, and creates a new combined reducer
  store.injectReducer = (key, asyncReducer) => {
    console.log('ssss');
    if (store.asyncReducers[key]) {
      console.log('come store');
      return;
    }
    store.asyncReducers[key] = asyncReducer
    store.replaceReducer(createReducer(store.asyncReducers))
  }

  // Return the modified store
  return store;
})();

function createReducer(asyncReducers) {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers
  })
}

export const persistor = persistStore(store);

