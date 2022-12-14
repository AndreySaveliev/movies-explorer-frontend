import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies() {
  return (
    <main className="savedmovies">
      <div className="savedmovies__wrapper">
        <Header isLogged={true}
        />
        <SearchForm />
        <MoviesCardList isSaved={true}/>
        <Footer />
      </div>
    </main>
  );
}

export default SavedMovies;
