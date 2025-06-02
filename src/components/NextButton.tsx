type NextProps = {
  text?: string;
  onClick: () => void;
  style?: string;
};

const NextButton = ({ text = "Next Step", onClick, style }: NextProps) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-900 text-gray-50 rounded px-3 py-2 font-semibold cursor-pointer hover:bg-purple-600
        ${style}`}
    >
      {text}
    </button>
  );
};

export default NextButton;
