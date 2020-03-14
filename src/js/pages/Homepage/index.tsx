import React from "react";
import Directory from "../../components/Directory";
import MenuItem from "../../components/MenuItem";
import "./index.scss";
import { useRouteMatch, useHistory } from "react-router-dom";

const Homepage: React.FC = props => {
  const v2 = useRouteMatch();
  const v3 = useHistory();
  console.log(v2);
  console.log(v3);
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default Homepage;
