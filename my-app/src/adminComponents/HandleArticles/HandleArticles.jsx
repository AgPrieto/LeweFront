// eslint-disable-next-line no-unused-vars
import React from "react";
import { getAllArticles } from "../../redux/actions/articlesActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import styles from "./handleArticles.module.css";
import loader from "./loader.gif";
import { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HandleArticles = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articlesReducer.articles);
  console.log(articles.product)
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/admin/update/${id}`);
  }


  useEffect(() => {
    dispatch(getAllArticles()).then(() => {
        setIsLoading(false);
      });
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className={styles.loaderContainer}>
        <img src={loader} alt="Loading..." className={styles.loader} />
      </div>
    );
  }

  return (
    <div>
      {articles.product.map((item) => (
        <div key={item.id} className={styles.productItem}>
          <img
            src={item.image}
            alt={item.name}
            className={styles.productImage}
          />
          <div className={styles.productInfo}>
            <h2 className={styles.productName}>{item.name}</h2>
            <p className={styles.productPrice}>Precio: ${item.price}</p>
            <button onClick={() => handleClick(item.id)}><FaPencilAlt /></button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HandleArticles;
