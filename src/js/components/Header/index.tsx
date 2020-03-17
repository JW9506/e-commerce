import React from "react";
import { PUBLIC_URL } from "Config";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import "./index.scss";
import { auth } from "$firebase/utils";
import { User } from "$redux/user/reducer";
import CartIcon from "../CartIcon";
import CartDropdown from "../CartDropdown";
import { connect, MapStateToProps } from "react-redux";
import { RootState } from "$redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "$redux/user/selector";
import { selectCartHidden } from "$redux/cart/selector";

interface StateProps {
  currentUser: User;
  hidden: boolean;
}
type HeaderProps = StateProps;

const Header: React.FC<HeaderProps> = props => {
  const { currentUser, hidden } = props;
  return (
    <div className="header">
      <Link to={`${PUBLIC_URL}/`} className="logo-container">
        <FaHome className="logo" />
      </Link>
      <div className="options">
        <Link to={`${PUBLIC_URL}/shop`} className="option">
          shop
        </Link>
        <Link to={`${PUBLIC_URL}/contact`} className="option">
          contact
        </Link>
        {currentUser ? (
          <span onClick={() => auth.signOut()} className="option">
            sign out
          </span>
        ) : (
          <Link to={`${PUBLIC_URL}/signin`} className="option">
            sign in
          </Link>
        )}
        <CartIcon />
      </div>
      {!hidden && <CartDropdown />}
    </div>
  );
};

const mapStateToProps: MapStateToProps<
  StateProps,
  {},
  RootState
> = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
