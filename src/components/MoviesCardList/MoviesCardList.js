import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ isSaved }) {
  return (
    <section className="moviescardlist">
      {isSaved ? (
        <div className="moviescardlist--wrapper">
          <MoviesCard isLiked={true} isSaved={isSaved} />
          <MoviesCard isLiked={true} isSaved={isSaved} />
          <MoviesCard isLiked={true} isSaved={isSaved} />
          <MoviesCard isLiked={true} isSaved={isSaved} />
          <MoviesCard isLiked={true} isSaved={isSaved} />
          <MoviesCard isLiked={true} isSaved={isSaved} />
          <MoviesCard isLiked={true} isSaved={isSaved} />
        </div>
      ) : (
        <div className="moviescardlist--wrapper">
          <MoviesCard isLiked={true} isSaved={isSaved} />
          <MoviesCard isLiked={false} isSaved={isSaved} />
          <MoviesCard isLiked={false} isSaved={isSaved} />
          <MoviesCard isLiked={false} isSaved={isSaved} />
          <MoviesCard isLiked={false} isSaved={isSaved} />
          <MoviesCard isLiked={true} isSaved={isSaved} />
          <MoviesCard isLiked={false} isSaved={isSaved} />
        </div>
      )}
    </section>
  );
}

export default MoviesCardList;
