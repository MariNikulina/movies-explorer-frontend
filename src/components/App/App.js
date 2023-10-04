import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import "./App.css";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import Navigation from "../Navigation/Navigation";

function App() {

  const loggedIn = false;
  const isLoading = false;
  const locationMovies = false;
  const locationSavedMovies = false;
  const isScreenSm = true;
  const locationProfile = false;
  const locationProject = true;
  const isScreenMd = true;
  const isOpened = false;
  const footer = locationProject || locationMovies || locationSavedMovies;
  const header = locationProject || locationMovies || locationSavedMovies || locationProfile;

   return (
    <div className="page">
      {header && <Header
      loggedIn={loggedIn}
      isScreenMd={isScreenMd}
      locationProject={locationProject}
      />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies
        isLoading={isLoading}
        locationSavedMovies={locationSavedMovies}/>}
        />
        <Route path="/saved-movies" element={<SavedMovies locationSavedMovies={locationSavedMovies} isScreenSm={isScreenSm} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {footer && <Footer /> }
      <Navigation isOpened={isOpened}/>
    </div>
   )
}

export default App;
