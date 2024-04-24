// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./mobileNavBar.module.css";
import logoWhite from "../../assets/logoWhite.png";
import { Link, useLocation } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import { IoCart } from "react-icons/io5";
import { Badge } from "antd";
import { useSelector } from "react-redux";
const MobileNavBar = () => {
  const handleLogout = () => {
    dispatch(logoutRequest());
  };
  const location = useLocation();
  const currentPath = location.pathname;
  const isLoggedIn = useSelector((state) => state.loginReducer.isLoggedIn);
  const cart = useSelector((state) => state.cartReducer.cart);
    return (
      <div className={styles.navbar}>
        <div className={styles.sidebar}>
        <SideBar/>
        </div>
        <Link to="/" className={styles.logoContainer}>
          <img src={logoWhite} alt="Logo" className={styles.logo} />
        </Link>
        <div className={styles.rightButton}>
          <Link to="/cart">
            <button
              style={{ color: location.pathname === "/cart" ? "red" : "white" }}
            >
              <Badge
                count={cart.length}
                style={{ marginTop: "5px", marginRight: "12px" }}
              >
                <IoCart
                  style={{
                    marginRight: "10px",
                    padding: "0px 0px 0px",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "30px",
                    outline: "none",
                    background: "transparent",
                    color: currentPath === "/cart" ? "red" : "white",
                  }}
                 
                />
              </Badge>
            </button>
          </Link>
          
          
        </div>
      </div>
      
    );
  };

export default MobileNavBar;
