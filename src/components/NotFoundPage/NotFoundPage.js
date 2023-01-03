import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <section className="notfound">
      <h1 className="notfound__title">404</h1>
      <p className="notfound__text">Страница не найдена</p>
      <button onClick={() => navigate(-1)} className="notfound__btn">
        Назад
      </button>
    </section>
  );
}

export default NotFoundPage;
