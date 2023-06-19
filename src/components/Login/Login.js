import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import logo from "../../images/logo.svg";
import "./Login.css";

function Login(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);

  const handleUserEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleUserPassword = (e) => {
    setPassword(e.target.value);
  };

  React.useEffect(() => {
    if (currentUser) {
      setEmail(currentUser.email);
      setPassword(currentUser.password);
    }
  }, [currentUser, props.isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onLogin(email, password);
  };
  return (
    <section className="authorization-box">
      <a href="/">
        <img className="logo__picture" src={logo} alt="Логотип" />
      </a>
      <form onSubmit={handleSubmit} className="authorization-box__form">
        <div>
          <h2 className="form__title">Рады видеть!</h2>
          <div className="form__items">
            <div className="input__container">
              <label className="label">
                E-mail
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="input"
                  required
                  value={email || ""}
                  onChange={handleUserEmail}
                />
              </label>
              <span className="error"></span>
            </div>
            <div className="input__container">
              <label className="label">
                Пароль
                <input
                  id="password"
                  type="password"
                  name="password"
                  className="input"
                  required
                  value={password || ""}
                  onChange={handleUserPassword}
                />
              </label>
              <span className="error"></span>
            </div>
          </div>
        </div>
        <div className="form__button-container">
          <button
            aria-label="Вход в профиль"
            value="signin"
            className="form__button"
            type="submit"
            href="/profile"
          >
            Войти
          </button>
        </div>
      </form>
      <div className="authorization-form__information">
        <p className="authorization-form__text">Еще не зарегистрированы?</p>
        <a className="authorization-form__link" href="/signup">
          Регистрация
        </a>
      </div>
    </section>
  );
}

export default Login;
