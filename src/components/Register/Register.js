import "./Register.css";
import logo from '../../images/logo.svg';

function Register() {
    return (

        <section className="authorization-box">
            <img className="logo__picture" src={logo} alt="Логотип" />
                <form className="authorization-box__form">
                    <div>
                        <h2 className="form__title">
                            Добро пожаловать!
                        </h2>
                        <div className="form__items">
                            <div className="input__container">
                                <label className="label" for="user-name">
                                    Имя
                                    <input className="input"/>
                                </label>
                                <span className="error"></span>
                            </div>
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
                    <button className="form__button" type="submit" href="/signup">
                            Зарегистрироваться
                        </button>
                    </div>
                </form>
                <div className="authorization-form__information">
                    <p className="authorization-form__text">Уже зарегистрированы?</p>
                    <a className="authorization-form__link" href="/signin">Войти</a>
                </div>
        </section>
        
    )
}

export default Register;