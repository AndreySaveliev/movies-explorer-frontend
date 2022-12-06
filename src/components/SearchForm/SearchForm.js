import React from 'react'

function SearchForm() {

  return (
    <div className='searchform'>
      <div className='searchform__form'>
        <input className='form__input' placeholder='Фильм'></input>
        <button className='form__btn'></button>
        <div className='searchform__toggle'>
          <input type='checkbox' className='form__checkbox'></input>
          <label className='form__switch'></label>
          <p className='form__text'>Короткометражки</p>
        </div> 
      </div>
    </div>
  )
}

export default SearchForm