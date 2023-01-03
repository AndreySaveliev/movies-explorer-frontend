import React, { useContext, useEffect, useState } from 'react';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../context/Context';
import { Api } from '../../utils/MainApi';
function Profile({
  handleChangeUserData,
  handleLogOut,
  formValidation,
  setSavMovies,
  setShownMovies
}) {
  const navigate = useNavigate();
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [isValid, setIsValid] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
    formValidation.handleChange(e);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    formValidation.handleChange(e);
  };

  const handleLogout = () => {
    Api.signout()
      .then((res) => {
        localStorage.clear();
        setSavMovies([]);
        handleLogOut();
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (name !== currentUser.name || email !== currentUser.email) {
      if (formValidation.isValid) {
        setIsValid(true);
      }
    } else {
      setIsValid(false);
    }
  }, [name, email, currentUser.name, currentUser.email, formValidation.isValid]);

  return (
    <section className="profile">
      <Header isLogged={true} />
      <div className="profile__wrapper">
        <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
        <form className="profile__form">
          <input
            className="profile__input profile__input_name"
            placeholder="Имя"
            name="name"
            value={name}
            pattern="[a-zA-Z\ ]*"
            onChange={handleNameChange}
            required
            minLength={2}
            maxLength={30}
          ></input>
          <input
            className="profile__input profile__input_email"
            placeholder="E-mail"
            name="email"
            value={email}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]*"
            onChange={handleEmailChange}
            required
          ></input>
          <label className="profile__input_label profile__input_label_name">Имя</label>
          <label className="profile__input_label profile__input_label_email">Email</label>
        </form>
        <button
          className={`profile__btn profile__button_edit ${
            !isValid && 'profile__button_edit_unactive'
          }`}
          onClick={() => handleChangeUserData(name, email)}
          disabled={!isValid}
        >
          Редактировать
        </button>
        <button className="profile__btn profile__button_signout" onClick={() => handleLogout()}>
          Выйти из аккаунта
        </button>
      </div>
    </section>
  );
}

export default Profile;
