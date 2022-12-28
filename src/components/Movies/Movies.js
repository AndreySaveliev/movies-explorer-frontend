import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
function Movies({searchMovie, shownMovies, showMore, handleSaveFilm, savMovies, searchByWord, handleUnsaveFiml}) {

  

  return (
    <div className="movies">
      <Header isLogged={true} isMain={false} />
      <SearchForm searchMovie={searchMovie} isSaved={false}/>
      <MoviesCardList isSaved={false} shownMovies={shownMovies} handleSaveFilm={handleSaveFilm} savMovies={savMovies} handleUnsaveFiml={handleUnsaveFiml}/>
      <button
        className={`movies__btn_more ${shownMovies?.length === 0 && 'movies__btn_more-hidden'} ${
          shownMovies?.length === 100 && 'movies__btn_more-hidden'
        }`}
        onClick={() => showMore()}
      >
        Ещё
      </button>
      <Footer />
    </div>
  );
}

export default Movies;
