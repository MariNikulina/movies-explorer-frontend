import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import Navigation from "../Navigation/Navigation";
import LayoutForProjectPage from "../LayoutForProjectPage/LayoutForProjectPage";
import * as auth from "../../utils/Auth.js";
import { mainApi } from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRouteElement from "../ProtectedRoute";
import { getMoviesFromBeatfilm } from "../../utils/MoviesApi";
import { useResize } from "../../utils/useResize";
import {
  SCREEN_XSM_INITIAL_COUNT_CARDS,
  SCREEN_XSM_ADD_COUNT_CARDS,
  SCREEN_SM_INITIAL_COUNT_CARDS,
  SCREEN_SM_ADD_COUNT_CARDS,
  SCREEN_LG_INITIAL_COUNT_CARDS,
  SCREEN_LG_ADD_COUNT_CARDS,
  SCREEN_XL_INITIAL_COUNT_CARDS,
  SCREEN_XL_ADD_COUNT_CARDS} from "../../utils/constants";


function App() {

  const [ isOpened, setIsOpened ] = React.useState(false);
  const [ userData, setUserData ] = React.useState({});
  const [ loggedIn, setLoggedIn ] = React.useState(false);
  const [ currentUser, setCurrentUser ] = React.useState({});

  const navigate = useNavigate();

  const tokenCheck = () => {
    auth.getContent().then((res) => {
      console.log(res)
      if (res?.id) {
        const userData = {
          name: res.name,
          email: res.email
        };
        setUserData(userData);
        setLoggedIn(true);
        navigate('/movies', {replace: true});
      }
    })
    .catch((err) => {
      console.log(err.message)
    })
  }
  console.log(userData)

  React.useEffect(() => {
    tokenCheck();
  }, [])

  React.useEffect(() => {
    if (loggedIn) {

      mainApi.getUserInfo()
        .then((res) => {
          console.log(res)
          setCurrentUser(res);
        })
        .catch((err) => {
          console.log(`${err}`);
        });
    }
  }, [loggedIn])

  function openMenu () {
    setIsOpened(true);
  };

  function closeMenu () {
    setIsOpened(false);
  };

  function onRegister(name, email, password) {
    return auth.register( name, email, password ).then((res) => {
      if (res) {
        onLogin(email, password);
        const userData = {
          name: name,
          email: email
        };
        setUserData(userData);
      }
    })
  };

  function onLogin(email, password) {
    return  auth.authorize(email, password)
      .then((token) => {
        setLoggedIn(true);
        navigate('/movies', {replace: true});
    })
  };

  function handleLogout() {
    auth.logout();
    localStorage.removeItem("searchQuery");
    localStorage.removeItem("checkbox");
    localStorage.removeItem("movies");
    setUserData({});
    setLoggedIn(false);
  };

function handleUpdateProfile (nameProfile, emailProfile) {
  return mainApi.updateUserInfo({ email: emailProfile, name: nameProfile })
    .then((user) => {
      console.log(user)
      setCurrentUser(user);
    })
    .catch((err) => {
      console.log(`${err}`);
    });
}



const checkbox = JSON.parse(localStorage.getItem("checkbox")) === null ? true : JSON.parse(localStorage.getItem("checkbox"));
  console.log(checkbox)

  const [ allMovies, setAllMovies ] = React.useState([]);
  const [ movie, setMovie ] = React.useState([]);
  const [ filteredNameMovies, setFilteredNameMovies] = React.useState([]);
  const [ isLoading, setIsLoading ] = React.useState(false);
  const [ checked, setChecked ] = React.useState(checkbox);
  const [ movieNotFound, setMovieNotFound ] = React.useState("");
  const [ error, setError ] = React.useState("");
  const [ isHiddenButtonShowMore, setIsHiddenButtonShowMore ] = React.useState(false);
  const [ initialCards, setInitialCards ] = React.useState(null); // количество фильмов при загрузке
  const [ addCards, setAddCards ] = React.useState(null); // количество фильмов, которые добавляет кнопка "Еще"
  const [ savedMovies, setSavedMovies ] = React.useState([]); // массив сохраненных фильмов на мой апи
  const [ rowCounter, setRowCounter ] = React.useState(0); //счетчик рядов

  const countMoviesShow = initialCards + rowCounter*addCards;
  const moviesShow = movie.slice(0, countMoviesShow);


  const moviesFromLocalStorage = JSON.parse(localStorage.getItem("movies")) || {};
  console.log(moviesFromLocalStorage)

  const { isScreenSm, isScreenLg, isScreenXl } = useResize();

  React.useEffect(() => {
    if (isScreenXl) {
      setInitialCards(SCREEN_XL_INITIAL_COUNT_CARDS);
      setAddCards(SCREEN_XL_ADD_COUNT_CARDS);
    } else if (isScreenLg) {
      setInitialCards(SCREEN_LG_INITIAL_COUNT_CARDS);
      setAddCards(SCREEN_LG_ADD_COUNT_CARDS);
    } else if (isScreenSm) {
      setInitialCards(SCREEN_SM_INITIAL_COUNT_CARDS);
      setAddCards(SCREEN_SM_ADD_COUNT_CARDS);
    } else if (!isScreenSm) {
      setInitialCards(SCREEN_XSM_INITIAL_COUNT_CARDS);
      setAddCards(SCREEN_XSM_ADD_COUNT_CARDS);
    }
  }, [isScreenLg, isScreenSm, isScreenXl]);


  const filterNameMovies = ({ movies, keyWord }) => {
    const filteredNameMovies = movies.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(keyWord.toLowerCase()) ||
      movie.nameEN.toLowerCase().includes(keyWord.toLowerCase());
    });
    return filteredNameMovies;
  };

  const filterDurationMovies = ({movies}) => {
    const filteredDurationMovies = movies.filter((movie) => {
      return movie.duration <= 40;
    });
    return filteredDurationMovies;
  };



  //Вывод сообщения "Ничего не найдено" при пустом поле ввода
  React.useEffect(() => {
    if (movie.length === 0 && allMovies.length !== 0 && !isLoading) {
      setMovieNotFound("Ничего не найдено");
    }
  }, [movie, allMovies]);


//Сохранение в локальное хранилище списка найденных фильмов
React.useEffect(() => {
  if (allMovies.length !== 0) {
    console.log("6")
    localStorage.setItem("movies", JSON.stringify(filteredNameMovies));
  }
}, [allMovies, filteredNameMovies]);




  React.useEffect(() => {
    setMovieNotFound("")
    setRowCounter(0)
    console.log("1")
    console.log(checked)
    console.log(filteredNameMovies)

    if (checked) {
      setMovie(filterDurationMovies({ movies: filteredNameMovies }))
    } else /*(!checked && allMovies.length !== 0)*/ {
        setMovie(filteredNameMovies);
      }

  }, [filteredNameMovies, initialCards, checked])




  React.useEffect(() => {

    setIsHiddenButtonShowMore(false)
    if (moviesShow.length === movie.length) {
      setIsHiddenButtonShowMore(true);
    }

  }, [movie, moviesShow]);

//извлечение данных чекбокса и найденного списка фильмов из localStorage при монтировании компонента
 React.useEffect(() => {
  console.log("5")
  setChecked(checkbox);
  setFilteredNameMovies(moviesFromLocalStorage);
}, []);

//Функция сабмита
  async function handleFindMovies (formData) {

    setMovie([]);
    setError("");
    setRowCounter(0)

    try {
      if (!formData) {
        setError("Нужно ввести ключевое слово");
      } else {
      setIsLoading(true);

      const movies = await getMoviesFromBeatfilm()
      setAllMovies(movies);
      console.log(movies)
      setFilteredNameMovies(filterNameMovies({ movies, keyWord: formData }));
      }
    } catch(err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  //Функция переключения чекбокса
  function onChangeCheckbox () {
    setChecked(!checked);
    localStorage.setItem("checkbox", !checked);
  };

  //Функция сохранения/удаления фильма
  function handleMovieSave (paramsFunctionOnClick) {

    const foundMovie = savedMovies.find(movie => movie.movieId === paramsFunctionOnClick.movieId)

    if (foundMovie) {
      mainApi.deleteMovie(foundMovie._id)
        .then((deletedMovie) => {
          setSavedMovies((state) => state.filter(i => i.movieId !== deletedMovie.movieId))
        })
        .catch((err) => {
          console.log(`${err}`);
        });
    } else {
      mainApi.createNewMovie(paramsFunctionOnClick)
        .then((movie) => {
          setSavedMovies([movie, ...savedMovies]);
        })
        .catch((err) => {
          console.log(`${err}`);
        });
    }
  }
 //Функция добавления ряда при нажатии кнопки "Еще"
  function handleShowMore () {
    setRowCounter(prev => prev + 1);
  }




  //Функция сабмита
  function handleFindSavedMovies (formData) {

    setMovie([]);
    setError("");

    try {
      if (!formData) {
        setError("Нужно ввести ключевое слово");
      } else {
      setIsLoading(true);

      setAllMovies(movies);
      console.log(movies)
      setFilteredNameMovies(filterNameMovies({ movies, keyWord: formData }));
      }
    } catch(err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };


   return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route path="/" element=
          {<LayoutForProjectPage
            loggedIn={loggedIn}
            headerColorProject="header_color_dark"
            burgerColorProject="header__burger_color_white"
            profileButtonColorProject="profile-link_color_green"
            openMenu={openMenu}
          >
            <Main />
          </LayoutForProjectPage>}
          />
          <Route path="/signup" element={<Register onRegister={onRegister} onLogin={onLogin} />} />
          <Route path="/signin" element={<Login onLogin={onLogin} />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/movies" element=
            {<ProtectedRouteElement
              element={Movies}
              loggedIn={loggedIn}
              openMenu={openMenu}
              onSubmitHandler={(formData) => handleFindMovies(formData)}
              onChangeCheckbox={onChangeCheckbox}
              onClick={(paramsFunctionOnClick) => handleMovieSave(paramsFunctionOnClick)}
              isHiddenButtonShowMore={isHiddenButtonShowMore}
              onShowMore={handleShowMore}
              checked={checked}
              error={error}
              isLoading={isLoading}
              movieNotFound={movieNotFound}
              movies={allMovies}
              moviesShow={moviesShow}
              savedMovies={savedMovies}
            />}
          />
          <Route path="/saved-movies" element=
            {<ProtectedRouteElement
              element={SavedMovies}
              loggedIn={loggedIn}
              openMenu={openMenu}
              savedMovies={savedMovies}
              onSubmitHandler={(formData) => handleFindSavedMovies(formData)}
              onChangeCheckbox={onChangeCheckbox}
              onClick={(paramsFunctionOnClick) => handleMovieSave(paramsFunctionOnClick)}
              checked={checked}
              error={error}
              isLoading={isLoading}
              movieNotFound={movieNotFound}
            />}
          />
          <Route path="/profile" element=
            {<ProtectedRouteElement
              element={Profile}
              loggedIn={loggedIn}
              openMenu={openMenu}
              handleLogout={handleLogout}
              userData={userData}
              onUpdateProfile={handleUpdateProfile}
            />}
          />
        </Routes>
        <Navigation isOpened={isOpened} closeMenu={closeMenu}/>
      </div>
    </CurrentUserContext.Provider>
   );
}

export default App;
