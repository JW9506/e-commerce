import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import { PUBLIC_URL } from "Config";

const AAA: React.FC = props => {
  return <div>AAA</div>;
};

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path={`${PUBLIC_URL}/`} exact>
            <Homepage />
          </Route>
          <Route path={`${PUBLIC_URL}/shop/AAA`} exact>
            <AAA />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
