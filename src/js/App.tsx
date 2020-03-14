import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ShopPage from "./pages/ShopPage";
import HomePage from "./pages/HomePage";
import { PUBLIC_URL } from "Config";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path={`${PUBLIC_URL}/`} exact>
            <HomePage />
          </Route>
          <Route path={`${PUBLIC_URL}/shop`} exact>
            <ShopPage />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
