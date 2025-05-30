import TotalAmountCard from "./TotalAmountCard";

const FinishingCard = () => {
  return (
    <div className="bg-white rounded-lg p-5 space-y-4 ">
      <h1 className="font-semibold text-2xl pt-3 text-gray-950 ">
        Finishing up
      </h1>
      <p className="text-grey-500">
        Double-check everything looks OK before confirming.
      </p>
      <TotalAmountCard />
      <section className="flex justify-between items-center px-2">
        <p className="text-grey-500">Total (per month)</p>
        <p className="text-purple-600 font-sans font-bold">+$17/mo</p>
      </section>
    </div>
  );
};

export default FinishingCard;
