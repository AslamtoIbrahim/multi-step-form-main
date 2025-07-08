import { useSelector } from "react-redux";
import type { RootState } from "../store/storeSteps";

type props = { value: number; stepOnclick?: (value: number) => void };

const StepButton = ({ value, stepOnclick }: props) => {
  const step = useSelector((state: RootState) => state.step);
  const colored = step === value;
  return (
    <button
      onClick={() => stepOnclick && stepOnclick(value)}
      className={`w-10 h-10  border border-blue-200 rounded-full md:shrink-0
    ${colored ? "bg-cyan-200 text-black" : "text-white"}`}
    >
      {value}
    </button>
  );
};
export default StepButton;
