import { useDispatch } from "react-redux";
import { setMaxStep, setStep } from "../store/sliceSteps";
import BackButton from "./BackButton";
import NextButton from "./NextButton";
import { useSelector } from "react-redux";
import type { RootState } from "../store/storeSteps";

const NextCardStep2 = () => {
  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const onClickNextButton = () => {
    dispatch(setStep(3));
    if (state.step >= state.maxStep) {
      dispatch(setMaxStep(3));
    }
  };
  const onClickBackButton = () => {
    dispatch(setStep(1));
  };
  return (
    <div className="flex justify-between items-center">
      <BackButton onClick={onClickBackButton} />
      <NextButton onClick={onClickNextButton} />
    </div>
  );
};

export default NextCardStep2;
