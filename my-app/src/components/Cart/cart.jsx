import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styles from './cart.module.css'; 

const Cart = () => {
  const cart = useSelector((state) => state.cartReducer.cart);

  return (
    <div className={styles.cartContainer}>
      <div className={styles.productListContainer}>
        <ul className={styles.productList}>
          {cart.map((item, index) => (
            <li key={item.id} className={styles.productItem}>
            <img src={item.image} alt={item.name} className={styles.productImage} />
            <div className={styles.productInfo}>
              <h2 className={styles.productName}>{item.name}</h2>
              <p className={styles.productPrice}>Precio: ${item.price}</p>
              <p className={styles.productQuantity}>Cantidad: {item.quantity}</p>
              {item.size && <p className={styles.productSize}>Tamaño: {item.size}</p>}
            </div>
          </li>
          
          ))}
        </ul>
      </div>
      <div className={styles.totalPriceContainer}>
        {/* Aquí puedes calcular y mostrar el precio total */}
      </div>
    </div>
  );
}

export default Cart;




