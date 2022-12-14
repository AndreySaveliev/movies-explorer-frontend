import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import { Route, Routes } from 'react-router-dom';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import { CurrentUserContext } from '../context/Context';
import { useEffect, useState } from 'react';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { Api } from '../../utils/MainApi';
import { movieapi } from '../../utils/MoviesApi';
import { useFormWithValidation } from '../../utils/Validation';
import Preloader from '../Preloader/Preloader';
import Popup from '../Popup/Popup';

function App() {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('userData')) || {}
  );
  const [isLogged, setIsLogged] = useState(JSON.parse(localStorage.getItem('isLogged')) || false);
  const [movies, setMovies] = useState(JSON.parse(localStorage.getItem('movies')) || []);
  const [shownMovies, setShownMovies] = useState(
    JSON.parse(localStorage.getItem('shownMovies')) || []);
  const [filteredMovies, setFilteredMovies] = useState(
    JSON.parse(localStorage.getItem('filteredMovies'))
  );
  const [count, setCount] = useState(3);
  const [savMovies, setSavMovies] = useState([]);
  const [filteredSavMovies, setFilteredSavMovies] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [unvisiable, setUnvisiable] = useState(true);
  const formValidation = useFormWithValidation();
  const [isPopupClosed, setIsPopupClosed] = useState(true);
  const [isFiltered, setIsFiltered] = useState(
    JSON.parse(localStorage.getItem('isFiltered')) || false
  );
  const [popupMessage, setPopupMessage] = useState('');
  const [popupStatus, setPopupStatus] = useState(true);

  const searchMovie = (event, isSaved, checked, input) => {
    if (event) {
      event.preventDefault();
    }
    if (movies !== undefined) {
      movieapi
        .searchFilm()
        .then(setIsLoaded(false))
        .then((res) => {
          setMovies(res);
          window.localStorage.setItem('movies', JSON.stringify(res));
          window.localStorage.setItem('count', JSON.stringify(count));
          setIsLoaded(true);
        })
        .catch((err) => console.log(err));
    }
    if (isSaved) {
      setFilteredSavMovies(searchByWordinSavFilms(checked, input));
    } else {
      input = localStorage.getItem('input');
      checked = JSON.parse(localStorage.getItem('switcher'));
      setShownMovies(searchByWord(checked, input).slice(0, 12));
      setFilteredMovies(searchByWord(checked, input));
    }
  };

  const searchByWord = (checked, input) => {
    setCount(0);
    if (!input && !checked) {
      setIsFiltered(false);
      setUnvisiable(false);
      return movies;
    } else if (!input && checked) {
      setIsFiltered(true);
      return movies.filter((m) => m.duration <= 40);
    } else if (input && checked) {
      setIsFiltered(true);
      return movies.filter(
        (m) => m.nameRU.toLowerCase().includes(input.toLowerCase()) && m.duration <= 40
        );
      } else if (input && !checked) {
      setIsFiltered(true);
      return movies.filter((m) => m.nameRU.toLowerCase().includes(input.toLowerCase()));
    }
  };

  const searchByWordinSavFilms = (checked, input) => {
    setCount(3);
    if (!input && !checked) {
      return savMovies;
    } else if (!input && checked) {
      return savMovies.filter((m) => m.duration <= 40);
    } else if (input && checked) {
      return savMovies.filter(
        (m) => m.nameRU.toLowerCase().includes(input.toLowerCase()) && m.duration <= 40
      );
    } else if (input && !checked) {
      return savMovies.filter((m) => m.nameRU.toLowerCase().includes(input.toLowerCase()));
    }
  };

  const handleSaveFilm = (movie) => {
    Api.like(movie)
      .then(setIsLoaded(false))
      .then((res) => {
        setSavMovies([...savMovies, res.data]);
        setPopupMessage('?????????? ????????????????');
        setPopupStatus(true)
        setIsPopupClosed(false);
      })
      .then(setIsLoaded(true))
      .catch((err) => {
        console.log(err);
        setPopupMessage('???? ?????????????? ?????????????????? ??????????');
        setPopupStatus(false)
        setIsPopupClosed(false);
      });
  };

  const handleUnsaveFiml = (id) => {
    Api.unlike(id)
      .then(setIsLoaded(false))
      .then(() => {
        const newSavMovies = savMovies.filter((movies) => movies._id !== id);
        const newFilteredSavMovies = filteredSavMovies.filter((movies) => movies._id !== id)
        setFilteredSavMovies(() => {
          return newFilteredSavMovies;
        });
        setSavMovies(() => {
          return newSavMovies;
        });
      })
      .then(() => {
        setIsLoaded(true)
        setPopupMessage('?????????? ????????????')
        setIsPopupClosed(false);
      })
      .catch((err) => {
        console.log(err);
        setPopupMessage('???? ?????????????? ?????????????? ??????????');
        setPopupStatus(false)
        setIsPopupClosed(false);
      });
  };

  const showMore = () => {
    if (movies.length !== 0 && window.innerWidth >= 1280) {
      setCount(count + 3);
    }
    if (movies.length !== 0 && window.innerWidth < 1280 && window.innerWidth >= 768) {
      setCount(count + 2);
    }
    if (movies.length !== 0 && window.innerWidth < 768 && window.innerWidth >= 320) {
      setCount(count + 2);
    }
  };

  const handleLogIn = () => {
    setIsLogged(true);
  };

  const handleLogOut = () => {
    setIsLogged(false);
  };

  const handleSetCurrentUser = (data) => {
    setCurrentUser(data);
  };

  const handleChangeUserData = (name, email) => {
    Api.changeUserData(name, email)
      .then((res) => setCurrentUser(res.data))
      .then(formValidation.resetForm())
      .then(() => {
        setIsPopupClosed(false);
        setPopupMessage('???????????? ?????????????? ????????????????');
        setPopupStatus(true)
      })
      .catch((err) => {
        console.log(err);
        setIsPopupClosed(false);
        setPopupMessage('???? ?????????????? ?????????????? ?????????? ?????? ??????');
        setPopupStatus(false)
      });
  };

  useEffect(() => {
    let part;
    if (filteredMovies) {
      if (filteredMovies?.length !== 0 && window.innerWidth >= 1280) {
        part = filteredMovies?.slice(0, 12 + count);
        setShownMovies(part);
      }
      if (filteredMovies?.length !== 0 && window.innerWidth < 1280 && window.innerWidth >= 768) {
        part = filteredMovies?.slice(0, 8 + count);
        setShownMovies(part);
      }
      if (filteredMovies?.length !== 0 && window.innerWidth < 768 && window.innerWidth >= 320) {
        part = filteredMovies?.slice(0, 5 + count);
        setShownMovies(part);
      }
    }
    window.localStorage.setItem('count', JSON.stringify(count));
  }, [count, filteredMovies]);

  useEffect(() => {
    if (!isPopupClosed) {
      setTimeout(() => {
        setIsPopupClosed(true)
      }, 2000)
    }
  }, [isPopupClosed])

  useEffect(() => {
    if (window.localStorage.getItem('token')) {
      const token = window.localStorage.getItem('token');
      Api.checkMe(token)
        .then((res) => {
          setCurrentUser(res.data);
          setIsLogged(true);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  useEffect(() => {
    if (isLogged) {
      Api.getUsersSavFilms().then((res) => {
        setSavMovies(res.data);
        localStorage.setItem('savMovies', JSON.stringify(res.data));
        setFilteredSavMovies(res.data);
      });
    }
  }, [isLogged]);

  useEffect(() => {
    localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
    localStorage.setItem('shownMovies', JSON.stringify(shownMovies));
  }, [shownMovies, filteredMovies]);

  useEffect(() => {
    setUnvisiable(false);
    if (shownMovies?.length === movies?.length) {
      setUnvisiable(true);
    } else if (shownMovies?.length === filteredMovies?.length) {
      setUnvisiable(true);
    }
  }, [filteredMovies, movies, shownMovies]);

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Preloader isLoaded={isLoaded} />
        <Popup
          isPopupClosed={isPopupClosed}
          setIsPopupClosed={setIsPopupClosed}
          popupMessage={popupMessage}
          popupStatus={popupStatus}
        />
        <Routes>
          <Route exact path="/" element={<Main isLogged={isLogged} />} />
          <Route
            exact
            path="/movies"
            element={
              <ProtectedRoute isLogged={isLogged} currentUser={currentUser}>
                <Movies
                  searchMovie={searchMovie}
                  handleSaveFilm={handleSaveFilm}
                  handleUnsaveFiml={handleUnsaveFiml}
                  unvisiable={unvisiable}
                  savMovies={savMovies}
                  shownMovies={shownMovies}
                  showMore={showMore}
                  searchByWord={searchByWord}
                />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/saved-movies"
            element={
              <ProtectedRoute isLogged={isLogged} currentUser={currentUser}>
                <SavedMovies
                  searchMovie={searchMovie}
                  savMovies={savMovies}
                  filteredSavMovies={filteredSavMovies}
                  showMore={showMore}
                  handleUnsaveFiml={handleUnsaveFiml}
                />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/profile"
            element={
              <ProtectedRoute isLogged={isLogged} currentUser={currentUser}>
                <Profile
                  handleChangeUserData={handleChangeUserData}
                  handleLogOut={handleLogOut}
                  formValidation={formValidation}
                  // setShownMovies={setShownMovies}
                  setSavMovies={setSavMovies}
                />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/signup"
            element={
              <Register
              currentUser={currentUser}
                setPopupMessage={setPopupMessage}
                setPopupStatus={setPopupStatus}
                setIsPopupClosed={setIsPopupClosed}
                handleLogIn={handleLogIn}
                handleSetCurrentUser={handleSetCurrentUser}
                setIsLoaded={setIsLoaded}
                isLogged={isLogged}
              />
            }
          />
          <Route
            exact
            path="/signin"
            element={
              <Login
                setPopupMessage={setPopupMessage}
                setPopupStatus={setPopupStatus}
                setIsPopupClosed={setIsPopupClosed}
                handleSetCurrentUser={handleSetCurrentUser}
                handleLogIn={handleLogIn}
                setIsLoaded={setIsLoaded}
                isLogged={isLogged}
              />
            }
          />
          <Route exact path="*" element={<NotFoundPage />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
