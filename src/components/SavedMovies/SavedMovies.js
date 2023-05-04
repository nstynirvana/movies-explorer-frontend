import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.svg';
import burgerButton from '../../images/burger-button.svg';
import './SavedMovies.css';

function SavedMovies(props) {
  return (
    <>
      <section className="header">
        <a className="header__logo" href="/">
          <img className="logo" src={logo} alt="Логотип" />
        </a>
        <div>
          if (max-width: 768px)
          {
            <button
              aria-label="Открытие бургер-меню"
              value="openburger"
              type="button"
              className="burger-button"
              onClick={props.onBurgerPopup}
            >
              <img src={burgerButton} alt="Кнопка для вызова бургер-меню" />
              <BurgerMenu />
            </button>
          }
          else {<Navigation />}
        </div>
      </section>

      <section className="movies">
        <SearchForm />

        <MoviesCardList />
      </section>

      <Footer />
    </>
  );
}

export default SavedMovies;
