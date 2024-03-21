// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";

const Invoice = (orderData) => {

    return (
        <form>
        <div>
            <h1>Comprobante de Compra</h1><br />
            <h2>Datos del Cliente</h2>
            <label>Email</label>
          <input
            type="text"
            name="customerMail"
            value={orderData.customerMail}
          />
        </div>
        </form>

    )
}

export default Invoice;