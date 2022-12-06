import React from 'react'
import { Link } from 'react-router-dom'
import userimg from '../../images/back__COLOR_special-1.png'

function Header({isLogged, isMain}) {

  return (
    <div className={`header ${isMain && 'header__promo'}`}>
      <div className='header__wrapper'>
        <Link to='/' className='header__logo'></Link>
        {isLogged ? 
        <>
          <input type='checkbox' className='header__checkbox'></input>
          <label className='header__label'> </label>
          <div className='header__navbar'>
            <Link to='/' className='header__btn header__btn_main'>Главная</Link>
            <Link to='/movies' className={` header__btn header__btn_film ${isLogged && 'header__btn_logged'}`}>Фильмы</Link>
            <Link to='/saved-movies' className='header__btn_savfilm header__btn'>Сохраненные фильмы</Link>
            <div className='header__user'>
              <Link to='/profile' className='header__btn_user header__btn'>Аккаунт</Link>
              <button className='header__userimg'  alt='значок юзера'></button>
            </div>
          </div> 
        </>:
        <div>
          <Link to='/signup'className='header__btn_signup header__btn'>Регистрация</Link>
          <Link to='/signin' className='header__btn_signin header__btn'>Войти</Link>
        </div>}
      </div>
    </div>
  )
}

export default Header