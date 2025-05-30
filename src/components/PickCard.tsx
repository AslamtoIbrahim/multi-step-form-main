import AddOns from "./AddOns";

const PickCard = () => {
  return (
    <div className="bg-white rounded-lg p-5 space-y-4 ">
      <h1 className="font-semibold text-2xl pt-3 text-gray-950 ">
        Pick add-ons
      </h1>
      <p className="text-grey-500">
        Add-ons help enhance your gaming experince.
      </p>
      <AddOns />
    </div>
  );
};

export default PickCard;
