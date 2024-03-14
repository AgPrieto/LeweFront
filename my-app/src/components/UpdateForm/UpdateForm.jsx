// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import { validateArticle } from "../../utils/articleValidations";
import { useDispatch, useSelector } from "react-redux";
import {
  getArticlesById,
  updateArticle,
} from "../../redux/actions/articlesActions";
import { getAllCategories } from "../../redux/actions/categoriesActions";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import style from "./update.module.css";
import loader from "./loader.gif";

const UpdateArticleForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoriesReducer.categories);
  const articleToUpdate = useSelector((state) => state.articlesReducer.detail);
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState({
    name: "",
    description: "",
    price: 0,
    stockXS: 0,
    stockS: 0,
    stockM: 0,
    stockL: 0,
    stockXL: 0,
    stockXXL: 0,
    image: "",
    size: "",
    CategoryId: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getArticlesById(id)).then(() => {
      setIsLoading(false);
    });
  }, [dispatch, id]);

  useEffect(() => {
    if (articleToUpdate) {
      setArticle(articleToUpdate);
    }
  }, [articleToUpdate]);

  const handleChange = (e) => {
    const newValue =
      e.target.type === "number" ? parseFloat(e.target.value) : e.target.value;
    setArticle((prevArticle) => ({
      ...prevArticle,
      [e.target.name]: newValue,
    }));
    setErrors(
      validateArticle({
        ...article,
        [e.target.name]: newValue,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateArticle(article)).then(() => {
        alert("Artículo actualizado con éxito")});
    setErrors(validateArticle(article));
  };

  if (isLoading) {
    return (
      <div className={style.loaderContainer}>
        <img src={loader} alt="Loading..." className={style.loader} />
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Editar Artículo</h1>
      </div>
      <div className={style.form}>
        <div >
          <img src={loader} alt="lewe" className={style.lewe} />
        </div>
        <label className={style.label}>Nombre</label>
        <input
          type="text"
          name="name"
          value={article.name}
          onChange={handleChange}
          className={style.input}
        />
        {errors.name && <p>{errors.name}</p>}

        <label className={style.label}>Descripción Breve</label>
        <input
          type="text"
          name="description"
          value={article.description}
          onChange={handleChange}
          className={style.input}
        />
        {errors.description && <p>{errors.description}</p>}

        <label className={style.label}>Precio</label>
        <input
          type="number"
          name="price"
          value={article.price}
          onChange={handleChange}
          className={style.input}
        />
        {errors.price && <p>{errors.price}</p>}

        <label className={style.label}>Imagen</label>
        <input
          type="text"
          name="image"
          value={article.image}
          onChange={handleChange}
          className={style.input}
        />
        {errors.image && <p>{errors.image}</p>}

        <label className={style.label}>Categoría</label>
        <select
          value={article.CategoryId}
          onChange={handleChange}
          name="CategoryId"
          className={style.select}
        >
          {categories.map((category) => (
            <option
              key={category.id}
              value={category.id}
              className={style.options}
            >
              {category.name}
            </option>
          ))}
        </select>
        {errors.CategoryId && <p>{errors.CategoryId}</p>}

        <h3 className={style.stock}>Stock:</h3>

        <label className={style.label}>XS</label>
        <input
          type="number"
          name="stockXS"
          value={article.stockXS}
          onChange={handleChange}
          className={style.input}
        />
        {errors.stockXS && <p>{errors.stockXS}</p>}

        <label className={style.label}>S</label>
        <input
          type="number"
          name="stockS"
          value={article.stockS}
          onChange={handleChange}
          className={style.input}
        />
        {errors.stockS && <p>{errors.stockS}</p>}

        <label className={style.label}>M</label>
        <input
          type="number"
          name="stockM"
          value={article.stockM}
          onChange={handleChange}
          className={style.input}
        />
        {errors.stockM && <p>{errors.stockM}</p>}

        <label className={style.label}>L</label>
        <input
          type="number"
          name="stockL"
          value={article.stockL}
          onChange={handleChange}
          className={style.input}
        />
        {errors.stockL && <p>{errors.stockL}</p>}

        <label className={style.label}>XL</label>
        <input
          type="number"
          name="stockXL"
          value={article.stockXL}
          onChange={handleChange}
          className={style.input}
        />
        {errors.stockXL && <p>{errors.stockXL}</p>}

        <label className={style.label}>XXL</label>
        <input
          type="number"
          name="stockXXL"
          value={article.stockXXL}
          onChange={handleChange}
          className={style.input}
        />
        {errors.stockXXL && <p>{errors.stockXXL}</p>}

        <button type="submit" className={style.create}>
          Confirmar
        </button>
      </div>
    </form>
  );
};

export default UpdateArticleForm;
