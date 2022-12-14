import React from 'react'
import { Link } from 'react-router-dom'
function Register() {
  return (
    <section className='register'>
      <div className='register__header'>
        <Link to='/' className='register__header-logo'></Link>
        <h1 className='register__header-title'>Добро пожаловать!</h1>
      </div>
      <form className='register__form'>
          <label className='register__form-label register__form-label_name'>Имя</label>
          <input className='register__form-input register__form-input_name' value={'andrey'} required></input>
          <label className='register__form-label register__form-label_email'>Email</label>
          <input className='register__form-input register__form-input_email' value={'test@email'} required></input>
          <label className='register__form-label register__form-label_password'>Пароль</label>
          <input className='register__form-input register__form-input_password' type='password' required></input>
        </form>
        <button className='register__btn register__btn_signup'>Зарегистрироваться</button>
        <div className='register__signin'>
          <p className='signin__text'>Уже зарегистрированы?</p>
          <Link to='/signin' className='register__btn register__btn_signin'>Войты</Link>
        </div>
    </section>
  )
}

export default Register