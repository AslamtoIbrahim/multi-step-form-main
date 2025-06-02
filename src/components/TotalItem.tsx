import { useSelector } from "react-redux";
import type { RootState } from "../store/storeSteps";
import { clcPrice } from "../utils/calculates";

type ItemProps = {
  title: string;
  price: number;
};

const TotalItem = ({ title, price }: ItemProps) => {
  const isMonthly = useSelector((state: RootState) => state.isMonthly);
  const value = clcPrice(isMonthly) * price;
  return (
    <div className="flex items-center justify-between">
      <p className="text-grey-500 md:text-base">{title}</p>
      <p className="font-medium md:text-lg">
        +${value}/{isMonthly ? "mo" : "yr"}
      </p>
    </div>
  );
};

export default TotalItem;
