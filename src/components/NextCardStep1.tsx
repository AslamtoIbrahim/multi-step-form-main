import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/storeSteps";
import { passPerson } from "../store/person";
import NextButton from "./NextButton";

const NextCardStep1 = () => {
  const person = useSelector((state: RootState) => state.person);
  const dispatch = useDispatch();
  const onClickNextButton = () => {
    passPerson(person, dispatch);
  };
  return (
    <div className="flex justify-end items-center">
      <NextButton onClick={onClickNextButton} />
    </div>
  );
};

export default NextCardStep1;
