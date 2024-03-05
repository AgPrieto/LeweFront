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
          <Link to={"/products"}>
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
          <Link to={"/products"}>
            <img
              src={raquetas}
              alt="raquetas"
              className={`${styles.imagenFiltrotabla}`}
              data-aos="fade-left"
              data-aos-duration="1000"
            />
          </Link>
        </div>
      </div>
      <div className={styles.categorys}>
        <div className={styles.category}>
          <Link to={"/category/90d2f045-57a1-406e-b640-78f6167236ae"}>
            <img
              src={paletas}
              alt="Paletas"
              className={`${styles.imagenFiltrotabla}`}
              data-aos="fade-right"
              data-aos-duration="1000"
            />
          </Link>
        </div>
        <div className={styles.category}>
          <Link to={"/category/b04b6c5e-e00b-4299-9955-9bc897277779"}>
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
