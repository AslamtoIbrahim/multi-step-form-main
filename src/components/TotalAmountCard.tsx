import TotalItem from "./TotalItem";

const TotalAmountCard = () => {
  const changeOnclickHandler = () => {};
  return (
    <div className="bg-blue-100 rounded py-4 px-3">
      <section className="flex items-center justify-between">
        <div>
          <p className="font-semibold">Advance (monthly)</p>
          <button
            onClick={changeOnclickHandler}
            className="cursor-pointer text-grey-500 text-sm underline"
          >
            Change
          </button>
        </div>
        <p className="font-semibold">$12/mo</p>
      </section>
      <hr className="border-gray-300 my-4" />
      <section className="space-y-3">
        <TotalItem title="Online service" price={2} />
        <TotalItem title="Larger storage" price={1} />
        <TotalItem title="Customizable profile" price={2} />
      </section>
    </div>
  );
};

export default TotalAmountCard;
