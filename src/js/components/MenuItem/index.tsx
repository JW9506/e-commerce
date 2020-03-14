import React from "react";
import clsx from "clsx";
import "./index.scss";

interface MenuItemProps {
  title: string;
  imageUrl: string;
  size?: "large";
}
const MenuItem: React.FC<MenuItemProps> = ({ title, imageUrl, size }) => {
  return (
    <div className={clsx("menu-item", size)}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
