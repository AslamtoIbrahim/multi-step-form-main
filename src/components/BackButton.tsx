type BackProps = {
  onClick: () => void;
};

const BackButton = ({ onClick }: BackProps) => {
  return (
    <button
      onClick={onClick}
      className="text-grey-500 font-semibold hover:text-gray-600 cursor-pointer"
    >
      Go Back
    </button>
  );
};

export default BackButton;
