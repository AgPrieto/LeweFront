import React from 'react';
import styles from './Footer.module.css';
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import leweBlack from "./leweBlack.png"
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
          <li>Indumentaria</li>
          <li>Raquetas</li>
          <li>Pelotas</li>
          <li>Accesorios</li>
        </ul>
      </div>
      <div className={styles.column}>
        <h3>Información</h3>
        <ul>
          <li>Sobre nosotros</li>
          <li>Contacto</li>
          <li>Política de privacidad</li>
          <li>Términos y condiciones</li>
        </ul>
      </div>
      <div className={styles.column}>
        <ul className={styles.socials}>
          <li><Link to="https://www.instagram.com/leweargentina?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><FaInstagram style={{ color: 'white' }} size={30} /></Link></li>
          <li><Link to="https://wa.me/+5493517658536"><FaWhatsapp style={{ color: 'white' }} size={30} /></Link></li>
        </ul>
      </div>
      <div>
        <p className={styles.rightContent}>© 2024 Lewe SportsLife. Todos los derechos reservados.</p>
      </div>
    </div>
    </div>
  );
}

export default Footer;


