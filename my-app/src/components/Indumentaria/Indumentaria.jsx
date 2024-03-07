import React, { useState, useEffect } from 'react'; // Asegúrate de importar useState
import { useParams } from 'react-router-dom';
import style from "./indumentaria.module.css";
import { getAllArticles } from '../../redux/actions/articlesActions';
import { useDispatch, useSelector } from 'react-redux';
import loader from "./loader.gif" // Importa la imagen del loader
import AOS from 'aos';
import 'aos/dist/aos.css';

const Indumentaria = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const articles = useSelector((state) => state.articlesReducer.articles);
  
  const [isLoading, setIsLoading] = useState(true); 
  useEffect(() => {
    dispatch(getAllArticles());
    AOS.init({ duration: 2000 }); // Inicializa AOS
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); 
  }, [id]);
  

  const articlesFiltered = articles.product && articles.product.filter(product => product.CategoryId !== "ab178e9d-253f-4fe5-a9a0-59cac1c1cdf7" && product.CategoryId !== "67726fd5-b41a-4320-ba42-c9e8f484087f")

  if (isLoading) { 
    return (
      <div className={style.loaderContainer}>
        <img src={loader} alt="Loading..." className={style.loader} />
      </div>
    );
  }

  return (
    <div>
      <div className={style.title}>
        <h2>Indumentaria</h2>
      </div>
      <div className={style.container}>
      {articles.product && articlesFiltered.map((product, index) => (
  <div key={product.id} className={style.card} >
    <img src={product.image} alt={product.name} className={style.imgCard}/>
    <p className={style.name}>{product.name}</p>
    <p className={style.description}>{product.description}</p>
    <p className={style.price}>${product.price}</p>
  </div>
))}
      </div>
    </div>
  )
}

export default Indumentaria;