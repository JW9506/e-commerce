import React from "react";
import FormInput from "../FormInput";
import CustomButton from "../CustomButton";
import { connect, MapDispatchToProps } from "react-redux";
import "./index.scss";
import { signUpStart, UserCredentials } from "$redux/user/action";

interface MapDispatchProps {
  signUpStart: (signUpCredentials: UserCredentials) => void;
}
type SignUpProps = MapDispatchProps;
class SignUp extends React.Component<SignUpProps, UserCredentials> {
  state: UserCredentials = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };
  handleSubmit: React.FormEventHandler = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    const { signUpStart } = this.props;
    if (password !== confirmPassword) return alert("password don't match");
    signUpStart({ displayName, email, password, confirmPassword });
  };
  handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            label="Display Name"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            label="email"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            label="password"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            label="Confirm Password"
            handleChange={this.handleChange}
            required
          />
        <CustomButton type="submit">sign up</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps: MapDispatchToProps<MapDispatchProps, {}> = dispatch => ({
  signUpStart: (signUpCredentials: UserCredentials) => dispatch(signUpStart(signUpCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);
