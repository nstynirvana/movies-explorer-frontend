import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <header className="navigation">
      <div className="navigation__container">
        if (max-width:768px)
        {
          <>
            <Link className="navigation__link" to="/">
              Главная
            </Link>
            <Link className="navigation__link" to="/movies">
              Фильмы
            </Link>
            <Link className="navigation__link" to="/saved-movies">
              Сохраненные фильмы
            </Link>
          </>
        }
        else
        {
          <>
            <Link className="navigation__link" to="/movies">
              Фильмы
            </Link>
            <Link className="navigation__link" to="/saved-movies">
              Сохраненные фильмы
            </Link>
          </>
        }
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
    </header>
  );
}

export default Navigation;
