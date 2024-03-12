// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import { validateCustomer } from "../../utils/customerValidation";
import { sendOrder } from "../../redux/actions/orderActions";
import { useDispatch } from "react-redux";
import { formatDate } from "../../utils/formatDate";

const CustomerForm = () => {

  const dispatch = useDispatch();

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
articles: [{
	id:"854ab5c4-44e2-4401-899e-82f498fd021b",
	name:"Remera Blanca",
    image:"https://fcppxyi.stripocdn.email/content/guids/CABINET_c67048fd0acf81b47e18129166337c05/images/79021618299486570.png",
	quantity:2,
	size:"XXL",
	price:"2000"
}]
}]

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateCustomer(customer));
    dispatch(sendOrder(whatsappOrder));
    };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Datos de Contacto</h1>
      </div>
      <div>
        <label>Nombre completo</label>
        <input
          type="text"
          name="customerName"
          value={customer.customerName}
          onChange={handleChange}
        />
        {errors.customerName && <p>{errors.customerName}</p>}

        <label>Email</label>
        <input
          type="text"
          name="customerMail"
          value={customer.customerMail}
          onChange={handleChange}
        />
        {errors.customerMail && <p>{errors.customerMail}</p>}


        <label>Domicilio</label>
        <input
          type="text"
          name="customerAddress"
          value={customer.customerAddress}
          onChange={handleChange}
        />
        {errors.customerAddress && <p>{errors.customerAddress}</p>}


        <label>Teléfono</label>
        <input
          type="text"
          name="customerPhone"
          value={customer.customerPhone}
          onChange={handleChange}
        />
        {errors.customerPhone && <p>{errors.customerPhone}</p>}

        <button type="submit">Confirmar Orden</button>
      </div>
    </form>
  );
};

export default CustomerForm;
