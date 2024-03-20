// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./Footer.module.css";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import leweBlack from "./leweBlack.png";
const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footer}>
        <div className={styles.column}>
          <img src={leweBlack} alt="leweBlack" />
        </div>
        <div className={styles.column}>
          <h3>Categorías</h3>
          <ul>
            <li>
              <Link
                to={"/category/f76fc151-647c-4bd8-a97a-54034494fcf8"}
              >Indumentaria</Link>              
            </li>
            <li>
              <Link
                to={"/category/ab178e9d-253f-4fe5-a9a0-59cac1c1cdf7"}
              >Raquetas</Link>             
            </li>
            <li>
              <Link
                to={"/category/f75de8fb-83f7-444a-a6b9-b3f151fae7a2"}
              >Pelotas</Link>             
            </li>
            <li>
              <Link
                to={"/category/67726fd5-b41a-4320-ba42-c9e8f484087f"}
              >Accesorios</Link>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Información</h3>
          <ul>
            
            <li>Contacto</li>
            
          </ul>
        </div>
        <div className={styles.column}>
          <ul className={styles.socials}>
            <li>
              <Link to="https://www.instagram.com/leweargentina?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
                <FaInstagram style={{ color: "white" }} size={30} />
              </Link>
            </li>
            <li>
              <Link to="https://wa.me/+5493517658536" target="_blank">
                <FaWhatsapp style={{ color: "white" }} size={30} />
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className={styles.rightContent}>
            © 2018 Lewe SportsLife. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
