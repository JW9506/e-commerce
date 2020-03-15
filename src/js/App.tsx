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
} from "../firebase/utils";
import { PUBLIC_URL } from "Config";

export type User = {
  id: string;
  createdAt: string;
  email: string;
  displayName: string;
} | null;
interface AppState {
  currentUser: User;
}
class App extends React.Component<{}, AppState> {
  state: AppState = {
    currentUser: null
  };
  unsubscribeFromAuth: firebaseUnsubscribeAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (!user) return this.setState({ currentUser: null });
      const userRef = await createUserProfileDocument(user);
      if (userRef) {
        userRef.onSnapshot(snapshot => {
          const data = snapshot.data();
          if (data && data.displayName) {
            this.setState({
              currentUser: {
                id: snapshot.id,
                ...data
              } as User
            });
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
