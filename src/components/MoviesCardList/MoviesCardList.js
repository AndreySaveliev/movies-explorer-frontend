import React, { useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ isSaved, shownMovies, handleSaveFilm, savMovies, handleUnsaveFiml }) {

  

  return (
    <section className="moviescardlist">
      {isSaved ? (
        <div className="moviescardlist-wrapper">
          {savMovies?.map((movie) => (
            <MoviesCard
            shownMovies={shownMovies}
            savMovies={savMovies}
            isSaved={true}
            movie={movie}
            key={movie._id}
            title={movie.nameRU}
            duration={movie.duration}
            handleUnsaveFiml={handleUnsaveFiml}
            img={movie.image}
            />
          ))}
        </div>
      ) : (
        <div className="moviescardlist-wrapper">
          {shownMovies?.map((movie) => (
            <MoviesCard
              isSaved={false}
              shownMovies={shownMovies}
              savMovies={savMovies}
              movie={movie}
              key={movie.id}
              title={movie.nameRU}
              duration={movie.duration}
              handleSaveFilm={handleSaveFilm}
              handleUnsaveFiml={handleUnsaveFiml}
              img={`https://api.nomoreparties.co/${movie.image.url}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default MoviesCardList;
