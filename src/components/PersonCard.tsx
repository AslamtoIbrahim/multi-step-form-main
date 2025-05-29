import Forms from "./Forms";

const PersonCard = () => {
  return (
    <div className="bg-white rounded-lg p-5 space-y-4 ">
      <h1 className="font-semibold text-2xl pt-3 text-gray-950 ">Personal info</h1>
      <p className="text-grey-500">Please provide your name, email address, and phone number.</p>
      <Forms />
    </div>
  );
};

export default PersonCard;
