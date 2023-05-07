import './Register.css';
import logo from '../../images/logo.svg';

function Register(props) {
  return (
    <section className="authorization-box">
      <a href="/">
        <img className="logo__picture" src={logo} alt="Логотип" />
      </a>
      <form handleRegister={props.handleRegister} className="authorization-box__form">
        <div>
          <h2 className="form__title">Добро пожаловать!</h2>
          <div className="form__items">
            <div className="input__container">
              <label className="label" for="user-name">
                Имя
                <input type="text" id="name" name="name" className="input" />
              </label>
              <span className="error"></span>
            </div>
            <div className="input__container">
              <label className="label" for="user-email">
                E-mail
                <input id="email" type="email" name="email" className="input" />
              </label>
              <span className="error"></span>
            </div>
            <div className="input__container">
              <label className="label" for="user-password">
                Пароль
                <input
                  id="password"
                  type="password"
                  name="password"
                  className="input"
                />
              </label>
              <span className="error"></span>
            </div>
          </div>
        </div>
        <div className="form__button-container">
          <button
            aria-label="Регистрация аккаунта"
            value="signup"
            className="form__button"
            type="submit"
            href="/signup"
          >
            Зарегистрироваться
          </button>
        </div>
      </form>
      <div className="authorization-form__information">
        <p className="authorization-form__text">Уже зарегистрированы?</p>
        <a className="authorization-form__link" href="/signin">
          Войти
        </a>
      </div>
    </section>
  );
}

export default Register;
