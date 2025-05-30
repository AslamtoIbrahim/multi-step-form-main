import AddOnCheckBox from "./AddOnCheckBox";

const AddOns = () => {
  return (
    <div className="space-y-4 md:space-y-6">
      <AddOnCheckBox
        isChecked={true}
        title="Online service"
        descriptin="Access to multiplayer games"
        value={10}
      />
      <AddOnCheckBox
        isChecked={false}
        title="Larger storage"
        descriptin="Extra 1TB of cloud save"
        value={20}
      />
      <AddOnCheckBox
        isChecked={true}
        title="Customizable Profile"
        descriptin="Custom theme on your profile"
        value={10}
      />
    </div>
  );
};

export default AddOns;
