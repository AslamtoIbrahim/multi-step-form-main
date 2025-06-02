import { useDispatch, useSelector } from "react-redux";
import { switchBill } from "../store/sliceSteps";
import type { RootState } from "../store/storeSteps";
import Switch from "./Switch";

const MonthlyYearlyPlan = () => {
  // const [isMonthly, setisMonthly] = useState(true);
  const isMonthly = useSelector((state: RootState) => state.isMonthly);
  const dispacth = useDispatch();
  const switchHandler = (isOn: boolean) => {
    dispacth(switchBill(!isOn));
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
