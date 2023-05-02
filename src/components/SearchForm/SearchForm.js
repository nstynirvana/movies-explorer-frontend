import "./SearchForm.css";
import searchButton from '../../images/search-button.svg';

function SearchForm() {
    return (

        <section className="search-box">
            <div className="search-box__container">
                <form className="search-box__form">
                    <input className="search-box__input" type="text" placeholder="Фильм" value=""/>
                        <button className="search-box__button">
                        <img src={searchButton} alt="Поиск"/>
                        </button>
                </form>
            </div>
            <div className="search-box__container">
                <div className="search-box__switch">
                    <label className="switch">
                        <input className="switch__input"/>
                            <span className="switch__slider"></span>
                    </label>
                    <p className="search-box__options">Короткометражки</p>
                </div>
            </div>
        </section>

    )
}

export default SearchForm;