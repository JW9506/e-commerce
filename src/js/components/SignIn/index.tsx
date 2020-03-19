import React, { useState } from "react";
import "./index.scss";
import FormInput from "../FormInput/index";
import CustomButton from "../CustomButton/index";
import { connect, MapDispatchToProps } from "react-redux";
import { googleSignInStart, emailSignInStart } from "$redux/user/action";

interface UserLoginCredentials {
  email: string;
  password: string;
  [name: string]: string;
}
interface MapDispatchProps {
  googleSignInStart: () => void;
  emailSignInStart: (email: string, password: string) => void;
}
type SignInProps = MapDispatchProps;
const SignIn: React.FC<SignInProps> = ({ emailSignInStart, googleSignInStart }) => {
  const [userLoginCredentials, setUserLoginCredentials] = useState<
    UserLoginCredentials
  >({ email: "", password: "" });
  const { email, password } = userLoginCredentials;
  const handleSubmit: React.FormEventHandler = async e => {
    e.preventDefault();
    emailSignInStart(email, password);
  };
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    const { name, value } = e.target;
    setUserLoginCredentials({ ...userLoginCredentials, [name]: value });
  };
  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span className="title">Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          value={email}
          id="email"
          type="email"
          name="email"
          label="email"
          required
        />
        <FormInput
          handleChange={handleChange}
          value={password}
          id="password"
          type="password"
          name="password"
          label="password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">sign in</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            sign in with google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};
const mapDispatchToProps: MapDispatchToProps<
  MapDispatchProps,
  {}
> = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email: string, password: string) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
