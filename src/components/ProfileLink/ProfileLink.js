import React from "react";
import { Link } from "react-router-dom";
import "./ProfileLink.css";

function ProfileLink({ profileButtonColorProject }) {

  return (
    <Link to="/profile" className={`profile-link ${profileButtonColorProject}`}>
      <p className="profile-link__text">Аккаунт</p>
      <div className="profile-link__icon"></div>
    </Link>
  );
}

export default ProfileLink;
