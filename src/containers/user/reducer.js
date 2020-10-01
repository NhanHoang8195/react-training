import {USER_INCREASE, USER_DECREASE} from './action';
import produce from 'immer';

const initialState = {
  count: 0,
};
const actionHandler = {};

actionHandler[USER_INCREASE] = (state) => produce(state, (draft) => {
  draft.count = state.count + 1;
});
actionHandler[USER_DECREASE] = (state) => produce(state, (draft) => {
  draft.count = state.count - 1;
});


const reducers = (state = initialState , action) => {
  const fn = actionHandler[action.type];
  return fn ? fn(state, action) : state;
};

export default reducers;