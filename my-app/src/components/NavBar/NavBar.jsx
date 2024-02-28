import React, { useState } from 'react';
import styles from './NavBar.module.css'; 
import leweIcon from "../../assets/leweIcon.png"
import { IoCart } from "react-icons/io5";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
    setDropdownOpen(false); // Cierra el menú desplegable cuando se hace clic en otro botón
  }

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    setActiveButton('CATEGORIAS'); // Establece "CATEGORIAS" como el botón activo cuando se abre el menú desplegable
  }

  return (
    <div className={styles.navbar}>
     <Link to="/"><img src={leweIcon} alt="Pokemon" className={styles.logo} /></Link>
      <div className={styles.buttonGroup}>
        <Link to="/"><button onClick={() => handleClick('HOME')} className={activeButton === 'HOME' ? styles.active : ''}>HOME</button></Link>
        <div className={styles.dropdown}>
          <button onClick={toggleDropdown} className={activeButton === 'CATEGORIAS' ? styles.active : ''}>CATEGORIAS</button>
          {dropdownOpen && (
            <div className={styles.dropdownMenu}>
              <button onClick={() => handleClick('Shorts')}>Shorts</button>
              <button onClick={() => handleClick('Raquetas')}>Raquetas</button>
              <button onClick={() => handleClick('Pelotas')}>Pelotas</button>
              <button onClick={() => handleClick('Accesorios')}>Accesorios</button>
            </div>
          )}
        </div>
        <button onClick={() => handleClick('CONTACTANOS')} className={activeButton === 'CONTACTANOS' ? styles.active : ''}>CONTACTANOS</button>
      </div>
      <div className={styles.rightButton}>
        <button><IoCart /></button>
      </div>
    </div>
  );
}

export default NavBar;



