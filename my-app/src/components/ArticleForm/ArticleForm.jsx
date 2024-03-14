// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import { validateArticle } from "../../utils/articleValidations";
import { useDispatch, useSelector } from "react-redux";
import { createArticle } from "../../redux/actions/articlesActions";

const ArticleForm = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoriesReducer.categories);

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

  const handleChange = (e) => {
    const newValue = isNaN(parseFloat(e.target.value))
      ? e.target.value
      : parseFloat(e.target.value); // Convertir a número si es posible
    setArticle(
      (prevArticle) => ({
        ...prevArticle,
        [e.target.name]: newValue,
      }),
      () => {
        // Este código se ejecuta después de que el estado article se haya actualizado completamente
        setErrors(
          validateArticle({
            ...article,
            [e.target.name]: newValue,
          })
        );
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createArticle(article));
    setErrors(validateArticle(article));
    setArticle({
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
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Crear Artículo</h1>
      </div>
      <div>
        <label>Nombre</label>
        <input
          type="text"
          name="name"
          value={article.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}

        <label>Descripción Breve</label>
        <input
          type="text"
          name="description"
          value={article.description}
          onChange={handleChange}
        />
        {errors.description && <p>{errors.description}</p>}

        <label>Precio</label>
        <input
          type="number"
          name="price"
          value={article.price}
          onChange={handleChange}
        />
        {errors.price && <p>{errors.price}</p>}

        <h3>Stock:</h3>

        <label>XS</label>
        <input
          type="number"
          name="stockXS"
          value={article.stockXS}
          onChange={handleChange}
        />
        {errors.stockXS && <p>{errors.stockXS}</p>}

        <label>S</label>
        <input
          type="number"
          name="stockS"
          value={article.stockS}
          onChange={handleChange}
        />
        {errors.stockS && <p>{errors.stockS}</p>}

        <label>M</label>
        <input
          type="number"
          name="stockM"
          value={article.stockM}
          onChange={handleChange}
        />
        {errors.stockM && <p>{errors.stockM}</p>}

        <label>L</label>
        <input
          type="number"
          name="stockL"
          value={article.stockL}
          onChange={handleChange}
        />
        {errors.stockL && <p>{errors.stockL}</p>}

        <label>XL</label>
        <input
          type="number"
          name="stockXL"
          value={article.stockXL}
          onChange={handleChange}
        />
        {errors.stockXS && <p>{errors.stockXL}</p>}

        <label>XXL</label>
        <input
          type="number"
          name="stockXXL"
          value={article.stockXXL}
          onChange={handleChange}
        />
        {errors.stockXS && <p>{errors.stockXXL}</p>}

        <label>Imagen</label>
        <input
          type="text"
          name="image"
          value={article.image}
          onChange={handleChange}
        />
        {errors.image && <p>{errors.image}</p>}

        <label>Categoría</label>
        <select
          value={article.CategoryId}
          onChange={handleChange}
          name="CategoryId"
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        {errors.CategoryId && <p>{errors.CategoryId}</p>}

        <button type="submit">Crear</button>
      </div>
    </form>
  );
};

export default ArticleForm;
