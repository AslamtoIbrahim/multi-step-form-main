import { useSelector } from "react-redux";
import StepButton from "./StepButton";
import type { RootState } from "../store/storeSteps";
import { useDispatch } from "react-redux";
import { setStep } from "../store/sliceSteps";

const MobileSteps = () => {
  const maxStep = useSelector((state: RootState) => state.maxStep);
  const dispatch = useDispatch();
  const stepOnclickValue = (value: number) => {
    if (maxStep >= value) {
      dispatch(setStep(value));
    }
  };
  return (
    <div className="w-full flex items-center justify-center gap-4 md:hidden my-4">
      <StepButton value={1} stepOnclick={stepOnclickValue} />
      <StepButton value={2} stepOnclick={stepOnclickValue} />
      <StepButton value={3} stepOnclick={stepOnclickValue} />
      <StepButton value={4} stepOnclick={stepOnclickValue} />
    </div>
  );
};

export default MobileSteps;
