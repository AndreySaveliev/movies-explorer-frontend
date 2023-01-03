import React from 'react';
import './Preloader.css';

const Preloader = ({ isLoaded }) => {
  return (
    <div className={`preloader ${isLoaded && 'preloader_hidden'}`}>
      <div className="preloader__container">
        <span className="preloader__round"></span>
      </div>
    </div>
  );
};

export default Preloader;
