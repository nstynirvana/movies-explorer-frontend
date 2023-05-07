import { Link } from 'react-router-dom';
import './MoviesCard.css';
import coverFilm from '../../images/cover-film.svg';

function MoviesCard(props) {
  const isSuccess = props.isSuccess;
  if (isSuccess) {
    return (
      <article className="movie">
        <Link className="movie__link" target="_blank" href="#">
          <img className="movie__cover" src={coverFilm} alt="Постер к фильму" />
        </Link>
        <div className="movie__container">
          <h2 className="movie__title">33 слова о дизайне</h2>
          <button
            onClick={props.onClick}
            aria-label="Сохранение фильма"
            value="save"
            type="button"
            className="movie__button"
          ></button>
        </div>
        <p className="movie__duration">1ч42м</p>
      </article>
    );
  } else {
    return (
      <article className="movie">
        <Link className="movie__link" target="_blank" href="#">
          <img className="movie__cover" src={coverFilm} alt="Постер к фильму" />
        </Link>
        <div className="movie__container">
          <h2 className="movie__title">33 слова о дизайне</h2>
          <button
            onClick={props.onClick}
            aria-label="Удаление фильма"
            value="delete"
            type="button"
            classNAme="movie__button-delete"
          ></button>
        </div>
        <p className="movie__duration">1ч42м</p>
      </article>
    );
  }
}

export default MoviesCard;

// if (фильм не сохранен) {
//     className="movie__button"
// }
// else {
//     clssName="movie__button_active"
// }
