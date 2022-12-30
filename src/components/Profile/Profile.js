import React, { useContext, useState } from 'react';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../context/Context';
import { Api } from '../../utils/MainApi';
import { useFormWithValidation } from '../../utils/Validation';
function Profile({ handleChangeUserData,handleLogOut }) {
  const navigate = useNavigate();
  const formValidation = useFormWithValidation();
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);

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
        localStorage.clear()
        handleLogOut()
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="profile">
      <Header isLogged={true} />
      <div className="profile__wrapper">
        <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
        <form className="profile__form">
          <input
            className="profile__input profile__input_name"
            placeholder="Имя"
            name='name'
            value={name}
            pattern="[a-zA-Z\ ]*"
            onChange={handleNameChange}
            required
          ></input>
          <input
            className="profile__input profile__input_email"
            placeholder="E-mail"
            name='email'
            value={email}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]*"
            onChange={handleEmailChange}
            required
          ></input>
          <label className="profile__input_label profile__input_label_name">Имя</label>
          <label className="profile__input_label profile__input_label_email">Email</label>
        </form>
        <button
          className={`profile__btn profile__button_edit ${!formValidation.isValid && 'profile__button_edit_unactive'}`}
          onClick={() => handleChangeUserData(name, email)}
          disabled={!formValidation.isValid}
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
