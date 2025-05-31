import { useSelector } from "react-redux";
import "./App.css";
import DesktopSteps from "./components/DesktopSteps";
import FinishingCard from "./components/FinishingCard";
import MobileSteps from "./components/MobileSteps";
import PersonCard from "./components/PersonCard";
import PickCard from "./components/PickCard";
import PlanCard from "./components/PlanCard";
import ThankYouCard from "./components/ThankYouCard";
import type { RootState } from "./store/storeSteps";
import { STEP_1, STEP_2, STEP_3, STEP_4, STEP_5 } from "./utils/keys";

function App() {
  const step = useSelector((state: RootState) => state.step);
  return (
    <div
      className="h-screen py-8 px-4 font-ubun bg-blue-400/40 bg-mobile bg-contain bg-center-top bg-no-repeat
    md:bg-none md:flex md:items-center justify-center "
    >
      <MobileSteps />
      <div className="bg-white rounded-lg md:rounded-xl p-5 md:w-full xl:max-w-1/2 md:flex md:h-[41.5rem] ">
        <DesktopSteps />
        <section className="md:flex-1 md:mt-4 md:px-12">
          {step === STEP_1 && <PersonCard />}
          {step === STEP_2 && <PlanCard />}
          {step === STEP_3 && <PickCard />}
          {step === STEP_4 && <FinishingCard />}
          {step === STEP_5 && <ThankYouCard />}
        </section>
      </div>
    </div>
  );
}

export default App;
