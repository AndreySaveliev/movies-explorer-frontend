import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({
  isSaved,
  shownMovies,
  handleSaveFilm,
  savMovies,
  handleUnsaveFiml,
  filteredSavMovies
}) {
  return (
    <section className="moviescardlist">
      {isSaved ? (
        <div className="moviescardlist-wrapper">
          <p className={`moviescardlist__notfound-text ${filteredSavMovies.length === 0 && 'moviescardlist__notfound-text_visible'}`}>{savMovies.length===0 ? "Вы ничего не добавили":'Ничего не найдено'}</p>
          {filteredSavMovies?.map((movie) => (
            <MoviesCard
              isSaved={true}
              shownMovies={shownMovies}
              filteredSavMovies={filteredSavMovies}
              movie={movie}
              savMovies={savMovies}
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
          <p className={`moviescardlist__notfound-text ${shownMovies.length === 0 && 'moviescardlist__notfound-text_visible'}`}>Ничего не найдено</p>
          {shownMovies?.map((movie) => (
            <MoviesCard
              isSaved={false}
              shownMovies={shownMovies}
              filteredSavMovies={filteredSavMovies}
              movie={movie}
              savMovies={savMovies}
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
