// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useParams } from 'react-router-dom';
import {useEffect} from 'react';
import style from "./indumentaria.module.css";
import { getAllArticles } from '../../redux/actions/articlesActions';
import { useDispatch, useSelector } from 'react-redux';


const Indumentaria = () => {
const dispatch = useDispatch();
const {id} = useParams();
const articles = useSelector((state) => state.articlesReducer.articles);
console.log(articles);
useEffect(() => {
  dispatch(getAllArticles());
}, [id]);

const articlesFiltered = articles.product && articles.product.filter(product => product.CategoryId !== "ab178e9d-253f-4fe5-a9a0-59cac1c1cdf7" && product.CategoryId !== "67726fd5-b41a-4320-ba42-c9e8f484087f")
console.log(articlesFiltered)
  return (
    <div>
     <h2>Indumentaria</h2>
    <div className={style.container}>
    {articles.product && articlesFiltered.map(product => (
      <div key={product.id} className={style.card}>
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