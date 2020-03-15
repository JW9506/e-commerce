import React from "react";
import "./index.scss";
import FormInput from "../FormInput/index";
import CustomButton from "../CustomButton/index";
import { signInWithGoogle, auth } from "../../../firebase/utils";

interface SignInState {
  email: string;
  password: string;
  [name: string]: string;
}
class SignIn extends React.Component<{}, SignInState> {
  state: SignInState = {
    email: "",
    password: ""
  };
  handleSubmit: React.FormEventHandler = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.error(new Error(`${error.code}: ${error.message}`));
    }
  };
  handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { email, password } = this.state;
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
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
