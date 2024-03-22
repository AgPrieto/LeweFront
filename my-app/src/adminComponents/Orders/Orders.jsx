import React from "react";
import { getOrders } from "../../redux/actions/orderActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { Collapse } from 'antd';
import styles from './orders.module.css';
import loader from "./loader.gif";
const { Panel } = Collapse;

const Orders = () => {
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.orderReducer.orders);
    const [isLoading, setIsLoading] = useState(true);
    console.log(orders);

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
      <div style={{ width: '80%', margin: '0 auto', color: "white", marginLeft: "270px" }}>
        <h2>REGISTRO DE VENTAS</h2>
        {orders.length <= 0 ? (
          <p>No hay ordenes registradas por el momento.</p>
        ) : (
          <Collapse accordion expandIcon={({ isActive }) => <span style={{ color: 'white', fontSize: '20px'}}>{isActive ? '-' : '+'}</span>}>
            {orders.map((orderGroup) => (
              <Panel header={<span style={{ color: 'white' }}>Orden N° {orderGroup.OrderId}</span>} key={orderGroup.OrderId}>
                {orderGroup.articles.map((article) => (
                  <div key={article.ArticleId}>
                    <p><strong>Artículo:</strong> {article.ArticleId}</p>
                    <p><strong>Cantidad:</strong> {article.quantity}</p>
                    <p><strong>Talle:</strong> {article.size}</p>
                  </div>
                ))}
              </Panel>
            ))}
          </Collapse>
        )}
      </div>
    );
}

export default Orders;


