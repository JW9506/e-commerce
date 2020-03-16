import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ShopPage from "./pages/ShopPage";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import LoginNRegPage from "./pages/LoginNRegPage";
import {
  auth,
  firebaseUnsubscribeAuth,
  createUserProfileDocument
} from "$firebase/utils";
import { connect, MapDispatchToProps } from "react-redux";
import { setCurrentUserAction, User } from "$redux/user/action";
import { PUBLIC_URL } from "Config";

interface AppDispatchProps {
  setCurrentUser(user: User): void;
}
type AppProps = AppDispatchProps;

class App extends React.Component<AppProps> {
  unsubscribeFromAuth: firebaseUnsubscribeAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (!user) return setCurrentUser(user);
      const userRef = await createUserProfileDocument(user);
      if (userRef) {
        userRef.onSnapshot(snapshot => {
          const data = snapshot.data();
          if (data && data.displayName) {
            setCurrentUser({
              id: snapshot.id,
              ...data
            } as User);
          }
        });
      }
    });
  }
  componentWillUnmount() {
    if (this.unsubscribeFromAuth) this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Router>
        <Header />
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

const mapDispatchToProps: MapDispatchToProps<
  AppDispatchProps,
  {}
> = dispatch => ({
  setCurrentUser(user: User) {
    dispatch(setCurrentUserAction(user));
  }
});

export default connect(null, mapDispatchToProps)(App);
