import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import logo from "../../images/logo.svg";
import { useResize } from "../../hooks/useResize";
import "./Header.css";

function Header(props) {
  const screenWidth = 768;
  const isLoggedIn = props.isLoggedIn;
  const isMobileWidth = useResize() <= screenWidth;
  function renderHeader() {
    if (isMobileWidth) {
      return (
          <BurgerMenu />
      );
    }

    else {
      return (
          <Navigation />
      );
    }
  }

  return (
    <section className="header">
      <a className="header__logo" href="/">
        <img className="logo" src={logo} alt="Логотип" />
      </a>
      {isLoggedIn ? (
        renderHeader()
      ) : (
          <div className="header__container">
            <Link className="header__link" to="/signup">
              Регистрация
            </Link>
            <Link
              className="header__link header__link_color_green"
              to="/signin"
            >
              Войти
            </Link>
          </div>
      )}
    </section>
  );
}

export default Header;
