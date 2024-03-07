import React, { useState, useRef, useEffect } from 'react';
import styles from './NavBar.module.css'; 
import leweBlack from "../../assets/leweBlack.png"
import { IoCart } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [subDropdownOpen, setSubDropdownOpen] = useState(false);
  const node = useRef();
  const navigate = useNavigate();

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
    setDropdownOpen(false);
    navigate(`category/${buttonName}`);
  };

  const toggleDropdown = () => {
  if (dropdownOpen) {
    setActiveButton(null); // Desactiva el botón si el menú está abierto
  } else {
    setActiveButton('CATEGORIAS'); 
  }
  setDropdownOpen(!dropdownOpen);
};

  const toggleSubDropdown = () => {
    setSubDropdownOpen(!subDropdownOpen);
    setActiveButton('Indumentaria'); 
  };

  const handleClickOutside = e => {
    if (node.current.contains(e.target)) {
      return;
    }
    setDropdownOpen(false);
    setSubDropdownOpen(false);
    setActiveButton(null);
  };

  useEffect(() => {
    if (dropdownOpen || subDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen, subDropdownOpen]);

  return (
    <div className={styles.navbar}>
     <Link to="/"><img src={leweBlack} alt="Pokemon" className={styles.logo} /></Link>
      <div className={styles.buttonGroup}>
        <Link to="/"><button onClick={() => handleClick('HOME')} className={activeButton === 'HOME' ? styles.active : ''}>HOME</button></Link>
        <div className={styles.dropdown} ref={node}>
          <button onClick={toggleDropdown} className={activeButton === 'CATEGORIAS' ? styles.active : ''}>CATEGORIAS</button>
          {dropdownOpen && (
            <div className={styles.dropdownMenu}>
              <button onClick={toggleSubDropdown}>Indumentaria</button>
              {subDropdownOpen && (
                <div className={styles.subDropdownMenu}>
                  <button onClick={() => handleClick('some-category-id-1')}>Remeras</button>
                  <button onClick={() => handleClick('some-category-id-2')}>Shorts</button>
                  <button onClick={() => handleClick('some-category-id-2')}>Medias</button>
                  
                  {/* Add more subcategories as needed */}
                </div>
              )}
              <hr />
              <button onClick={() => handleClick('ab178e9d-253f-4fe5-a9a0-59cac1c1cdf7')}>Raquetas</button>
              <hr />
              <button onClick={() => handleClick('f75de8fb-83f7-444a-a6b9-b3f151fae7a2')}>Pelotas</button>
              <hr />
              <button onClick={() => handleClick('67726fd5-b41a-4320-ba42-c9e8f484087f')}>Accesorios</button>
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






