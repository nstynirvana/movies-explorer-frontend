import React from 'react';
import Navigation from '../Navigation/Navigation';
import closeButton from '../../images/close-button.svg';
import './BurgerMenu.css';

function BurgerMenu(props) {
  React.useEffect(() => {}, [props.isOpen]);

  return (
    <div isOpen={props.isOpen} onClose={props.onClose}>
      <section
        className={`burger-menu ${
          props.isOpen ? 'burger-menu-popup_opened' : ''
        }`}
      >
        <div className="burger-menu__container">
          <button
            aria-label="Закрытие бургер-меню"
            value="close"
            type="button"
            onClick={props.onClose}
            className="burger-menu__close-button"
          >
            <img src={closeButton} alt="Кнопка закрытия попапа" />
          </button>
          <div className="burger-menu__list">
            <Navigation />
          </div>
        </div>
      </section>
    </div>
  );
}

export default BurgerMenu;
