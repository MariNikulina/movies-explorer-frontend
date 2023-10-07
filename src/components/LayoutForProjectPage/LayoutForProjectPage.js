import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./LayoutForProjectPage.css";

function LayoutForProjectPage ({ children, loggedIn, headerColorProject, burgerColorProject, profileButtonColorProject, openMenu }) {
  return (
    <div className="content">
      <Header
      loggedIn={loggedIn}
      openMenu={openMenu}
      headerColorProject={headerColorProject}
      burgerColorProject={burgerColorProject}
      profileButtonColorProject={profileButtonColorProject}
      />
        { children }
      <Footer />
    </div>
  )
};

export default LayoutForProjectPage;
