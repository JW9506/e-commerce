import React from "react";
import Directory from "../../components/Directory";
import "./index.scss";

const Homepage: React.FC = props => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default Homepage;
