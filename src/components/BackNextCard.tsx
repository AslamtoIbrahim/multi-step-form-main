import BackButton from "./BackButton";
import NextButton from "./NextButton";

const BackNextCard = () => {
  return (
    <div className="flex justify-between items-center">
      <BackButton />
      <NextButton />
    </div>
  );
};

export default BackNextCard;
