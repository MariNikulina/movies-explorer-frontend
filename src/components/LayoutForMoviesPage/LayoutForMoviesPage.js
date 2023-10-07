import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function LayoutForMoviesPage ({ children, loggedIn, openMenu }) {
  return (
    <div className="content">
      <Header loggedIn={loggedIn} openMenu={openMenu} />
        { children }
      <Footer />
    </div>
  )
};

export default LayoutForMoviesPage;
