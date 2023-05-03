import "./Login.css";
import logo from '../../images/logo.svg';

function Login() {
    return (

        <section className="authorization-box">
            <img className="logo__picture" src={logo} alt="Логотип"/>
                <form className="authorization-box__form">
                    <div>
                        <h2 className="form__title">
                            Рады видеть!
                        </h2>
                        <div className="form__items">
                            <div className="input__container">
                                <label className="label">
                                    E-mail
                                    <input className="input"/>
                                </label>
                                <span className="error"></span>
                            </div>
                            <div className="input__container">
                                <label className="label">
                                    Пароль
                                    <input className="input"/>
                                </label>
                                <span className="error"></span>
                            </div>
                        </div>
                    </div>
                    <div className="form__button-container">
                    <button className="form__button" type="submit" href="/profile">
                            Войти
                        </button>
                    </div>
                </form>
                <div className="authorization-form__information">
                    <p className="authorization-form__text">Еще не зарегистрированы?</p>
                    <a className="authorization-form__link" href="/signup">Регистрация</a>
                </div>
        </section>

    )
}

export default Login;