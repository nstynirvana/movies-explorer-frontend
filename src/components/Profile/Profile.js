import Header from "../Header/Header";
import "./Profile.css";

function Profile() {
    return (

        <>
            <Header />

            <section className="profile">
                <form className="authorization-form">
                    <div>
                        <h2 className="form__title_profile">Привет, Ананас!</h2>
                        <div className="form__items">
                            <div>
                                <div className="input__container_profile">
                                    <label className="label_profile" for="user-name">Имя</label>
                                    <input className="input_profile" value="Ананас" />
                                </div>
                                <span className="error"></span>
                            </div>
                            <div>
                                <div className="input__container_profile input__container_profile_border">
                                    <label className="label_profile" for="user-email">E-mail</label>
                                    <input className="input_profile" value="pineapple@gmail.com" />
                                </div>
                                <span className="error"></span>
                            </div>

                        </div>
                    </div>
                    <div className="form__button-container">
                        <span className="form__error"></span>
                        <button className="form__button_profile" type="submit" disabled>
                            Редактировать
                        </button>
                        <button className="form__button_profile form__button_profile_color_pink" type="submit" disabled>
                            Выйти из аккаунта
                        </button>
                    </div>
                </form>
            </section>
        </>

    )
}

export default Profile;

