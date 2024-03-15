// eslint-disable-next-line no-unused-vars
import React, { useState, useRef, useEffect } from 'react';
import styles from './NavBar.module.css'; 
import leweBlack from "../../assets/leweBlack.png"
import { IoCart } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { SlArrowDown } from "react-icons/sl";
import { Badge } from 'antd';
import { useSelector } from "react-redux";

const NavBar = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [subDropdownOpen, setSubDropdownOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const node = useRef();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cartReducer.cart);

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
          <button onClick={toggleDropdown} className={activeButton === 'CATEGORIAS' ? styles.active : ''}>CATEGORIAS <SlArrowDown /> </button>
          {dropdownOpen && (
            <div className={styles.dropdownMenu}>
              <button onClick={toggleSubDropdown}>Indumentaria </button>
              {subDropdownOpen && (
                <div className={styles.subDropdownMenu}>
                  <button onClick={() => handleClick('f76fc151-647c-4bd8-a97a-54034494fcf8')}>Remeras</button>
                  <button onClick={() => handleClick('ec87db52-9ab6-44c9-95d2-8974c1289ea8')}>Shorts</button>
                  <button onClick={() => handleClick('e8183d2d-c319-4230-a230-1b829c695422')}>Medias</button>
                  <button onClick={() => handleClick('indumentaria')}>Ver todo</button>

                  
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
        <Link to="/cart">
        <button>
        <Badge count={cart.length} style={{ marginTop: "10px", marginRight: "12px" }}>
            <IoCart
  style={{
    marginLeft: '10px',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '30px',
    outline: 'none',
    background: 'transparent',
    color: isHovered ? 'red' : 'white'
  }}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
/>
            </Badge>
            </button>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;






