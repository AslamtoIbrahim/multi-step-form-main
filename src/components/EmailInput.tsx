import { type ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEmail } from "../store/sliceSteps";
import type { RootState } from "../store/storeSteps";

const EmailInput = () => {
  const person = useSelector((state: RootState) => state.person);
  const dispatch = useDispatch();
  const valid = person.invalidEmail;

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(addEmail(e.target.value));
  };

  return (
    <div className="flex flex-col md:space-y-1">
      <div className="flex justify-between items-center">
        <label htmlFor="email">Email Address</label>
        {!valid && <p className="text-red-500 text-sm">Invalid email</p>}
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
        id="email"
        value={person.eamil}
        placeholder="e.g. stephenking@lorem.com"
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default EmailInput;
