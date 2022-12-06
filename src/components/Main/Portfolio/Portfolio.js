import React from 'react';

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio__wrapper">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__links-list">
          <li className="portfolio__link-point">
            <a
              className="portfolio__link portfolio__link_static"
              href="https://github.com/AndreySaveliev/how-to-learn"
            >
              Статичный сайт
            </a>
            <a className='portfolio__link-symbol' href="https://github.com/AndreySaveliev/how-to-learn">↗</a>
          </li>
          <li className="portfolio__link-point portfolio__link-point_middle">
            <a
              className="portfolio__link portfolio__link_adaptiv"
              href="https://github.com/AndreySaveliev/russian-travel"
            >
              Адаптивный сайт
            </a>
            <a className='portfolio__link-symbol' href="https://github.com/AndreySaveliev/russian-travel">↗</a>
          </li>
          <li className="portfolio__link-point">
            <a
              className="portfolio__link portfolio__link_onepage"
              href="https://github.com/AndreySaveliev/react-mesto-api-full"
            >
              Одностраничное приложение
            </a>
            <a className='portfolio__link-symbol' href="https://github.com/AndreySaveliev/react-mesto-api-full">↗</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Portfolio;
