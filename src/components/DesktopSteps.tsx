import { useDispatch } from "react-redux";
import DeskButtonStep from "./DeskButtonStep";
import { setStep } from "../store/sliceSteps";

const DesktopSteps = () => {
  const dispatch = useDispatch();
  const onClickStepButton = (value: number) => {
    dispatch(setStep(value));
  };
  return (
    <div
      className="hidden md:block bg-desktop bg-no-repeat bg-cover bg-center rounded-xl bg-lime-300
     w-1/3 py-8 px-7 space-y-8"
    >
      <DeskButtonStep
        onClickStep={onClickStepButton}
        text="Your info"
        value={1}
      />
      <DeskButtonStep
        onClickStep={onClickStepButton}
        text="Select plan"
        value={2}
      />
      <DeskButtonStep
        onClickStep={onClickStepButton}
        text="Add-ons"
        value={3}
      />
      <DeskButtonStep
        onClickStep={onClickStepButton}
        text="Summary"
        value={4}
      />
    </div>
  );
};

export default DesktopSteps;
