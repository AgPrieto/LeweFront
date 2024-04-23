// eslint-disable-next-line no-unused-vars
import React, { useState, useRef, useEffect } from 'react';
import styles from './NavBar.module.css'; 
import leweBlack from "../../assets/leweBlack.png"
import logoWhite from "../../assets/logoWhite.png"
import { IoCart } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from 'react-router-dom';
import { SlArrowDown } from "react-icons/sl";
import { Badge } from 'antd';
import { useSelector } from "react-redux";
import { FaUserTie } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import {logoutRequest} from "../../redux/actions/loginActions"
import { IoLogOutOutline } from "react-icons/io5";
import { useMediaQuery } from '@react-hook/media-query';

const NavBar = () => {
  // eslint-disable-next-line no-unused-vars
  const [activeButton, setActiveButton] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [subDropdownOpen, setSubDropdownOpen] = useState(false);
  const node = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const cart = useSelector((state) => state.cartReducer.cart);
  const isLoggedIn = useSelector(state => state.loginReducer.isLoggedIn);
  const dispatch = useDispatch();
  const isSmallScreen = useMediaQuery('(max-width: 768px)');

  const handleLogout = () => {
    dispatch(logoutRequest());
  };

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
    setDropdownOpen(false);
    buttonName === "contact" ? navigate("/contact") :
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

  const logoImage = isSmallScreen ? logoWhite : leweBlack;
  return (
    <div className={styles.navbar}>
      <Link to="/"><img src={logoImage} alt="Logo" className={styles.logo} /></Link>
      <div className={styles.buttonGroup}>
        <Link to="/"><button onClick={() => handleClick('HOME')} className={location.pathname === '/' ? styles.active : ''}>HOME</button></Link>
        <div className={styles.dropdown} ref={node}>
          <button onClick={toggleDropdown} className={location.pathname.startsWith('/category') ? styles.active : ''}>PRODUCTOS <SlArrowDown /> </button>
          {dropdownOpen && (
            <div className={styles.dropdownMenu} >
              <button onClick={toggleSubDropdown}>INDUMENTARIA</button>
              {subDropdownOpen && (
                <div className={styles.subDropdownMenu}>
                  <button onClick={() => handleClick('e65ee595-cbbb-458f-b346-af6146000097')}>Remeras</button>
                  <button onClick={() => handleClick('19cd0321-e2fa-4d82-b120-f1d9e55ee468')}>Shorts</button>
                  <button onClick={() => handleClick('b9e6a10d-a0a1-4469-b2f3-0759e9984520')}>Medias</button>
                  <button onClick={() => handleClick('indumentaria')}>Ver todo</button>
                </div>
              )}
              <button onClick={() => handleClick('4567773c-ab96-41aa-b9fa-ffa331fe4d7f')}>RAQUETAS</button>
              <button onClick={() => handleClick('d5033fd4-8d56-4e02-b816-78b4f65ee660')}>PELOTAS</button>
              <button onClick={() => handleClick('108312e1-bed1-4468-aaed-657307fb2267')}>ACCESORIOS</button>
            </div>
          )}
        </div>
        <button onClick={() => handleClick("contact")} className={location.pathname === '/contact' ? styles.active : ''}>CONTACTANOS</button>
      </div>
      <div className={styles.rightButton}>
     
        <Link to="/cart">
          <button style={{color: location.pathname === '/cart' ? 'red' : 'white'}}>
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
                  color: location.pathname === '/cart' ? 'red' : 'white'
                }}
                onMouseEnter={(e) => e.target.style.color = 'red'}
                onMouseLeave={(e) => e.target.style.color = location.pathname === '/cart' ? 'red' : 'white'}
              />
            </Badge>
          </button>
        </Link>
        {isLoggedIn ? (
          <>
            <Link to="/admin">
              <button style={{
                marginTop:"8px", 
                color: location.pathname === '/admin' || location.pathname === '/login' ? 'red' : 'white',
                transition: 'color 0.3s ease',
              }} 
              onMouseEnter={(e) => e.target.style.color = 'red'}
              onMouseLeave={(e) => e.target.style.color = location.pathname === '/admin' || location.pathname === '/login' ? 'red' : 'white'}
              title="Panel de Administrador"><FaUserTie /></button>
            </Link>
            <button onClick={handleLogout} className={styles.logoutButton} title="Cerrar sesión"><IoLogOutOutline /></button>
          </>
        ) : (
          <Link to="/login">
            <button className={styles.adminButton}title="Inicio Administrador" ><FaUserTie style={{
              color: location.pathname === '/login' ? 'red' : 'white'
            }}  /></button>
          </Link>
        )}
      </div> 
    </div>
    
  );
}

export default NavBar;






