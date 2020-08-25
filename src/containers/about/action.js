export const ABOUT_INCREASE = 'ABOUT_INCREASE';
export const ABOUT_DECREASE = 'ABOUT_DECREASE';


export function increaseAbout() {
  return {
    type: ABOUT_INCREASE,
  }
}

export function decreaseAbout() {
  return {
    type: ABOUT_DECREASE,
  }
}