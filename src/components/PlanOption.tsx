import { useState } from "react";

type OptionProps = {
  image: string;
  title: string;
  price: number;
  isSelected: boolean;
  onSelectPlan: (title: string) => void;
};

const PlanOption = ({
  image,
  title,
  price,
  isSelected,
  onSelectPlan,
}: OptionProps) => {
  const [isMonthlyBilling, setMonthlyBilling] = useState(true);
  return (
    <div
      onClick={() => onSelectPlan(title)}
      className={`p-3 md:px-4 md:py-8 flex items-center gap-4 md:flex-col md:items-start border border-grey-500 cursor-pointer rounded-lg 
  ${isSelected && "border-purple-600 bg-blue-100"}`}
    >
      <img src={image} />
      <section>
        <p className="font-semibold">{title}</p>
        <p className="text-grey-500">
          ${price}/{isMonthlyBilling ? "mo" : "yr"}
        </p>
        {!isMonthlyBilling && <p>2 months free</p>}
      </section>
    </div>
  );
};

export default PlanOption;
