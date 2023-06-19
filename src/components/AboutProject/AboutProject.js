import './AboutProject.css';

function AboutProject() {
  return (
    <section className="description">
      <h2 className="description__title">О проекте</h2>
      <ul className="description__list">
        <li className="description__items">
          <h3 className="description__subtitle">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="description__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="description__items">
          <h3 className="description__subtitle">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="description__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className="description__stages">
        <p className="description__time description__time_color_green">
          1 неделя
        </p>
        <p className="description__time description__time_color_grey">
          4 недели
        </p>
        <p className="description__stage">Back-end</p>
        <p className="description__stage">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
