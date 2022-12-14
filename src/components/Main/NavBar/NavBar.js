import React from 'react'

function NavBar() {
  return (
    <section className='navbar'>
      <ul className='navbar__links'>
        <li className='navbar__link'><a className='navbar__link' href='#about'>О проекте</a></li>
        <li className='navbar__link'><a className='navbar__link' href='#techs'>Технологии</a></li>
        <li className='navbar__link'><a className='navbar__link' href='#aboutme'>Студент</a></li> 
      </ul>
    </section>
  )
}

export default NavBar