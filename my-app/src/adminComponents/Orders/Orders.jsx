// eslint-disable-next-line no-unused-vars
import React from "react";
import { getOrders } from "../../redux/actions/orderActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import styles from "./orders.module.css";
import loader from "./loader.gif";
import { useState } from "react";
import { MdOutlineError } from "react-icons/md";

const Orders = () => {
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.orderReducer.orders);
    const [isLoading, setIsLoading] = useState(true);
    console.log(orders)
    

    useEffect(() => {
        dispatch(getOrders()).then(() => {
        setIsLoading(false);
        });
    }, [dispatch]);
    
    if (isLoading) {
        return (
        <div className={styles.loaderContainer}>
            <img src={loader} alt="Loading..." className={styles.loader} />
        </div>
        );
    }
    
    return (
        <div>
          {orders.length <= 0 ? (
            <div className={styles.errorContainer}>
              <MdOutlineError />
              <p>No hay ordenes registradas por el momento.</p>
            </div>
          ) : (
            <div className={styles.ordersContainer}>
              {orders.map((orderGroup) => (
                <div key={orderGroup.OrderId} className={styles.orderItem}>
                  <h2 className={styles.orderTitle}>Orden N° {orderGroup.OrderId}</h2>
                  {orderGroup.articles.map((article) => (
                    <div key={article.ArticleId} className={styles.articleDetails}>
                      <p><strong>Artículo:</strong> {article.ArticleId}</p>
                      <p><strong>Cantidad:</strong> {article.quantity}</p>
                      <p><strong>Talle:</strong> {article.size}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      );
}

export default Orders;