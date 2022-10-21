import React from "react";
import HomeButton from "../../features/HomeComponent/HomeButton";
import LoginButton from "../../features/Login/Form/LoginButton";
import SignupButton from "../../features/Signup/SignupButton";

const withLayout = (PageComponent: React.FunctionComponent) => {
  return function WithPage({ ...props }) {
    return (
      <div>
        <header className="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
          <div className="flex flex-grow items-center">
            <div className="flex xs:hidden items-center ml-auto">
              <HomeButton />
              <SignupButton />
              <LoginButton />
            </div>
          </div>
        </header>
        <PageComponent />
      </div>
    );
  };
};

export default withLayout;
