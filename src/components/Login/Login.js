import "./Login.css";

function Login() {
    return (

        <section className="authorization-box">
            <img className="logo__picture" src="./images/logo.svg" alt=""/>
                <form className="authorization-box__form">
                    <div>
                        <h2 className="form__title">
                            Рады видеть!
                        </h2>
                        <div className="form__items">
                            <div className="input__container">
                                <label className="label" for="user-email">
                                    E-mail
                                    <input className="input"/>
                                </label>
                                <span className="error"></span>
                            </div>
                            <div className="input__container">
                                <label className="label" for="user-password">
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
                    <p className="authorization-form__text">Вы еще не зарегистрированы?</p>
                    <a className="authorization-form__link" href="/signup">Регистрация</a>
                </div>
        </section>

    )
}

export default Login;