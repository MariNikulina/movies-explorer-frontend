import React from "react";
import "./FooterLinks.css";

function FooterLinks ({ link, name }) {
  return (
    <li className="footer-link__item">
      <a href={link} target="_blank" rel="noreferrer" className="footer-link__wedsite">{name}</a>
    </li>
  )
};

export default FooterLinks;
