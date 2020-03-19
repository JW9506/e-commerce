import React from "react";
import { PUBLIC_URL } from "Config";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import "./index.scss";
import { User } from "$redux/user/reducer";
import CartIcon from "../CartIcon";
import CartDropdown from "../CartDropdown";
import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import { RootState } from "$redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "$redux/user/selector";
import { selectCartHidden } from "$redux/cart/selector";
import { signOutStart } from "$redux/user/action";

interface MapStateProps {
  currentUser: User;
  hidden: boolean;
}
interface MapDispatchProps {
  signOutStart: () => void;
}
type HeaderProps = MapStateProps & MapDispatchProps;

const Header: React.FC<HeaderProps> = props => {
  const { currentUser, hidden, signOutStart } = props;
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
          <span onClick={signOutStart} className="option">
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
  MapStateProps,
  {},
  RootState
> = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps: MapDispatchToProps<MapDispatchProps, {}> = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
