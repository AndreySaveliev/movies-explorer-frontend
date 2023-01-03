import React, { useEffect } from 'react';
import { useState } from 'react';

function MoviesCard({ isSaved, title, duration, img, handleSaveFilm, movie, handleUnsaveFiml, shownMovies, savMovies }) {

  const [isLiked, setIsLiked] = useState(false)
  const [movieToUnlike, setMovieToUnlike] = useState('')

  const handleClick = (movie) => {
    if (isSaved) {
      handleUnsaveFiml(movie._id)
      setIsLiked(!isLiked)
    } else {
      if (isLiked) {
        findMovInSavedMovies(movie)
          .then(setIsLiked(!isLiked))
      } else {
        handleSaveFilm(movie)
          .then(setIsLiked(!isLiked))
      }
    }
  }

  const findMovInSavedMovies = (movie) => {
    savMovies.forEach((mov) => {
      if (mov.description === movie.description) {
        setMovieToUnlike(mov._id)
      }
    })
  }

  useEffect(() => {
    if (!isSaved) {
      if (shownMovies !== undefined && savMovies !== undefined) {
        savMovies.map((m) => {
          if (movie.nameRU === m.nameRU) {
            setIsLiked(true)
          }
        })
      } else {
        setIsLiked(false)
      }
    }

    
  }, [isSaved, movie.nameRU, savMovies, shownMovies])

  useEffect(() => {
    if (movieToUnlike !== '') {
      handleUnsaveFiml(movieToUnlike)
    }
  }, [movieToUnlike])

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
