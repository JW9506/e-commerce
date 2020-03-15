import React from "react";
import SignIn from "../../components/SignIn";
import "./index.scss";

const LoginNRegPage: React.FC = props => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
    </div>
  );
};

export default LoginNRegPage;
