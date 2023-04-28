import { Link } from "react-router-dom";
import ListIcon from "../../images/icon-link.svg";
import "./Portfolio.css";

function Portfolio() {
    return (

        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__list">
                <li className="portfolio__item">
                    <Link className="portfolio__link" href="https://github.com/nstynirvana/how-to-learn">Статичный сайт</Link>
                    <img className="list__icon" src={ListIcon} alt="Иконка для ссылки" />
                </li>
                <li className="portfolio__item">
                    <Link className="portfolio__link" href="https://nstynirvana.github.io/russian-travel/">Адаптивный сайт</Link>
                    <img className="list__icon" src={ListIcon} alt="Иконка для ссылки" />
                </li>
                <li className="portfolio__item">
                    <Link className="portfolio__link" href="https://github.com/nstynirvana/react-mesto-api-full-gha">Одностраничное приложение</Link>
                    <img className="list__icon" src={ListIcon} alt="Иконка для ссылки" />
                </li>
            </ul>
        </section>

    )
}

export default Portfolio;