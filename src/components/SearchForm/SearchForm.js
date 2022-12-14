import React from 'react';

function SearchForm() {
  return (
    <section className="searchform">
      <form className="searchform__form" noValidate>
        <input className="searchform__input" placeholder="Фильм" required></input>
        <button className="searchform__btn"></button>
        <div className="searchform__toggle">
          <input type="checkbox" className="searchform__checkbox"></input>
          <label className="searchform__switch"></label>
          <p className="searchform__text">Короткометражки</p>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
