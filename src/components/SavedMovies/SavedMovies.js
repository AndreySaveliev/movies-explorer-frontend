import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies({savMovies, handleUnsaveFiml, searchMovie}) {
  return (
    <main className="savedmovies">
      <div className="savedmovies__wrapper">
        <Header isLogged={true}
        />
        <SearchForm searchMovie={searchMovie} isSaved={true}/>
        <MoviesCardList isSaved={true} savMovies={savMovies} handleUnsaveFiml={handleUnsaveFiml}/>
        {/* <button
        className={`movies__btn_more ${shownMovies.length === 0 && 'savmovies__btn_more-hidden'} ${
          shownMovies.length === 100 && 'savmovies__btn_more-hidden'
        }`}
        onClick={() => showMore()}
      >
        Ещё
      </button> */}
        <Footer />
      </div>
    </main>
  );
}

export default SavedMovies;
