import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ShopPage from "./pages/ShopPage";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import LoginNRegPage from "./pages/LoginNRegPage";
import CheckoutPage from "./pages/CheckoutPage";
import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import { User } from "$redux/user/reducer";
import { RootState } from "$redux";
import { createStructuredSelector } from "reselect";
import { PUBLIC_URL } from "Config";
import { selectCurrentUser } from "$redux/user/selector";
import { checkUserSession } from "$redux/user/action";

interface MapStateProps {
  currentUser: User;
}
interface MapDispatchProps {
  checkUserSession: () => void;
}
type AppProps = MapStateProps & MapDispatchProps;

const App: React.FC<AppProps> = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
  return (
    <>
      <Header />
      <Switch>
        <Route path={`${PUBLIC_URL}/`} exact>
          <HomePage />
        </Route>
        <Route path={`${PUBLIC_URL}/shop`}>
          <ShopPage />
        </Route>
        <Route path={`${PUBLIC_URL}/checkout`}>
          <CheckoutPage />
        </Route>
        <Route path={`${PUBLIC_URL}/signin`} exact>
          {currentUser ? <Redirect to={`${PUBLIC_URL}/`} /> : <LoginNRegPage />}
        </Route>
      </Switch>
    </>
  );
};
const mapStateToProps: MapStateToProps<
  MapStateProps,
  {},
  RootState
> = createStructuredSelector({
  currentUser: selectCurrentUser
});

const MapDispatchToProps: MapDispatchToProps<
  MapDispatchProps,
  {}
> = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, MapDispatchToProps)(App);
