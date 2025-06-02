import { useDispatch, useSelector } from "react-redux";
import {
  setCustomizableProfile,
  setLargerStorage,
  setOnlineService,
} from "../store/sliceSteps";
import type { RootState } from "../store/storeSteps";
import AddOnCheckBox from "./AddOnCheckBox";

const AddOns = () => {
  const addOns = useSelector((state: RootState) => state.addOns);
  const dispatch = useDispatch();
  
  const onCheckService = (check: boolean) => {
    dispatch(setOnlineService(check));
  };
  const onCheckStorage = (check: boolean) => {
    dispatch(setLargerStorage(check));
  };
  const onCheckProfile = (check: boolean) => {
    dispatch(setCustomizableProfile(check));
  };
  return (
    <div className="space-y-4 md:space-y-6">
      <AddOnCheckBox
        isChecked={addOns.onlineService}
        title="Online service"
        descriptin="Access to multiplayer games"
        value={1}
        setOnCheckBox={onCheckService}
      />
      <AddOnCheckBox
        isChecked={addOns.largerStorage}
        title="Larger storage"
        descriptin="Extra 1TB of cloud save"
        value={2}
        setOnCheckBox={onCheckStorage}
      />
      <AddOnCheckBox
        isChecked={addOns.customizableProfile}
        title="Customizable Profile"
        descriptin="Custom theme on your profile"
        value={2}
        setOnCheckBox={onCheckProfile}
      />
    </div>
  );
};

export default AddOns;
