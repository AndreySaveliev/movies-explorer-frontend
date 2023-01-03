import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ isSaved, shownMovies, handleSaveFilm, savMovies, handleUnsaveFiml, filteredSavMovies}) {

  return (
    <section className="moviescardlist">
      {isSaved ? (
        <div className="moviescardlist-wrapper">
          {filteredSavMovies?.map((movie) => (
            <MoviesCard
            shownMovies={shownMovies}
            filteredSavMovies={filteredSavMovies}
            isSaved={true}
            movie={movie}
            savMovies={savMovies }
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
              filteredSavMovies={filteredSavMovies}
              movie={movie}
              savMovies={savMovies }
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
