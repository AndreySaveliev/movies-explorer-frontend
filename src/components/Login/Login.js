import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'
function Login() {
  return (
    <div className='login'>
      <div className='login__header'>
        <Link to='/' className='login__header-logo login__header-btn' ><img className='login__header-logo' src={logo} alt={logo}></img></Link>
        <h1 className='login__header-title'>Рады видеть!</h1>
        <form className='login__form'>
          <label className='login__form-label login__form-label_email'>Email</label>
          <input className='login__form-input login__form-input_email' value={'test@email'}></input>
          <label className='login__form-label login__form-label_password'>Пароль</label>
          <input className='login__form-input login__form-input_email' type='password'></input>
        </form>
        <button className='login__btn login__btn_signup'>Войти</button>
        <div className='login__signin'>
          <p className='signin__text'>Ещё не зарегистрированы?</p>
          <Link to='/signup' className='login__btn login__btn_signin'>Регистрация</Link>
        </div>
      </div>
    </div>
  )
}

export default Login