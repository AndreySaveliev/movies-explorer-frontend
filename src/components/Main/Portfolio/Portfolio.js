import React from 'react';

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio-wrapper">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__links-list">
          <li className="portfolio__link-point">
            <a
              className="portfolio__link portfolio__link_static"
              href="https://github.com/AndreySaveliev/how-to-learn"
              target="_blank"
              rel="noreferrer"
            >
              Статичный сайт
            </a>
            <a
              className="portfolio__link-symbol"
              href="https://github.com/AndreySaveliev/how-to-learn"
              target="_blank"
              rel="noreferrer"
            >
              ↗
            </a>
          </li>
          <li className="portfolio__link-point portfolio__link-point_middle">
            <a
              className="portfolio__link portfolio__link_adaptiv"
              href="https://github.com/AndreySaveliev/russian-travel"
              target="_blank"
              rel="noreferrer"
            >
              Адаптивный сайт
            </a>
            <a
              className="portfolio__link-symbol"
              href="https://github.com/AndreySaveliev/russian-travel"
              target="_blank"
              rel="noreferrer"
            >
              ↗
            </a>
          </li>
          <li className="portfolio__link-point">
            <a
              className="portfolio__link portfolio__link_onepage"
              href="https://github.com/AndreySaveliev/react-mesto-api-full"
              target="_blank"
              rel="noreferrer"
            >
              Одностраничное приложение
            </a>
            <a
              className="portfolio__link-symbol"
              href="https://github.com/AndreySaveliev/react-mesto-api-full"
              target="_blank"
              rel="noreferrer"
            >
              ↗
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
