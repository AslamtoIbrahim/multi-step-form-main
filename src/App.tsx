import "./App.css";
import BackNextCard from "./components/BackNextCard";
import DesktopSteps from "./components/DesktopSteps";
import FinishingCard from "./components/FinishingCard";
import MobileSteps from "./components/MobileSteps";
import PersonCard from "./components/PersonCard";
import PickCard from "./components/PickCard";
import PlanCard from "./components/PlanCard";
import ThankYouCard from "./components/ThankYouCard";

function App() {
  return (
    <div
      className="h-screen py-8 px-4 font-ubun bg-blue-200 bg-mobile bg-contain bg-center-top bg-no-repeat
    md:bg-none md:flex md:items-center justify-center "
    >
      <MobileSteps />
      <div className="bg-white rounded-lg md:rounded-xl p-5 md:w-full xl:max-w-1/2 md:flex md:h-[41.5rem] ">
        <DesktopSteps />
        <section className="md:flex-1 md:mt-4 md:px-12 md:flex md:flex-col md:justify-between ">
          {/* <PersonCard /> */}
          {/* <PlanCard /> */}
          <PickCard />
          {/* <FinishingCard /> */}
          {/* <ThankYouCard /> */}
          {/* <BackNextCard /> */}
        </section>

      </div>
    </div>
  );
}

export default App;
