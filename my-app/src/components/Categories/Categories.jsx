// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useParams } from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from "axios";
import style from "./categories.module.css";

const Categories = () => {
console.log("llegué a categories");
const {id} = useParams();
const [category, setCategory] = useState([]);

useEffect(() => {
    getCategory();
}, [id]);

const getCategory = async () => {
    try {
        const {data} = await axios.get(`/category/${id}`);
        setCategory(data);
    } catch (error) {
        alert(error.message);
    }
}
console.log(category);

  return (
    <div>
     <h2>{category.name}</h2>
    <div className={style.container}>
    {category.products && category.products.map(product => (
      <div key={product.id} className={style.card}>
        <img src={product.image} alt={product.name} className={style.imgCard}/>
        {console.log(product.image)}
        <p className={style.name}>{product.name}</p>
        <p className={style.description}>{product.description}</p>
        <p className={style.price}>${product.price}</p>
      </div>
      
    ))}
  </div>
  </div>
  )
}

export default Categories;