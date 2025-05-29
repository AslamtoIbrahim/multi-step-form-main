
type props = { value: number }

const StepButton = ({ value }: props) => {
  return <button className="w-10 h-10 text-white border border-blue-200 rounded-full">{value}</button>;
};
export default StepButton;
