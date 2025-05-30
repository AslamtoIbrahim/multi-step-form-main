import thanks from "../assets/icon-thank-you.svg";
const ThankYouCard = () => {
  return (
    <div className="bg-white rounded-lg px-5 py-15 flex flex-col items-center gap-5">
      <img className="w-14 h-auto" src={thanks}  alt="thank you" />
      <p className="text-2xl font-bold">Thank you!</p>
      <p className="text-center text-grey-500">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. if you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </div>
  );
};

export default ThankYouCard;
