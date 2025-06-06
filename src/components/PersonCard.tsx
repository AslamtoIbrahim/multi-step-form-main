import NextCardStep1 from "./NextCardStep1";
import Forms from "./Forms";

const PersonCard = () => {
  return (
    <div className="md:h-full md:flex md:flex-col md:justify-between">
      <section className="space-y-4 md:space-y-6">
        <h1 className="font-semibold text-2xl md:text-3xl pt-3 text-gray-950 ">
          Personal info
        </h1>
        <p className="text-grey-500 md:text-md">
          Please provide your name, email address, and phone number.
        </p>
        <Forms />
      </section>
      <section className="hidden md:block">
        <NextCardStep1 />
      </section>
    </div>
  );
};

export default PersonCard;
