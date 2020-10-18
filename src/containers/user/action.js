import * as EVENT from './events';
export function increaseUser(refcode) {
  return {
    type: EVENT.USER_INCREASE,
    refcode,
  }
}

export function decreaseUser() {
  return {
    type: EVENT.USER_DECREASE,
  }
}