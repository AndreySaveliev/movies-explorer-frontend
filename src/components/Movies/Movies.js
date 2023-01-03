import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
function Movies({searchMovie, shownMovies, showMore, handleSaveFilm, savMovies, handleUnsaveFiml, unvisiable, filteredShownMovies}) {

  return (
    <div className="movies">
      <Header isLogged={true} isMain={false} />
      <SearchForm searchMovie={searchMovie} isSaved={false}/>
      <MoviesCardList isSaved={false} shownMovies={shownMovies} handleSaveFilm={handleSaveFilm} savMovies={savMovies} handleUnsaveFiml={handleUnsaveFiml} filteredShownMovies={filteredShownMovies}/>
      <button
        className={`movies__btn_more ${unvisiable && 'movies__btn_more-hidden'}`}
        onClick={() => showMore()}
      >
        Ещё
      </button>
      <Footer />
    </div>
  );
}

export default Movies;
