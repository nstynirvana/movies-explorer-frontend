import Portfolio from "../Portfolio/Portfolio";
import { Link } from "react-router-dom";
import StudentPhoto from "../../images/student-photo.jpg";
import "./AboutMe.css";

function AboutMe() {
    return (

        <section className="student">
            <div>
                <h2 className="student__title">Студент</h2>
                <div className="student__container">
                    <div className="student__info">
                        <h3 className="student__name">Анастасия</h3>
                        <p className="student__about">Фронтенд-разработчик, 26 лет</p>
                        <p className="student__description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть
                            жена
                            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в
                            компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами
                            и ушёл с постоянной работы.</p>
                        <Link className="student__link" src="https://github.com/nstynirvana">Github</Link>
                    </div>
                    <img className="student__photo" src={StudentPhoto} alt="Фотография студента" />
                </div>
            </div>
            <Portfolio />
        </section>

    )
}

export default AboutMe;