import React from "react";
import "./FooterLinks.css";

function FooterLinks ({ link, name }) {
  return (
    <li className="footer__item">
      <a href={link} target="_blank" rel="noreferrer" className="footer__link">{name}</a>
    </li>
  )
};

export default FooterLinks;
