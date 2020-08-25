export const USER_INCREASE = 'USER_INCREASE';
export const USER_DECREASE = 'USER_DECREASE';


export function increaseUser() {
  return {
    type: USER_INCREASE,
  }
}

export function decreaseUser() {
  return {
    type: USER_DECREASE,
  }
}