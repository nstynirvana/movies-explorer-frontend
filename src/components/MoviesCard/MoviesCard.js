import { Link } from 'react-router-dom';
import './MoviesCard.css';
import coverFilm from '../../images/cover-film.svg';

function MoviesCard() {
  return (
    <article className="movie">
      <Link className="movie__link" target="_blank" href="#">
        <img className="movie__cover" src={coverFilm} alt="Постер к фильму" />
      </Link>
      <div className="movie__container">
        <h2 className="movie__title">33 слова о дизайне</h2>
        <button
          aria-label="Сохранение фильма"
          value="save"
          type="button"
          className="movie__button"
        ></button>
      </div>
      <p className="movie__duration">1ч42м</p>
    </article>
  );
}

export default MoviesCard;

// if (/movies)
//    {className="movie__button"}
//    else {classNAme="movie__button-delete"};

// if (фильм не сохранен) {
//     className="movie__button"
// }
// else {
//     clssName="movie__button_active"
// }