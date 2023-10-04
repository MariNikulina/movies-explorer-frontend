import React from "react";
import { Link } from "react-router-dom";
import "./ProfileLink.css";

function ProfileLink({ locationProject }) {

  return (
    <Link to="/profile" className={`profile-link ${locationProject ? "profile-link_color_green" : ""}`}>
      <p className="profile-link__text">Аккаунт</p>
      <div className="profile-link__icon"></div>
    </Link>
  );
}

export default ProfileLink;
