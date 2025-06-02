import AddOns from "./AddOns";
import NextCardStep3 from "./NextCardStep3";

const PickCard = () => {
  return (
    <div className="md:h-full md:flex md:flex-col md:justify-between">
      <section className="space-y-4 md:space-y-6">
        <h1 className="font-semibold text-2xl md:text-3xl pt-3 text-gray-950 ">
          Pick add-ons
        </h1>
        <p className="text-grey-500 md:text-md">
          Add-ons help enhance your gaming experince.
        </p>
        <AddOns />
      </section>
      <NextCardStep3 />
    </div>
  );
};

export default PickCard;
