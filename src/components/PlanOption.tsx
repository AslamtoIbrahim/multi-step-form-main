import { useState } from "react";

type OptionProps = {
  image: string;
  title: string;
  price: number;
  isSelected: boolean;
};

const PlanOption = ({ image, title, price, isSelected }: OptionProps) => {
  const [isMonthlyBilling, setMonthlyBilling] = useState(false);
  return (
    <div
      className={`flex items-center gap-4 border border-grey-500 rounded-lg p-3
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
