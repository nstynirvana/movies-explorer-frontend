import React from "react";
import closeButton from '../../images/close-button.svg';
import burgerButton from '../../images/burger-button.svg';
import { Link } from "react-router-dom";
import "./BurgerMenu.css";

function BurgerMenu() {
  const [isOpen, setOpen] = React.useState(false);

    const handleButton = () => {
      setOpen(!isOpen);
    };

  return (
    <button
      aria-label="Открытие бургер-меню"
      value="openburger"
      type="button"
      className="burger-button"
      onClick={handleButton}
    >
      <img src={burgerButton} alt="Кнопка для вызова бургер-меню" />
          <div className={`burger-menu ${isOpen ? "burger-menu_opened" : ""}`}>
          <div className="burger-menu__container">
            <button
              aria-label="Закрытие бургер-меню"
              value="close"
              type="button"
              className="burger-menu__close-button"
            >
              <img src={closeButton} alt="Кнопка закрытия попапа" />
            </button>
            <div className="burger-menu__list"></div>
          </div>
          <header className="header-nav">
      <div className="header-nav__container">
            <Link className="header-nav__link" to="/">
              Главная
            </Link>
            <Link className="header-nav__link" to="/movies">
              Фильмы
            </Link>
            <Link className="header-nav__link" to="/saved-movies">
              Сохраненные фильмы
            </Link>
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
    </header>
        </div>
    </button>
  );
}

export default BurgerMenu;
