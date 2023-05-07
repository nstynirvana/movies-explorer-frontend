import React from 'react';
import closeButton from '../../images/close-button.svg';
import burgerButton from '../../images/burger-button.svg';
import './BurgerMenu.css';
import Navigation from '../Navigation/Navigation';

function BurgerMenu(props) {

  return (
    
    <button
      aria-label="Открытие бургер-меню"
      value="openburger"
      type="button"
      className="burger-button"
      src={burgerButton}
    >
      <img src={burgerButton} alt="Кнопка для вызова бургер-меню" />
      <section
        className="burger-menu" onClick={props.onBurgerPopup ? props.onClose : props.isOpen}
      >
        <div className="burger-menu__container">
          <button
            aria-label="Закрытие бургер-меню"
            value="close"
            type="button"
            className="burger-menu__close-button"
          >
            <img src={closeButton} alt="Кнопка закрытия попапа" />
          </button>
          <div className="burger-menu__list">
          </div>
        </div>
        <Navigation />
      </section>
    </button>
  );
}

export default BurgerMenu;
