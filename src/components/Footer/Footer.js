import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__container">
        <div className="footer__parts">
          <p className="footer__copyright">© {new Date().getFullYear()}</p>
        </div>
        <nav>
          <ul className="footer__list">
            <li>
              <a className="footer__item" rel="noreferrer" target="_blank" href="https://practicum.yandex.ru">
                Яндекс.Практикум
              </a>
            </li>
            <li>
              <a className="footer__item" rel="noreferrer" target="_blank" href="https://github.com/nstynirvana">
                Github
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
