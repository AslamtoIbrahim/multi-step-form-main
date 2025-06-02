import { type ChangeEvent } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/storeSteps";
import { clcPrice } from "../utils/calculates";

type CheckBoxProps = {
  isChecked: boolean;
  title: string;
  descriptin: string;
  value: number;
  setOnCheckBox: (check: boolean) => void;
};

const AddOnCheckBox = ({
  isChecked,
  title,
  descriptin,
  value,
  setOnCheckBox,
}: CheckBoxProps) => {
  const isMonthly = useSelector((state: RootState) => state.isMonthly);
  const price = clcPrice(isMonthly) * value;

  const onChangeChekHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setOnCheckBox(e.target.checked);
  };
  return (
    <label
      className={`flex items-center justify-between gap-2  border border-gray-300 rounded-lg p-3 md:p-4 cursor-pointer
      ${isChecked && "bg-blue-100 border-purple-600"}`}
      htmlFor={title}
    >
      <div className="flex items-center gap-2 md:gap-4">
        <input
          className="peer appearance-none shrink-0 w-4 h-4 md:w-5 md:h-5 rounded-sm border border-gray-600
         bg-no-repeat bg-center bg-contain checked:bg-purple-600 checked:bg-check "
          type="checkbox"
          name="checkbox"
          id={title}
          checked={isChecked}
          onChange={onChangeChekHandler}
        />

        <section>
          <p className="font-semibold text-[12px] xxsm:text-sm md:text-lg">
            {title}
          </p>
          <p className="text-gray-400 text-[11px] xxsm:text-sm md:text-base">
            {descriptin}
          </p>
        </section>
      </div>
      <p className="text-purple-600 text-sm">
        +${price}/{isMonthly ? "mo" : "yr"}
      </p>
    </label>
  );
};

export default AddOnCheckBox;
