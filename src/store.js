import {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import storage from "redux-persist/lib/storage";
import { REDUCER_KEYS } from './constants/reducerKeys';
import staticReducers from './reducers';
import staticSagas from './sagas';

const persistConfig = {
  key: 'root',
  storage,
  // only contains reducer keys which are dynamic importing and need to save data to localStorage.
  // others reducer keys which are static improting, need to be wrapped in a persistReducer in specific reducer file if want to save data to localStorage
  // othewise, data for the reducer will not be saved.
  whitelist: [REDUCER_KEYS.USER_REDUCER],
};

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
if (process.env.NODE_ENV === 'development') {
  const logger = createLogger();
  middlewares.push(logger);
}
// Configure the store
const persistedReducer = persistReducer(persistConfig, createReducer());
const store = createStore(persistedReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store);
store.asyncReducers = {};
store.asyncSaga = {};

store.injectReducer = (reducerKey, asyncReducer) => {
  if (staticReducers[reducerKey] || store.asyncReducers[reducerKey]) {
    return;
  }
  store.asyncReducers[reducerKey] = asyncReducer;
  store.replaceReducer(createReducer(store.asyncReducers));
  if (persistConfig.whitelist.includes(reducerKey)) {
    persistor.persist();
  }
};
store.injectSaga = (reducerKey, asyncSaga) => {
  if (store.asyncSaga[reducerKey] || !asyncSaga) {
    return;
  }
  store.asyncSaga[reducerKey] = asyncSaga;
  sagaMiddleware.run(asyncSaga);
};

sagaMiddleware.run(staticSagas);
function createReducer(asyncReducers) {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers,
  });
}

export {
  store,
  persistor,
};
