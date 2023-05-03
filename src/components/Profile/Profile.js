import Navigation from "../Navigation/Navigation"; 
import "./Profile.css";

function Profile() {
    return (

        <>

            <Navigation />

            <section className="profile">
                <form className="authorization-form">
                    <div>
                        <h2 className="form__title_profile">Привет, Ананас!</h2>
                        <div className="form__items">
                            <div>
                                <div className="input__container_profile">
                                    <label className="label_profile">Имя</label>
                                    <input className="input_profile" value="Ананас" />
                                </div>
                            </div>
                            <div>
                                <div className="input__container_profile input__container_profile_border">
                                    <label className="label_profile">E-mail</label>
                                    <input className="input_profile" value="pineapple@gmail.com" />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="form__button-container">
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

