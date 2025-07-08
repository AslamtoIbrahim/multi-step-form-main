import StepButton from "./StepButton";

type StepProps = {
  text: string;
  value: number;
  onClickStep: (value: number) => void;
  enabled: boolean;
};

const DeskButtonStep = ({ text, value, onClickStep, enabled }: StepProps) => {
  return (
    <div
      onClick={() => onClickStep(value)}
      className={`flex items-center gap-4 p-2  rounded ${enabled && "hover:bg-purple-200/10 cursor-pointer"}`}
    >
      <StepButton value={value} />
      <section>
        <p className="text-gray-300">Step {value}</p>
        <p className="uppercase text-gray-50 font-semibold whitespace-nowrap ">{text}</p>
      </section>
    </div>
  );
};

export default DeskButtonStep;
