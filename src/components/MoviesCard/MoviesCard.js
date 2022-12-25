import React, { useEffect } from 'react';
import { useState } from 'react';

function MoviesCard({ isSaved, title, duration, img, handleSaveFilm, movie, handleUnsaveFiml, shownMovies, savMovies }) {

  const [isLiked, setIsLiked] = useState(false)

  const handleClick = (movie) => {
    if (isSaved) {
      handleUnsaveFiml(movie._id)
      setIsLiked(!isLiked)
    } else {
      handleSaveFilm(movie)
      setIsLiked(!isLiked)
    }
  }

  useEffect(() => {
    if (!isSaved) {
      if (shownMovies !== undefined && savMovies !== undefined) {
        savMovies.map((m) => {
          if (movie.nameRU === m.nameRU) {
            return setIsLiked(true)
          }
        })
      }
    }
  }, [isSaved, movie.nameRU, savMovies, shownMovies])

  return (
    <div className="moviecard">
      <img className="moviecard__img" src={img} alt="movie"></img>
      <h2 className="moviecard__title">{title}</h2>
      <p className="moviecard__duration">{duration}</p>
      <button
        className={`moviecard__like ${isLiked && 'moviecard__like_liked'} ${
          isSaved && 'moviecard__like_unlike'
        }`}
        onClick={() => handleClick(movie)}
      ></button>
    </div>
  );
}

export default MoviesCard;
