import "./App.css";
import FinishingCard from "./components/FinishingCard";
import MobileSteps from "./components/MobileSteps";
import PersonCard from "./components/PersonCard";
import PickCard from "./components/PickCard";
import PlanCard from "./components/PlanCard";
import ThankYouCard from "./components/ThankYouCard";

function App() {
  return (
    <div
      className="h-screen py-8 px-4 font-ubun bg-blue-300 bg-mobile bg-contain bg-center-top bg-no-repeat
    md:bg-desktop"
    >
      <MobileSteps />
      {/* <PersonCard /> */}
      {/* <PlanCard /> */}
      {/* <PickCard /> */}
      {/* <FinishingCard /> */}
      <ThankYouCard />
    </div>
  );
}

export default App;
