import { useState, type ChangeEvent } from "react";
import type { Inputs } from "../lib/types";

const NameInput = ({value}: Inputs) => {
  const [inputValue, setInputValue] = useState(value);
  const [isNotValid, setIsNotValid] = useState(false);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <label htmlFor="input">Name</label>
        {isNotValid && <p className="text-red-500 text-sm">Must be 2 characters or more</p>}
      </div>
      <input
        className={`border border-gray-300 text-sm font-semibold rounded-sm px-3 py-2
          outline-none focus:border-purple-600
            ${isNotValid ? 'bg-red-200 text-grey-500' : 'text-gray-400'}`}
        type="text"
        id="input"
        value={inputValue}
        placeholder="e.g. Stephen King"
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default NameInput;
