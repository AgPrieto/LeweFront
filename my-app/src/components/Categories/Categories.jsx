// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import style from './categories.module.css';
import loader from "./loader.gif";
import { useSelector,useDispatch } from 'react-redux';
import { getCategoryArticles } from '../../redux/actions/categoriesActions';
import SearchBar from '../SearchBar/SearchBar';
import { MdOutlineError } from "react-icons/md";

const Categories = () => {
  
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [categoryName, setCategoryName] = useState('');
  const category = useSelector((state) => state.categoriesReducer.categoryArticles);
  console.log(category)

  useEffect(() => {
    dispatch(getCategoryArticles(id));
    setTimeout(() => {
      setIsLoading(false);
    }, 1000)
    return () => {
      setIsLoading(true);
    }
  }, [id]);

  useEffect(() => {
    if (category.name && !categoryName) {
      setCategoryName(category.name);
    }
  }, [category]);

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
        <h2>{categoryName}</h2>
        <SearchBar />  
      </div>
      {(!category || !category.products || category.products.length === 0) ? (
        <div className={style.errorContainer}>
          <MdOutlineError />
          <p>No se encontraron productos para esta categoría.</p>
        </div>
      ) : (
        <div className={style.container}>
          {category.products.map((product) => (
            <div key={product.id} className={style.card}>
              <img src={product.image} alt={product.name} className={style.imgCard}/>
              <p className={style.name}>{product.name}</p>
              <p className={style.description}>{product.description}</p>
              <p className={style.price}>${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;
