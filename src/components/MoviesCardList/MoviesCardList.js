import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList(props) {
  return (
    <section className="movie-list">
      <div className="movie-list__case">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </div>
    </section>
  );
}

export default MoviesCardList;
