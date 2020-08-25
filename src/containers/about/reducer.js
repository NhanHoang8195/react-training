import {ABOUT_INCREASE, ABOUT_DECREASE} from './action';

const initialState = {
  count: 0,
};
const actionHandler = {};

actionHandler[ABOUT_INCREASE] = (state) => {
  return {
    count: state.count + 1
  }
}
actionHandler[ABOUT_DECREASE] = (state) => {
  return {
    count: state.count - 1
  }
}

const reducers = (state = initialState , action) => {
  const fn = actionHandler[action.type];
  return fn ? fn(state, action) : state;
};

export default reducers;
