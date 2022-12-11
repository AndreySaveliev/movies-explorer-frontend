import React from 'react';
import { Link } from 'react-router-dom';

function Header({ isLogged, isMain }) {
  return (
    <header className={`header ${isMain && 'header-promo'}`}>
      <div className="header-wrapper">
        <Link to="/" className="header-wrapper__logo"></Link>
        {isLogged ? (
          <>
            <input type="checkbox" className="header__checkbox"></input>
            <label className="header__label"> </label>
            <div className="header-navbar">
              <Link to="/" className="header-navbar__btn header-navbar__btn_main">
                Главная
              </Link>
              <Link
                to="/movies"
                className={` header-navbar__btn header-navbar__btn_film ${isLogged && 'header-navbar__btn_logged'}`}
              >
                Фильмы
              </Link>
              <Link to="/saved-movies" className="header-navbar__btn_savfilm header-navbar__btn">
                Сохраненные фильмы
              </Link>
              <div className="header-navbar__user">
                <Link to="/profile" className="header-navbar__btn_user header-navbar__btn">
                  Аккаунт
                </Link>
                <button className="header-navbar__userimg" alt="значок юзера"></button>
              </div>
            </div>
          </>
        ) : (
          <div>
            <Link to="/signup" className="header__btn_signup header-navbar__btn">
              Регистрация
            </Link>
            <Link to="/signin" className="header__btn_signin header-navbar__btn">
              Войти
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
