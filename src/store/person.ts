import {
  setStep,
  validateEmail,
  validateName,
  validatePhone,
} from "./sliceSteps";
import type { AppDispatch } from "./storeSteps";
import type { Person } from "../utils/types";
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

export const passPerson = (person: Person, dispatch: AppDispatch) => {
  const validName = passName(person.name, dispatch);
  const validEmail = passEmail(person.eamil, dispatch);
  const validPone = passPhone(person.phone, dispatch);
  if (validName && validEmail && validPone) {
    dispatch(setStep(2));
  }
};
