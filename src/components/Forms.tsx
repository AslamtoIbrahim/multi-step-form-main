import EmailInput from "./EmailInput";
import NameInput from "./NameInput";
import PhoneInput from "./PhoneInput";

const Forms = () => {
  return (
    <div className="space-y-4">
      <NameInput value="" />
      <EmailInput value="" />
      <PhoneInput value="" />
    </div>
  );
};

export default Forms;
