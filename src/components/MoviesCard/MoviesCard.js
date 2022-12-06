import React from 'react'
import img from '../../images/pic__COLOR_pic.png'

function MoviesCard() {
  return (
    <div className='moviecard'>
      <img className='moviecard__img' src={img} alt='movie'></img>
      <h2 className='moviecard__title'>33 слова о дизайне</h2>
      <p className='moviecard__duration'>1ч 47м</p>
      <button className='moviecard__like'></button>
    </div>
  )
}

export default MoviesCard