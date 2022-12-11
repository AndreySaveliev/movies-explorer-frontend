import React from 'react'
import Header from '../Header/Header'
import {Link} from 'react-router-dom'
function Profile({name, email}) {

  return (
    <section className='profile'>
      <Header 
      isLogged={true}/>
      <div className='profile__wrapper'>
        <h1 className='profile__title'>{`Привет, ${name}!`}</h1>
        <form className='profile__form'>
          <input className='profile__input profile__input_name' placeholder='Имя' ></input>
          <input className='profile__input profile__input_email' placeholder='E-mail' value={email}></input>
          <label className='profile__input_label profile__input_label_name'>Имя</label>
          <label className='profile__input_label profile__input_label_email'>Email</label>
        </form>
        <button className='profile__btn profile__button_edit'>Редактировать</button>
        <Link to='/signin' className='profile__btn profile__button_signout'>Выйти из аккаунта</Link>
      </div>
    </section>
  )
}

export default Profile