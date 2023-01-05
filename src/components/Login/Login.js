import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Api } from '../../utils/MainApi';
import { useState } from 'react';
import { useFormWithValidation } from '../../utils/Validation';
function Login({
  handleSetCurrentUser,
  handleLogIn,
  setIsLoaded,
  setIsPopupClosed,
  setPopupMessage,
  isLogged,
  setPopupStatus
}) {
  const navigate = useNavigate();
  const formValidation = useFormWithValidation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    Api.signin(email, password)
      .then((res) => {
        if (res) {
          handleSetCurrentUser(res.data);
          handleLogIn();
          localStorage.setItem('isLogged', true);
          localStorage.setItem('token', res.token);
          localStorage.setItem('userData', JSON.stringify(res.data));
          setIsLoaded(true);
          navigate('/movies');
        }
      })
      .catch((err) => {
        formValidation.setIsValid(true)
        setIsLoaded(true);
        console.log(err);
        setPopupMessage('Не удалось войти');
        setPopupStatus(false)
        setIsPopupClosed(false);
      });
  };

  useEffect(() => {
    if (isLogged) {
      navigate(-1)
    }
  }, [isLogged])

  return (
    <section className="login">
      <div className="login__header">
        <Link to="/" className="login__header-logo login__header-btn"></Link>
        <h1 className="login__header-title">Рады видеть!</h1>
      </div>
      <form className="login__form" onSubmit={() => handleSubmit()}>
        <label
          className={`login__form-label login__form-label_email ${
            formValidation.errors.email && 'login__form-label-error'
          }`}
        >
          Email
        </label>
        <input
          className="login__form-input login__form-input_email"
          value={email}
          onChange={handleEmailChange}
          name="email"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]*"
        ></input>
        <label
          className={`login__form-label login__form-label_password ${
            formValidation.errors.password && 'login__form-label-error'
          }`}
        >
          Пароль
        </label>
        <input
          className="login__form-input login__form-input_email"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          name="password"
          required
        ></input>
      </form>
      <button
        className={`login__btn login__btn_signup ${
          !formValidation.isValid && `login__btn_signup_unactive`
        }`}
        type="submit"
        disabled={!formValidation.isValid}
        onClick={() => handleSubmit()}
      >
        Войти
      </button>
      <div className="login__signin">
        <p className="signin__text">Ещё не зарегистрированы?</p>
        <Link to="/signup" className="login__btn login__btn_signin">
          Регистрация
        </Link>
      </div>
    </section>
  );
}

export default Login;
