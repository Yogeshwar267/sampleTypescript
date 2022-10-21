import "./../../App.css";
import Email from "../../Components/features/Login/Form/Email";
import Password from "../../Components/features/Login/Form/Password";
import LoginButton from "../../Components/features/Login/Form/LoginButton";
import withLayout from "../../Components/hoc/Header";
import { COMMON } from "../../Shared/Constants";

function Login() {
  return (
    <div className="xs:pt-8 flex items-center align-center justify-center">
      <form className="xs:w-11/12 xs:mt-2 xs:pb-4 sm:w-1/2 sm:mt-10 sm:pb-6 md:w-2/5 md:mt-12 md:pb-8 lg:w-1/3 lg:mt-12 lg:pb-8 block-inline bg-gray-100 rounded-lg mx-auto w-1/4 pb-16 px-8 pt-4 mt-24">
        <h1 className="xs:text-2xl sm:text-4xl md:text-5xl font-helvetica font-bold text-6xl text-center text-brand-dark leading-snug">
          {COMMON.login}
        </h1>
        <Email />
        <Password />
        <LoginButton />
      </form>
    </div>
  );
}

export default withLayout(Login);
