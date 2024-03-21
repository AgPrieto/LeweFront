// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import Carrusel from '../Carrusel/Carrusel.jsx'
import { Link } from 'react-router-dom'
import styles from "./home.module.css"
import raquetas from "./RAQUETAS.png"
import paletas from "./paletas.png"
import indumentaria from "./indumentaria.png"
import accesorios from "./accesorios.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div>
        <Carrusel />
      </div>
      <div className={styles.categorys}>
        <div className={styles.category}>
          <Link to={"/category/67726fd5-b41a-4320-ba42-c9e8f484087f"}>
            <img
              src={accesorios}
              alt="Accesorios"
              className={`${styles.imagenFiltrotabla}`}
              data-aos="fade-left"
              data-aos-duration="1000"
            />
          </Link>
        </div>
        <div className={styles.category}>
          <Link to={"/category/f75de8fb-83f7-444a-a6b9-b3f151fae7a2"}>
            <img
              src={raquetas}
              alt="Pelotas"
              className={`${styles.imagenFiltrotabla}`}
              data-aos="fade-left"
              data-aos-duration="1000"
            />
          </Link>
        </div>
      </div>
      <div className={styles.categorys}>
        <div className={styles.category}>
          <Link to={"/category/ab178e9d-253f-4fe5-a9a0-59cac1c1cdf7"}>
            <img
              src={paletas}
              alt="Raquetas"
              className={`${styles.imagenFiltrotabla}`}
              data-aos="fade-right"
              data-aos-duration="1000"
            />
          </Link>
        </div>
        <div className={styles.category}>
          <Link to={"/category/f76fc151-647c-4bd8-a97a-54034494fcf8"}>
            <img
              src={indumentaria}
              alt="Indumentaria"
              className={`${styles.imagenFiltrotabla}`}
              data-aos="fade-right"
              data-aos-duration="1000"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
