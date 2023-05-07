import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
// import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.svg';
import './SavedMovies.css';

function SavedMovies() {
  return (
    <>
      <section className="header">
        <a className="header__logo" href="/">
          <img className="logo" src={logo} alt="Логотип" />
        </a>
        <div>
            <BurgerMenu />
          {/* <Navigation /> */}
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
