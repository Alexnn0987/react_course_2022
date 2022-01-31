import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { getUserData } from "../../../store/selectors";
import style from "./Header.module.scss";

const Header: React.FC = () => {
  const userData = useSelector(getUserData);

  return (
    <header className={style["wrapper-example"]}>
      <NavLink to="/">
        <div className={style.logo}>
          <img src="/logo.png" alt="logo" />
        </div>
      </NavLink>
      <nav>
        <ul className={style.menu_list}>
          <li>
            <NavLink to="/">Main</NavLink>
          </li>
          <li>
            <NavLink to="/posts">Posts</NavLink>
          </li>
          <li>
            <NavLink to="/registration">Registration</NavLink>
          </li>
        </ul>
      </nav>
      {userData.firstName && userData.lastName ? (
        <div>
          <p>{userData.firstName}</p>
          <p>{userData.lastName}</p>
        </div>
      ) : (
        <Link to="/registration">
          <button type="button" className={style.btn}>
            <span>SIGN UP</span>
          </button>
        </Link>
      )}
    </header>
  );
};

export default Header;
