import "../../../../App.css";
import { COMMON, EMAIL_FORM } from "../../../../Shared/Constants";

const Email = () => {
  return (
    <div className="flex flex-col">
      <label title="Email" className="font-medium text-gray-600">
        {COMMON.email}
      </label>

      <input
        className="bg-white tracking-wide rounded-md mt-1 px-4 py-2 border focus:border-brand focus:shadow-outline-sm focus:outline-none"
        type={EMAIL_FORM.type}
        name={COMMON.email}
        id={EMAIL_FORM.id}
        placeholder={EMAIL_FORM.placeholder}
        spellCheck="false"
        autoComplete="false"
      />
    </div>
  );
};

export default Email;
