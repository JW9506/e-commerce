import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import ShopPage from "./pages/ShopPage";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import LoginNRegPage from "./pages/LoginNRegPage";
import CheckoutPage from "./pages/CheckoutPage";
import {
  auth,
  firebaseUnsubscribeAuth,
  createUserProfileDocument
} from "$firebase/utils";
import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import { setCurrentUserAction } from "$redux/user/action";
import { User } from "$redux/user/reducer";
import { RootState } from "$redux";
import { createStructuredSelector } from "reselect";
import { PUBLIC_URL } from "Config";
import { selectCurrentUser } from "$redux/user/selector";

interface AppDispatchProps {
  setCurrentUser(user: User): void;
}
interface AppStateProps {
  currentUser: User;
}
type AppProps = AppDispatchProps & AppStateProps;

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
    const { currentUser } = this.props;
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
          <Route path={`${PUBLIC_URL}/checkout`}>
            <CheckoutPage />
          </Route>
          <Route path={`${PUBLIC_URL}/signin`} exact>
            {currentUser ? (
              <Redirect to={`${PUBLIC_URL}/`} />
            ) : (
              <LoginNRegPage />
            )}
          </Route>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps: MapStateToProps<
  AppStateProps,
  {},
  RootState
> = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps: MapDispatchToProps<
  AppDispatchProps,
  {}
> = dispatch => ({
  setCurrentUser(user: User) {
    dispatch(setCurrentUserAction(user));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
