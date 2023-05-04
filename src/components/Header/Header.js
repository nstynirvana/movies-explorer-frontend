import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Header.css';

function Header() {
  return (
    <section className="header">
      <a className="header__logo" href="/">
        <img className="logo" src={logo} alt="Логотип" />
      </a>
      <div className="header__container">
        <Link className="header__link" to="/signup">
          Регистрация
        </Link>
        <Link className="header__link header__link_color_green" to="/signin">
          Войти
        </Link>
      </div>
    </section>
  );
}

export default Header;
