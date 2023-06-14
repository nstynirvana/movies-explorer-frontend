import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import MoviesListButton from '../MoviesListButton/MoviesListButton';
import Footer from '../Footer/Footer';
import './Movies.css';

function Movies(props) {
  return (
    <>
      <Header isLoggedIn={true}/>
      <section className="movies">
        <SearchForm />

        <MoviesCardList />

        <MoviesListButton />
      </section>

      <Footer />
    </>
  );
}

export default Movies;
