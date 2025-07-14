export type Inputs = {
  value: string;
};

export type Person = {
  name: string;
  invalidName: boolean;
  eamil: string;
  invalidEmail: boolean;
  phone: string;
  invalidPhone: boolean;
};
export type AddOns = {
  onlineService: boolean;
  largerStorage: boolean;
  customizableProfile: boolean;
};

export type State = {
  step: number;
  maxStep: number;
  person: Person;
  plan: string;
  isMonthly: boolean;
  addOns: AddOns;
};
