// eslint-disable-next-line no-unused-vars
import React from "react";
import { getOrders } from "../../redux/actions/orderActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { Collapse } from 'antd';
import styles from './orders.module.css';
const { Panel } = Collapse;
import { ThreeCircles } from 'react-loader-spinner'


const Orders = () => {
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.orderReducer.orders);
    console.log(orders);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        dispatch(getOrders()).then(() => {
        setIsLoading(false);
        });
    }, [dispatch]);

    if (isLoading) {
      return (
        <div className={styles.loader}>
        <ThreeCircles
       visible={true}
       height="100"
       width="100"
       color="red"
       ariaLabel="three-circles-loading"
       wrapperStyle={{}}
       wrapperClass=""
       />
           </div>
      );
    }

    return (
      <div   className={styles.totalContainer} style={{ width: '80%', margin: '0 auto', color: "white", marginLeft: "270px" }}>
        <h2>REGISTRO DE VENTAS</h2>
        {orders.length <= 0 ? (
          <p>No hay ordenes registradas por el momento.</p>
        ) : (
          <Collapse accordion expandIcon={({ isActive }) => <span className={styles.totalContainer} style={{ color: 'white', fontSize: '20px'}}>{isActive ? '-' : '+'}</span>}>
            {orders.map((orderGroup) => (
              <Panel header={<span className={styles.totalContainer} style={{ color: 'white' }}>Orden N° {orderGroup.OrderId.slice(-6)} - {orderGroup.customerName}</span>} key={orderGroup.OrderId}>
           <div className={styles.totalContainer}>
                <h2>Informacion de la Orden</h2>
                <p><strong>Nombre:</strong> {orderGroup.customerName}</p>
              <p><strong>Email:</strong> {orderGroup.customerMail}</p>
              <p><strong>Fecha:</strong> {orderGroup.orderDate}</p>
              <p><strong>Precio total de la compra:</strong> ${orderGroup.total}</p>
              <hr />
                <h2>Articulos</h2>
                </div>
              <div className={styles.articleContainer}>
                {orderGroup.articles.map((article) => (
                
                  <div key={article.ArticleId} className={styles.article}>
                    <p><strong>Artículo:</strong> {article.name}</p>
                    <p><strong>Cantidad:</strong> {article.quantity}</p>
                    <p><strong>Talle:</strong> {article.size}</p>
                    <p><strong>Talle:</strong> ${article.total}</p>
                    <img className={styles.articleimg} src={article.image} alt="" />
                  </div>
                ))}
              </div>
            </Panel>
            
            ))}
          </Collapse>
        )}
      </div>
    );
}

export default Orders;


