import { Link } from "react-router-dom";
import "./MoviesCard.css";

function MoviesCard() {
    return (

        <article className="movie">
            <Link className="movie__link" target="_blank" href="#">
                <img className="movie__cover" src="./images/cover-film.svg" alt="Постер к фильму" />
            </Link>
            <div className="movie__container">
                <h2 className="movie__title">33 слова о дизайне</h2>
                <button className="movie__button"></button>
            </div>
            <p className="movie__duration">1ч42м</p>
        </article>

    )
}

export default MoviesCard;




