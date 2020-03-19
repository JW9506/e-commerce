import React, { useState } from "react";
import FormInput from "../FormInput";
import CustomButton from "../CustomButton";
import { connect, MapDispatchToProps } from "react-redux";
import "./index.scss";
import { signUpStart, UserCredentials } from "$redux/user/action";

interface MapDispatchProps {
  signUpStart: (signUpCredentials: UserCredentials) => void;
}
type SignUpProps = MapDispatchProps;
const SignUp: React.FC<SignUpProps> = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState<UserCredentials>({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const { displayName, email, password, confirmPassword } = userCredentials;
  const handleSubmit: React.FormEventHandler = async e => {
    e.preventDefault();
    if (password !== confirmPassword) return alert("password don't match");
    signUpStart({ displayName, email, password, confirmPassword });
  };
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };
  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          label="Display Name"
          handleChange={handleChange}
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          label="email"
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          label="password"
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          label="Confirm Password"
          handleChange={handleChange}
          required
        />
        <CustomButton type="submit">sign up</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps: MapDispatchToProps<
  MapDispatchProps,
  {}
> = dispatch => ({
  signUpStart: (signUpCredentials: UserCredentials) =>
    dispatch(signUpStart(signUpCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);
