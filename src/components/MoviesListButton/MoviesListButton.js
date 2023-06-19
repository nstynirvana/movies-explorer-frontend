import './MoviesListButton.css';

function MoviesListButton() {
  return (
    <button
      aria-label="Добавление фильмов"
      value="add"
      type="button"
      className="movie-list__button"
    >
      Ещё
    </button>
  );
}

export default MoviesListButton;
