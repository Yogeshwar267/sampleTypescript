import "../../../../App.css";
import { COMMON, PASSWORD_FORM } from "../../../../Shared/Constants";

const Password = () => {
  return (
    <div className="mt-3 flex flex-col">
      <div className="flex flex-col items-baseline">
        <label title="passwordEmail" className="font-medium text-gray-600">
          {COMMON.password}
        </label>
        <input
          className="bg-white tracking-wide rounded-md mt-1 px-4 py-2 border focus:border-brand focus:shadow-outline-sm focus:outline-none"
          type={PASSWORD_FORM.type}
          name={COMMON.password}
          id={PASSWORD_FORM.id}
          placeholder={PASSWORD_FORM.placeholder}
          spellCheck="false"
        />
      </div>
    </div>
  );
};

export default Password;
