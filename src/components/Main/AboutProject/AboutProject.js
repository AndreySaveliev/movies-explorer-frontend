import React from 'react';

function AboutProject() {
  return (
    <section className="about" id="about">
      <div className="about-wrapper">
        <h2 className="about__title">О Проекте</h2>
        <div className="about__text">
          <div className="about__paragraph">
            <h3 className="about__title">Дипломный проект включал 5 этапов</h3>
            <p className="about__item">
              Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
            </p>
          </div>
          <div className="about__paragraph">
            <h3 className="about__title">На выполнение диплома ушло 5 недель</h3>
            <p className="about__item">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="about__progress">
          <div className="about__cell">
            <p className="about__cell_back">1 неделя</p>
            <p className="about__cell_front">4 недели</p>
          </div>
          <div className="about__name">
            <p className="about__name_back">Back-end</p>
            <p className="about__name_front">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
