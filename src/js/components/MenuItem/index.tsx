import React from "react";
import clsx from "clsx";
import "./index.scss";
import { PUBLIC_URL } from "Config";
import { useHistory } from "react-router-dom";

interface MenuItemProps {
  title: string;
  imageUrl: string;
  linkUrl: string;
  size?: "large";
}
const MenuItem: React.FC<MenuItemProps> = ({
  title,
  imageUrl,
  size,
  linkUrl
}) => {
  const H = useHistory();
  return (
    <div
      className={clsx("menu-item", size)}
      onClick={() => H.push(`${PUBLIC_URL}/${linkUrl}`)}
    >
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
