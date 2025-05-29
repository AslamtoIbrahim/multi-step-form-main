import MonthlyYearlyPlan from "./MonthlyYearlyPlan";
import PlanSelector from "./PlanSelector";

const PlanCard = () => {
  return (
    <div className="bg-white rounded-lg p-5 space-y-4 ">
      <h1 className="font-semibold text-2xl pt-3 text-gray-950 ">
        Select your plan
      </h1>
      <p className="text-grey-500">
        You have option of monthly or yearly billing.
      </p>
      <PlanSelector />
      <MonthlyYearlyPlan />
    </div>
  );
};

export default PlanCard;
