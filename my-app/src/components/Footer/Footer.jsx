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
                to={"/category/indumentaria"}
              >Indumentaria</Link>              
            </li>
            <li>
              <Link
                to={"/category/4567773c-ab96-41aa-b9fa-ffa331fe4d7f"}
              >Raquetas</Link>             
            </li>
            <li>
              <Link
                to={"/category/d5033fd4-8d56-4e02-b816-78b4f65ee660"}
              >Pelotas</Link>             
            </li>
            <li>
              <Link
                to={"/category/108312e1-bed1-4468-aaed-657307fb2267"}
              >Accesorios</Link>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Información</h3>
          <ul>
            <Link to={"/contact"}>
            <li>Contacto</li>
            </Link>
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
