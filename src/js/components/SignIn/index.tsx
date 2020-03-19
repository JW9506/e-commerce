import React from "react";
import "./index.scss";
import FormInput from "../FormInput/index";
import CustomButton from "../CustomButton/index";
import { connect, MapDispatchToProps } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart
} from "$redux/user/action";

interface SignInState {
  email: string;
  password: string;
  [name: string]: string;
}
interface MapDispatchProps {
  googleSignInStart: () => void;
  emailSignInStart: (email: string, password: string) => void;
}
type SignInProps = MapDispatchProps;
class SignIn extends React.Component<SignInProps, SignInState> {
  state: SignInState = {
    email: "",
    password: ""
  };
  handleSubmit: React.FormEventHandler = async e => {
    e.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;
    emailSignInStart(email, password);
  };
  handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { email, password } = this.state;
    const { googleSignInStart } = this.props;
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span className="title">Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            value={email}
            id="email"
            type="email"
            name="email"
            label="email"
            required
          />
          <FormInput
            handleChange={this.handleChange}
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
  }
}

const mapDispatchToProps: MapDispatchToProps<
  MapDispatchProps,
  {}
> = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email: string, password: string) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
