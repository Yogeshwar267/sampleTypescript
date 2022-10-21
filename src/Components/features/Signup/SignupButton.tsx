import { Link } from "react-router-dom";
import { COMMON } from "../../../Shared/Constants";

const SignupButton = () => (
    <Link to="/signup">
      <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded m-5 mt-2 mb-0">
        {COMMON.signup}
      </button>
    </Link>
  );

export default SignupButton;
  