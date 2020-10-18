import * as EVENT from './events';
import produce from 'immer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { REDUCER_KEYS} from '../../constants/reducerKeys';

const initialState = {
  count: 0,
  loading: false,
  data: [],
  error: null,
};
const actionHandler = {};

actionHandler[EVENT.USER_INCREASE] = (state) => produce(state, (draft) => {
  draft.count = state.count + 1;
});
actionHandler[EVENT.USER_DECREASE] = (state) => produce(state, (draft) => {
  draft.count = state.count - 1;
});


const reducers = (state = initialState , action) => {
  const fn = actionHandler[action.type];
  return fn ? fn(state, action) : state;
};

const persistedReducer = persistReducer({
  key: REDUCER_KEYS.USER_REDUCER,
  storage,
}, reducers);

export default persistedReducer;