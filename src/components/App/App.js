import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import { Route, Routes, useNavigate } from 'react-router-dom';
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
import Preloader from '../Preloader/Preloader'

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isLogged, setIsLogged] = useState(false);
  const [movies, setMovies] = useState([]);
  const [shownMovies, setShownMovies] = useState([]);
  const [count, setCount] = useState(0);
  const [savMovies, setSavMovies] = useState([])
  const [isLoaded, setIsLoaded] = useState(true)

  const navigate = useNavigate();


  const searchMovie = (event, isSaved, checked) => {
    event.preventDefault();
    if (isSaved) {
      setSavMovies(searchByWordinSavFilms(checked))
    } else {
      setShownMovies(searchByWord(checked))
    }
  }
  
  const searchByWord = (checked) => {
    const input = localStorage.getItem('input')
    if (input=== '') {
      setCount(3)
      return movies.slice(0, 12);
    }
    if (checked) {
      return movies.filter(movie => movie.nameRU.includes(input) && movie.duration <= 40)
    }
    return movies.filter(movie => movie.nameRU.includes(input))
  }

  const searchByWordinSavFilms = (checked) => {
    const input = localStorage.getItem('input')
    if (input === '') {
      setCount(3)
      Api.getUsersSavFilms()
      .then(setIsLoaded(false))
      .then(res => setSavMovies(res.data))
      .then(setIsLoaded(true))
    }
    if (checked) {
      return savMovies.filter(movie => movie.nameRU.includes(input) && movie.duration <= 40)
    }
    return savMovies.filter(movie => movie.nameRU.includes(input))
  }

  const handleSaveFilm = (movie) => {
    Api.like(movie)
      .then(setIsLoaded(false))
      .then((res) => setSavMovies([...savMovies, res.data]))
      .then(setIsLoaded(true))
      .catch((err) => console.log(err))
  }

  const handleUnsaveFiml = (id) => {
    Api.unlike(id)
      .then(setIsLoaded(false))
      .then(() => {
        const newSavMovies = savMovies.filter((movies) => movies._id !== id);
        setSavMovies(() => {
          return newSavMovies
        })
      })
      .then(setIsLoaded(true))
      .catch((err) => console.log(err))
  }

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
    window.localStorage.setItem('count', JSON.stringify(count))
  };
  

  const handleLogIn = () => {
    setIsLogged(true);
  };

  const handleLogOut = () => {
    setIsLogged(false)
  }

  const handleSetCurrentUser = (data) => {
    setCurrentUser(data);
  };

  const handleChangeUserData = (name, email) => {
    Api.changeUserData(name, email)
      .then((res) => setCurrentUser(res.data))
      .then(res => console.log(res))
      .catch((err) => console.log(err))
  }


  useEffect(() => {
    if (!isLogged) {
      if (window.localStorage.getItem('token')) {
        const token = window.localStorage.getItem('token');
        Api.checkMe(token)
          .then((res) => setCurrentUser(res.data))
          .then(setIsLogged(true))
          .then(navigate('/movies'))
          .catch((err) => console.log(err));
      }
    }

    let part;
    if (movies.length !== 0 && window.innerWidth >= 1280) {
      setCount(3);
      part = movies.slice(0, 12);
      setShownMovies(part);
    }
    if (movies.length !== 0 && window.innerWidth < 1280 && window.innerWidth >= 768) {
      setCount(2);
      part = movies.slice(0, 8);
      setShownMovies(part);
    }
    if (movies.length !== 0 && window.innerWidth < 768 && window.innerWidth >= 320) {
      setCount(2);
      part = movies.slice(0, 5);
      setShownMovies(part);
    }
    if (window.localStorage.getItem('movies')) {
      const movies = JSON.parse(window.localStorage.getItem('movies'));
      let count
      if (window.localStorage.getItem('count')) {
        count = JSON.parse(window.localStorage.getItem('count'))
        if (movies.length !== 0 && window.innerWidth >= 1280) {
          part = movies.slice(0, 12+count)
        } else if (movies.length !== 0 && window.innerWidth < 1280 && window.innerWidth >= 768) {
          part = movies.slice(0, 8+count)
        } else (
          part = movies.slice(0, 5+count)
        )
      }
      setShownMovies(part)
    }

    Api.getUsersSavFilms()
      .then(res => setSavMovies(res.data))

  }, [isLogged, setShownMovies, navigate]);

  useEffect(() => {
    movieapi.searchFilm().then(res => {
      setMovies(res)
      window.localStorage.setItem('movies', JSON.stringify(res))
      window.localStorage.setItem('count', JSON.stringify(count))})
      .catch((err) => console.log(err))
  }, [count, setMovies])

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        {/* <Preloader isLoaded={isLoaded}/> */}
        <Routes>
          <Route
            exact
            path="/"
            element={
              // <ProtectedRoute isLogged={isLogged}>
                <Main isLogged={isLogged} />
              // </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/movies"
            element={
              <ProtectedRoute isLogged={isLogged}>
                <Movies searchMovie={searchMovie} handleSaveFilm={handleSaveFilm} handleUnsaveFiml={handleUnsaveFiml} savMovies={savMovies} shownMovies={shownMovies} showMore={showMore} searchByWord={searchByWord}/>
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/saved-movies"
            element={
              <ProtectedRoute isLogged={isLogged}>
                <SavedMovies searchMovie={searchMovie} savMovies={savMovies} showMore={showMore} handleUnsaveFiml={handleUnsaveFiml}/>
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/profile"
            element={
              <ProtectedRoute isLogged={isLogged}>
                <Profile handleChangeUserData={handleChangeUserData} handleLogOut={handleLogOut}/>
              </ProtectedRoute>
            }
          />

          <Route exact path="/signup" element={<Register />} />
          <Route
            exact
            path="/signin"
            element={
              <Login handleSetCurrentUser={handleSetCurrentUser} handleLogIn={handleLogIn} setIsLoaded={setIsLoaded}/>
            }
          />
          <Route exact path="*" element={<NotFoundPage />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
