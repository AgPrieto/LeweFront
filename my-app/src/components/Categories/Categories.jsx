import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import style from './categories.module.css';
import loader from "./loader.gif"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Categories = () => {
  const { id } = useParams();
  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    getCategory();
    AOS.init({ duration: 1000 }); // Inicializa AOS
  }, [id]);

  const getCategory = async () => {
    setIsLoading(true); 
    try {
      const { data } = await axios.get(`/category/${id}`);
      setCategory(data);
    } catch (error) {
      alert(error.message);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

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
        <h2>{category.name}</h2>
      </div>
      <div className={style.container}>
        {category.products && category.products.map((product, index) => (
          <div key={product.id} className={style.card} data-aos="fade-left" data-aos-delay={index * 100}>
            <img src={product.image} alt={product.name} className={style.imgCard}/>
            <p className={style.name}>{product.name}</p>
            <p className={style.description}>{product.description}</p>
            <p className={style.price}>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
