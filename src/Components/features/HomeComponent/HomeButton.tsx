import { Link } from "react-router-dom";
import { COMMON } from "../../../Shared/Constants";

const HomeButton = () => (
    <Link to="/">
      <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded m-5 mt-0 mb-0">
        {COMMON.home}
      </button>
    </Link>
  );
  
export default HomeButton;
  