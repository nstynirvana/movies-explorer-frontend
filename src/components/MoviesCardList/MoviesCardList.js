import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList() {
    return (

        <section className="movie-list">
            <div className="movie-list__case">
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
            </div>
            <button className="movie-list__button">Ещё</button>
        </section>

    )
}

export default MoviesCardList;