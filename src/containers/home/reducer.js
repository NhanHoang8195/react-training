import {HOME_INCREASE, HOME_DECREASE} from './action';

const initialState ={
  count: 0,
};
const actionHandler = {};

actionHandler[HOME_INCREASE] = (state) => {
  return {
    count: state.count + 1
  }
}
actionHandler[HOME_DECREASE] = (state) => {
  return {
    count: state.count - 1
  }
}

const reducers = (state = initialState , action) => {
  const fn = actionHandler[action.type];
  return fn ? fn(state, action) : state;
};

export default reducers;
