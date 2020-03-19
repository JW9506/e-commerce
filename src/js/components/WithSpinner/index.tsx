import React from "react";
import "./index.scss";

const SpinnerOverlay: React.FC = ({ children }) => {
  return <div className="spinner-overlay">{children}</div>;
};

const SpinnerContainer: React.FC = ({ children }) => {
  return <div className="spinner-container">{children}</div>;
};

const WithSpinner = <BaseProps extends object>(
  Component: React.ComponentType<BaseProps>
) => {
  interface SpinnerProps {
    isLoading: boolean;
  }
  const Inner: React.FC<SpinnerProps & BaseProps> = ({
    isLoading,
    ...otherProps
  }) => {
    return (
      <>
        {isLoading ? (
          <SpinnerOverlay>
            <SpinnerContainer />
          </SpinnerOverlay>
        ) : (
          <Component {...(otherProps as BaseProps)} />
        )}
      </>
    );
  };
  return Inner;
};

export default WithSpinner;
