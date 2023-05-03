import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
    return (

        <header className="navigation">
            <div className="navigation__container">
                <Link className="navigation__link" to="/movies">Фильмы</Link>
                <Link className="navigation__link" to="/saved-movies">Сохраненные фильмы</Link>
            </div>
            <button className="navigation__button">Аккаунт</button>
        </header>
        
    )
}

export default Navigation;
