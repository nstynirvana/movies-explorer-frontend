import React from "react";
import { Link } from "react-router-dom";
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
      return <BurgerMenu />;
    } else {
      return (
        <div className="header-nav">
          <div className="header-nav__container">
            <>
              <Link className="header-nav__link" to="/movies">
                Фильмы
              </Link>
              <Link className="header-nav__link" to="/saved-movies">
                Сохраненные фильмы
              </Link>
            </>
          </div>
          <button
            aria-label="Возвращение в аккаунт"
            value="return"
            type="button"
            className="header-nav__button"
          >
            <Link className="header-nav__link" to="/profile">
              Аккаунт
            </Link>
          </button>
        </div>
      );
    }
  }

  return (
    <header className="header">
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
          <Link className="header__link header__link_color_green" to="/signin">
            Войти
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
