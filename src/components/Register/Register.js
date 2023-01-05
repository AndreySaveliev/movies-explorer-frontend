import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Api } from '../../utils/MainApi';
import { useFormWithValidation } from '../../utils/Validation';

function Register({
  handleLogIn,
  handleSetCurrentUser,
  setIsLoaded,
  isLogged,
  setIsPopupClosed,
  setPopupMessage,
  setPopupStatus
}) {
  const navigate = useNavigate();
  const formValidation = useFormWithValidation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
    formValidation.handleChange(e);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    formValidation.handleChange(e);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    formValidation.handleChange(e);
  };

  const handleSubmit = () => {
    setIsLoaded(false);
    formValidation.setIsValid(false)
    console.log(formValidation)
    Api.signup(name, email, password)
      .then(() => {
        Api.signin(email, password)
          .then((res) => {
            handleSetCurrentUser(res.data);
            handleLogIn();
            localStorage.setItem('isLogged', true);
            localStorage.setItem('token', res.token);
            localStorage.setItem('userData', JSON.stringify(res.data));
          })
          .catch((err) => {
            console.log(err);
            setPopupMessage('Не удалось войти');
            setPopupStatus(false)
            setIsPopupClosed(false);
          });
      })
      .then(() => {
        setIsLoaded(true);
      })
      .catch((err) => {
        formValidation.setIsValid(true)
        setIsLoaded(true);
        console.log(err);
        setPopupMessage('Не удалось зарегистрироваться');
        setPopupStatus(false)
        setIsPopupClosed(false);
      });
  };

  return (
    <section className="register">
      <div className="register__header">
        <Link to="/" className="register__header-logo"></Link>
        <h1 className="register__header-title">Добро пожаловать!</h1>
      </div>
      <form className="register__form" onSubmit={() => handleSubmit()}>
        <label
          className={`register__form-label register__form-label_name ${
            formValidation.errors.name && 'register__form-label-error'
          }`}
        >
          Имя
        </label>
        <input
          className="register__form-input register__form-input_name"
          value={name}
          name="name"
          onChange={handleNameChange}
          pattern="[a-zA-Z\ ]*"
          required
        ></input>
        <label
          className={`register__form-label register__form-label_email ${
            formValidation.errors.email && 'register__form-label-error'
          }`}
        >
          Email
        </label>
        <input
          className="register__form-input register__form-input_email"
          value={email}
          name="email"
          onChange={handleEmailChange}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]*"
          required
        ></input>
        <label
          className={`register__form-label register__form-label_password ${
            formValidation.errors.password && 'register__form-label-error'
          }`}
        >
          Пароль
        </label>
        <input
          className="register__form-input register__form-input_password"
          type="password"
          value={password}
          name="password"
          onChange={handlePasswordChange}
          required
        ></input>
      </form>
      <button
        className={`register__btn register__btn_signup ${
          !formValidation.isValid && 'register__btn_signup_unactive'
        }`}
        disabled={!formValidation.isValid}
        type="submit"
        onClick={() => handleSubmit()}
      >
        Зарегистрироваться
      </button>
      <div className="register__signin">
        <p className="signin__text">Уже зарегистрированы?</p>
        <Link to="/signin" className="register__btn register__btn_signin">
          Войты
        </Link>
      </div>
    </section>
  );
}

export default Register;
