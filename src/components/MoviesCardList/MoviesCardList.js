import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList() {
  return (
    <section className="movie-list">
      <div className="movie-list__case">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </div>
      if (/movies)
      {
        <button
          aria-label="Добавление фильмов"
          value="add"
          type="button"
          className="movie-list__button"
        >
          Ещё
        </button>
      }
      else {''}
    </section>
  );
}

export default MoviesCardList;
