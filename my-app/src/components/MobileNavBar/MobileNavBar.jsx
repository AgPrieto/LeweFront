// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./mobileNavBar.module.css";
import logoWhite from "../../assets/logoWhite.png";
import { Link } from "react-router-dom";
import SideBar from "../SideBar/SideBar";

const MobileNavBar = () => {
    return (
      <div className={styles.navbar}>
        <div className={styles.sidebar}>
        <SideBar/>
        </div>
        <Link to="/" className={styles.logoContainer}>
          <img src={logoWhite} alt="Logo" className={styles.logo} />
        </Link>
      </div>
    );
  };

export default MobileNavBar;
