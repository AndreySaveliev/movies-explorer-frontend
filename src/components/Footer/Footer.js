import React from 'react'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__wrapper'>
        <p className='footer__caption'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className='footer__info'>
          <p className='footer__year'>© 2022</p>
          <ul className='footer__links'>
            <li className='footer__link'><a className='footer__link_out' href='https://practicum.yandex.ru' target="_blank" rel="noreferrer">Яндекс Практикум</a></li>
            <li className='footer__link'><a className='footer__link_out' href='https://github.com/AndreySaveliev' target="_blank" rel="noreferrer">Github</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer