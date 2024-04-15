// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import { validateCustomer } from "../../utils/customerValidation";
import { sendOrder } from "../../redux/actions/orderActions";
import { useDispatch } from "react-redux";
import { formatDate } from "../../utils/formatDate";
import style from "./customerForm.module.css";
import leweIcon from './lewe.png'
import 'hover.css/css/hover-min.css';
import { clearCart } from '../../redux/actions/cartActions';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const CustomerForm = (cartArticles) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [customer, setCustomer] = useState({
    customerName: "",
    customerMail: "",
    customerAddress: "",
    customerPhone: "",
    date: formatDate(),
    price: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validateCustomer({
        ...customer,
        [e.target.name]: e.target.value,
      })
    );
  };

const whatsappOrder = [{
order: customer,
articles: cartArticles.cart.map((article) => {
  return {
    id: article.id,
    name: article.name,
    quantity: article.quantity,
    size: article.size,
    price: article.price,
  };}),
}]

const handleSubmit = (e) => {
  e.preventDefault();
  setErrors(validateCustomer(customer));
  try {
    dispatch(sendOrder(whatsappOrder));
    dispatch(clearCart())
      
        Swal.fire({
          icon: "success",
          title: '<span style="color:white">¡Enviado!</span>',
          background: "#161616",
          html: '<p style="color:white">Comprobante enviado</p>',
          confirmButtonColor: "#d33",
        });
     
     // Limpia el carrito
    navigate("/"); // Redirige al usuario a la página principal
  } catch (error) {
    alert(error.message)
  }
};

    return (
      <form onSubmit={handleSubmit}>
        <div className={style.formContainer}>
          <img src={leweIcon} alt="leweIcon" />
          <h1>DATOS DE CONTACTO</h1>
        </div>
        <div className={style.inputContainer}>
          <label>Nombre completo</label>
          <input
            type="text"
            name="customerName"
            value={customer.customerName}
            onChange={handleChange}
          />
          {errors.customerName && <p className={style.errorMessage}>{errors.customerName}</p>}
  
          <label>Email</label>
          <input
            type="text"
            name="customerMail"
            value={customer.customerMail}
            onChange={handleChange}
          />
          {errors.customerMail && <p className={style.errorMessage}>{errors.customerMail}</p>}
  
          <label>Domicilio</label>
          <input
            type="text"
            name="customerAddress"
            value={customer.customerAddress}
            onChange={handleChange}
          />
          {errors.customerAddress && <p className={style.errorMessage}>{errors.customerAddress}</p>}
  
          <label>Teléfono</label>
          <input
            type="text"
            name="customerPhone"
            value={customer.customerPhone}
            onChange={handleChange}
          />
          {errors.customerPhone && <p className={style.errorMessage}>{errors.customerPhone}</p>}
  
          <button className={`${style.formButton} hvr-sweep-to-right`} type="submit">Confirmar Orden</button>
        </div>
      </form>
    );
  };
  
  export default CustomerForm;
