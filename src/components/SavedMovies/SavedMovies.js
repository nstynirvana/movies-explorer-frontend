import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import './SavedMovies.css';

function SavedMovies(props) {
  return (
    <>
      <Header isLoggedIn={props.isLoggedIn}/>

      <section className="movies">
        <SearchForm />

        <MoviesCardList />
      </section>

      <Footer />
    </>
  );
}

export default SavedMovies;
