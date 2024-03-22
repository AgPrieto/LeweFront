// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatDate } from "../../utils/formatDate";
import { getAllArticles } from "../../redux/actions/articlesActions";
import loader from "./loader.gif";
import style from "./invoice.module.css";
import { sendInvoice } from "../../redux/actions/invoice";
import leweIcon from './lewe.png'

const Invoice = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articlesReducer.articles);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(getAllArticles()).then(() => {
      setIsLoading(false);
    }
    );
  }, [dispatch]);

  const [orderData, setOrderData] = useState({
    customerMail: "",
    customerName: "",
    customerAddress: "",
    customerPhone: "",
    date: formatDate(),
    price: 0,
  });

  

  const [articleData, setArticleData] = useState({
    id: "",
    name: "",
    image: "",
    quantity: 0,
    size: "",
    price: 0,
  });
  
  const [invoice, setInvoice] = useState({ order: {}, articles: [] });
console.log(invoice);
  const handleOrderChange = (e) => {
    // Actualiza orderData
    setOrderData({
      ...orderData,
      [e.target.name]: e.target.value,
    });
    // Actualiza invoice con la versión más reciente de orderData
    setInvoice({
      ...invoice,
      order: {
        ...orderData,
        [e.target.name]: e.target.value,
      },
    });
    console.log(invoice)

  };

  const handleSelector = (e) => {
    const selectedArticleId = e.target.value;
    console.log(selectedArticleId)
    const selectedArticle = articles.product.find((article) => article.id === selectedArticleId);
    console.log(selectedArticle)

    setArticleData({
      ...articleData,
      id: selectedArticle.id,
      name: selectedArticle.name,
      image: selectedArticle.image,
      price: selectedArticle.price,
    });
  };

  const handleArticleChange = (e) => {
    setArticleData({
      ...articleData,
      [e.target.name]: e.target.value,
    });
  };

const addArticle = (e) => {
  e.preventDefault();
  setInvoice((prevInvoice) => ({
    ...prevInvoice,
    articles: [...prevInvoice.articles, articleData],
  }));
  setArticleData({
    id: "",
    name: "",
    image: "",
    quantity: 0,
    size: "",
    price: 0,
  });
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(invoice)
  dispatch(sendInvoice(invoice)).then(() => {
    alert("Comprobante enviado");
  });
  setInvoice({ order: {}, articles: [] });
  setOrderData({
    customerMail: "",
    customerName: "",
    customerAddress: "",
    customerPhone: "",
    date: formatDate(),
    price: 0,
  });
};

  if (isLoading) {
    return (
      <div className={style.loaderContainer}>
        <img src={loader} alt="Loading..." className={style.loader} />
      </div>
    );
  }

  return (
    <form>
      <div>
      <div className={style.formContainer}>
          <img src={leweIcon} alt="leweIcon" />
          <h1>COMPROBANTE DE COMPRA</h1>
        </div>
        <h2>Datos del Cliente</h2>
        <div className={style.inputContainer}>
        <label>Email</label>
        <input
          type="text"
          name="customerMail"
          value={orderData.customerMail}
          onChange={handleOrderChange}
        />

        <label>Name</label>
        <input
          type="text"
          name="customerName"
          value={orderData.customerName}
          onChange={handleOrderChange}
        />

        <label>Address</label>
        <input
          type="text"
          name="customerAddress"
          value={orderData.customerAddress}
          onChange={handleOrderChange}
        />

        <label>Phone</label>
        <input
          type="text"
          name="customerPhone"
          value={orderData.customerPhone}
          onChange={handleOrderChange}
        />

        <label>Date</label>
        <input
          type="text"
          name="date"
          value={orderData.date}
          onChange={handleOrderChange}
        />

      </div>
</div>
      <h2>ARTÍCULOS</h2>

      <h3>Artículo Seleccionado</h3>
      <div className={style.inputContainer}>
      <select
        value={articleData.id}
        onChange={handleSelector}
        name="selectedArticle"
      >
        <option value="">Seleccionar un artículo</option>
        {articles.product.map((article) => (
          <option key={article.id} value={article.id}>
            {article.name}
          </option>
        ))}
      </select>

      <label>ID</label>
      <input type="text" name="id" value={articleData.id} readOnly />

      <label>Nombre</label>
      <input type="text" name="name" value={articleData.name} readOnly />

      <label>Imagen</label>
      <input type="text" name="image" value={articleData.image} readOnly />

      <label>Cantidad</label>
      <input
        type="number"
        name="quantity"
        value={articleData.quantity}
        onChange={handleArticleChange}
      />

      <label>Talle</label>
      <input
        type="text"
        name="size"
        value={articleData.size}
        onChange={handleArticleChange}
      />

      <label>Precio</label>
      <input type="text" name="price" value={articleData.price} readOnly />

      <button onClick={addArticle} className={style.formButton}>Agregar</button>
      <button onClick={handleSubmit} className={`${style.formButton} hvr-sweep-to-right`}>Enviar Comprobante</button>
      </div>
    </form>
    
    
  );
};

export default Invoice;
