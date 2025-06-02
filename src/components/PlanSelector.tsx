import { useDispatch, useSelector } from "react-redux";
import advanced_img from "../assets/icon-advanced.svg";
import arcade_img from "../assets/icon-arcade.svg";
import pro_img from "../assets/icon-pro.svg";
import { selectPlan } from "../store/sliceSteps";
import type { RootState } from "../store/storeSteps";
import { ADVANCE_PLAN, ARCADE_PLAN, PRO_PLAN } from "../utils/keys";
import PlanOption from "./PlanOption";

const PlanSelector = () => {
  const plan = useSelector((state: RootState) => state.plan);
  const dispacth = useDispatch();
  const onSelectPlanHandler = (title: string) => {
    dispacth(selectPlan(title.toLowerCase()));
  };
  return (
    <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-3 md:gap-4 ">
      <PlanOption
        onSelectPlan={onSelectPlanHandler}
        image={arcade_img}
        title="Arcade"
        price={9}
        isSelected={plan === ARCADE_PLAN}
      />
      <PlanOption
        onSelectPlan={onSelectPlanHandler}
        image={advanced_img}
        title="Advanced"
        price={12}
        isSelected={plan === ADVANCE_PLAN}
      />
      <PlanOption
        onSelectPlan={onSelectPlanHandler}
        image={pro_img}
        title="Pro"
        price={15}
        isSelected={plan === PRO_PLAN}
      />
    </div>
  );
};

export default PlanSelector;
