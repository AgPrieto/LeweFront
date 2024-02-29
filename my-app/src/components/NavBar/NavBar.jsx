import React, { useState, useRef, useEffect } from 'react';
import styles from './NavBar.module.css'; 
import leweBlack from "../../assets/leweBlack.png"
import { IoCart } from "react-icons/io5";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const node = useRef();

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
    setDropdownOpen(false); 
  }

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    setActiveButton('CATEGORIAS'); 
  }

  const handleClickOutside = e => {
    if (node.current.contains(e.target)) {
      return;
    }
    setDropdownOpen(false);
    setActiveButton(null); // Desactiva el botón "CATEGORIAS" cuando se hace clic fuera del menú desplegable
  };

  useEffect(() => {
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <div className={styles.navbar}>
     <Link to="/"><img src={leweBlack} alt="Pokemon" className={styles.logo} /></Link>
      <div className={styles.buttonGroup}>
        <Link to="/"><button onClick={() => handleClick('HOME')} className={activeButton === 'HOME' ? styles.active : ''}>HOME</button></Link>
        <div className={styles.dropdown} ref={node}>
          <button onClick={toggleDropdown} className={activeButton === 'CATEGORIAS' ? styles.active : ''}>CATEGORIAS</button>
          {dropdownOpen && (
            <div className={styles.dropdownMenu}>
              <button onClick={() => handleClick('Indumentaria')}>Indumentaria</button>
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





