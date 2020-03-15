import React from "react";
import clsx from "clsx";
import "./index.scss";

interface CustomButtonProps {
  onClick?: () => Promise<any>;
  isGoogleSignIn?: boolean;
  [props: string]: any;
}
const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  isGoogleSignIn,
  ...otherProps
}) => {
  return (
    <button
      className={clsx("custom-button", isGoogleSignIn && "google-sign-in")}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
