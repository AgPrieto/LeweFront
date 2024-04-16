// eslint-disable-next-line no-unused-vars
import React from "react";
import { useEffect } from "react";
import {
  FileSearchOutlined,
  CreditCardFilled,
  SmileFilled,
} from "@ant-design/icons";
import { IoCart } from "react-icons/io5";
import { Avatar } from "antd";
import styles from "./franja.module.css";

const HowToBuyContainer = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", bottom: 0 });
      }
    }
  }, []);

  return (
    <div id="como-comprar" className={styles.container}>
      <div>
        <div>
          <Avatar
             className={styles.avatar}
            size={70}
            icon={
              <FileSearchOutlined
   className={styles.icono}
              />
            }
          />

          <p className={styles.parrafo}>BUSCÁ TU PRODUCTO EN LA TIENDA</p>
        </div>

        <div>
          <Avatar
               className={styles.avatar}
            size={70}
            icon={
              <IoCart
              className={styles.icono}
              />
            }
          />

          <p className={styles.parrafo}>AGREGALO AL CARRITO</p>
        </div>

        <div>
          <Avatar
               className={styles.avatar}
            size={70}
            icon={
              <CreditCardFilled
              className={styles.icono}
              />
            }
          />

          <p className={styles.parrafo}>COMPLETÁ EL FORMULARIO CON TUS DATOS</p>
        </div>

        <div>
          <Avatar
          className={styles.avatar}
            size={70}
            icon={
              <SmileFilled
              className={styles.icono}
              />
            }
          />

          <p className={styles.parrafo}>
            COORDINA EL ENVIO POR WHASTAPP Y DISFRUTÁ DE TU COMPRA
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowToBuyContainer;
