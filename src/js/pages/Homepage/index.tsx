import React from "react";
import Directory from "../../components/Directory";
import MenuItem from "../../components/MenuItem";
import "./index.scss";

const LIST = ["AAA", "BBB", "CCC", "DDD", "EEE"];
const Homepage: React.FC = props => {
  return (
    <div className="homepage">
      <Directory>
        {LIST.map(l => (
          <MenuItem key={l} title={l} />
        ))}
      </Directory>
    </div>
  );
};

export default Homepage;
