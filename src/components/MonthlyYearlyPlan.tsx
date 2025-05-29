import { useState } from "react";
import Switch from "./Switch";

const MonthlyYearlyPlan = () => {
  const [isMonthly, setisMonthly] = useState(true);
  const switchHandler = (isOn: boolean) => {
    setisMonthly(!isOn);
  };
  return (
    <div
      className="flex items-center justify-center gap-4 font-semibold text-grey-500
    bg-blue-100 p-3 rounded-lg"
    >
      <p className={`${isMonthly && "text-blue-900"}`}>Monthly</p>
      <Switch isOn={isMonthly} getSwitchValue={switchHandler} />
      <p className={`${!isMonthly && "text-blue-900"}`}>Yearly</p>
    </div>
  );
};

export default MonthlyYearlyPlan;
