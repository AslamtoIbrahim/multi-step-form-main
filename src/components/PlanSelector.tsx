import PlanOption from "./PlanOption";
import arcade_img from "../assets/icon-arcade.svg";
import advanced_img from "../assets/icon-advanced.svg";
import pro_img from "../assets/icon-pro.svg";
import { useState } from "react";
import { ADVANCE_PLAN, ARCADE_PLAN, PRO_PLAN } from "../lib/keys";

const PlanSelector = () => {
  const [plan, setPlan] = useState("arcade");
  const onSelectPlanHandler = (title: string) => {
    setPlan(title.toLowerCase());
  };
  return (
    <div className="space-y-4">
      <PlanOption
        onSelectPlan={onSelectPlanHandler}
        image={arcade_img}
        title="Arcade"
        price={90}
        isSelected={plan === ARCADE_PLAN}
      />
      <PlanOption
        onSelectPlan={onSelectPlanHandler}
        image={advanced_img}
        title="Advanced"
        price={120}
        isSelected={plan === ADVANCE_PLAN}
      />
      <PlanOption
        onSelectPlan={onSelectPlanHandler}
        image={pro_img}
        title="Pro"
        price={150}
        isSelected={plan === PRO_PLAN}
      />
    </div>
  );
};

export default PlanSelector;
