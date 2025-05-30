import DeskButtonStep from "./DeskButtonStep";


const DesktopSteps = () => {
  return (
    <div className="hidden md:block bg-desktop bg-no-repeat bg-cover bg-center rounded-xl bg-lime-300
     w-1/3 py-8 px-7 space-y-8">
      <DeskButtonStep text="Your info" value={1} />
      <DeskButtonStep text="Select plan" value={2} />
      <DeskButtonStep text="Add-ons" value={3} />
      <DeskButtonStep text="Summary" value={4} />
    </div>
  );
};

export default DesktopSteps;
