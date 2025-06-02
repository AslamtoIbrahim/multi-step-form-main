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
import NextCardStep1 from "./components/NextCardStep1";
import NextCardStep2 from "./components/NextCardStep2";
import NextCardStep3 from "./components/NextCardStep3";
import LastCardStep4 from "./components/LastCardStep4";

function App() {
  const step = useSelector((state: RootState) => state.step);
  return (
    <div
      className="h-screen pt-8  font-ubun bg-blue-400/40 bg-mobile bg-contain bg-center-top bg-no-repeat
    md:bg-none  flex flex-col  md:items-center md:justify-center "
    >
      <MobileSteps />
      <div className="bg-white mx-4  rounded-lg md:rounded-xl p-5 md:w-[95%] xl:max-w-1/2 md:flex md:h-[41.5rem] ">
        <DesktopSteps />
        <section className="md:flex-1 md:mt-4 md:px-12">
          {step === STEP_1 && <PersonCard />}
          {step === STEP_2 && <PlanCard />}
          {step === STEP_3 && <PickCard />}
          {step === STEP_4 && <FinishingCard />}
          {step === STEP_5 && <ThankYouCard />}
        </section>
      </div>
      {/* next back sect for mobile devices */}
      <section className="mt-auto p-2 bg-white md:hidden empty:hidden">
          {step === STEP_1 && <NextCardStep1 />}
          {step === STEP_2 && <NextCardStep2 />}
          {step === STEP_3 && <NextCardStep3 />}
          {step === STEP_4 && <LastCardStep4 />}
      </section>
    </div>
  );
}

export default App;
