import { useDispatch } from "react-redux";
import { setStep } from "../store/sliceSteps";
import BackButton from "./BackButton";
import NextButton from "./NextButton";

const LastCardStep4 = () => {
 const dispatch = useDispatch();
  
  const onClickNextButton = () => {
    dispatch(setStep(5));
  };
  const onClickBackButton = () => {
    dispatch(setStep(3));
  };
  return (
    <div className="hidden md:flex justify-between items-center">
      <BackButton onClick={onClickBackButton} />
      <NextButton text="Confirm" onClick={onClickNextButton} style="bg-purple-600" />
    </div>
  );
}

export default LastCardStep4
