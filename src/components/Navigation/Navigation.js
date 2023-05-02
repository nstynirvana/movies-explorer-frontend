import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';
import "./Navigation.css";

function Navigation() {
    return (
        <header className="header">
            <img className="logo" src={logo} alt="Логотип" />
            <div className="header__container_profile">
                <Link className="header__link" href="/movies">Фильмы</Link>
                <Link className="header__link" href="/saved-movies">Сохраненные фильмы</Link>
            </div>
            <button className="header__button">Аккаунт</button>
        </header>
    )
}

export default Navigation
