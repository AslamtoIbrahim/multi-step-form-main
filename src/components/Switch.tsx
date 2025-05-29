type SwitchProps = {
  isOn: boolean;
  getSwitchValue: (isOn: boolean) => void;
};

const Switch = ({ isOn, getSwitchValue }: SwitchProps) => {
  const switchHandler = () => {
    getSwitchValue(isOn);
  };
  return (
    <div
      onClick={switchHandler}
      className={`bg-blue-900 w-11 rounded-full cursor-pointer
         flex items-center 
        `}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full m-1 
      transition-transform duration-300 transform
        ${isOn ? "translate-x-0" : "translate-x-5"}`}
      />
    </div>
  );
};

export default Switch;
