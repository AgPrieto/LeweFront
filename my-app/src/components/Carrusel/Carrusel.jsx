// eslint-disable-next-line no-unused-vars
import React from "react";
import {useState} from 'react';
import styles from "./carrusel.module.css";
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx';
import data from "../../App.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCategories } from "../../redux/actions/categoriesActions";
import { getAllArticles } from "../../redux/actions/articlesActions";
import { useSelector } from "react-redux";
import { Carousel } from 'antd';

const Carrusel = () => {
    const dispatch = useDispatch();
    const articles = useSelector((state) => state.articlesReducer.articles);
    console.log(articles);

    useEffect(() => {
        dispatch(getAllCategories());
        dispatch(getAllArticles());
      }, [dispatch]);

  const images = data.map((event) => (
    event.image
  ))

  
  return (
    <Carousel autoplay className={styles.carousel}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`slide-${index}`} style={{ width: '100%' }} />
        </div>
      ))}
    </Carousel>
  );
};

export default Carrusel;