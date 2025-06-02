import { useDispatch } from "react-redux";
import { setStep } from "../store/sliceSteps";
import TotalItem from "./TotalItem";
import type { AddOns } from "../utils/types";

type TotalProps = {
  addOns: AddOns;
  plan: string;
  isMonthly: boolean;
  bill: number;
};
const TotalAmountCard = ({ addOns, plan, isMonthly, bill }: TotalProps) => {
  const dispatch = useDispatch();
  const changeOnclickHandler = () => {
    dispatch(setStep(2));
  };
  return (
    <div className="bg-blue-200/20 rounded py-4 px-3 md:py-5 md:px-4">
      <section className="flex items-center justify-between">
        <div>
          <p className="font-semibold capitalize md:text-lg">
            {plan}
            <span className="lowercase">
              ({isMonthly ? "monthly" : "yearly"})
            </span>
          </p>
          <button
            onClick={changeOnclickHandler}
            className="cursor-pointer text-grey-500 hover:text-gray-600 text-sm md:text-base underline"
          >
            Change
          </button>
        </div>
        <p className="font-semibold md:text-lg">
          ${bill}/{isMonthly ? "mo" : "yr"}
        </p>
      </section>
      <hr className="border-gray-300 my-4" />
      <section className="space-y-3">
        {addOns.onlineService && <TotalItem title="Online service" price={2} />}
        {addOns.largerStorage && <TotalItem title="Larger storage" price={1} />}
        {addOns.customizableProfile && (
          <TotalItem title="Customizable profile" price={2} />
        )}
      </section>
    </div>
  );
};

export default TotalAmountCard;
