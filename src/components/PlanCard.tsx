import MonthlyYearlyPlan from "./MonthlyYearlyPlan";
import NextCardStep2 from "./NextCardStep2";
import PlanSelector from "./PlanSelector";

const PlanCard = () => {
  return (
    <div className="md:h-full md:flex md:flex-col md:justify-between">
      <section className="space-y-4 md:space-y-6">
        <h1 className="font-semibold text-2xl md:text-3xl pt-3 text-gray-950 ">
          Select your plan
        </h1>
        <p className="text-grey-500 md:text-md">
          You have option of monthly or yearly billing.
        </p>
        <PlanSelector />
        <MonthlyYearlyPlan />
      </section>
      <section className="hidden md:block">
        <NextCardStep2 />
      </section>
    </div>
  );
};

export default PlanCard;
