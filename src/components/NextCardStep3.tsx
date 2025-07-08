import { useDispatch, useSelector } from "react-redux";
import { setMaxStep, setStep } from "../store/sliceSteps";
import BackButton from "./BackButton";
import NextButton from "./NextButton";
import type { RootState } from "../store/storeSteps";

const NextCardStep3 = () => {
  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const onClickNextButton = () => {
    dispatch(setStep(4));
    if (state.step >= state.maxStep) {
      dispatch(setMaxStep(4));
    }
  };
  const onClickBackButton = () => {
    dispatch(setStep(2));
  };
  return (
    <div className="flex justify-between items-center">
      <BackButton onClick={onClickBackButton} />
      <NextButton onClick={onClickNextButton} />
    </div>
  );
};

export default NextCardStep3;
