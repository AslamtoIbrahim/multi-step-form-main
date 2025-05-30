import { useState, type ChangeEvent } from "react";
import type { Inputs } from "../lib/types";

const PhoneInput = ({value}: Inputs) => {
  const [inputValue, setInputValue] = useState(value);
  const [isNotValid, setIsNotValid] = useState(false);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex flex-col md:space-y-1">
      <div className="flex justify-between items-center">
        <label htmlFor="phone">Phone Number</label>
        {isNotValid && <p className="text-red-500 text-sm">Must be 7 digit numbers and more</p>}
      </div>
      <input
        className={`border border-gray-300 text-sm md:text-base font-semibold rounded-sm px-3 py-2
          outline-none focus:border-purple-600
            ${isNotValid ? 'bg-red-200 placeholder:text-grey-500' : 'placeholder:text-gray-400'}`}
        type="number"
        id="phone"
        value={inputValue}
        placeholder="e.g. +1 234 567 890"
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default PhoneInput;
