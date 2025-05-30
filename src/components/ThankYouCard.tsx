import thanks from "../assets/icon-thank-you.svg";
const ThankYouCard = () => {
  return (
    <div className="py-15 md:px-10 md:h-full flex flex-col items-center md:justify-center gap-5 md:gap-6">
      <img className="w-14 h-auto md:w-16" src={thanks} alt="thank you" />
      <p className="text-2xl md:text-3xl font-bold">Thank you!</p>
      <p className="text-center text-grey-500 md:text-lg  ">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. if you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </div>
  );
};

export default ThankYouCard;
