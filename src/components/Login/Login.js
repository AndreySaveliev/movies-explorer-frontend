import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'
function Login() {
  return (
    <section className='login'>
      <div className='login__header'>
        <Link to='/' className='login__header-logo login__header-btn'></Link>
        <h1 className='login__header-title'>Рады видеть!</h1>
      </div>
      <form className='login__form'>
          <label className='login__form-label login__form-label_email'>Email</label>
          <input className='login__form-input login__form-input_email' value={'test@email'} required></input>
          <label className='login__form-label login__form-label_password'>Пароль</label>
          <input className='login__form-input login__form-input_email' type='password' required></input>
        </form>
        <button className='login__btn login__btn_signup'>Войти</button>
        <div className='login__signin'>
          <p className='signin__text'>Ещё не зарегистрированы?</p>
          <Link to='/signup' className='login__btn login__btn_signin'>Регистрация</Link>
        </div>
    </section>
  )
}

export default Login