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

const Carrusel = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategories());
        dispatch(getAllArticles());
      }, [dispatch]);

  const images = data.map((event) => (
    event.image
  ))

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
      const isLastSlide = currentIndex === images.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
  };

  const goToSlide = (imageIndex) => {
      setCurrentIndex(imageIndex);
  }
return (
    <div className={styles.container}>
        <div className={styles.image} style={{backgroundImage: `url(${images[currentIndex]})`}} />
        <div className={styles.leftControl} onClick={prevSlide}>
            <BsChevronCompactLeft size={30} />
        </div>
        <div className={styles.rightControl} onClick={nextSlide}>
            <BsChevronCompactRight size={30} />
        </div>
        <div className={styles.dotsContainer}>
            {data.map((image, imageIndex) => (
                <div key={imageIndex} className={styles.control} onClick={() => goToSlide(imageIndex)}>
                    <RxDotFilled />
                </div>
            ))}
        </div>
    </div>
);
};

export default Carrusel;