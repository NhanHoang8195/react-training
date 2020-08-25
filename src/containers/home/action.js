export const HOME_INCREASE = 'HOME_INCREASE';
export const HOME_DECREASE = 'HOME_DECREASE';


export function increaseHome() {
  return {
    type: HOME_INCREASE,
  }
}

export function decreaseHome() {
  return {
    type: HOME_DECREASE,
  }
}