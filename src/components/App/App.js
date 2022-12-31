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

function App() {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('userData')));
  const [isLogged, setIsLogged] = useState(false);
  const [movies, setMovies] = useState([]);
  const [shownMovies, setShownMovies] = useState(JSON.parse(localStorage.getItem('shownMovies')));
  const [count, setCount] = useState(3);
  const [savMovies, setSavMovies] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [unvisiable, setUnvisiable] = useState(true);
  const formValidation = useFormWithValidation();

  const searchMovie = (event, isSaved, checked, input) => {
    event.preventDefault();
    if (isSaved) {
      setSavMovies(searchByWordinSavFilms(checked, input));
    } else {
      setShownMovies(searchByWord(checked, input));
    }
  };

  const searchByWord = (checked, input) => {
    if (input === null) {
      setCount(3);
      return movies.slice(0, 12);
    } else if (checked) {
      return movies.filter(
        (movie) => movie.nameRU.toLowerCase().includes(input.toLowerCase()) && movie.duration <= 40
      );
    } else {
      return movies.filter((movie) => movie.nameRU.toLowerCase().includes(input.toLowerCase()));
    }
  };

  const searchByWordinSavFilms = (checked, input) => {
    if (input === null) {
      setCount(3);
      setIsLoaded(false);
      Api.getUsersSavFilms()
        .then((res) => {
          setSavMovies(res.data);
          setIsLoaded(true);
        })
        .catch((err) => console.log(err));
    } else if (checked) {
      return savMovies.filter(
        (movie) => movie.nameRU.toLowerCase().includes(input.toLowerCase()) && movie.duration <= 40
      );
    } else {
      return savMovies.filter((movie) => movie.nameRU.toLowerCase().includes(input.toLowerCase()));
    }
  };

  const handleSaveFilm = (movie) => {
    Api.like(movie)
      .then(setIsLoaded(false))
      .then((res) => setSavMovies([...savMovies, res.data]))
      .then(setIsLoaded(true))
      .catch((err) => console.log(err));
  };

  const handleUnsaveFiml = (id) => {
    Api.unlike(id)
      .then(setIsLoaded(false))
      .then(() => {
        const newSavMovies = savMovies.filter((movies) => movies._id !== id);
        setSavMovies(() => {
          return newSavMovies;
        });
      })
      .then(setIsLoaded(true))
      .catch((err) => console.log(err));
  };

  const showMore = () => {
    let part;
    if (movies.length !== 0 && window.innerWidth >= 1280) {
      setCount(count + 3);
      part = movies.slice(0, 12 + count);
      setShownMovies(part);
    }
    if (movies.length !== 0 && window.innerWidth < 1280 && window.innerWidth >= 768) {
      setCount(count + 2);
      part = movies.slice(0, 8 + count);
      setShownMovies(part);
    }
    if (movies.length !== 0 && window.innerWidth < 768 && window.innerWidth >= 320) {
      setCount(count + 2);
      part = movies.slice(0, 5 + count);
      setShownMovies(part);
    }
    window.localStorage.setItem('count', JSON.stringify(count));
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
      .then((res) => console.log(res))
      .then(formValidation.resetForm())
      .catch((err) => console.log(err));
  };

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
    Api.getUsersSavFilms().then((res) => setSavMovies(res.data));
  }, [isLogged]);

  useEffect(() => {
    movieapi
      .searchFilm()
      .then((res) => {
        setMovies(res);
        window.localStorage.setItem('movies', JSON.stringify(res));
        window.localStorage.setItem('count', JSON.stringify(count));
      })
      .catch((err) => console.log(err));
  }, [count, setMovies]);

  useEffect(() => {
    localStorage.setItem('shownMovies', JSON.stringify(shownMovies));
    if (window.innerWidth >= 1280) {
      if (shownMovies !== null) {
        console.log(123);
        setUnvisiable(shownMovies?.length < 12 || shownMovies?.length === 100);
      }
    }
    if (window.innerWidth < 1280 && window.innerWidth >= 768) {
      if (shownMovies !== null) {
        setUnvisiable(shownMovies?.length < 8 || shownMovies?.length === 100);
      }
    }
    if (window.innerWidth < 768 && window.innerWidth >= 320) {
      if (shownMovies !== null) {
        setUnvisiable(shownMovies?.length < 5 || shownMovies?.length === 100);
      }
    }
  }, [shownMovies]);

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Preloader isLoaded={isLoaded} />
        <Routes>
          <Route exact path="/" element={<Main isLogged={isLogged} />} />
          <Route
            exact
            path="/movies"
            element={
              <ProtectedRoute isLogged={isLogged}>
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
              <ProtectedRoute isLogged={isLogged}>
                <SavedMovies
                  searchMovie={searchMovie}
                  savMovies={savMovies}
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
              <ProtectedRoute isLogged={isLogged}>
                <Profile
                  handleChangeUserData={handleChangeUserData}
                  handleLogOut={handleLogOut}
                  formValidation={formValidation}
                  setShownMovies={setShownMovies}
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
                handleSetCurrentUser={handleSetCurrentUser}
                handleLogIn={handleLogIn}
                setIsLoaded={setIsLoaded}
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
