import { type ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addName } from "../store/sliceSteps";
import type { RootState } from "../store/storeSteps";

const NameInput = () => {
  const person = useSelector((state: RootState) => state.person);
  const dispatch = useDispatch();
  const valid = person.invalidName;

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(addName(e.target.value));
  };

  return (
    <div className="flex flex-col md:space-y-1">
      <div className="flex justify-between items-center">
        <label htmlFor="name">Name</label>
        {!valid && (
          <p className="text-red-500 text-sm">Must be 2 characters or more</p>
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
        type="text"
        id="name"
        value={person.name}
        placeholder="e.g. Stephen King"
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default NameInput;
