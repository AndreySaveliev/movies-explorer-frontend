import React from 'react';
import Footer from '../Footer/Footer';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
    <div className="moviescardlist">
      <div className="moviescardlist__wrapper">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </div>
    </div>
  );
}

export default MoviesCardList;
