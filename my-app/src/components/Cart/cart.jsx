import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import styles from './cart.module.css'; 
import 'hover.css/css/hover-min.css'; // Importa hover.css directamente
import { MdOutlineError, MdDelete } from "react-icons/md";
import {removeFromCart} from '../../redux/actions/cartActions'
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart);

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <div className={styles.cartContainer}>
      <h1>CARRITO</h1>
      {cart.length === 0 ? (
        <div className={styles.errorContainer}>
        <MdOutlineError />
        <p>No hay productos en el carrito.</p>
      </div>
      ) : (
        <>
          <div className={styles.productListContainer}>
            <ul className={styles.productList}>
            {cart.map((item, index) => (
  <li key={item.id} className={styles.productItem}>
    <Link to={`/details/${item.id}`} className={styles.productLink}>
    <img src={item.image} alt={item.name} className={styles.productImage} />
    </Link>
    <div className={styles.productInfo}>
    <Link to={`/details/${item.id}`} className={styles.productLink}>
      <h2 className={styles.productName}>{item.name}</h2>
      </Link>
      <p className={styles.productPrice}>Precio: ${item.price}</p>
      <p className={styles.productQuantity}>Cantidad: {item.quantity}</p>
      {item.size ? (
        <p className={styles.productSize}>Tamaño: {item.size}</p>
      ) : (
        <p className={styles.productSize}>&nbsp;</p>  // Espacio reservado para 'size' cuando no está presente
      )}
      <button className={`${styles.deleteButton} hvr-icon-float`} onClick={() => handleRemoveFromCart(item)}>
        <MdDelete className="hvr-icon" />
      </button>
    </div>
  </li>
))}
            </ul>
          </div>
          <div className={styles.totalPriceContainer}>
            <h2>Total: ${totalPrice}</h2> 
            <button className={`${styles.buyButton} hvr-sweep-to-right`}>INICIAR COMPRA</button> 
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;





