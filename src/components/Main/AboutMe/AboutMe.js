import React from 'react';
import myphoto from '../../../images/myphoto.jpg';

function AboutMe() {
  return (
    <section className="aboutme" id="aboutme">
      <div className="aboutme-wrapper">
        <h2 className="aboutme__title">Студент</h2>
        <div className="aboutme__info">
          <img className="aboutme__img" src={myphoto} alt="me;)"></img>
          <div className="aboutme__me">
            <h3 className="aboutme__name">Андрей</h3>
            <p className="aboutme__grade">Фронтенд-разработчик, 21 год</p>
            <p className="aboutme__text">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и
              дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года
              работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <a
              className="aboutme__social"
              alt="git"
              href="https://github.com/AndreySaveliev"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
