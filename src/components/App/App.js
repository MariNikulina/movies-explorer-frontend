import React from "react";
import { Route, Routes } from "react-router-dom";
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
import LayoutForMoviesPage from "../LayoutForMoviesPage/LayoutForMoviesPage";

function App() {

  const [ isLoading, setIsLoading ] = React.useState(false);
  const [ isOpened, setIsOpened ] = React.useState(false);

  const loggedIn = true;

  React.useEffect(() => {
    if (loggedIn) {
      setIsLoading(true);
    fetch("https://api.nomoreparties.co/beatfilm-movies")
    .then((movies) => {
      console.log(movies);
    })
    .catch((err) => {
      console.log(`${err}`);
    })
    .finally(() => {
      setIsLoading(false);
    });
    }
  }, [loggedIn]);

  function openMenu () {
    setIsOpened(true);
  };

  function closeMenu () {
    setIsOpened(false);
  };

  function onSubmitMovies () {
    setIsLoading(true)
    fetch("https://api.nomoreparties.co/beatfilm-movies")
    .then((movies) => {
      console.log(movies);
    })
    .catch((err) => {
      console.log(`${err}`);
    })
    .finally(() => {
      setIsLoading(false);
    });
  };

  function onSubmitSavedMovies () {
    setIsLoading(true)
    fetch("https://api.movies.nikulina.nomoredomainsrocks.ru")
    .then((movies) => {
      console.log(movies);
    })
    .catch((err) => {
      console.log(`${err}`);
    })
    .finally(() => {
      setIsLoading(false);
    });
  }

   return (
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
        <Route path="/movies" element=
        {<LayoutForMoviesPage
        loggedIn={loggedIn}
        openMenu={openMenu}
        >
          <Movies
          isLoading={isLoading}
          onSubmit={onSubmitMovies}
          />
        </LayoutForMoviesPage>}
        />
        <Route path="/saved-movies" element=
        {<LayoutForMoviesPage
          loggedIn={loggedIn}
          openMenu={openMenu}
          >
            <SavedMovies
             isLoading={isLoading}
             onSubmit={onSubmitSavedMovies}
             />
          </LayoutForMoviesPage>}
        />
        <Route path="/profile" element={<Profile loggedIn={loggedIn} openMenu={openMenu} />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Navigation isOpened={isOpened} closeMenu={closeMenu}/>
    </div>
   )
}

export default App;
