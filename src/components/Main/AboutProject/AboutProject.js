import React from 'react'

function AboutProject() {
  return (
    <div className='about' id='about'>
      <div className='about__wrapper'>
        <h2 className='about__title'>О Проекте</h2>
        <div className='about__text'>
          <div className='text__paragraph'>
            <h3 className='paragraph__title'>Дипломный проект включал 5 этапов</h3>
            <p className='paragraph__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className='text__paragraph'>
            <h3 className='paragraph__title'>На выполнение диплома ушло 5 недель</h3>
            <p className='paragraph__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className='about__progress'>
          <div className='progress__cell'>
            <p className='progress__cell_back'>1 неделя</p>
            <p className='progress__cell_front'>4 недели</p>
          </div>
          <div className='progress__name'>
            <p className='progress__name_back'>Back-end</p>
            <p className='progress__name_front'>Front-end</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutProject