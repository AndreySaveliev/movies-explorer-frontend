import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies({ savMovies, handleUnsaveFiml, searchMovie, filteredSavMovies }) {
  return (
    <main className="savedmovies">
      <div className="savedmovies__wrapper">
        <Header isLogged={true} />
        <SearchForm searchMovie={searchMovie} isSaved={true} />
        <MoviesCardList
          isSaved={true}
          savMovies={savMovies}
          handleUnsaveFiml={handleUnsaveFiml}
          filteredSavMovies={filteredSavMovies}
        />
        <Footer />
      </div>
    </main>
  );
}

export default SavedMovies;
