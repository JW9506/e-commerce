import React from "react";
import { PUBLIC_URL } from "Config";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import "./index.scss";

const Header: React.FC = props => {
  return (
    <div className="header">
      <Link to={`${PUBLIC_URL}/`} className="logo-container">
        <FaHome className="logo" />
      </Link>
      <div className="options">
        <Link to={`${PUBLIC_URL}/shop`} className="option">shop</Link>
        <Link to={`${PUBLIC_URL}/contact`} className="option">contact</Link>
      </div>
    </div>
  );
};

export default Header;
