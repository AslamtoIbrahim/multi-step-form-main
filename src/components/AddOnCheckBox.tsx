import { useState, type ChangeEvent } from "react";

type CheckBoxProps = {
  isChecked: boolean;
  title: string;
  descriptin: string;
  value: number;
};

const AddOnCheckBox = ({
  isChecked,
  title,
  descriptin,
  value,
}: CheckBoxProps) => {
  const [bill, setbill] = useState("mo");
  const [check, setcheck] = useState(isChecked);
  const onChangeChekHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setcheck(e.target.checked);
  };
  return (
    <label
      className={`flex items-center justify-between gap-2 border border-gray-300 rounded-lg py-4 px-3 cursor-pointer
      ${check && "bg-blue-100 border-purple-600"}`}
      htmlFor={title}
    >
      <div className="flex items-center gap-2">
        <input
          className="peer appearance-none shrink-0 w-4 h-4 rounded-sm border border-gray-600
         bg-no-repeat bg-center checked:bg-blue-800 checked:bg-check "
          type="checkbox"
          name="checkbox"
          id={title}
          checked={check}
          onChange={onChangeChekHandler}
        />

        <section>
          <p className="font-semibold text-[12px] xxsm:text-sm">{title}</p>
          <p className="text-gray-400 text-[11px] xxsm:text-sm">{descriptin}</p>
        </section>
      </div>
      <p className="text-purple-600 text-sm">
        +${value}/{bill}
      </p>
    </label>
  );
};

export default AddOnCheckBox;
