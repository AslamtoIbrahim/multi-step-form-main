import { type ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPhone } from "../store/sliceSteps";
import type { RootState } from "../store/storeSteps";

const PhoneInput = () => {
  const person = useSelector((state: RootState) => state.person);
  const dispatch = useDispatch();
  const valid = person.invalidPhone;

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(addPhone(e.target.value));
  };

  return (
    <div className="flex flex-col md:space-y-1">
      <div className="flex justify-between items-center">
        <label htmlFor="phone">Phone Number</label>
        {!valid && (
          <p className="text-red-500 text-sm">
            Must be 7 digit numbers and more
          </p>
        )}
      </div>
      <input
        className={`border border-gray-300 text-sm md:text-base font-semibold rounded-sm px-3 py-2
          outline-none focus:border-purple-600
            ${
              !valid
                ? "bg-red-200 placeholder:text-grey-500"
                : "placeholder:text-gray-400"
            }`}
        type="number"
        id="phone"
        value={person.phone}
        placeholder="e.g. +1 234 567 890"
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default PhoneInput;
