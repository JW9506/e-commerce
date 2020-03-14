import React from "react";
import "./index.scss";

interface MenuItemProps {
  title: string;
}
const MenuItem: React.FC<MenuItemProps> = ({ title }) => {
  return (
    <div className="menu-item">
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
