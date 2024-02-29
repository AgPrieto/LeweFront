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
}, []);

const getCategory = async () => {
    try {
        const {data} = await axios.get(`http://localhost:3001/category/${id}`);
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
        <img src={"https://fcppxyi.stripocdn.email/content/guids/CABINET_c67048fd0acf81b47e18129166337c05/images/79021618299486570.png"} alt={product.name} className={style.imgCard}/>
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