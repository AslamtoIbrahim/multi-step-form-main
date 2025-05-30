import TotalAmountCard from "./TotalAmountCard";

const FinishingCard = () => {
  return (
    <div className="space-y-4 md:space-y-6">
      <h1 className="font-semibold text-2xl md:text-3xl pt-3 text-gray-950 ">
        Finishing up
      </h1>
      <p className="text-grey-500 md:text-md">
        Double-check everything looks OK before confirming.
      </p>
      <TotalAmountCard />
      <section className="flex justify-between items-center px-2 md:px-6">
        <p className="text-grey-500">Total (per month)</p>
        <p className="text-purple-600 font-sans font-bold md:text-lg">+$17/mo</p>
      </section>
    </div>
  );
};

export default FinishingCard;
