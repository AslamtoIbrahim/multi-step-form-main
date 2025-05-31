import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Person } from "../utils/types";

const stepSlice = createSlice({
  name: "Steps",
  initialState: {
    step: 1,
    person: {
      name: "",
      invalidName: true,
      eamil: "",
      invalidEmail: true,
      phone: "",
      invalidPhone: true,
    } as Person,
  },
  reducers: {
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
    addName: (state, action: PayloadAction<string>) => {
      state.person.name = action.payload;
    },
    validateName: (state, action: PayloadAction<boolean>) => {
      state.person.invalidName = action.payload;
    },
    addEmail: (state, action: PayloadAction<string>) => {
      state.person.eamil = action.payload;
    },
    validateEmail: (state, action: PayloadAction<boolean>) => {
      state.person.invalidEmail = action.payload;
    },
    addPhone: (state, action: PayloadAction<string>) => {
      state.person.phone = action.payload;
    },
    validatePhone: (state, action: PayloadAction<boolean>) => {
      state.person.invalidPhone = action.payload;
    },
  },
});

export const {
  setStep,
  addName,
  validateName,
  addEmail,
  validateEmail,
  addPhone,
  validatePhone,
} = stepSlice.actions;
export default stepSlice.reducer;
