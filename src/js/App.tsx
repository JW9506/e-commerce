import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ShopPage from "./pages/ShopPage";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import LoginNRegPage from "./pages/LoginNRegPage";
import { auth, User, firebaseUnsubscribeAuth } from "../firebase/utils";
import { PUBLIC_URL } from "Config";

interface AppState {
  currentUser: User;
}
class App extends React.Component<{}, AppState> {
  state: AppState = {
    currentUser: null
  };
  unsubscribeFromAuth: firebaseUnsubscribeAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>
      this.setState({ currentUser: user })
    );
  }
  componentWillUnmount() {
    if (this.unsubscribeFromAuth) this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Router>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route path={`${PUBLIC_URL}/`} exact>
            <HomePage />
          </Route>
          <Route path={`${PUBLIC_URL}/shop`} exact>
            <ShopPage />
          </Route>
          <Route path={`${PUBLIC_URL}/signin`} exact>
            <LoginNRegPage />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
