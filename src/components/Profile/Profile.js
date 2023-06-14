import Header from '../Header/Header';
import './Profile.css';

function Profile() {
  return (
    <>
      <Header isLoggedIn={true}/>

      <section className="profile">
        <form className="authorization-form">
          <div>
            <h2 className="form__title_profile">Привет, Ананас!</h2>
            <div className="form__items">
              <div>
                <div className="input__container_profile">
                  <label className="label_profile">Имя</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="input_profile"
                    value="Ананас"
                    required
                  />
                </div>
              </div>
              <div>
                <div className="input__container_profile input__container_profile_border">
                  <label className="label_profile">E-mail</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="input_profile"
                    value="pineapple@gmail.com"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="form__button-container">
            <button
              aria-label="Редактирование данных"
              value="edit"
              className="form__button_profile"
              type="submit"
              disabled
            >
              Редактировать
            </button>
            <button
              aria-label="Выход из аккаунта"
              value="signout"
              className="form__button_profile form__button_profile_color_pink"
              type="submit"
              disabled
            >
              Выйти из аккаунта
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Profile;
