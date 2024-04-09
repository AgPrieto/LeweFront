// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { disAbleArticle, getAdminArticles } from "../../redux/actions/articlesActions";
import { useDispatch, useSelector } from "react-redux";
import styles from "./handleArticles.module.css";
import { FaPencilAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SearchBarIndu from "../../components/SearchBar/SearchBarIndu";
import { Switch } from "antd";
import { ThreeCircles } from 'react-loader-spinner';


const HandleArticles = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articlesReducer.adminArticles);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/admin/update/${id}`);
  };

  const handleSwitchChange = (checked, id) => {
    dispatch(disAbleArticle(id));
  };

  useEffect(() => {
    dispatch(getAdminArticles()).then(() => {
      setIsLoading(false);
    });
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className={styles.loader}>
   <ThreeCircles
  visible={true}
  height="100"
  width="100"
  color="red"
  ariaLabel="three-circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
      </div>
    );
  }

  return (
    <div className={styles.totalContainer}>
      <div className={styles.searchBar}>
        <h2>GESTIONAR PRODUCTOS</h2>
        <SearchBarIndu />
      </div>

      <div className={styles.productContainer}>
        {articles.map((item) => (
          <div key={item.id} className={styles.productItem}>
            <img
              src={item.image}
              alt={item.name}
              className={styles.productImage}
            />
            <div className={styles.productInfo}>
              <h2 className={styles.productName}>{item.name}</h2>
              <p className={styles.productPrice}>Precio: ${item.price}</p>
              <button
                title="Editar Articulo"
                className={`${styles.editButton} hvr-icon-float`}
                onClick={() => handleClick(item.id)}
              >
                <FaPencilAlt className="hvr-icon" />
              </button>
              <div className={styles.switchContainer}>
              <Switch
              title="Activar/Desactivar Articulo"
  checked={item.isActive} // Usa la propiedad isActive para establecer el estado inicial del Switch
  onChange={(checked) => handleSwitchChange(checked, item.id)}

/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HandleArticles;