import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
function Movies({searchMovie, shownMovies, showMore, handleSaveFilm, savMovies, handleUnsaveFiml, unvisiable}) {

  return (
    <div className="movies">
      <Header isLogged={true} isMain={false} />
      <SearchForm searchMovie={searchMovie} isSaved={false}/>
      <MoviesCardList isSaved={false} shownMovies={shownMovies} handleSaveFilm={handleSaveFilm} savMovies={savMovies} handleUnsaveFiml={handleUnsaveFiml}/>
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
