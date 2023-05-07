import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import logo from '../../images/logo.svg';
import './Header.css';

function Header(props) {
  
  return (
    <section className="header">
      <a className="header__logo" href="/">
        <img className="logo" src={logo} alt="Логотип" />
      </a>
      {props.isLoggedIn ? (
        <>
          <div className="navigation__container">
            <>
              <Link className="navigation__link" to="/movies">
                Фильмы
              </Link>
              <Link className="navigation__link" to="/saved-movies">
                Сохраненные фильмы
              </Link>
            </>
          </div>

          <button
            aria-label="Возвращение в аккаунт"
            value="return"
            type="button"
            className="navigation__button"
          >
            <Link className="navigation__link" to="/profile">
              Аккаунт
            </Link>
          </button>

          <BurgerMenu
            isOpen={props.isOpen}
            onClose={props.onClose}
            onBurgerPopup={props.onBurgerPopup}
          />

          {props.onBurgerPopup && (
            <Navigation onClose={props.onClose} isOpen={props.isOpen} />
          )}
        </>
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
    </section>
  );
}

export default Header;
