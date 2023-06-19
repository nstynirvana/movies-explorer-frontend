import ListIcon from '../../images/icon-link.svg';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a
            className="portfolio__link"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/nstynirvana/how-to-learn"
          >
            Статичный сайт
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/nstynirvana/how-to-learn">
            <img className="list__icon" src={ListIcon} alt="Иконка для ссылки" />
          </a>
          
        </li>
        <li className="portfolio__item">
          <a
            className="portfolio__link"
            rel="noreferrer"
            target="_blank"
            href="https://nstynirvana.github.io/russian-travel/"
          >
            Адаптивный сайт
          </a>
          <a
           rel="noreferrer"
           target="_blank"
           href="https://nstynirvana.github.io/russian-travel/">
             <img className="list__icon" src={ListIcon} alt="Иконка для ссылки" />
          </a>
        </li>
        <li className="portfolio__item">
          <a
            className="portfolio__link"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/nstynirvana/react-mesto-api-full-gha"
          >
            Одностраничное приложение
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/nstynirvana/react-mesto-api-full-gha">
            <img className="list__icon" src={ListIcon} alt="Иконка для ссылки" />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
