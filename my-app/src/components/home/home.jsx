// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import Carrusel from '../Carrusel/Carrusel.jsx'
import { Link } from 'react-router-dom'
import styles from "./home.module.css"
import raquetas from "./bola.jpeg"
import paletas from "../../assets/RaquetasCat.png"
import indumentaria from "../../assets/remera.jpg"
import accesorios from "./accesorios.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import InfiniteSlider from '../InfiniteSlider/InfiniteSlider.jsx';
import { useSelector } from "react-redux";
import HowToBuyContainer from "../Franja/franja.jsx";




const Home = () => {
  const cart = useSelector((state) => state.cartReducer.cart);
  const savedArticlesBackup = localStorage.getItem("articlesBackup");
  const articlesBackup = JSON.parse(savedArticlesBackup);
  

  useEffect(() => {
    AOS.init();
  }, []);


  const availableProducts = articlesBackup.product.filter(
    (product) => !cart.some((cartItem) => cartItem.id === product.id)
  );

  const recommendedProducts = availableProducts
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

    return (
      <div>
        <div>
          <Carrusel />
        </div>
        <div>
          <InfiniteSlider />
        </div>
        {/* Contenedor para los cuadros superiores */}
        <div className={styles.topBoxesContainer}>
          <div className={styles.category1}>
            <Link to={"/category/108312e1-bed1-4468-aaed-657307fb2267"}>
              <img
                data-aos="fade-up"
                data-aos-duration="1000"
                src={accesorios}
                alt="Accesorios"
                className={`${styles.imagenFiltrotabla}`}
              />
              <div className={styles.category1Text}>Accesorios</div>
            </Link>
          </div>
          <div className={styles.category}>
            <Link to={"/category/indumentaria"}>
              <img
                data-aos="fade-up"
                data-aos-duration="1000"
                src={indumentaria}
                alt="Indumentaria"
                className={`${styles.imagenFiltrotabla}`}
              />
              <div className={styles.categoryText}>Indumentaria</div>
            </Link>
          </div>  
        </div>
        {/* Contenedor para los cuadros inferiores */}
        <div className={styles.bottomBoxesContainer}>
          <div className={styles.category1}>
            <Link to={"/category/4567773c-ab96-41aa-b9fa-ffa331fe4d7f"}>
              <img
                data-aos="fade-up"
                data-aos-duration="1000"
                src={paletas}
                alt="Raquetas"
                className={`${styles.imagenFiltrotabla}`}
              />
              <div className={styles.category1Text}>Raquetas</div>
            </Link>
          </div>
          <div className={styles.category}>
            <Link to={"/category/d5033fd4-8d56-4e02-b816-78b4f65ee660"}>
              <img
                data-aos="fade-up"
                data-aos-duration="1000"
                src={raquetas}
                alt="Pelotas"
                className={`${styles.imagenFiltrotabla}`}
              />
              <div className={styles.categoryText}>Pelotas</div>
            </Link>
          </div>
        </div>
        <div>
          <HowToBuyContainer data-aos="fade-down"/>
        </div>
        <div className={styles.recommendedProductsContainer}>
          <h2>PRODUCTOS DESTACADOS</h2>
          <ul className={styles.recommendedProductsList}>
            {recommendedProducts.map((item) => (
              <div data-aos="fade-up" key={item.id}>
                <li className={styles.recommendedProductItem}>
                  <Link
                    to={`/details/${item.id}`}
                    className={styles.recommendedLink}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className={styles.recommendedImage}
                    />
                    <h2 className={styles.recommendedName}>{item.name}</h2>
                    <p className={styles.recommendedPrice}>
                      Precio: ${item.price}
                    </p>
                  </Link>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default Home;  

