// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatDate } from "../../utils/formatDate";
import { getAllArticles } from "../../redux/actions/articlesActions";
import loader from "./loader.gif";
import style from "./invoice.module.css";
import { sendInvoice } from "../../redux/actions/invoice";
import leweIcon from "./lewe.png";

const Invoice = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articlesReducer.articles);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(getAllArticles()).then(() => {
      setIsLoading(false);
    });
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

  const handleOrderChange = (e) => {
    setOrderData({
      ...orderData,
      [e.target.name]: e.target.value,
    });
    setInvoice({
      ...invoice,
      order: {
        ...orderData,
        [e.target.name]: e.target.value,
      },
    });
    console.log(invoice);
  };

  const handleSelector = (e) => {
    const selectedArticleId = e.target.value;
    console.log(selectedArticleId);
    const selectedArticle = articles.product.find(
      (article) => article.id === selectedArticleId
    );
    console.log(selectedArticle);

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
    if (articleData.quantity > 0 && articleData.size.trim() !== "") {
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
  } else {
    alert("Por favor, ingresa una cantidad mayor que 0 y proporciona el tamaño del artículo.");
  }
};

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!orderData.customerMail || !orderData.customerName || !orderData.customerAddress || !orderData.customerPhone || !orderData.date) {
      alert("Por favor, completa todos los campos del cliente.");
      return;
    }
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

  const deleteArticle = (e) => {
    e.preventDefault();

    const articleToDelete =
      e.target.parentElement.firstChild.nextSibling.textContent;
    
    const newArticles = invoice.articles.filter(
      (article) => article.name !== articleToDelete
    );
    setInvoice({
      ...invoice,
      articles: newArticles,
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
    
      <div className={style.allContainer}>
    <form>
        <div>
          <img  className={style.logoIcon} src={leweIcon} alt="leweIcon" />
        <div className={style.formContainer}>
          <h1>COMPROBANTE DE COMPRA</h1>
        <h2>Datos del Cliente</h2>
        <div className={style.inputContainer}>
          <label>Email</label>
          <input
          
            type="text"
            name="customerMail"
            value={orderData.customerMail}
            onChange={handleOrderChange}
             required
          />

          <label>Nombre</label>
          <input
            type="text"
            name="customerName"
            value={orderData.customerName}
            onChange={handleOrderChange}
            required
            />

          <label>Dirección</label>
          <input
            type="text"
            name="customerAddress"
            value={orderData.customerAddress}
            onChange={handleOrderChange}
            required
            />

          <label>Teléfono</label>
          <input
            type="text"
            name="customerPhone"
            value={orderData.customerPhone}
            onChange={handleOrderChange}
            required
            />

          <label>Fecha</label>
          <input
            type="text"
            name="date"
            value={orderData.date}
            onChange={handleOrderChange}
            
            />
        </div>
      </div>
        </div>
        <div className={style.formContainer}>
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

        <button onClick={addArticle} className={style.formButton}>
          Agregar
        </button>

        {invoice.articles.length > 0 &&  <h2>Artículos Agregados</h2> }
        
          {invoice.articles.map((article) => (
            <div key={article.id}>
              <button onClick={deleteArticle}>X</button>
              <p>{article.name}</p>
              <img src={article.image} alt={article.name} className={style.articleimg}/>
              <p>{`Cantidad: ${article.quantity}`}</p>
              <p>{`Talle: ${article.size}`}</p>
              <p>{`$ ${article.price}`}</p>
            </div>
          ))}

        <button
          onClick={handleSubmit}
          className={`${style.formButton} hvr-sweep-to-right`}
        >
          Enviar Comprobante
        </button>
      </div>
      </div>
    </form>
    </div>
  );
};

export default Invoice;
