import React from 'react';
import { useState } from 'react';
function SearchForm({searchMovie, isSaved}) {

  const [checked, setCheked] = useState(localStorage.getItem('switcher') === 'true')
  const [input, setInput] = useState(localStorage.getItem('input'))

  const handheChangeInput = (e) => {
    setInput(e.target.value)
    localStorage.setItem('input', e.target.value)
  }

  const handeChangesSwitcher = (e) => {
    setCheked(e.target.checked)
    localStorage.setItem('switcher', e.target.checked)
  }

  return (
    <section className="searchform">
      <form className="searchform__form" noValidate onSubmit={(event) => searchMovie(event, isSaved, checked)}>
        <input className="searchform__input" placeholder="Фильм" required value={input || ''} onChange={handheChangeInput}></input>
        <button className="searchform__btn" type='submit'></button>
        <div className="searchform__toggle">
          <input type="checkbox" className="searchform__checkbox" checked={checked} onChange={(e) => handeChangesSwitcher(e)}></input>
          <label className="searchform__switch"></label>
          <p className="searchform__text">Короткометражки</p>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
