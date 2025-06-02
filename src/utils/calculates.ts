import { ADVANCE_PLAN, ARCADE_PLAN, PRO_PLAN } from "./keys";
import type { AddOns } from "./types";

export const clcPrice = (m: boolean): number => (m ? 1 : 10);

export const clcPlanBill = (m: boolean, p: string): number => {
  const price = clcPrice(m);
  switch (p) {
    case ARCADE_PLAN:
      return 9 * price;
    case ADVANCE_PLAN:
      return 12 * price;
    case PRO_PLAN:
      return 15 * price;
    default:
      return 0;
  }
};

export const total = (bill: number, addOns: AddOns, m: boolean): number => {
  let t = bill;
  const p = clcPrice(m);
  if (addOns.onlineService) {
    t += p * 1;
  }
  if (addOns.largerStorage) {
    t += p * 2;
  }
  if (addOns.customizableProfile) {
    t += p * 2;
  }

  return t;
};
