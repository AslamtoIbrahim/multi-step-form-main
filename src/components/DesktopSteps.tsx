import { useDispatch, useSelector } from "react-redux";
import DeskButtonStep from "./DeskButtonStep";
import { setStep } from "../store/sliceSteps";
import type { RootState } from "../store/storeSteps";

const DesktopSteps = () => {
  const maxStep = useSelector((state: RootState) => state.maxStep);
  const dispatch = useDispatch();
  const onClickStepButton = (value: number) => {
    console.log("maxStep: ", maxStep);
    if (maxStep >= value) {
      dispatch(setStep(value));
    }
  };
   return (<div
      className="hidden md:block bg-desktop bg-no-repeat bg-cover bg-center rounded-xl bg-lime-300
     w-1/3 py-8 px-4  space-y-8"
    >
      <DeskButtonStep
        onClickStep={onClickStepButton}
        text="Your info"
        value={1}
        enabled={maxStep >= 1}
      />
      <DeskButtonStep
        onClickStep={onClickStepButton}
        text="Select plan"
        value={2}
        enabled={maxStep >= 2}
      />
      <DeskButtonStep
        onClickStep={onClickStepButton}
        text="Add-ons"
        value={3}
        enabled={maxStep >= 3}
      />
      <DeskButtonStep
        onClickStep={onClickStepButton}
        text="Summary"
        value={4}
        enabled={maxStep >= 4}
      />
    </div>
  );
};

export default DesktopSteps;
