import React from "react";
import FooterLinks from "./components/FooterLinks";
import { footerLinks } from "../../utils/constants";
import "./Footer.css";

function Footer () {

  const year = 2023;

  return (
    <footer className="footer content__section">
      <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className="footer__info">
        <p className="footer__date">&copy; {year}</p>
        <ul className="footer__link-list">
          {footerLinks.map((link) => (
            <FooterLinks key={link.id} {...link} />
          ))}
          </ul>
      </div>
    </footer>
  )
};

export default Footer;
