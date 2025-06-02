import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AddOns, Person } from "../utils/types";

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
    plan: "arcade",
    isMonthly: true,
    addOns: {
      onlineService: true,
      largerStorage: true,
      customizableProfile: false,
    } as AddOns,
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
    selectPlan: (state, action: PayloadAction<string>) => {
      state.plan = action.payload;
    },
    switchBill: (state, action: PayloadAction<boolean>) => {
      state.isMonthly = action.payload;
    },
    setOnlineService: (state, action: PayloadAction<boolean>) => {
      state.addOns.onlineService = action.payload;
    },
    setLargerStorage: (state, action: PayloadAction<boolean>) => {
      state.addOns.largerStorage = action.payload;
    },
    setCustomizableProfile: (state, action: PayloadAction<boolean>) => {
      state.addOns.customizableProfile = action.payload;
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
  selectPlan,
  switchBill,
  setOnlineService,
  setLargerStorage,
  setCustomizableProfile,
} = stepSlice.actions;
export default stepSlice.reducer;
