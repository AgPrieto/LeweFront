// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import style from "./categories.module.css";
import loader from "./loader.gif";
import { useSelector, useDispatch } from "react-redux";
import {
  getCategoryArticles,
  updateFilteredProducts,
} from "../../redux/actions/categoriesActions";
import SearchBar from "../SearchBar/SearchBar";
import { IoFilterSharp } from "react-icons/io5";

import FilterPrice from "../Filtres/filterPrice";
import OrderByPrice from "../Filtres/orderByPrice";
import FilterBySize from "../Filtres/filterBySize";
import { MdOutlineError } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const Categories = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [categoryName, setCategoryName] = useState("");
  const category = useSelector(
    (state) => state.categoriesReducer.categoryArticles
  );
  const filteredByPrice = useSelector(
    (state) => state.categoriesReducer.filteredByPrice
  );
  const filteredBySize = useSelector(
    (state) => state.categoriesReducer.filteredBySize
  );
  const filteredProducts = useSelector(
    (state) => state.categoriesReducer.filteredProducts
  );
  const [showFilters, setShowFilters] = useState(true);

  useEffect(() => {
    setIsLoading(true); // Muestra la imagen de carga al iniciar la carga de la categoría
    dispatch(getCategoryArticles(id)).then(() => {
      setIsLoading(false); // Oculta la imagen de carga después de cargar la categoría
    });
  }, [id, dispatch]);

  useEffect(() => {
    if (category.name) {
      setCategoryName(category.name);
    }
  }, [category.name]);

  useEffect(() => {
    const updatedFilteredProducts = filteredByPrice.filter((product) =>
      filteredBySize.includes(product)
    );
    dispatch(updateFilteredProducts(updatedFilteredProducts)); // Esta acción debería actualizar el estado de filteredProducts con los productos filtrados
  }, [filteredByPrice, filteredBySize, dispatch]);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
    });
  }, []);

  if (isLoading) {
    return (
      <div className={style.loaderContainer}>
        <img src={loader} alt="Loading..." className={style.loader} />
      </div>
    );
  }

  const categoryLength = category.products.length;

  return (
    <div>
      <div className={style.title}>
        <h1>{categoryName}</h1>
        <h3 className={style.catLength}>{`(${categoryLength})`}</h3>
        <SearchBar />
      </div>
      <div className={style.container}>
        {window.innerWidth < 790 && (
          <div className={style.showFiltersButtonContainer}>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={style.showFiltersButton}
            >
              <IoFilterSharp size={15} className={style.icon} />
            </button>
          </div>
        )}
        {showFilters && (
          <div className={style.filters}>
            {filteredProducts && <FilterPrice />}
            {filteredProducts && <OrderByPrice />}
            {id !== "108312e1-bed1-4468-aaed-657307fb2267" &&
              id !== "4567773c-ab96-41aa-b9fa-ffa331fe4d7f" &&
              id !== "d5033fd4-8d56-4e02-b816-78b4f65ee660" &&
              filteredProducts && <FilterBySize />}
          </div>
        )}
        {!category || !filteredProducts || filteredProducts.length === 0 ? (
          <div className={style.errorContainer}>
            <MdOutlineError />
            <p>No se encontraron productos para esta categoría.</p>
          </div>
        ) : (
          <div className={style.cardContainer}>
            {filteredProducts.map((product) => (
              <div key={product.id} className={style.card}>
                <div data-aos="fade-left">
                  <Link to={`/details/${product.id}`} className={style.link}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className={style.imgCard}
                    />
                    <p className={style.name}>{product.name}</p>
                    <p className={style.description}>{product.description}</p>
                    <p className={style.price}>${product.price}</p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
