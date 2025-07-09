import {
  setMaxStep,
  setStep,
  validateEmail,
  validateName,
  validatePhone,
} from "./sliceSteps";
import type { AppDispatch } from "./storeSteps";
const passName = (name: string, dispatch: AppDispatch) => {
  if (name.length < 3) {
    dispatch(validateName(false));
    return false;
  }
  dispatch(validateName(true));
  return true;
};
const passEmail = (email: string, dispatch: AppDispatch) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  console.log(emailRegex.test(email));
  if (!emailRegex.test(email)) {
    dispatch(validateEmail(false));
    return false;
  }
  dispatch(validateEmail(true));
  return true;
};

const passPhone = (phone: string, dispatch: AppDispatch) => {
  if (phone.length < 7) {
    dispatch(validatePhone(false));
    return false;
  }
  dispatch(validatePhone(true));
  return true;
};

export const passPerson = (state: State, dispatch: AppDispatch) => {
  const validName = passName(state.person.name, dispatch);
  const validEmail = passEmail(state.person.eamil, dispatch);
  const validPone = passPhone(state.person.phone, dispatch);
  if (validName && validEmail && validPone) {
    if (state.step >= state.maxStep) {
      dispatch(setMaxStep(2));
      console.log('max: ', state.maxStep)
    }
    dispatch(setStep(2));
  }
};
