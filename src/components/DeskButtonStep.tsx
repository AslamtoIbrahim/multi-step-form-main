import StepButton from "./StepButton";

type StepProps = {
  text: string;
  value: number;
  onClickStep: (value: number) => void;
};

const DeskButtonStep = ({ text, value, onClickStep }: StepProps) => {
  return (
    <div
      onClick={() => onClickStep(value)}
      className="flex items-center gap-4 p-2 cursor-pointer rounded hover:bg-purple-200/5 "
    >
      <StepButton value={value} />
      <section>
        <p className="text-gray-300">Step {value}</p>
        <p className="uppercase text-gray-50 font-semibold">{text}</p>
      </section>
    </div>
  );
};

export default DeskButtonStep;
