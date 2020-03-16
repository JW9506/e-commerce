import React from "react";
import clsx from "clsx";
import "./index.scss";

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isGoogleSignIn?: boolean;
  inverted?: boolean;
}
const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      className={clsx("custom-button", isGoogleSignIn && "google-sign-in", inverted && "inverted")}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
