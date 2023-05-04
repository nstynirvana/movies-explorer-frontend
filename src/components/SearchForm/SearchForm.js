import './SearchForm.css';
import searchButton from '../../images/search-button.svg';

function SearchForm() {
  return (
    <section className="search-box">
      <div className="search-box__container">
        <form className="search-box__form">
          <input
            type="text"
            id="film"
            name="film"
            className="search-box__input"
            placeholder="Фильм"
            value=""
          />
          <button
            aria-label="Поиск фильма"
            value="search"
            type="submit"
            className="search-box__button"
          >
            <img src={searchButton} alt="Поиск" />
          </button>
        </form>
      </div>
      <div className="search-box__container">
        <div className="search-box__switch">
          <label className="switch">
            <input
              type="checkbox"
              id="checkbox"
              name="checkbox"
              className="switch__input"
            />
            <span className="switch__slider"></span>
          </label>
          <p className="search-box__options">Короткометражки</p>
        </div>
      </div>
    </section>
  );
}

export default SearchForm;
