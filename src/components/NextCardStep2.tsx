import { useDispatch } from "react-redux";
import { setStep } from "../store/sliceSteps";
import BackButton from "./BackButton";
import NextButton from "./NextButton";

const NextCardStep2 = () => {
  const dispatch = useDispatch();
  const onClickNextButton = () => {
    dispatch(setStep(3));
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
