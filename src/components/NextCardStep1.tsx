import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/storeSteps";
import { passPerson } from "../store/person";
import NextButton from "./NextButton";

const NextCardStep1 = () => {
  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const onClickNextButton = () => {
    passPerson(state, dispatch);
  };
  return (
    <div className="flex justify-end items-center">
      <NextButton onClick={onClickNextButton} />
    </div>
  );
};

export default NextCardStep1;
