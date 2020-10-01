export const USER_INCREASE = 'USER_INCREASE';
export const USER_INCREASE_SUCCESS = 'USER_INCREASE_SUCCESS';
export const USER_INCREASE_FAILURE = 'USER_INCREASE_FAILURE';
export const USER_DECREASE = 'USER_DECREASE';


export function increaseUser(refcode) {
  return {
    type: USER_INCREASE,
    refcode,
  }
}

export function decreaseUser() {
  return {
    type: USER_DECREASE,
  }
}