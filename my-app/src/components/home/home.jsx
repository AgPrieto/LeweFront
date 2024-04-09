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
import InfiniteSlider from '../InfiniteSlider/InfiniteSlider.jsx';

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div>
        <Carrusel />
      </div>
      <div>
        <InfiniteSlider />
      </div>
      <div
              className={styles.categorys}>
        <div className={`${styles.category} hvr-hang`}>
          <Link to={"/category/108312e1-bed1-4468-aaed-657307fb2267"}>
            <img data-aos="fade-right" data-aos-duration="1000"
              src={accesorios}
              alt="Accesorios"
              className={`${styles.imagenFiltrotabla}`}
              
            />
          </Link>
        </div>
        <div className={`${styles.category} hvr-hang`}>
          <Link to={"/category/d5033fd4-8d56-4e02-b816-78b4f65ee660"}>
            <img data-aos="fade-right" data-aos-duration="1000"
              src={raquetas}
              alt="Pelotas"
              className={`${styles.imagenFiltrotabla}`}
             
              
            />
          </Link>
        </div>
        <div className={`${styles.category} hvr-hang`}>
          <Link to={"/category/4567773c-ab96-41aa-b9fa-ffa331fe4d7f"}>
            <img data-aos="fade-right" data-aos-duration="1000"
              src={paletas}
              alt="Raquetas"
              className={`${styles.imagenFiltrotabla}`}
            />
          </Link>
        </div>
        <div className={`${styles.category} hvr-hang`}>
          <Link to={"/category/indumentaria"}>
            <img data-aos="fade-right" data-aos-duration="1000"
              src={indumentaria}
              alt="Indumentaria"
              className={`${styles.imagenFiltrotabla}`}
        
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home 

