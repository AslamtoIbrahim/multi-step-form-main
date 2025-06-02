import { useSelector } from "react-redux";
import TotalAmountCard from "./TotalAmountCard";
import type { RootState } from "../store/storeSteps";
import { clcPlanBill, total } from "../utils/calculates";
import LastCardStep4 from "./LastCardStep4";

const FinishingCard = () => {
  const state = useSelector((state: RootState) => state);
  const billPlan = clcPlanBill(state.isMonthly, state.plan);
  const totalBill = total(billPlan, state.addOns, state.isMonthly);
  return (
    <div className="md:h-full md:flex md:flex-col md:justify-between">
      <div className="space-y-4 md:space-y-6">
        <h1 className="font-semibold text-2xl md:text-3xl pt-3 text-gray-950 ">
          Finishing up
        </h1>
        <p className="text-grey-500 md:text-md">
          Double-check everything looks OK before confirming.
        </p>
        <TotalAmountCard
        addOns={state.addOns}
          plan={state.plan}
          isMonthly={state.isMonthly}
          bill={billPlan}
        />
        <section className="flex justify-between items-center px-2 md:px-6">
          <p className="text-grey-500">Total (per month)</p>
          <p className="text-purple-600 font-sans font-bold md:text-lg">
            +${totalBill}/{state.isMonthly ? "mo" : "yr"}
          </p>
        </section>
      </div>
      <section className="hidden md:block">
        <LastCardStep4 />
      </section>
    </div>
  );
};

export default FinishingCard;
