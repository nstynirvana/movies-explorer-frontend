import './Techs.css';

function Techs() {
  return (
    <section className="techniques">
      <div>
        <h2 className="techniques__title">Технологии</h2>
        <p className="techniques__subtitle">7 технологий</p>
      </div>
      <p className="techniques__text">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте
      </p>
      <ul className="techniques__list">
        <li className="techniques__item">HTML</li>
        <li className="techniques__item">CSS</li>
        <li className="techniques__item">JS</li>
        <li className="techniques__item">React</li>
        <li className="techniques__item">Git</li>
        <li className="techniques__item">Express.js</li>
        <li className="techniques__item">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
