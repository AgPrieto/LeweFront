// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import { validateArticle } from "../../utils/articleValidations";
import { useDispatch, useSelector } from "react-redux";
import { createArticle } from "../../redux/actions/articlesActions";
import style from "./articleForm.module.css";
import { useEffect } from "react";
import { getAllCategories } from "../../redux/actions/categoriesActions";
import axios from "axios";

const ArticleForm = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoriesReducer.categories);
  const [urlImage, setUrlImage] = useState("");
  const [errors, setErrors] = useState({});

  const [article, setArticle] = useState({
    name: "",
    description: "",
    descriptionDetail: "",
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

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const handleChange = (e) => {
    const value = e.target.value;

    // Verificar si el valor contiene solo dígitos y puntos decimales
    const isNumeric = /^\d+(\.\d+)?$/.test(value);

    const newValue = isNumeric ? parseFloat(value) : value;

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
  // Función para manejar el cambio en la carga de la imagen
  const uploadChange = async (event) => {
    try {
      const file = event.target.files[0];
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "e2jdjnn1");

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dvdruvmwk/image/upload",
        data
      );

      // Actualiza el estado local de la URL de la imagen
      setUrlImage(response.data.secure_url);
      // Actualiza el estado local del evento con la URL de la imagen
      setArticle((prevArticle) => ({
        ...prevArticle,
        image: response.data.secure_url,
      }));
    } catch (error) {
      return `Error uploading image: , ${error}`;
    }
  };

  const deleteImage = () => {
    setUrlImage("");
    setArticle((prevArticle) => ({ ...prevArticle, image: "" }));
    // Resetea el valor del input de tipo "file"
    document.getElementById("imageInput").value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(article);
    dispatch(createArticle(article));
    setErrors(validateArticle(article));
    setArticle({
      name: "",
      description: "",
      descriptionDetail: "",
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
    document.getElementById("imageInput").value = "";
    setUrlImage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={style.formContainer}>
        <h1>CREAR ARTICULO</h1>
      </div>
      <div className={style.inputContainer}>
        <div className={style.column}>
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

          <label>Descripción Detallada</label>
          <input
            type="text"
            name="descriptionDetail"
            value={article.descriptionDetail}
            onChange={handleChange}
          />

          <label>Precio</label>
          <input
            type="number"
            name="price"
            value={article.price}
            onChange={handleChange}
          />
          {errors.price && <p>{errors.price}</p>}

          <label>Imagen</label>
          <input
            type="file"
            accept="image/"
            name="image"
            id="imageInput" // Agrega un id único aquí
            onChange={uploadChange}
          />
          {urlImage && (
            <div className={style.uploadedImageContainer}>
              <img
                src={urlImage}
                alt="Uploaded"
                className={style.uploadedImage}
              />
              <button onClick={deleteImage} className={style.deleteImageButton}>
                X
              </button>
            </div>
          )}
          <label>Categoría</label>
          <select
            value={article.CategoryId}
            onChange={handleChange}
            name="CategoryId"
          >
            <option value="">Seleccione una categoría</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          {errors.CategoryId && <p>{errors.CategoryId}</p>}
        </div>

        <div className={style.column}>
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
          {errors.stockXl && <p>{errors.stockXL}</p>}

          <label>XXL</label>
          <input
            type="number"
            name="stockXXL"
            value={article.stockXXL}
            onChange={handleChange}
          />
          {errors.stockXXL && <p>{errors.stockXXL}</p>}
        </div>
      </div>
      <button
        className={`${style.formButton} hvr-sweep-to-right`}
        type="submit"
      >
        Crear
      </button>
    </form>
  );
};

export default ArticleForm;
