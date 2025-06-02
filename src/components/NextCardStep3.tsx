import { useDispatch } from "react-redux";
import { setStep } from "../store/sliceSteps";
import BackButton from "./BackButton";
import NextButton from "./NextButton";

const NextCardStep3 = () => {
  const dispatch = useDispatch();
  
  const onClickNextButton = () => {
    dispatch(setStep(4));
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
}

export default NextCardStep3
